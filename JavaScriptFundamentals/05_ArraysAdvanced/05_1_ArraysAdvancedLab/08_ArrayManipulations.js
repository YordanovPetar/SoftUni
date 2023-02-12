function manipulateArrayOfNumbers(input) {
    let arrNumbers = input
        .shift()
        .split(' ')
        .map(Number);

    let commands = input.slice();

    for (let element of commands) {
        let [command, firstNum, index]
            = element.split(' ');

        firstNum = Number(firstNum);
        index = Number(index);

        switch (command) {
            case "Add":
                arrNumbers.push(firstNum);
                break;
            case "Remove":
                arrNumbers = arrNumbers.filter(el => el !== firstNum);
                break;
            case "RemoveAt":
                arrNumbers.splice(firstNum, 1);
                break;
            case "Insert":
                arrNumbers.splice(index, 0, firstNum);
        }
    }

    console.log(arrNumbers.join(' '));
}

manipulateArrayOfNumbers(['6 12 2 65 6 42',
'Add 8',
'Remove 12',
'RemoveAt 3',
'Insert 6 2']
);