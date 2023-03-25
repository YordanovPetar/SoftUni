function printSortedListOfProducts(inputArr) {
    let sorted = inputArr.sort((a, b) => a.localeCompare(b));

    for (let el of sorted) {
        console.log(`${sorted.indexOf(el) + 1}.${el}`);
    }
}

printSortedListOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);