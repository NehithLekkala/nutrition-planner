/* =========================================================
   NUTRITION PLANNER AUTHENTICATION
   Amazon Cognito + API Gateway + DynamoDB
========================================================= */

const COGNITO_CONFIG = {
    region: "us-east-1",
    userPoolId: "us-east-1_dq3hokdag",
    clientId: "710qnrj9b0tp2upbru7v7656td"
};

const poolData = {
    UserPoolId: COGNITO_CONFIG.userPoolId,
    ClientId: COGNITO_CONFIG.clientId
};

const userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

const authShell = document.getElementById("auth-shell");
const landingView = document.getElementById("landing-view");
const authView = document.getElementById("auth-view");
const app = document.getElementById("nutrition-app");

const panels = {
    login: document.getElementById("auth-login-panel"),
    signup: document.getElementById("auth-signup-panel"),
    confirm: document.getElementById("auth-confirm-panel"),
    forgot: document.getElementById("auth-forgot-panel"),
    reset: document.getElementById("auth-reset-panel")
};

let pendingUsername = "";
let pendingEmail = "";
let resetUsername = "";
let resetCognitoUser = null;


/* =========================================================
   UI HELPERS
========================================================= */

function showLanding() {
    authShell.hidden = false;
    landingView.hidden = false;
    authView.hidden = true;
    app.hidden = true;
}

function showAuthPanel(name) {
    authShell.hidden = false;
    landingView.hidden = true;
    authView.hidden = false;
    app.hidden = true;

    Object.values(panels).forEach(panel => {
        panel.hidden = true;
    });

    panels[name].hidden = false;
}

function showApp() {
    authShell.hidden = true;
    app.hidden = false;
}

function message(id, text, success = false) {
    const element = document.getElementById(id);
    if (!element) return;
    element.textContent = text;
    element.style.color = success ? "var(--green-dark)" : "#8a4545";
}

function clearMessages() {
    ["login-message", "signup-message", "confirm-message", "forgot-message", "reset-message"]
        .forEach(id => message(id, ""));
}


/* =========================================================
   AWS API + CLOUD DATA
========================================================= */

const API_BASE_URL = "https://rjzwas7ie2.execute-api.us-east-1.amazonaws.com";

const USER_DATA_KEYS = ["nutritionProfile", "nutritionDaily", "nutritionWeightHistory"];
const DATA_TYPES = {
    nutritionProfile: "PROFILE",
    nutritionDaily: date => `DAILY#${date}`,
    nutritionWeightHistory: "WEIGHT_HISTORY"
};

function getCurrentUsername() { return localStorage.getItem("nutritionActiveUser"); }
function getUserCacheKey(username) { return `nutritionUserCache:${username}`; }
function getUserCache(username) {
    try { return JSON.parse(localStorage.getItem(getUserCacheKey(username)) || "null"); }
    catch { return null; }
}
function setUserCache(username, value) {
    try { localStorage.setItem(getUserCacheKey(username), JSON.stringify(value)); } catch {}
}
function getCognitoUser() { return userPool.getCurrentUser(); }

function getJwtToken() {
    return new Promise((resolve, reject) => {
        const user = getCognitoUser();
        if (!user) return reject(new Error("No authenticated Cognito user."));
        user.getSession((error, session) => {
            if (error || !session || !session.isValid()) return reject(error || new Error("Cognito session is invalid."));
            resolve(session.getIdToken().getJwtToken());
        });
    });
}

async function callNutritionAPI(payload) {
    const token = await getJwtToken();
    const response = await fetch(API_BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
        body: JSON.stringify(payload)
    });
    const text = await response.text();
    let result = {};
    try { result = text ? JSON.parse(text) : {}; } catch { result = { raw: text }; }
    if (!response.ok) {
        const error = new Error(result.message || result.error || `API request failed (${response.status})`);
        error.status = response.status;
        throw error;
    }
    if (result.body && typeof result.body === "string") {
        try { result.body = JSON.parse(result.body); } catch {}
    }
    return result;
}

function extractCloudData(result) {
    if (result && Object.prototype.hasOwnProperty.call(result, "data")) return result.data;
    if (result && result.item && Object.prototype.hasOwnProperty.call(result.item, "data")) return result.item.data;
    if (result?.body && typeof result.body === "object") {
        if (Object.prototype.hasOwnProperty.call(result.body, "data")) return result.body.data;
        if (result.body.item && Object.prototype.hasOwnProperty.call(result.body.item, "data")) return result.body.item.data;
    }
    return undefined;
}

