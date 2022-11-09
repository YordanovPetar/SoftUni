function isSavingsEnough(input) {
    let tripPrice = Number(input[0]);
    let puzzlesCount = Number(input[1]);
    let speakingDollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let puzzlePrice = 2.60;
    let speakingDollPrice = 3;
    let teddyBearPrice = 4.10;
    let minionPrice = 8.20;
    let truckPrice = 2;
    
    let price = (puzzlesCount * puzzlePrice) + (speakingDollsCount * speakingDollPrice) + (teddyBearsCount * teddyBearPrice) + (minionsCount * minionPrice) + (trucksCount * truckPrice);

    let discount = 0;
    if ((puzzlesCount + speakingDollsCount + teddyBearsCount + minionsCount + trucksCount) >= 50) {
        discount = price * 0.25;
        price -= discount;
    }

    let shopRent = 0.10;
    price -= (price * shopRent);

    if (price >= tripPrice) {
        let leftMoney = price - tripPrice;

        console.log(`Yes! ${leftMoney.toFixed(2)} lv left.`);
    } else {
        let moneyNeeded = tripPrice - price;
        console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`);
    }
}

isSavingsEnough(["320", "8", "2", "5", "5", "1"]);