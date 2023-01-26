function printSalesInformation(input) {
    let holidaysOnSea = Number(input[0]);
    let holidaysOnMountain = Number(input[1]);
    let profit = 0;
    let command = input[2];
    index = 3;

    while (command !== "Stop" && (holidaysOnMountain > 0 || holidaysOnSea > 0) && index <= input.length) {
        if (command === "sea" && holidaysOnSea > 0) {
            profit += 680;
            holidaysOnSea--;
        } else if (command === "mountain" && holidaysOnMountain > 0) {
            profit += 499;
            holidaysOnMountain--;
        }

        command = input[index];
        index++;
    }

    if (holidaysOnSea === 0 && holidaysOnMountain === 0) {
        console.log(`Good job! Everything is sold.`);
    }

    console.log(`Profit: ${profit} leva.`);
}

printSalesInformation(["6",
"3",
"sea",
"mountain",
"mountain",
"mountain",
"sea",
"Stop"]);