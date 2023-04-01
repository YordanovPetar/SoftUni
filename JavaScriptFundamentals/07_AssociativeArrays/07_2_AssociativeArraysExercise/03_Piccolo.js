function piccolo(input) {
    let parkingList = new Set();

    for (let element of input) {
        let tokens = element.split(', ');
        let direction = tokens[0];
        let carNumber = tokens[1];

        if (direction === 'IN') {
            parkingList.add(carNumber);
        } else if (direction === 'OUT') {
            parkingList.delete(carNumber);
        }
    }

    let sortedEntries = Array.from(parkingList.entries()).sort(([keyA], [keyB]) => {
        return keyA.localeCompare(keyB);
    });

    for (let [key] of sortedEntries) {
        console.log(key);
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);