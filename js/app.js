/* =====================================================
   NUTRITION PLANNER
   Frontend Prototype
===================================================== */


/* =====================================================
   FOOD DATABASE
===================================================== */

const foods = [

    {
        id: 1,
        name: "White Rice",
        category: "Grains",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
        serving: "1 piece (40 g)",
        calories: 58,
        protein: 2,
        carbs: 12,
        fat: 0.2,
        fiber: 0.5,
        vitamins: {
            "Vitamin B1": "0.05 mg",
            "Vitamin B2": "0.03 mg",
            "Folate": "8 mcg"
        },
        minerals: {
            "Iron": "0.4 mg",
            "Calcium": "8 mg",
            "Phosphorus": "30 mg"
        }
    },

    {
        id: 6,
        name: "Dosa",
        category: "Indian",
        serving: "1 medium (100 g)",
        calories: 168,
        protein: 4,
        carbs: 26,
        fat: 5,
        fiber: 1.5,
        vitamins: {
            "Vitamin B1": "0.08 mg",
            "Vitamin B3": "1.1 mg",
            "Folate": "18 mcg"
        },
        minerals: {
            "Iron": "1.2 mg",
            "Calcium": "18 mg",
            "Phosphorus": "55 mg"
        }
    },

    {
        id: 7,
        name: "Multi Grain Dosa",
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Snacks",
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
        category: "Healthy",
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
            "Vitamin D": "1.1 mcg"
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
        category: "Indian",
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
            "Magnesium": "32 mg",
            "Manganese": "0.3 mg"
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
        vitamins: {
            "Vitamin C": "8.4 mg",
            "Vitamin K": "4 mcg"
        },
        minerals: {
            "Potassium": "195 mg",
            "Magnesium": "9 mg"
        }
    },

    {
        id: 43,
        name: "Carrot & Cucumber Salad",
        category: "Salad",
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
        category: "Salad",
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
        category: "Vegetables",
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
        category: "Vegetables",
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
        category: "Vegetables",
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
        category: "Vegetables",
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
        category: "Vegetables",
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
        category: "Snacks",
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
        category: "Indian",
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
        vitamins: {
            "Vitamin E": "7.3 mg"
        },
        minerals: {
            "Magnesium": "76 mg",
            "Calcium": "76 mg",
            "Phosphorus": "136 mg"
        }
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


    ,{
        id: 56, name: "Brown Rice", category: "Grains", serving: "100 g cooked", calories: 123, protein: 2.7, carbs: 25.6, fat: 1.0, fiber: 1.6, vitamins: {"Vitamin B1":"0.10 mg"}, minerals: {"Magnesium":"43 mg", "Phosphorus":"83 mg"}
    },
    { id: 57, name: "Oats", category: "Grains", serving: "40 g dry", calories: 152, protein: 5.2, carbs: 27, fat: 2.8, fiber: 4.0, vitamins: {"Vitamin B1":"0.15 mg"}, minerals: {"Iron":"1.7 mg", "Magnesium":"54 mg"} },
    { id: 58, name: "Sambar", category: "Indian", serving: "1 bowl (200 g)", calories: 130, protein: 6, carbs: 19, fat: 3.5, fiber: 5, vitamins: {}, minerals: {"Iron":"1.8 mg", "Potassium":"320 mg"} },
    { id: 59, name: "Dal Tadka", category: "Indian", serving: "1 bowl (180 g)", calories: 210, protein: 10, carbs: 27, fat: 7, fiber: 8, vitamins: {"Folate":"90 mcg"}, minerals: {"Iron":"2.8 mg", "Potassium":"300 mg"} },
    { id: 60, name: "Rajma", category: "Protein", serving: "1 bowl (170 g)", calories: 225, protein: 13, carbs: 40, fat: 1.2, fiber: 10, vitamins: {"Folate":"130 mcg"}, minerals: {"Iron":"4 mg", "Magnesium":"75 mg"} },
    { id: 61, name: "Chole", category: "Protein", serving: "1 bowl (170 g)", calories: 270, protein: 14, carbs: 45, fat: 5, fiber: 12, vitamins: {"Folate":"140 mcg"}, minerals: {"Iron":"4.5 mg", "Magnesium":"78 mg"} },
    { id: 62, name: "Soya Chunks", category: "Protein", serving: "50 g dry", calories: 172, protein: 26, carbs: 16, fat: 0.5, fiber: 7, vitamins: {"Folate":"90 mcg"}, minerals: {"Iron":"5 mg", "Calcium":"125 mg"} },
    { id: 63, name: "Paneer", category: "Dairy", serving: "100 g", calories: 265, protein: 18, carbs: 6, fat: 20, fiber: 0, vitamins: {"Vitamin B12":"1.2 mcg"}, minerals: {"Calcium":"208 mg", "Phosphorus":"138 mg"} },
    { id: 64, name: "Curd", category: "Dairy", serving: "100 g", calories: 61, protein: 3.5, carbs: 4.7, fat: 3.3, fiber: 0, vitamins: {"Vitamin B12":"0.4 mcg"}, minerals: {"Calcium":"121 mg", "Phosphorus":"95 mg"} },
    { id: 65, name: "Milk", category: "Dairy", serving: "250 ml", calories: 150, protein: 8, carbs: 12, fat: 8, fiber: 0, vitamins: {"Vitamin B12":"1.1 mcg", "Vitamin D":"2.5 mcg"}, minerals: {"Calcium":"300 mg", "Phosphorus":"230 mg"} },
    { id: 66, name: "Greek Yogurt", category: "Dairy", serving: "150 g", calories: 100, protein: 10, carbs: 6, fat: 3, fiber: 0, vitamins: {"Vitamin B12":"0.8 mcg"}, minerals: {"Calcium":"150 mg"} },
    { id: 67, name: "Chicken Breast", category: "Protein", serving: "100 g cooked", calories: 165, protein: 31, carbs: 0, fat: 3.6, fiber: 0, vitamins: {"Vitamin B6":"0.6 mg", "Vitamin B12":"0.3 mcg"}, minerals: {"Phosphorus":"228 mg", "Selenium":"32 mcg"} },
    { id: 68, name: "Chicken Curry", category: "Indian", serving: "1 bowl (200 g)", calories: 280, protein: 25, carbs: 8, fat: 16, fiber: 2, vitamins: {"Vitamin B6":"0.5 mg"}, minerals: {"Iron":"2 mg", "Zinc":"2.5 mg"} },
    { id: 69, name: "Egg Omelette", category: "Protein", serving: "2 eggs", calories: 180, protein: 13, carbs: 2, fat: 13, fiber: 0, vitamins: {"Vitamin A":"160 mcg", "Vitamin B12":"1.2 mcg"}, minerals: {"Iron":"1.8 mg", "Selenium":"31 mcg"} },
    { id: 70, name: "Sweet Potato", category: "Vegetables", serving: "100 g cooked", calories: 90, protein: 2, carbs: 21, fat: 0.2, fiber: 3, vitamins: {"Vitamin A":"709 mcg", "Vitamin C":"12 mg"}, minerals: {"Potassium":"475 mg"} },
    { id: 71, name: "Potato", category: "Vegetables", serving: "100 g boiled", calories: 87, protein: 1.9, carbs: 20, fat: 0.1, fiber: 1.8, vitamins: {"Vitamin C":"13 mg", "Vitamin B6":"0.3 mg"}, minerals: {"Potassium":"379 mg"} },
    { id: 72, name: "Spinach", category: "Vegetables", serving: "100 g", calories: 23, protein: 2.9, carbs: 3.6, fat: 0.4, fiber: 2.2, vitamins: {"Vitamin A":"469 mcg", "Vitamin C":"28 mg", "Folate":"194 mcg"}, minerals: {"Iron":"2.7 mg", "Magnesium":"79 mg"} },
    { id: 73, name: "Tomato", category: "Vegetables", serving: "100 g", calories: 18, protein: 0.9, carbs: 3.9, fat: 0.2, fiber: 1.2, vitamins: {"Vitamin C":"14 mg", "Vitamin A":"42 mcg"}, minerals: {"Potassium":"237 mg"} },
    { id: 74, name: "Cucumber", category: "Vegetables", serving: "100 g", calories: 15, protein: 0.7, carbs: 3.6, fat: 0.1, fiber: 0.5, vitamins: {"Vitamin K":"16 mcg"}, minerals: {"Potassium":"147 mg"} },
    { id: 75, name: "Carrot", category: "Vegetables", serving: "100 g", calories: 41, protein: 0.9, carbs: 9.6, fat: 0.2, fiber: 2.8, vitamins: {"Vitamin A":"835 mcg", "Vitamin K":"13 mcg"}, minerals: {"Potassium":"320 mg"} },
    { id: 76, name: "Beetroot", category: "Vegetables", serving: "100 g", calories: 43, protein: 1.6, carbs: 10, fat: 0.2, fiber: 2.8, vitamins: {"Folate":"109 mcg"}, minerals: {"Potassium":"325 mg", "Iron":"0.8 mg"} },
    { id: 77, name: "Broccoli", category: "Vegetables", serving: "100 g", calories: 35, protein: 2.4, carbs: 7.2, fat: 0.4, fiber: 3.3, vitamins: {"Vitamin C":"89 mg", "Vitamin K":"102 mcg"}, minerals: {"Potassium":"316 mg"} },
    { id: 78, name: "Apple", category: "Fruits", serving: "1 medium (180 g)", calories: 95, protein: 0.5, carbs: 25, fat: 0.3, fiber: 4.4, vitamins: {"Vitamin C":"8.4 mg"}, minerals: {"Potassium":"195 mg"} },
    { id: 79, name: "Orange", category: "Fruits", serving: "1 medium", calories: 62, protein: 1.2, carbs: 15.4, fat: 0.2, fiber: 3.1, vitamins: {"Vitamin C":"70 mg", "Folate":"39 mcg"}, minerals: {"Potassium":"237 mg"} },
    { id: 80, name: "Guava", category: "Fruits", serving: "1 medium (100 g)", calories: 68, protein: 2.6, carbs: 14.3, fat: 1, fiber: 5.4, vitamins: {"Vitamin C":"228 mg", "Folate":"49 mcg"}, minerals: {"Potassium":"417 mg"} },
    { id: 81, name: "Papaya", category: "Fruits", serving: "100 g", calories: 43, protein: 0.5, carbs: 11, fat: 0.3, fiber: 1.7, vitamins: {"Vitamin C":"61 mg", "Vitamin A":"47 mcg"}, minerals: {"Potassium":"182 mg"} },
    { id: 82, name: "Watermelon", category: "Fruits", serving: "200 g", calories: 60, protein: 1.2, carbs: 15, fat: 0.3, fiber: 0.8, vitamins: {"Vitamin C":"12 mg"}, minerals: {"Potassium":"168 mg"} },
    { id: 83, name: "Pomegranate", category: "Fruits", serving: "100 g arils", calories: 83, protein: 1.7, carbs: 18.7, fat: 1.2, fiber: 4, vitamins: {"Vitamin C":"10 mg", "Folate":"38 mcg"}, minerals: {"Potassium":"236 mg"} },
    { id: 84, name: "Peanuts", category: "Nuts & Seeds", serving: "30 g", calories: 170, protein: 7.7, carbs: 4.8, fat: 14.6, fiber: 2.6, vitamins: {"Vitamin E":"2.4 mg", "Vitamin B3":"4.2 mg"}, minerals: {"Magnesium":"50 mg", "Phosphorus":"107 mg"} },
    { id: 85, name: "Almonds", category: "Nuts & Seeds", serving: "30 g", calories: 174, protein: 6.4, carbs: 6.5, fat: 15, fiber: 3.8, vitamins: {"Vitamin E":"7.7 mg"}, minerals: {"Magnesium":"81 mg", "Calcium":"76 mg"} },
    { id: 86, name: "Walnuts", category: "Nuts & Seeds", serving: "30 g", calories: 196, protein: 4.6, carbs: 4.1, fat: 19.6, fiber: 2, vitamins: {"Vitamin E":"0.2 mg"}, minerals: {"Magnesium":"48 mg", "Copper":"0.5 mg"} },
    { id: 87, name: "Pumpkin Seeds", category: "Nuts & Seeds", serving: "30 g", calories: 168, protein: 9, carbs: 4, fat: 14, fiber: 1.7, vitamins: {"Vitamin E":"0.8 mg"}, minerals: {"Magnesium":"177 mg", "Zinc":"2.2 mg"} },
    { id: 88, name: "Sunflower Seeds", category: "Nuts & Seeds", serving: "30 g", calories: 175, protein: 6, carbs: 6, fat: 15, fiber: 2.5, vitamins: {"Vitamin E":"10.5 mg"}, minerals: {"Magnesium":"98 mg", "Selenium":"16 mcg"} },
    { id: 89, name: "Flax Seeds", category: "Nuts & Seeds", serving: "15 g", calories: 80, protein: 2.7, carbs: 4.3, fat: 6.3, fiber: 4, vitamins: {"Thiamin":"0.24 mg"}, minerals: {"Magnesium":"41 mg", "Phosphorus":"96 mg"} },
    { id: 90, name: "Chia Seeds", category: "Nuts & Seeds", serving: "15 g", calories: 73, protein: 2.5, carbs: 6.3, fat: 4.6, fiber: 5.2, vitamins: {}, minerals: {"Calcium":"95 mg", "Magnesium":"50 mg"} },
    { id: 91, name: "Roasted Chana", category: "Snacks", serving: "30 g", calories: 120, protein: 6, carbs: 18, fat: 2, fiber: 5, vitamins: {"Folate":"60 mcg"}, minerals: {"Iron":"1.8 mg", "Magnesium":"45 mg"} },
    { id: 92, name: "Makhana", category: "Snacks", serving: "30 g", calories: 105, protein: 3.5, carbs: 21, fat: 0.3, fiber: 1.5, vitamins: {}, minerals: {"Magnesium":"55 mg", "Potassium":"120 mg"} },
    { id: 93, name: "Peanut Butter", category: "Nuts & Seeds", serving: "2 tbsp (32 g)", calories: 190, protein: 8, carbs: 7, fat: 16, fiber: 2, vitamins: {"Vitamin E":"2.9 mg"}, minerals: {"Magnesium":"54 mg", "Phosphorus":"107 mg"} },
    { id: 94, name: "Bread", category: "Grains", serving: "2 slices (60 g)", calories: 160, protein: 6, carbs: 28, fat: 2.2, fiber: 2, vitamins: {"Folate":"80 mcg"}, minerals: {"Iron":"2 mg", "Sodium":"280 mg"} },
    { id: 95, name: "Vegetable Pulao", category: "Indian", serving: "1 bowl (200 g)", calories: 280, protein: 6, carbs: 47, fat: 8, fiber: 4, vitamins: {}, minerals: {"Iron":"1.8 mg", "Potassium":"250 mg"} }

];


/* =====================================================
   DATA PERSISTENCE + DAILY JOURNAL
===================================================== */

function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

function formatDateKey(key, long = false) {
    const [y, m, d] = key.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-IN", long
        ? { weekday: "long", day: "numeric", month: "long", year: "numeric" }
        : { weekday: "short", day: "numeric", month: "short" }
    );
}

