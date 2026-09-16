/* =====================================================
   NUTRITION PLANNER
   Frontend Prototype
===================================================== */


/* =====================================================
   FOOD DATABASE
   Working prototype dataset based on common VIT-AP
   mess foods and practical serving sizes.
===================================================== */

const foods = [

    {
        id: 1,
        name: "White Rice",
        category: "Staple",
        serving: "100 g cooked",
        calories: 130,
        protein: 2.4,
        carbs: 28.2,
        fat: 0.3,
        fiber: 0.4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 2,
        name: "Pulka",
        category: "Staple",
        serving: "1 piece (40 g)",
        calories: 110,
        protein: 3.2,
        carbs: 18,
        fat: 2.5,
        fiber: 2.2,
        vitamins: {},
        minerals: {}
    },

    {
        id: 3,
        name: "Chapathi",
        category: "Staple",
        serving: "1 piece (40 g)",
        calories: 120,
        protein: 3.5,
        carbs: 18,
        fat: 3,
        fiber: 2.5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 4,
        name: "Roti",
        category: "Staple",
        serving: "1 piece (40 g)",
        calories: 120,
        protein: 3.5,
        carbs: 18,
        fat: 3,
        fiber: 2.5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 5,
        name: "Idli",
        category: "Breakfast",
        serving: "1 piece (40 g)",
        calories: 58,
        protein: 2,
        carbs: 12,
        fat: 0.2,
        fiber: 0.5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 6,
        name: "Dosa",
        category: "Breakfast",
        serving: "1 medium (100 g)",
        calories: 168,
        protein: 4,
        carbs: 26,
        fat: 5,
        fiber: 1.5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 7,
        name: "Multi Grain Dosa",
        category: "Breakfast",
        serving: "1 piece",
        calories: 120,
        protein: 3.5,
        carbs: 20,
        fat: 3,
        fiber: 2,
        vitamins: {},
        minerals: {}
    },

    {
        id: 8,
        name: "Poha",
        category: "Breakfast",
        serving: "1 bowl (150 g)",
        calories: 180,
        protein: 4,
        carbs: 30,
        fat: 5,
        fiber: 3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 9,
        name: "Upma",
        category: "Breakfast",
        serving: "1 bowl (180 g)",
        calories: 190,
        protein: 5,
        carbs: 30,
        fat: 6,
        fiber: 2,
        vitamins: {},
        minerals: {}
    },

    {
        id: 10,
        name: "Uggani",
        category: "Breakfast",
        serving: "1 bowl (150 g)",
        calories: 210,
        protein: 6,
        carbs: 32,
        fat: 7,
        fiber: 4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 11,
        name: "Palak Roti",
        category: "Breakfast",
        serving: "1 piece (50 g)",
        calories: 130,
        protein: 4,
        carbs: 20,
        fat: 3.5,
        fiber: 3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 12,
        name: "Methi Roti",
        category: "Breakfast",
        serving: "1 piece (50 g)",
        calories: 130,
        protein: 4,
        carbs: 20,
        fat: 3.5,
        fiber: 3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 13,
        name: "Pav Bhaji",
        category: "Breakfast",
        serving: "1 plate (200 g)",
        calories: 300,
        protein: 7,
        carbs: 45,
        fat: 10,
        fiber: 6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 14,
        name: "Aloo Samosa",
        category: "Snack",
        serving: "1 big piece",
        calories: 260,
        protein: 5,
        carbs: 30,
        fat: 13,
        fiber: 3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 15,
        name: "Sprouts",
        category: "Protein",
        serving: "1 small cup (80 g)",
        calories: 60,
        protein: 4,
        carbs: 10,
        fat: 1,
        fiber: 3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 16,
        name: "Boiled Egg",
        category: "Protein",
        serving: "1 egg (50 g)",
        calories: 78,
        protein: 6.3,
        carbs: 0.6,
        fat: 5.3,
        fiber: 0,
        vitamins: {
            "Vitamin A": "80 mcg",
            "Vitamin B12": "0.6 mcg",
            "Vitamin D": "1.1 mcg",
            "Folate": "24 mcg"
        },
        minerals: {
            "Iron": "0.9 mg",
            "Selenium": "15.4 mcg",
            "Phosphorus": "95 mg"
        }
    },

    {
        id: 17,
        name: "Scrambled Egg",
        category: "Protein",
        serving: "1 serving (2 eggs)",
        calories: 180,
        protein: 13,
        carbs: 2,
        fat: 13,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 18,
        name: "Egg Bhurji",
        category: "Protein",
        serving: "60 g cooked",
        calories: 105,
        protein: 8,
        carbs: 3,
        fat: 7,
        fiber: 0.5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 19,
        name: "Chicken",
        category: "Protein",
        serving: "150 g cooked",
        calories: 248,
        protein: 46,
        carbs: 0,
        fat: 5.4,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 20,
        name: "Fish",
        category: "Protein",
        serving: "120 g cooked",
        calories: 216,
        protein: 36,
        carbs: 0,
        fat: 7.2,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 21,
        name: "Paneer",
        category: "Protein",
        serving: "75 g",
        calories: 199,
        protein: 13.5,
        carbs: 4.5,
        fat: 15,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 22,
        name: "Soya Chunks",
        category: "Protein",
        serving: "100 g cooked",
        calories: 170,
        protein: 17,
        carbs: 15,
        fat: 5,
        fiber: 6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 23,
        name: "Dal",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 140,
        protein: 7,
        carbs: 22,
        fat: 3,
        fiber: 6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 24,
        name: "Dal Tadka",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 170,
        protein: 7,
        carbs: 22,
        fat: 6,
        fiber: 6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 25,
        name: "Dal Makhani",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 190,
        protein: 8,
        carbs: 25,
        fat: 7,
        fiber: 7,
        vitamins: {},
        minerals: {}
    },

    {
        id: 26,
        name: "Rajma Masala",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 190,
        protein: 10,
        carbs: 30,
        fat: 4,
        fiber: 8,
        vitamins: {},
        minerals: {}
    },

    {
        id: 27,
        name: "Chole",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 180,
        protein: 9,
        carbs: 27,
        fat: 5,
        fiber: 7,
        vitamins: {},
        minerals: {}
    },

    {
        id: 28,
        name: "Amaranthus Dal",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 155,
        protein: 8,
        carbs: 23,
        fat: 4,
        fiber: 6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 29,
        name: "Pesara Pappu",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 155,
        protein: 8,
        carbs: 24,
        fat: 3,
        fiber: 6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 30,
        name: "Mudda Pappu",
        category: "Dal",
        serving: "1 cup (150 g)",
        calories: 150,
        protein: 8,
        carbs: 23,
        fat: 3,
        fiber: 6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 31,
        name: "Sambar",
        category: "Side",
        serving: "1 cup (200 ml)",
        calories: 100,
        protein: 5,
        carbs: 15,
        fat: 2.5,
        fiber: 4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 32,
        name: "Rasam",
        category: "Side",
        serving: "1 cup (200 ml)",
        calories: 45,
        protein: 2,
        carbs: 7,
        fat: 1,
        fiber: 1,
        vitamins: {},
        minerals: {}
    },

    {
        id: 33,
        name: "Curd",
        category: "Dairy",
        serving: "150 g",
        calories: 95,
        protein: 5,
        carbs: 7,
        fat: 5,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 34,
        name: "Buttermilk",
        category: "Dairy",
        serving: "250 ml",
        calories: 70,
        protein: 3.5,
        carbs: 6,
        fat: 3,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 35,
        name: "Milk",
        category: "Dairy",
        serving: "250 ml",
        calories: 150,
        protein: 8,
        carbs: 12,
        fat: 8,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 36,
        name: "Lassi",
        category: "Dairy",
        serving: "250 ml",
        calories: 150,
        protein: 6,
        carbs: 20,
        fat: 5,
        fiber: 0,
        vitamins: {},
        minerals: {}
    },

    {
        id: 37,
        name: "Banana",
        category: "Fruit",
        serving: "1 medium (118 g)",
        calories: 105,
        protein: 1.3,
        carbs: 27,
        fat: 0.4,
        fiber: 3.1,
        vitamins: {
            "Vitamin B6": "0.4 mg",
            "Vitamin C": "10.3 mg",
            "Folate": "24 mcg"
        },
        minerals: {
            "Potassium": "422 mg",
            "Magnesium": "32 mg"
        }
    },

    {
        id: 38,
        name: "Guava",
        category: "Fruit",
        serving: "1 medium (100 g)",
        calories: 68,
        protein: 2.6,
        carbs: 14,
        fat: 1,
        fiber: 5.4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 39,
        name: "Papaya",
        category: "Fruit",
        serving: "1 cup (145 g)",
        calories: 62,
        protein: 0.7,
        carbs: 16,
        fat: 0.4,
        fiber: 2.5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 40,
        name: "Muskmelon",
        category: "Fruit",
        serving: "1 cup (150 g)",
        calories: 51,
        protein: 1.2,
        carbs: 12,
        fat: 0.3,
        fiber: 1.3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 41,
        name: "Watermelon",
        category: "Fruit",
        serving: "1 cup (150 g)",
        calories: 45,
        protein: 0.9,
        carbs: 11,
        fat: 0.2,
        fiber: 0.6,
        vitamins: {},
        minerals: {}
    },

    {
        id: 42,
        name: "Apple",
        category: "Fruit",
        serving: "1 medium (182 g)",
        calories: 95,
        protein: 0.5,
        carbs: 25,
        fat: 0.3,
        fiber: 4.4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 43,
        name: "Carrot & Cucumber Salad",
        category: "Vegetable",
        serving: "1 bowl (100 g)",
        calories: 35,
        protein: 1,
        carbs: 7,
        fat: 0.2,
        fiber: 2,
        vitamins: {},
        minerals: {}
    },

    {
        id: 44,
        name: "Beetroot & Carrot Salad",
        category: "Vegetable",
        serving: "1 bowl (100 g)",
        calories: 45,
        protein: 1.3,
        carbs: 9,
        fat: 0.3,
        fiber: 3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 45,
        name: "Carrot Beans Poriyal",
        category: "Vegetable",
        serving: "1 cup (120 g)",
        calories: 110,
        protein: 3,
        carbs: 12,
        fat: 6,
        fiber: 4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 46,
        name: "Cabbage Beans Poriyal",
        category: "Vegetable",
        serving: "1 cup (120 g)",
        calories: 100,
        protein: 3,
        carbs: 11,
        fat: 5,
        fiber: 4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 47,
        name: "Aloo Mutter Curry",
        category: "Vegetable",
        serving: "1 cup (150 g)",
        calories: 170,
        protein: 5,
        carbs: 25,
        fat: 6,
        fiber: 5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 48,
        name: "Guthi Vankaya Curry",
        category: "Vegetable",
        serving: "1 cup (150 g)",
        calories: 180,
        protein: 3,
        carbs: 14,
        fat: 12,
        fiber: 5,
        vitamins: {},
        minerals: {}
    },

    {
        id: 49,
        name: "Dondakaya Fry",
        category: "Vegetable",
        serving: "1 cup (120 g)",
        calories: 130,
        protein: 3,
        carbs: 12,
        fat: 8,
        fiber: 4,
        vitamins: {},
        minerals: {}
    },

    {
        id: 50,
        name: "Potato Chips",
        category: "Snack",
        serving: "30 g",
        calories: 160,
        protein: 2,
        carbs: 15,
        fat: 10,
        fiber: 1,
        vitamins: {},
        minerals: {}
    },

    {
        id: 51,
        name: "Dahi Vada",
        category: "Snack",
        serving: "1 piece",
        calories: 150,
        protein: 5,
        carbs: 18,
        fat: 7,
        fiber: 2,
        vitamins: {},
        minerals: {}
    },

    {
        id: 52,
        name: "Nuts & Seeds",
        category: "Nuts",
        serving: "28 g",
        calories: 165,
        protein: 6,
        carbs: 7,
        fat: 14,
        fiber: 3,
        vitamins: {},
        minerals: {}
    },

    {
        id: 53,
        name: "Bread",
        category: "Breakfast",
        serving: "2 slices (60 g)",
        calories: 150,
        protein: 6,
        carbs: 28,
        fat: 2,
        fiber: 2,
        vitamins: {},
        minerals: {}
    },

    {
        id: 54,
        name: "Peanut Butter",
        category: "Nuts",
        serving: "2 tbsp (32 g)",
        calories: 190,
        protein: 8,
        carbs: 7,
        fat: 16,
        fiber: 2,
        vitamins: {},
        minerals: {}
    },

    {
        id: 55,
        name: "Oats",
        category: "Breakfast",
        serving: "50 g dry",
        calories: 190,
        protein: 6.5,
        carbs: 32,
        fat: 3.5,
        fiber: 5,
        vitamins: {},
        minerals: {}
    }

];


