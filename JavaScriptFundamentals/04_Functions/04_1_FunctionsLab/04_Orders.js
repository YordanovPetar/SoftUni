function totalPrice(product, quantity) {
    let productPrice = 0;

    switch (product) {
        case "coffee":
            productPrice = 1.50;
            break;
        case "water":
            productPrice = 1.00;
            break;
        case "coke":
            productPrice = 1.40;
            break;
        case "snacks":
            productPrice = 2.00;
            break;
    }

    let result = (productPrice * quantity).toFixed(2);

    console.log(result);
}

totalPrice("water", 5);