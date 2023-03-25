function printStorageItems(input) {
    let products = new Map();

    input.forEach(element => {
        let tokens = element.split(' ');
        let item = tokens[0];
        let quantity = Number(tokens[1]);

        if (products.has(item)) {
            let currentQuantity = products.get(item);
            products.set(item, currentQuantity + quantity);
        } else {
            products.set(item, quantity);
        }

    });

    for (let [key, value] of products) {
        console.log(`${key} -> ${value}`);
    }
}

printStorageItems([
    'tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);