/* =====================================================
   APPLICATION STATE
===================================================== */

let meals =
    JSON.parse(localStorage.getItem("nutritionMeals")) || [];


let profile =
    JSON.parse(localStorage.getItem("nutritionProfile")) || {

        height: "",
        weight: "",
        age: "",
        goal: "fitness"

    };


let waterGlasses =
    Number(localStorage.getItem("waterGlasses")) || 0;


let sleepHours =
    Number(localStorage.getItem("sleepHours")) || 0;


/* =====================================================
   GOALS
===================================================== */

const goals = {

    maintain: {
        name: "Maintain Fitness",
        calories: 2200,
        protein: 110,
        carbs: 275
    },

    muscle: {
        name: "Improve Muscle",
        calories: 2400,
        protein: 140,
        carbs: 300
    },

    bulk: {
        name: "Gain Weight / Bulk",
        calories: 2700,
        protein: 140,
        carbs: 340
    },

    fatloss: {
        name: "Lose Fat",
        calories: 1900,
        protein: 130,
        carbs: 210
    },

    fitness: {
        name: "Improve Overall Fitness",
        calories: 2200,
        protein: 120,
        carbs: 280
    }

};


/* =====================================================
   NAVIGATION
===================================================== */

const navItems =
    document.querySelectorAll(".nav-item");


