function printCalculatedPetExpences(input) {
    let dogFoodPackagePrice = 2.5;
    let catFoodPackagePrice = 4;
    let packagesDogFood = Number(input[0]);
    let packagesCatFood = Number(input[1]);

    let sum = (dogFoodPackagePrice * packagesDogFood) + (catFoodPackagePrice * packagesCatFood);

    console.log(`${sum} lv.`);
}

printCalculatedPetExpences(["5", "4"]);