function parseDateKey(key) {
    const [y,m,d] = key.split("-").map(Number);
    return new Date(y,m-1,d);
}
function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}
function shiftDateKey(key, amount) {
    const d = parseDateKey(key); d.setDate(d.getDate()+amount);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`;
}

async function getCloudValue(username, key, dateKey = todayKey()) {
    const dataType = typeof DATA_TYPES[key] === "function" ? DATA_TYPES[key](dateKey) : DATA_TYPES[key];
    try {
        const result = await callNutritionAPI({ action: "get", userId: username, dataType });
        return extractCloudData(result);
    } catch (error) {
        if (error.status === 404) return undefined;
        throw error;
    }
}

async function saveCloudData(key, rawValue) {
    const username = getCurrentUsername();
    if (!username || !DATA_TYPES[key]) return;
    let data;
    try { data = typeof rawValue === "string" ? JSON.parse(rawValue) : rawValue; } catch { data = rawValue; }
    const dateKey = data?.date || todayKey();
    const dataType = typeof DATA_TYPES[key] === "function" ? DATA_TYPES[key](dateKey) : DATA_TYPES[key];
    try {
        await callNutritionAPI({ action: "save", userId: username, dataType, data });
        const cached = getUserCache(username) || {};
        if (dataType === "PROFILE") cached.profile = data;
        else if (dataType === "WEIGHT_HISTORY") cached.weightHistory = data;
        else if (dataType.startsWith("DAILY#")) cached.daily = data;
        setUserCache(username, cached);
    } catch (error) {
        console.error(`Nutrition Planner cloud sync failed for ${dataType}:`, error);
        throw error;
    }
}
window.cloudSaveData = saveCloudData;

async function cloudGetDaily(dateKey) {
    const username = getCurrentUsername();
    if (!username) return undefined;
    return getCloudValue(username, "nutritionDaily", dateKey);
}
window.cloudGetDaily = cloudGetDaily;

function clearActiveUserData() {
    ["nutritionProfile", "nutritionDaily", "nutritionWeightHistory", "nutritionHistory"].forEach(key => localStorage.removeItem(key));
}

async function loadCloudData(username) {
    // Clear only this browser's cached nutrition state before loading the
    // authenticated user's cloud data. AWS remains the source of truth.
    clearActiveUserData();

    // PROFILE is critical: if it cannot be loaded, stop and show the real
    // error. Daily/history records are optional and must never prevent login.
    let profileData;
    try {
        profileData = await getCloudValue(username, "nutritionProfile");
    } catch (error) {
        console.error("Profile load failed:", error);
        const cached = getUserCache(username);
        if (cached?.profile) {
            profileData = cached.profile;
            console.warn("AWS profile read failed; using the last verified cloud-backed local cache for this same user.");
        } else {
            throw new Error(`Could not load your profile from AWS: ${error.message}`);
        }
    }

    if (!profileData) {
        profileData = { height: "", weight: "", age: "", goal: "fitness" };
    }

    let dailyData;
    try {
        dailyData = await getCloudValue(username, "nutritionDaily", todayKey());
    } catch (error) {
        console.warn("Today's cloud record could not be loaded; starting an empty day.", error);
    }

    // V6 -> V7 migration:
    // Legacy V6 records are undated. If yesterday does not yet have a V7
    // record, preserve the legacy snapshot as yesterday. This check is
    // intentionally independent of the browser migration flag so an
    // interrupted/earlier migration cannot silently lose the old data.
    const today = todayKey();
    const yesterdayKey = shiftDateKey(today, -1);

    let existingYesterday;
    try {
        existingYesterday = await getCloudValue(username, "nutritionDaily", yesterdayKey);
    } catch (error) {
        console.warn("Yesterday's record could not be checked:", error);
    }

    if (!existingYesterday) {
        try {
            const [oldMeals, oldWater, oldSleep] = await Promise.all([
                callNutritionAPI({ action: "get", userId: username, dataType: "MEALS" }).then(extractCloudData).catch(() => undefined),
                callNutritionAPI({ action: "get", userId: username, dataType: "WATER" }).then(extractCloudData).catch(() => undefined),
                callNutritionAPI({ action: "get", userId: username, dataType: "SLEEP" }).then(extractCloudData).catch(() => undefined)
            ]);

            const hasLegacyData =
                Array.isArray(oldMeals) ||
                Number(oldWater) > 0 ||
                Number(oldSleep) > 0;

            if (hasLegacyData) {
                const yesterdayData = {
                    date: yesterdayKey,
                    meals: Array.isArray(oldMeals) ? oldMeals : [],
                    water: Number(oldWater) || 0,
                    sleep: Number(oldSleep) || 0,
                    source: "v6-migration"
                };

                await callNutritionAPI({
                    action: "save",
                    userId: username,
                    dataType: `DAILY#${yesterdayKey}`,
                    data: yesterdayData
                });

                console.info("Preserved V6 data as", yesterdayKey);
            }
        } catch (error) {
            console.warn("V6 legacy migration could not complete:", error);
        }
    }

    // If an earlier V7 build accidentally put legacy data into today's
    // record, move it to yesterday only when yesterday is still empty.
    if (
        dailyData &&
        dailyData.date === today &&
        dailyData.source !== "v7" &&
        !existingYesterday &&
        (dailyData.meals?.length || dailyData.water || dailyData.sleep)
    ) {
        try {
            const repairedYesterday = {
                ...dailyData,
                date: yesterdayKey,
                source: "v6-migration"
            };

            await callNutritionAPI({
                action: "save",
                userId: username,
                dataType: `DAILY#${yesterdayKey}`,
                data: repairedYesterday
            });

            dailyData = null;
        } catch (error) {
            console.warn("Earlier V7 daily record could not be repaired:", error);
        }
    }

    // A missing current-day record always means a new empty day.
    // Never copy yesterday's data into today.
    if (!dailyData || dailyData.date !== today) {
        dailyData = {
            date: today,
            meals: [],
            water: 0,
            sleep: 0,
            source: "v7"
        };

        try {
            await callNutritionAPI({
                action: "save",
                userId: username,
                dataType: `DAILY#${today}`,
                data: dailyData
            });
        } catch (error) {
            console.warn("Today's empty record could not be created yet:", error);
        }
    }

    let weightData = [];
    try {
        const value = await getCloudValue(username, "nutritionWeightHistory");
        weightData = Array.isArray(value) ? value : [];
    } catch (error) {
        console.warn("Weight history could not be loaded yet:", error);
    }

    const userCache = { profile: profileData, daily: dailyData, weightHistory: weightData };
    setUserCache(username, userCache);
    localStorage.setItem("nutritionProfile", JSON.stringify(profileData));
    localStorage.setItem("nutritionDaily", JSON.stringify(dailyData));
    localStorage.setItem("nutritionWeightHistory", JSON.stringify(weightData));

    // Only cache today during login. Older days are fetched on demand from
    // DynamoDB when the user clicks Previous Day. This avoids a burst of 14
    // API requests during sign-in and makes login reliable.
    const history = {};
    history[todayKey()] = dailyData;
    localStorage.setItem("nutritionHistory", JSON.stringify(history));

    profile = profileData;
    applyCloudDaily(dailyData);
    weightHistory = weightData;

    if (typeof loadProfile === "function") loadProfile();
    if (typeof updateEverything === "function") updateEverything();
}