const pages =
    document.querySelectorAll(".page");


const pageLabel =
    document.getElementById("page-label");


navItems.forEach(button => {

    button.addEventListener("click", () => {

        showPage(button.dataset.page);

    });

});


document.querySelectorAll("[data-page]").forEach(button => {

    if (button.classList.contains("nav-item")) {
        return;
    }

    button.addEventListener("click", () => {

        showPage(button.dataset.page);

    });

});


function showPage(pageName) {

    pages.forEach(page => {

        page.classList.remove("active-page");

    });


    const selectedPage =
        document.getElementById(pageName);


    if (selectedPage) {

        selectedPage.classList.add("active-page");

    }


    navItems.forEach(item => {

        item.classList.remove("active");


        if (item.dataset.page === pageName) {

            item.classList.add("active");

        }

    });


    const labels = {

        overview: "OVERVIEW",
        food: "FOOD EXPLORER",
        meals: "MEAL LOG",
        planner: "PERSONAL PLANNER",
        health: "DAILY HEALTH",
        progress: "YOUR JOURNEY",
        profile: "YOUR PROFILE"

    };


    pageLabel.textContent =
        labels[pageName] || "NUTRITION PLANNER";


    updateEverything();

}


/* =====================================================
   DATE
===================================================== */

function updateDate() {

    const today = new Date();


    const formatted =
        today.toLocaleDateString("en-IN", {

            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric"

        });


    document.getElementById("current-date")
        .textContent = formatted;

}


