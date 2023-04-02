function degustationParty(data) {
    let meals = new Map();
    let unlikedMeals = 0;

    for (let line of data) {
        if (line === "Stop") {
            for (let [guest, meal] of meals) {
                console.log(`${guest}: ${meal.join(", ")}`);
            }
        
            console.log(`Unliked meals: ${unlikedMeals}`);

            return;
        }

        let tokens = line.split("-");
        let command = tokens[0];
        let name = tokens[1];
        let meal = tokens[2];

        switch (command) {
            case "Like":
                if (!meals.get(name)) {
                    meals.set(name, []);
                }

                if (!meals.get(name).includes(meal)) {
                    meals.get(name).push(meal);
                }
                break;
            case "Dislike":
                if (!meals.get(name)) {
                    console.log(`${name} is not at the party.`);
                } else {
                    if (!meals.get(name).includes(meal)) {
                        console.log(`${name} doesn't have the ${meal} in his/her collection.`);
                    } else {
                        console.log(`${name} doesn't like the ${meal}.`);
                        let removedMealArr = meals.get(name).filter(el => el !== meal);
                        meals.set(name, removedMealArr);
                        unlikedMeals++;
                    }
                }
                break;
        }
    }
}

degustationParty([
    "Dislike-Misho-salad",
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Krisi-potatoes",
    "Like-Misho-salad",
    "Dislike-Misho-pizza",
    "Dislike-Vili-carp",
    "Like-Krisi-pizza",
    "Dislike-Krisi-soup",
    "Dislike-Krisi-soup",
    "Like-Misho-salad",
    "Like-Misho-pizza",
    "Stop"
]);

// console.log('--------------------');

// degustationParty([
//     "Like-Krisi-shrimps",
//     "Dislike-Vili-carp",
//     "Dislike-Krisi-salad",
//     "Stop"
// ]);

// console.log('--------------------');

// degustationParty([
//     "Like-Katy-fish",
//     "Dislike-Katy-fish",
//     "Stop"
// ]);