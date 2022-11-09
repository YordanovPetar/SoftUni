function printYardGreeningNeededSum(input) {
    let yardSize = Number(input[0]);
    let pricePerSquareMeter = 7.61;
    
    let price = yardSize * pricePerSquareMeter;
    let discount = price * 0.18;
    let finalPrice = price - discount;
    
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discount} lv.`);
}

printYardGreeningNeededSum(["550"]);