/* =====================================================
   PROFILE
===================================================== */

function loadProfile() {

    document.getElementById("height-input").value =
        profile.height;


    document.getElementById("weight-input").value =
        profile.weight;


    document.getElementById("age-input").value =
        profile.age;


    document.getElementById("goal-input").value =
        profile.goal;

}


document
    .getElementById("save-profile")
    .addEventListener("click", () => {

        profile.height =
            document.getElementById("height-input").value;


        profile.weight =
            document.getElementById("weight-input").value;


        profile.age =
            document.getElementById("age-input").value;


        profile.goal =
            document.getElementById("goal-input").value;


        localStorage.setItem(
            "nutritionProfile",
            JSON.stringify(profile)
        );


        updateEverything();


        document.getElementById("profile-message")
            .textContent =
            "Profile saved successfully.";

    });


function updateGoalDisplays() {

    const goal =
        goals[profile.goal] || goals.fitness;


    document.getElementById("goal-display")
        .textContent = goal.name;


    document.getElementById("planner-goal")
        .textContent = goal.name;


    document.getElementById("progress-goal")
        .textContent = goal.name;

}


/* =====================================================
   NUTRITION TOTALS
===================================================== */

function calculateTotals() {

    const totals = {

        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0

    };


    meals.forEach(meal => {

        totals.calories += meal.calories;
        totals.protein += meal.protein;
        totals.carbs += meal.carbs;
        totals.fat += meal.fat;

    });


    totals.calories =
        Math.round(totals.calories);


    totals.protein =
        Math.round(totals.protein * 10) / 10;


    totals.carbs =
        Math.round(totals.carbs * 10) / 10;


    totals.fat =
        Math.round(totals.fat * 10) / 10;


    return totals;

}


/* =====================================================
   OVERVIEW
===================================================== */

