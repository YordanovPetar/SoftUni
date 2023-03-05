function sortAnArrayBy2Criteria(input) {
    input
        .sort((a, b) => {
            if (a.length === b.length) {
                return a.localeCompare(b);
            }

            return a.length - b.length;
        })
        .map(x => console.log(x));
}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma']);

console.log('----------');

sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);