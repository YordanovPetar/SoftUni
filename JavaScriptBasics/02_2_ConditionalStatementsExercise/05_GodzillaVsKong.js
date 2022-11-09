function isSavingsEnough(input) {
    let filmBudget = Number(input[0]);
    let countStatists = Number(input[1]);
    let priceForClothesOneStatist = Number(input[2]);

    let expencesForStatists = countStatists * priceForClothesOneStatist;

    let decorPrice = filmBudget * 0.10;
    
    if (countStatists > 150) {
        expencesForStatists = expencesForStatists * 0.90;
    }

    let finalPrice = decorPrice + expencesForStatists;

    if  (finalPrice > filmBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalPrice - filmBudget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(filmBudget - finalPrice).toFixed(2)} leva left.`);
    }
}

isSavingsEnough(["15437.62", "186", "57.99"]);