function updateOverview() {

    const totals =
        calculateTotals();


    const goal =
        goals[profile.goal] || goals.fitness;


    document.getElementById("total-calories")
        .textContent = totals.calories;


    document.getElementById("total-protein")
        .textContent = totals.protein;


    document.getElementById("total-carbs")
        .textContent = totals.carbs;


    document.getElementById("water-total")
        .textContent = waterGlasses;


    document.getElementById("calorie-target")
        .textContent = goal.calories;


    document.getElementById("protein-target")
        .textContent = goal.protein;


    document.getElementById("carbs-target")
        .textContent = goal.carbs;


    updateMetric(
        "calorie",
        totals.calories,
        goal.calories
    );


    updateMetric(
        "protein",
        totals.protein,
        goal.protein
    );


    updateMetric(
        "carbs",
        totals.carbs,
        goal.carbs
    );


    updateMetric(
        "water",
        waterGlasses,
        8
    );


    document.getElementById("overview-water")
        .textContent =
        `${waterGlasses} / 8`;


    document.getElementById("overview-sleep")
        .textContent =
        sleepHours > 0 ? sleepHours : "—";


    document.getElementById("overview-weight")
        .textContent =
        profile.weight || "—";


    renderOverviewMeals();

    updateInsight(totals, goal);

}


function updateMetric(
    name,
    value,
    target
) {

    const percentage =
        Math.min(
            Math.round((value / target) * 100),
            100
        );


    document.getElementById(`${name}-percent`)
        .textContent =
        `${percentage}%`;


    document.getElementById(`${name}-bar`)
        .style.width =
        `${percentage}%`;

}


/* =====================================================
   OVERVIEW MEALS
===================================================== */

function renderOverviewMeals() {

    const container =
        document.getElementById("overview-meals");


    if (meals.length === 0) {

        container.innerHTML = `

            <div style="
                padding:20px 0;
                color:#71808d;
                font-size:12px;
            ">

                No meals logged today.

            </div>

        `;

        return;

    }


    container.innerHTML =
        meals.slice(-6).map(meal => {

            return `

                <div class="meal-row">

                    <div>

                        <div class="meal-name">
                            ${meal.name}
                        </div>

                        <div class="meal-meta">

                            ${capitalize(meal.type)}
                            ·
                            ${meal.quantity} × serving

                        </div>

                    </div>


                    <div class="meal-kcal">

                        ${Math.round(meal.calories)}
                        kcal

                    </div>

                </div>

            `;

        }).join("");

}


/* =====================================================
   INSIGHTS
===================================================== */

function updateInsight(
    totals,
    goal
) {

    const title =
        document.getElementById(
            "daily-insight-title"
        );


    const text =
        document.getElementById(
            "daily-insight"
        );


    if (meals.length === 0) {

        title.textContent =
            "Start with what you eat.";


        text.textContent =
            "Add your meals to understand your nutrition and discover where you can improve today.";

        return;

    }


    if (
        totals.protein <
        goal.protein * 0.65
    ) {

        title.textContent =
            "Protein is your biggest gap.";


        text.textContent =
            "Consider including eggs, dal, chicken, yogurt or another protein-rich food in your next meal.";

    }

    else if (
        totals.calories >
        goal.calories * 0.9
    ) {

        title.textContent =
            "You're approaching your calorie target.";


        text.textContent =
            "Consider a lighter, nutrient-dense option for your next meal.";

    }

    else {

        title.textContent =
            "You're building a balanced day.";


        text.textContent =
            "Keep choosing a variety of nutrient-dense foods and stay consistent.";

    }

}


/* =====================================================
   FOOD SEARCH
===================================================== */

const searchInput =
    document.getElementById("food-search");


searchInput.addEventListener(
    "input",
    () => {

        const query =
            searchInput.value
                .toLowerCase()
                .trim();


        const results =
            document.getElementById(
                "food-results"
            );


        if (!query) {

            results.innerHTML =
                foods
                    .slice(0, 9)
                    .map(createFoodResult)
                    .join("");

            return;

        }


        const filtered =
            foods.filter(food =>

                food.name
                    .toLowerCase()
                    .includes(query)

                ||

                food.category
                    .toLowerCase()
                    .includes(query)

            );


        if (filtered.length === 0) {

            results.innerHTML = `

                <div style="
                    color:#71808d;
                    padding:20px 0;
                ">

                    No food found in the current database.

                </div>

            `;

            return;

        }


        results.innerHTML =
            filtered
                .map(createFoodResult)
                .join("");

    }
);


function createFoodResult(food) {

    return `

        <div
            class="food-result"
            onclick="showFoodDetail(${food.id})"
        >

            <div class="food-result-name">
                ${food.name}
            </div>

            <div class="food-result-meta">

                ${food.category}
                ·
                ${food.serving}
                ·
                ${food.calories} kcal

            </div>

        </div>

    `;

}


/* =====================================================
   FOOD DETAILS
===================================================== */

