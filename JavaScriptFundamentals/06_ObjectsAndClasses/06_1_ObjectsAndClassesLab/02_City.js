function printObjectKeysAndValues(obj) {
    for (let key of Object.keys(obj)) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

printObjectKeysAndValues({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
});