function shiftDateKey(key, amount) {
    const [y, m, d] = key.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    date.setDate(date.getDate() + amount);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function emptyDailyRecord(date = todayKey()) {
    return { date, meals: [], water: 0, sleep: 0 };
}

let viewingDateKey = todayKey();
let dailyData = JSON.parse(localStorage.getItem("nutritionDaily") || "null") || emptyDailyRecord(viewingDateKey);
let historyCache = JSON.parse(localStorage.getItem("nutritionHistory") || "{}") || {};
let weightHistory = JSON.parse(localStorage.getItem("nutritionWeightHistory") || "[]") || [];

if (dailyData.date !== viewingDateKey) dailyData = emptyDailyRecord(viewingDateKey);

let meals = Array.isArray(dailyData.meals) ? dailyData.meals : [];
let profile = JSON.parse(localStorage.getItem("nutritionProfile") || "null") || {
    height: "", weight: "", age: "", goal: "fitness"
};
let waterGlasses = Number(dailyData.water) || 0;
let sleepHours = Number(dailyData.sleep) || 0;

function persistData(key, value) {
    localStorage.setItem(key, value);
    if (typeof window.cloudSaveData === "function") window.cloudSaveData(key, value);
}

function syncDailyState() {
    dailyData = {
        date: todayKey(),
        meals: Array.isArray(meals) ? meals : [],
        water: Number(waterGlasses) || 0,
        sleep: Number(sleepHours) || 0,
        source: "v7"
    };
    viewingDateKey = dailyData.date;
    localStorage.setItem("nutritionDaily", JSON.stringify(dailyData));
    historyCache[dailyData.date] = dailyData;
    localStorage.setItem("nutritionHistory", JSON.stringify(historyCache));
    if (typeof window.cloudSaveData === "function") {
        window.cloudSaveData("nutritionDaily", JSON.stringify(dailyData));
    }
}

function applyDailyRecord(record) {
    dailyData = record && typeof record === "object" ? record : emptyDailyRecord(viewingDateKey);
    if (dailyData.date) viewingDateKey = dailyData.date;
    meals = Array.isArray(dailyData.meals) ? dailyData.meals : [];
    waterGlasses = Number(dailyData.water) || 0;
    sleepHours = Number(dailyData.sleep) || 0;
    historyCache[dailyData.date] = dailyData;
    localStorage.setItem("nutritionHistory", JSON.stringify(historyCache));
    localStorage.setItem("nutritionDaily", JSON.stringify(dailyData));
    updateEverything();
}

window.applyCloudDaily = applyDailyRecord;

function setWeightHistory(value) {
    weightHistory = Array.isArray(value) ? value : [];
    localStorage.setItem("nutritionWeightHistory", JSON.stringify(weightHistory));
}

function recordWeight(value) {
    const weight = Number(value);
    if (!Number.isFinite(weight) || weight <= 0) return;
    const date = todayKey();
    const existing = weightHistory.findIndex(item => item.date === date);
    const entry = { date, weight };
    if (existing >= 0) weightHistory[existing] = entry;
    else weightHistory.push(entry);
    weightHistory.sort((a, b) => a.date.localeCompare(b.date));
    setWeightHistory(weightHistory);
    if (typeof window.cloudSaveData === "function") {
        window.cloudSaveData("nutritionWeightHistory", JSON.stringify(weightHistory));
    }
}

window.setWeightHistory = setWeightHistory;

function ensureCurrentDay() {
    const current = todayKey();

    // Never destroy a day that the user is viewing.
    // If the user is browsing history, leave that historical record untouched.
    if (viewingDateKey !== current) return false;

    if (dailyData && dailyData.date === current) return false;

    dailyData = emptyDailyRecord(current);
    dailyData.source = "v7";
    meals = [];
    waterGlasses = 0;
    sleepHours = 0;
    historyCache[current] = dailyData;
    localStorage.setItem("nutritionDaily", JSON.stringify(dailyData));
    localStorage.setItem("nutritionHistory", JSON.stringify(historyCache));
    return true;
}

function saveCurrentDay() {
    if (viewingDateKey !== todayKey()) return;
    syncDailyState();
}

function currentDayOnly(action) {
    if (viewingDateKey !== todayKey()) {
        const msg = document.getElementById("meal-date-label");
        if (msg) msg.textContent = `${formatDateKey(viewingDateKey)} · view only`;
        return false;
    }
    action();
    return true;
}

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

    button.addEventListener(
        "click",
        () => {

            showPage(
                button.dataset.page
            );

        }
    );

});