function showFoodDetail(id) {

    const food =
        foods.find(item => item.id === id);


    if (!food) return;


    const detail =
        document.getElementById(
            "food-detail"
        );


    detail.classList.remove("hidden");


    detail.innerHTML = `

        <div class="food-detail-header">

            <div>

                <p class="eyebrow">
                    ${food.category}
                </p>

                <h2>
                    ${food.name}
                </h2>

                <p style="
                    color:#71808d;
                    margin-top:8px;
                ">

                    Serving:
                    ${food.serving}

                </p>

            </div>


            <div class="food-calorie">

                ${food.calories}

                <span>
                    kcal
                </span>

            </div>

        </div>


        <table class="nutrition-table">

            <tr>
                <td>Protein</td>
                <td>${food.protein} g</td>
            </tr>

            <tr>
                <td>Carbohydrates</td>
                <td>${food.carbs} g</td>
            </tr>

            <tr>
                <td>Fat</td>
                <td>${food.fat} g</td>
            </tr>

            <tr>
                <td>Fiber</td>
                <td>${food.fiber} g</td>
            </tr>

        </table>


        <div
            class="section-heading"
            style="margin-top:40px;"
        >

            <div>

                <p class="eyebrow">
                    MICRONUTRIENTS
                </p>

                <h3>
                    Vitamins & minerals
                </h3>

            </div>


            <button
                class="primary-button"
                onclick="openMealModalWithFood(${food.id})"
            >
                + Add to meal
            </button>

        </div>


        <div class="micronutrients">

            ${Object.entries(food.vitamins)
                .map(([name, value]) => `

                    <div class="micro-item">

                        <span>
                            ${name}
                        </span>

                        <strong>
                            ${value}
                        </strong>

                    </div>

                `)
                .join("")}


            ${Object.entries(food.minerals)
                .map(([name, value]) => `

                    <div class="micro-item">

                        <span>
                            ${name}
                        </span>

                        <strong>
                            ${value}
                        </strong>

                    </div>

                `)
                .join("")}

        </div>

    `;


    detail.scrollIntoView({

        behavior: "smooth",
        block: "start"

    });

}


/* =====================================================
   MEAL MODAL
===================================================== */

const modal =
    document.getElementById(
        "meal-modal"
    );


const foodSelect =
    document.getElementById(
        "meal-food"
    );


const quantityInput =
    document.getElementById(
        "meal-quantity"
    );


function populateFoodSelect() {

    foodSelect.innerHTML =
        foods.map(food => `

            <option value="${food.id}">

                ${food.name}
                —
                ${food.serving}

            </option>

        `)
        .join("");

}


/* =====================================================
   RESET MEAL FORM
===================================================== */

function resetMealForm() {

    quantityInput.value = 1;

    quantityInput.min = 1;

    quantityInput.step = 1;

}


/* =====================================================
   OPEN MEAL MODAL
===================================================== */

document
    .getElementById("open-meal-modal")
    .addEventListener(
        "click",
        openMealModal
    );


document
    .getElementById("overview-add-meal")
    .addEventListener(
        "click",
        openMealModal
    );


function openMealModal() {

    modal.classList.remove(
        "hidden"
    );

    resetMealForm();

    foodSelect.selectedIndex = 0;

    updateModalNutrition();

}


/* =====================================================
   CLOSE MODAL
===================================================== */

document
    .getElementById("close-meal-modal")
    .addEventListener(
        "click",
        closeModal
    );


modal.addEventListener(
    "click",
    event => {

        if (event.target === modal) {

            closeModal();

        }

    }
);


function closeModal() {

    modal.classList.add(
        "hidden"
    );

}


/* =====================================================
   OPEN MODAL WITH SPECIFIC FOOD
===================================================== */

function openMealModalWithFood(id) {

    modal.classList.remove(
        "hidden"
    );

    foodSelect.value = id;

    resetMealForm();

    updateModalNutrition();

}


/* =====================================================
   MODAL NUTRITION
===================================================== */

foodSelect.addEventListener(
    "change",
    updateModalNutrition
);


quantityInput.addEventListener(
    "input",
    updateModalNutrition
);


function updateModalNutrition() {

    const food =
        foods.find(
            item =>
                item.id ==
                foodSelect.value
        );


    if (!food) return;


    let quantity =
        Number(quantityInput.value) || 1;


    if (quantity < 1) {

        quantity = 1;

        quantityInput.value = 1;

    }


    quantity =
        Math.round(quantity);


    quantityInput.value =
        quantity;


    document.getElementById(
        "modal-calories"
    ).textContent =

        `${Math.round(
            food.calories *
            quantity
        )} kcal`;

}