/* =========================================================
   SESSION CHECK
========================================================= */

function checkSession() {
    const user = userPool.getCurrentUser();

    if (!user) {
        showLanding();
        return;
    }

    user.getSession((error, session) => {
        if (error || !session || !session.isValid()) {
            localStorage.removeItem("nutritionActiveUser");
            showLanding();
            return;
        }

        const username = user.getUsername();
        localStorage.setItem("nutritionActiveUser", username);

        loadCloudData(username)
            .then(() => showApp())
            .catch(error => {
                console.error("Unable to load Nutrition Planner data:", error);
                user.signOut();
                localStorage.removeItem("nutritionActiveUser");
                clearActiveUserData();
                showLanding();
                alert("Signed in, but your nutrition data could not be loaded. Please try again.");
            });
    });
}


/* =========================================================
   LANDING
========================================================= */

document.getElementById("start-planning").addEventListener("click", () => {
    clearMessages();
    showAuthPanel("signup");
});

document.getElementById("landing-sign-in").addEventListener("click", () => {
    clearMessages();
    showAuthPanel("login");
});

document.getElementById("auth-back").addEventListener("click", () => {
    clearMessages();
    showLanding();
});


document.getElementById("show-signup").addEventListener("click", () => {
    clearMessages();
    showAuthPanel("signup");
});

document.getElementById("show-login").addEventListener("click", () => {
    clearMessages();
    showAuthPanel("login");
});


/* =========================================================
   SIGN UP
========================================================= */

document.getElementById("signup-form").addEventListener("submit", event => {
    event.preventDefault();

    const email = document.getElementById("signup-email").value.trim();
    const username = document.getElementById("signup-username").value.trim();
    const password = document.getElementById("signup-password").value;
    const confirm = document.getElementById("signup-confirm").value;

    if (password !== confirm) {
        message("signup-message", "Passwords do not match.");
        return;
    }

    if (password.length < 8) {
        message("signup-message", "Password must be at least 8 characters.");
        return;
    }

    const attributes = [
        new AmazonCognitoIdentity.CognitoUserAttribute({
            Name: "email",
            Value: email
        })
    ];

    userPool.signUp(
        username,
        password,
        attributes,
        null,
        (error, result) => {
            if (error) {
                message("signup-message", error.message || "Unable to create the account.");
                return;
            }

            pendingUsername = username;
            pendingEmail = email;

            document.getElementById("confirm-code").value = "";
            showAuthPanel("confirm");
        }
    );
});


