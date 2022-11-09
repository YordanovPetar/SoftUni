function printNeededMoneyToPay(input) {
    let pencils = Number(input[0]);
    let markers = Number(input[1]);
    let litresDeskCleaer = Number(input[2]);
    let percentageDiscount = Number([input[3]]) / 100;
    let pencilsPrice = 5.80;
    let markersPrice = 7.20;
    let deskCleaner = 1.20;

    let price = ((pencils * pencilsPrice) + (markers * markersPrice) + (litresDeskCleaer * deskCleaner));
    let finalPrice = price - (price * percentageDiscount);

    console.log(finalPrice);
}

printNeededMoneyToPay(["2","3","4","25"]);