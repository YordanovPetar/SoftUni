function printReSourcesAndQuantities(input) {
    let minedResources = new Map();

    for (let i = 0; i < input.length - 1; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);

        if (!minedResources.has(resource)) {
            minedResources.set(resource, 0);
        }

        minedResources.set(resource, minedResources.get(resource) + quantity);
    }

    for (let [resource, quantity] of minedResources) {
        console.log(`${resource} -> ${quantity}`);
    }
}

printReSourcesAndQuantities([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);

console.log("---------------");

printReSourcesAndQuantities([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);