/* =========================================================
   EMAIL VERIFICATION
========================================================= */

document.getElementById("confirm-form").addEventListener("submit", event => {
    event.preventDefault();

    const code = document.getElementById("confirm-code").value.trim();

    if (!pendingUsername || !code) {
        message("confirm-message", "Enter the verification code.");
        return;
    }

    const user = new AmazonCognitoIdentity.CognitoUser({
        Username: pendingUsername,
        Pool: userPool
    });

    user.confirmRegistration(code, true, error => {
        if (error) {
            message("confirm-message", error.message || "Verification failed.");
            return;
        }

        document.getElementById("login-username").value = pendingUsername;
        document.getElementById("login-password").value = "";

        showAuthPanel("login");
        message("login-message", "Email verified. You can now sign in.", true);
    });
});


document.getElementById("resend-code").addEventListener("click", () => {
    if (!pendingUsername) return;

    const user = new AmazonCognitoIdentity.CognitoUser({
        Username: pendingUsername,
        Pool: userPool
    });

    user.resendConfirmationCode((error) => {
        if (error) {
            message("confirm-message", error.message || "Unable to resend the code.");
            return;
        }

        message("confirm-message", "A new verification code has been sent.", true);
    });
});


/* =========================================================
   LOGIN
========================================================= */

document.getElementById("login-form").addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value;

    const authenticationData = {
        Username: username,
        Password: password
    };

    const authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

    const user = new AmazonCognitoIdentity.CognitoUser({
        Username: username,
        Pool: userPool
    });

    user.authenticateUser(authenticationDetails, {
        onSuccess: session => {
            if (!session.isValid()) {
                message("login-message", "The login session could not be established.");
                return;
            }

            localStorage.setItem("nutritionActiveUser", username);

            loadCloudData(username)
                .then(() => showApp())
                .catch(error => {
                    console.error("Unable to load Nutrition Planner data:", error);
                    user.signOut();
                    localStorage.removeItem("nutritionActiveUser");
                    clearActiveUserData();
                    message("login-message", "Signed in, but your nutrition data could not be loaded. Please try again.");
                });
        },

        onFailure: error => {
            message("login-message", error.message || "Unable to sign in.");
        },

        newPasswordRequired: () => {
            message("login-message", "Cognito requires a new password for this account.");
        }
    });
});


/* =========================================================
   FORGOT PASSWORD
========================================================= */

document.getElementById("show-forgot").addEventListener("click", () => {
    clearMessages();
    showAuthPanel("forgot");
});

document.getElementById("forgot-back").addEventListener("click", () => {
    clearMessages();
    showAuthPanel("login");
});

document.getElementById("forgot-form").addEventListener("submit", event => {
    event.preventDefault();

    resetUsername = document.getElementById("forgot-username").value.trim();

    const user = new AmazonCognitoIdentity.CognitoUser({
        Username: resetUsername,
        Pool: userPool
    });

    resetCognitoUser = user;

    user.forgotPassword({
        onSuccess: () => {
            showAuthPanel("reset");
            message("reset-message", "Reset code sent. Check your email.", true);
        },
        onFailure: error => {
            message("forgot-message", error.message || "Unable to send reset code.");
        }
    });
});


document.getElementById("reset-form").addEventListener("submit", event => {
    event.preventDefault();

    if (!resetCognitoUser) {
        message("reset-message", "Please request a new reset code.");
        return;
    }

    const code = document.getElementById("reset-code").value.trim();
    const password = document.getElementById("reset-password").value;

    resetCognitoUser.confirmPassword(code, password, {
        onSuccess: () => {
            document.getElementById("login-username").value = resetUsername;
            document.getElementById("login-password").value = "";
            showAuthPanel("login");
            message("login-message", "Password reset successfully. You can now sign in.", true);
        },
        onFailure: error => {
            message("reset-message", error.message || "Unable to reset password.");
        }
    });
});


/* =========================================================
   LOGOUT
========================================================= */

document.getElementById("sign-out").addEventListener("click", () => {
    const user = userPool.getCurrentUser();

    if (user) {
        user.signOut();
    }

    localStorage.removeItem("nutritionActiveUser");
    clearActiveUserData();

    window.location.reload();
});


/* =========================================================
   PASSWORD VISIBILITY
========================================================= */

document.querySelectorAll(".password-toggle").forEach(button => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.target);
        if (!input) return;
        const visible = input.type === "text";
        input.type = visible ? "password" : "text";
        button.textContent = visible ? "◉" : "○";
        button.setAttribute("aria-label", visible ? "Show password" : "Hide password");
    });
});

/* =========================================================
   START
========================================================= */

checkSession();
