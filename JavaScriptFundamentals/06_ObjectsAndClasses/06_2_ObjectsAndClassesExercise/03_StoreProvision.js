function storeProvision(store, orderStore) {
    let myStore = {};
    addProduct(store);
    addProduct(orderStore);
    
    for (let product of Object.keys(myStore)) {
        console.log(`${product} -> ${myStore[product]}`);
    }
    
    function addProduct(data) {
        for (let i = 0; i < data.length; i += 2) {
            let name = data[i];
            let quantity = Number(data[i + 1]);

            if (myStore.hasOwnProperty(name)) {
                myStore[name] += quantity;
            } else {
                myStore[name] = quantity;
            }
        }
    }
}

storeProvision(
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);