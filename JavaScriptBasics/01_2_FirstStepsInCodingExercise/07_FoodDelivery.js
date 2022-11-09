function printFoodPrice(input) {
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegetarianMenuCount = Number(input[2]);
    let chickenMenuPrice = 10.35;
    let fishMenuPrice = 12.40;
    let vegetarianMenuPrice = 8.15;
    let delivery = 2.50;

    let price = chickenMenuCount * chickenMenuPrice + fishMenuCount * fishMenuPrice + vegetarianMenuCount * vegetarianMenuPrice;
    let dessertPrice = price * 0.20;
    let finalPrice = price + dessertPrice + delivery;

    console.log(finalPrice);
}

printFoodPrice(["2", "4", "3"]);