document
    .querySelectorAll("[data-page]")
    .forEach(button => {

        if (
            button.classList.contains(
                "nav-item"
            )
        ) {

            return;

        }


        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.page
                );

            }
        );

    });


function showPage(pageName) {

    pages.forEach(page => {

        page.classList.remove(
            "active-page"
        );

    });


    const selectedPage =
        document.getElementById(
            pageName
        );


    if (selectedPage) {

        selectedPage.classList.add(
            "active-page"
        );

    }


    navItems.forEach(item => {

        item.classList.remove(
            "active"
        );


        if (
            item.dataset.page ===
            pageName
        ) {

            item.classList.add(
                "active"
            );

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
        labels[pageName] ||
        "NUTRITION PLANNER";


    updateEverything();

}


/* =====================================================
   DATE
===================================================== */

function updateDate() {

    const today =
        new Date();


    const formatted =
        today.toLocaleDateString(
            "en-IN",
            {

                weekday: "long",
                day: "numeric",
                month: "long",
                year: "numeric"

            }
        );


    document.getElementById(
        "current-date"
    ).textContent =
        formatted;

}


/* =====================================================
   PROFILE
===================================================== */

function loadProfile() {

    document.getElementById(
        "height-input"
    ).value =
        profile.height;


    document.getElementById(
        "weight-input"
    ).value =
        profile.weight;


    document.getElementById(
        "age-input"
    ).value =
        profile.age;


    document.getElementById(
        "goal-input"
    ).value =
        profile.goal;

}


document
    .getElementById("save-profile")
    .addEventListener(
        "click",
        async () => {
            profile.height = document.getElementById("height-input").value;
            profile.weight = document.getElementById("weight-input").value;
            profile.age = document.getElementById("age-input").value;
            profile.goal = document.getElementById("goal-input").value;

            const messageEl = document.getElementById("profile-message");
            const saveButton = document.getElementById("save-profile");
            if (saveButton) saveButton.disabled = true;
            if (messageEl) messageEl.textContent = "Saving profile...";

            localStorage.setItem("nutritionProfile", JSON.stringify(profile));

            try {
                if (typeof window.cloudSaveData === "function") {
                    // Wait for DynamoDB save before telling the user it is saved.
                    await window.cloudSaveData("nutritionProfile", JSON.stringify(profile));
                }
                recordWeight(profile.weight);
                updateEverything();
                loadProfile();
                if (messageEl) messageEl.textContent = "Profile saved successfully.";
            } catch (error) {
                console.error("Profile cloud save failed:", error);
                if (messageEl) messageEl.textContent = "Profile could not be saved to the cloud.";
            } finally {
                if (saveButton) saveButton.disabled = false;
            }
        }
    );

function updateGoalDisplays() {

    const goal =
        goals[profile.goal] ||
        goals.fitness;


    document.getElementById(
        "goal-display"
    ).textContent =
        goal.name;


    document.getElementById(
        "planner-goal"
    ).textContent =
        goal.name;


    document.getElementById(
        "progress-goal"
    ).textContent =
        goal.name;

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

        totals.calories +=
            Number(meal.calories) || 0;

        totals.protein +=
            Number(meal.protein) || 0;

        totals.carbs +=
            Number(meal.carbs) || 0;

        totals.fat +=
            Number(meal.fat) || 0;

    });


    totals.calories =
        Math.round(
            totals.calories
        );


    totals.protein =
        Math.round(
            totals.protein * 10
        ) / 10;


    totals.carbs =
        Math.round(
            totals.carbs * 10
        ) / 10;


    totals.fat =
        Math.round(
            totals.fat * 10
        ) / 10;


    return totals;

}


/* =====================================================
   OVERVIEW
===================================================== */

function updateOverview() {

    const totals =
        calculateTotals();


    const goal =
        goals[profile.goal] ||
        goals.fitness;


    document.getElementById(
        "total-calories"
    ).textContent =
        totals.calories;


    document.getElementById(
        "total-protein"
    ).textContent =
        totals.protein;


    document.getElementById(
        "total-carbs"
    ).textContent =
        totals.carbs;


    document.getElementById(
        "water-total"
    ).textContent =
        waterGlasses;


    document.getElementById(
        "calorie-target"
    ).textContent =
        goal.calories;


    document.getElementById(
        "protein-target"
    ).textContent =
        goal.protein;


    document.getElementById(
        "carbs-target"
    ).textContent =
        goal.carbs;


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


    document.getElementById(
        "overview-water"
    ).textContent =
        `${waterGlasses} / 8`;


    document.getElementById(
        "overview-sleep"
    ).textContent =
        sleepHours > 0
            ? sleepHours
            : "—";


    document.getElementById(
        "overview-weight"
    ).textContent =
        profile.weight ||
        "—";


    renderOverviewMeals();

    updateInsight(
        totals,
        goal
    );

}


function updateMetric(
    name,
    value,
    target
) {

    const percentage =
        Math.min(
            Math.round(
                (value / target) * 100
            ),
            100
        );


    document.getElementById(
        `${name}-percent`
    ).textContent =
        `${percentage}%`;


    document.getElementById(
        `${name}-bar`
    ).style.width =
        `${percentage}%`;

}


/* =====================================================
   OVERVIEW MEALS
===================================================== */

function renderOverviewMeals() {

    const container =
        document.getElementById(
            "overview-meals"
        );


    if (meals.length === 0) {

        container.innerHTML = `

            <div style="
                padding:20px 0;
                color:#6f7f8a;
                font-size:12px;
            ">

                No meals logged today.

            </div>

        `;

        return;

    }


    container.innerHTML =
        meals
            .slice(-6)
            .map(meal => {

                return `

                    <div class="meal-row">

                        <div>

                            <div class="meal-name">
                                ${meal.name}
                            </div>

                            <div class="meal-meta">

                                ${capitalize(meal.type)}
                                ·
                                ${meal.quantity} serving

                            </div>

                        </div>


                        <div class="meal-kcal">

                            ${Math.round(
                                meal.calories
                            )}
                            kcal

                        </div>

                    </div>

                `;

            })
            .join("");

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
    document.getElementById(
        "food-search"
    );


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
                    .slice(0, 6)
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


        if (
            filtered.length === 0
        ) {

            results.innerHTML = `

                <div style="
                    color:#6f7f8a;
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
        foods.find(
            item =>
                item.id === id
        );


    if (!food) return;


    const detail =
        document.getElementById(
            "food-detail"
        );


    detail.classList.remove(
        "hidden"
    );


    const vitamins =
        Object.entries(
            food.vitamins
        );


    const minerals =
        Object.entries(
            food.minerals
        );


    const micronutrients =
        [...vitamins, ...minerals];


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
                    color:#6f7f8a;
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


        ${
            micronutrients.length > 0

                ?

                `

                    <div class="micronutrients">

                        ${micronutrients
                            .map(
                                ([name, value]) => `

                                <div class="micro-item">

                                    <span>
                                        ${name}
                                    </span>

                                    <strong>
                                        ${value}
                                    </strong>

                                </div>

                            `
                            )
                            .join("")}

                    </div>

                `

                :

                `

                    <p style="
                        color:#6f7f8a;
                        font-size:11px;
                        margin-top:20px;
                    ">

                        Micronutrient details will be
                        expanded in the next version.

                    </p>

                `

        }

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
        foods
            .map(
                food => `

                    <option value="${food.id}">

                        ${food.name}
                        —
                        ${food.serving}

                    </option>

                `
            )
            .join("");

}


/* =====================================================
   OPEN ADD MEAL MODAL
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

    /* Always start with one serving */
    quantityInput.value = 1;


    /* Start with first food */
    foodSelect.selectedIndex = 0;


    modal.classList.remove(
        "hidden"
    );


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

        if (
            event.target === modal
        ) {

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
   OPEN MODAL WITH SELECTED FOOD
===================================================== */

function openMealModalWithFood(id) {

    quantityInput.value = 1;


    foodSelect.value = id;


    modal.classList.remove(
        "hidden"
    );


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
        Number(
            quantityInput.value
        );


    if (
        !quantity ||
        quantity < 1
    ) {

        quantity = 1;

        quantityInput.value =
            1;

    }


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

            if (viewingDateKey !== todayKey()) {
                alert("You can add meals only to today. Use Previous to view history.");
                return;
            }

            const food =
                foods.find(
                    item =>
                        item.id ==
                        foodSelect.value
                );


            if (!food) return;


            const quantity =
                Number(
                    quantityInput.value
                ) || 1;


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


            meals.push(
                meal
            );


            saveCurrentDay();


            closeModal();


            updateEverything();


            showPage(
                "meals"
            );

        }
    );


/* =====================================================
   DELETE MEAL
===================================================== */

function deleteMeal(id) {

    meals =
        meals.filter(
            meal =>
                meal.id !== id
        );


    saveCurrentDay();


    updateEverything();

}


/* =====================================================
   MEALS PAGE
===================================================== */

function updateMealsPage() {

    updateMealDateControls();

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
                    sum +
                    Number(meal.calories),
                0
            );


        totalElement.textContent =
            `${Math.round(
                calories
            )} kcal`;


        if (
            typeMeals.length === 0
        ) {

            container.innerHTML = `

                <div style="
                    padding:16px 0;
                    color:#6f7f8a;
                    font-size:11px;
                ">

                    Nothing logged yet.

                </div>

            `;

            return;

        }


        container.innerHTML =
            typeMeals
                .map(
                    meal => `

                        <div class="logged-food">

                            <div>

                                <div class="logged-food-name">

                                    ${meal.name}

                                </div>

                                <div class="logged-food-details">

                                    ${meal.quantity}
                                    serving ·

                                    ${Math.round(
                                        meal.protein
                                    )}g protein ·

                                    ${Math.round(
                                        meal.carbs
                                    )}g carbs

                                </div>

                            </div>


                            <div style="
                                display:flex;
                                align-items:center;
                                gap:18px;
                            ">

                                <div class="logged-food-kcal">

                                    ${Math.round(
                                        meal.calories
                                    )} kcal

                                </div>


                                <button
                                    class="text-button remove-meal-button"
                                    onclick="deleteMeal(${meal.id})"
                                >

                                    Remove

                                </button>

                            </div>

                        </div>

                    `
                )
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
        recommendedFoods.slice(
            0,
            6
        );


    recommendations.innerHTML =
        recommendedFoods
            .map(
                food => `

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

                `
            )
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


        if (
            i <= waterGlasses
        ) {

            glass.classList.add(
                "filled"
            );

        }


        glass.title =
            `Glass ${i}`;


        glass.addEventListener(
            "click",
            () => {

                waterGlasses =
                    i;


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

    saveCurrentDay();

}


document
    .getElementById("add-water")
    .addEventListener(
        "click",
        () => {

            if (
                waterGlasses < 8
            ) {

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

            if (
                waterGlasses > 0
            ) {

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
                value <= 0 ||
                value > 24
            ) {

                document.getElementById(
                    "sleep-message"
                ).textContent =
                    "Enter a valid number of hours.";

                return;

            }


            sleepHours =
                value;


            saveCurrentDay();


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
    const currentWeight = profile.weight || "—";
    document.getElementById("progress-weight").textContent = currentWeight;
    document.getElementById("meals-logged").textContent = Object.values(historyCache).reduce((sum, day) => sum + (Array.isArray(day.meals) ? day.meals.length : 0), 0) || meals.length;

    const entries = weightHistory.filter(item => Number.isFinite(Number(item.weight)) && Number(item.weight) > 0).slice(-7);
    const line = document.getElementById("weight-line");
    const labels = document.getElementById("chart-labels");
    const note = document.getElementById("progress-note");

    if (entries.length < 2) {
        line.setAttribute("points", "");
        labels.innerHTML = entries.length === 1 ? `<span>${formatDateKey(entries[0].date)}</span>` : "";
        note.textContent = entries.length === 1
            ? "One real measurement recorded. Add another weight on a different day to see your trend."
            : "No weight history yet. Save your weight in Profile to begin a real trend.";
    } else {
        const min = Math.min(...entries.map(e => Number(e.weight)));
        const max = Math.max(...entries.map(e => Number(e.weight)));
        const range = Math.max(1, max - min);
        const points = entries.map((entry, i) => {
            const x = 30 + (i * (740 / (entries.length - 1)));
            const y = 205 - ((Number(entry.weight) - min) / range) * 150;
            return `${x.toFixed(1)},${y.toFixed(1)}`;
        }).join(" ");
        line.setAttribute("points", points);
        labels.innerHTML = entries.map(e => `<span>${formatDateKey(e.date)}</span>`).join("");
        const change = Number(entries[entries.length - 1].weight) - Number(entries[0].weight);
        note.textContent = `Real measurements · ${change >= 0 ? "+" : ""}${change.toFixed(1)} kg change across ${entries.length} recorded points.`;
    }

    const days = Object.values(historyCache).filter(day => day && (day.meals?.length || day.water || day.sleep));
    const trackedDays = days.length;
    const proteinValues = days.map(day => (day.meals || []).reduce((s,m) => s + Number(m.protein || 0), 0));
    const waterValues = days.map(day => Number(day.water || 0));
    const sleepValues = days.map(day => Number(day.sleep || 0)).filter(v => v > 0);
    const avg = arr => arr.length ? (arr.reduce((a,b)=>a+b,0)/arr.length) : null;
    document.getElementById("days-tracked").textContent = trackedDays;
    document.getElementById("average-protein").textContent = avg(proteinValues) === null ? "—" : avg(proteinValues).toFixed(1);
    document.getElementById("average-water").textContent = avg(waterValues) === null ? "—" : avg(waterValues).toFixed(1);
    document.getElementById("average-sleep").textContent = avg(sleepValues) === null ? "—" : avg(sleepValues).toFixed(1);
}

/* =====================================================
   DAILY HISTORY NAVIGATION
===================================================== */

async function loadViewingDate(key) {
    viewingDateKey = key;
    if (key === todayKey()) {
        applyDailyRecord(historyCache[key] || dailyData || emptyDailyRecord(key));
        return;
    }
    try {
        if (historyCache[key]) {
            applyDailyRecord(historyCache[key]);
        } else if (typeof window.cloudGetDaily === "function") {
            const record = await window.cloudGetDaily(key);
            if (record) {
                historyCache[key] = record;
                localStorage.setItem("nutritionHistory", JSON.stringify(historyCache));
            }
            applyDailyRecord(record || emptyDailyRecord(key));
        } else {
            applyDailyRecord(emptyDailyRecord(key));
        }
    } catch (error) {
        console.error("Unable to load day:", error);
        applyDailyRecord(emptyDailyRecord(key));
    }
    updateMealDateControls();
}

function updateMealDateControls() {
    const label = document.getElementById("meal-date-label");
    const previous = document.getElementById("previous-day");
    const next = document.getElementById("next-day");
    if (!label) return;
    const today = todayKey();
    label.textContent = viewingDateKey === today ? "Today · " + formatDateKey(today) : formatDateKey(viewingDateKey);
    if (next) next.disabled = viewingDateKey >= today;
    if (next) next.style.opacity = viewingDateKey >= today ? "0.45" : "1";
}

document.getElementById("previous-day")?.addEventListener("click", () => loadViewingDate(shiftDateKey(viewingDateKey, -1)));
document.getElementById("next-day")?.addEventListener("click", () => {
    const next = shiftDateKey(viewingDateKey, 1);
    if (next <= todayKey()) loadViewingDate(next);
});

/* =====================================================
   GLOBAL UPDATE
===================================================== */

function updateEverything() {

    ensureCurrentDay();
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
updateMealDateControls();


document.getElementById(
    "food-results"
).innerHTML =

    foods
        .slice(0, 6)
        .map(createFoodResult)
        .join("");


updateEverything();