/* =====================================================
   ADD MEAL
===================================================== */

document
    .getElementById("add-meal")
    .addEventListener(
        "click",
        () => {

            const food =
                foods.find(
                    item =>
                        item.id ==
                        foodSelect.value
                );


            if (!food) return;


            let quantity =
                Number(
                    quantityInput.value
                ) || 1;


            quantity =
                Math.max(
                    1,
                    Math.round(quantity)
                );


            quantityInput.value =
                quantity;


            const type =
                document.getElementById(
                    "meal-type"
                ).value;


            const meal = {

                id: Date.now(),

                name: food.name,

                type: type,

                quantity: quantity,

                calories:
                    food.calories *
                    quantity,

                protein:
                    food.protein *
                    quantity,

                carbs:
                    food.carbs *
                    quantity,

                fat:
                    food.fat *
                    quantity

            };


            meals.push(meal);


            localStorage.setItem(
                "nutritionMeals",
                JSON.stringify(meals)
            );


            closeModal();


            updateEverything();


            showPage("meals");

        }
    );


/* =====================================================
   MEALS PAGE
===================================================== */

function updateMealsPage() {

    const totals =
        calculateTotals();


    document.getElementById(
        "meal-calories"
    ).textContent =
        `${totals.calories} kcal`;


    document.getElementById(
        "meal-protein"
    ).textContent =
        `${totals.protein} g`;


    document.getElementById(
        "meal-carbs"
    ).textContent =
        `${totals.carbs} g`;


    document.getElementById(
        "meal-fat"
    ).textContent =
        `${totals.fat} g`;


    const types = [

        "breakfast",
        "lunch",
        "dinner",
        "snacks"

    ];


    types.forEach(type => {

        const container =
            document.getElementById(
                `${type}-list`
            );


        const totalElement =
            document.getElementById(
                `${type}-total`
            );


        const typeMeals =
            meals.filter(
                meal =>
                    meal.type === type
            );


        const calories =
            typeMeals.reduce(
                (sum, meal) =>
                    sum + meal.calories,
                0
            );


        totalElement.textContent =
            `${Math.round(calories)} kcal`;


        if (typeMeals.length === 0) {

            container.innerHTML = `

                <div style="
                    padding:16px 0;
                    color:#71808d;
                    font-size:11px;
                ">

                    Nothing logged yet.

                </div>

            `;

            return;

        }


        container.innerHTML =
            typeMeals.map(meal => `

                <div class="logged-food">

                    <div>

                        <div class="logged-food-name">
                            ${meal.name}
                        </div>

                        <div class="logged-food-details">

                            ${meal.quantity}
                            × serving ·

                            ${Math.round(
                                meal.protein
                            )}g protein ·

                            ${Math.round(
                                meal.carbs
                            )}g carbs

                        </div>

                    </div>


                    <div class="logged-food-kcal">

                        ${Math.round(
                            meal.calories
                        )} kcal

                    </div>

                </div>

            `)
            .join("");

    });

}


/* =====================================================
   PLANNER
===================================================== */

function updatePlanner() {

    const totals =
        calculateTotals();


    const goal =
        goals[profile.goal] ||
        goals.fitness;


    const remainingCalories =
        Math.max(
            0,
            Math.round(
                goal.calories -
                totals.calories
            )
        );


    const remainingProtein =
        Math.max(
            0,
            Math.round(
                (
                    goal.protein -
                    totals.protein
                ) * 10
            ) / 10
        );


    document.getElementById(
        "remaining-calories"
    ).textContent =
        `${remainingCalories} kcal`;


    document.getElementById(
        "remaining-protein"
    ).textContent =
        `${remainingProtein} g`;


    const recommendations =
        document.getElementById(
            "recommendations"
        );


    let recommendedFoods =
        [...foods];


    if (
        profile.goal === "muscle" ||
        profile.goal === "bulk"
    ) {

        recommendedFoods =
            foods.filter(
                food =>
                    food.protein >= 6
            );

    }

    else if (
        profile.goal === "fatloss"
    ) {

        recommendedFoods =
            foods.filter(
                food =>
                    food.fiber >= 2 &&
                    food.calories <= 200
            );

    }

    else {

        recommendedFoods =
            foods.filter(
                food =>
                    food.fiber >= 2 ||
                    food.protein >= 6
            );

    }


    recommendedFoods =
        recommendedFoods.slice(0, 6);


    recommendations.innerHTML =
        recommendedFoods.map(food => `

            <div class="recommendation">

                <div class="recommendation-tag">

                    ${food.category.toUpperCase()}

                </div>


                <h3>
                    ${food.name}
                </h3>


                <p>

                    ${food.calories} kcal
                    ·
                    ${food.protein}g protein
                    ·
                    ${food.fiber}g fiber

                </p>


                <div class="recommendation-bottom">

                    <strong>
                        ${food.serving}
                    </strong>


                    <button
                        class="text-button"
                        onclick="openMealModalWithFood(${food.id})"
                    >
                        Add →
                    </button>

                </div>

            </div>

        `)
        .join("");

}


