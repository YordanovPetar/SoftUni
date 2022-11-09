function printFreeApartmentSpace(input) {
    let brightFreeSpace = Number(input[0]);
    let lengthFreeSpace = Number(input[1]);
    let heightFreeSpace = Number(input[2]);
    let index = 3;
    let command = input[index];
    let leftFreeSpace = brightFreeSpace * lengthFreeSpace * heightFreeSpace;


    while (command !== "Done" && leftFreeSpace > 0) {
        let countBoxes = Number(command);
        leftFreeSpace -= countBoxes;

        index++;
        command = input[index];
    }

    if (leftFreeSpace >= 0) {
        console.log(`${leftFreeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${Math.abs(leftFreeSpace)} Cubic meters more.`);
    }
}

printFreeApartmentSpace(["10", 
"1",
"2",
"4", 
"6",
"Done"]);