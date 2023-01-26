function priintIfSavingsAreEnough(input) {
    let partyPrice = Number(input[0]);
    let countMessages = Number(input[1]);
    let countRoses = Number(input[2]);
    let countKeyholders = Number(input[3]);
    let countPictures = Number(input[4]);
    let countSurprises = Number(input[5]);

    let countProducts = countMessages + countRoses + countKeyholders + countPictures + countSurprises;
    let earnings = countMessages * 0.60 + countRoses * 7.20 + countKeyholders * 3.60 + countPictures * 18.20 + countSurprises * 22;

    if (countProducts >= 25) {
        earnings -= earnings * 0.35;
    }

    earnings -= earnings * 0.10;

    if (earnings >= partyPrice) {
        console.log(`Yes! ${(earnings - partyPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(partyPrice - earnings).toFixed(2)} lv needed.`);
    }
}

priintIfSavingsAreEnough(["320",
"8",
"2",
"5",
"5",
"1"]);