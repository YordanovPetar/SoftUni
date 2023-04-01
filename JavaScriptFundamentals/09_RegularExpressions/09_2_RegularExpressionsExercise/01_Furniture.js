function calculateFurnitureCost(input) {
    let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>[0-9.]+)!(?<quantity>\d+)/;
    let totalMoney = 0;
    let boughtFurniture = ['Bought furniture:'];

    for (let line of input) {
        if (line === 'Purchase') {
            break;
        }

        if (pattern.test(line)) {
            let product = pattern.exec(line);
            let price = Number(product.groups.price) * Number(product.groups.quantity);
            totalMoney += price;
            boughtFurniture.push(product.groups.name);
        }
    }
    
    console.log(boughtFurniture.join('\n'));
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

calculateFurnitureCost([
    '>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase'
]);