/* =====================================================
   WATER TRACKING
===================================================== */

function renderWater() {

    const container =
        document.getElementById(
            "water-glasses"
        );


    document.getElementById(
        "health-water-count"
    ).textContent =
        waterGlasses;


    container.innerHTML = "";


    for (
        let i = 1;
        i <= 8;
        i++
    ) {

        const glass =
            document.createElement(
                "div"
            );


        glass.className =
            "water-glass";


        if (i <= waterGlasses) {

            glass.classList.add(
                "filled"
            );

        }


        glass.title =
            `Glass ${i}`;


        glass.addEventListener(
            "click",
            () => {

                waterGlasses = i;

                saveWater();

                renderWater();

                updateOverview();

            }
        );


        container.appendChild(
            glass
        );

    }

}


function saveWater() {

    localStorage.setItem(
        "waterGlasses",
        waterGlasses
    );

}


document
    .getElementById("add-water")
    .addEventListener(
        "click",
        () => {

            if (waterGlasses < 8) {

                waterGlasses++;

            }

            saveWater();

            renderWater();

            updateOverview();

        }
    );


document
    .getElementById("remove-water")
    .addEventListener(
        "click",
        () => {

            if (waterGlasses > 0) {

                waterGlasses--;

            }

            saveWater();

            renderWater();

            updateOverview();

        }
    );


/* =====================================================
   SLEEP TRACKING
===================================================== */

function updateSleepDisplay() {

    const display =
        document.getElementById(
            "health-sleep-count"
        );


    display.textContent =
        sleepHours > 0
            ? sleepHours
            : "—";


    document.getElementById(
        "sleep-input"
    ).value =
        sleepHours > 0
            ? sleepHours
            : "";

}


document
    .getElementById("save-sleep")
    .addEventListener(
        "click",
        () => {

            const value =
                Number(
                    document.getElementById(
                        "sleep-input"
                    ).value
                );


            if (
                value < 0 ||
                value > 24 ||
                !value
            ) {

                document.getElementById(
                    "sleep-message"
                ).textContent =
                    "Enter a valid number of hours.";

                return;

            }


            sleepHours = value;


            localStorage.setItem(
                "sleepHours",
                sleepHours
            );


            updateSleepDisplay();

            updateOverview();


            document.getElementById(
                "sleep-message"
            ).textContent =
                "Sleep saved successfully.";

        }
    );


/* =====================================================
   PROGRESS
===================================================== */

function updateProgress() {

    document.getElementById(
        "progress-weight"
    ).textContent =
        profile.weight || "—";


    document.getElementById(
        "meals-logged"
    ).textContent =
        meals.length;


    const points =
        meals.length > 0

            ? "40,180 180,165 320,150 460,125 600,110 740,90"

            : "40,180 180,180 320,180 460,180 600,180 740,180";


    document.getElementById(
        "weight-line"
    ).setAttribute(
        "points",
        points
    );


    document.getElementById(
        "chart-labels"
    ).innerHTML = `

        <span>
            Start
        </span>

        <span>
            Week 1
        </span>

        <span>
            Week 2
        </span>

        <span>
            Week 3
        </span>

        <span>
            Today
        </span>

    `;

}


/* =====================================================
   GLOBAL UPDATE
===================================================== */

function updateEverything() {

    updateGoalDisplays();

    updateOverview();

    updateMealsPage();

    updatePlanner();

    renderWater();

    updateSleepDisplay();

    updateProgress();

}


/* =====================================================
   HELPERS
===================================================== */

function capitalize(text) {

    return (
        text.charAt(0).toUpperCase() +
        text.slice(1)
    );

}


/* =====================================================
   INITIALIZATION
===================================================== */

updateDate();

populateFoodSelect();

loadProfile();

document.getElementById(
    "food-results"
).innerHTML =
    foods
        .slice(0, 9)
        .map(createFoodResult)
        .join("");

updateEverything();