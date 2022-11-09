function printBasketballEquipmentExpences(input) {
    let yearlyTax = Number(input[0]);
    let snickersPrice = yearlyTax * 0.60;
    let shirtAndShortsPrice = snickersPrice * 0.80;
    let ballPrice = shirtAndShortsPrice * 0.25;
    let accessories = ballPrice * 0.20;

    let expences = yearlyTax + snickersPrice + shirtAndShortsPrice + ballPrice + accessories;

    console.log(expences);
}

printBasketballEquipmentExpences(["365"]);