function isVacationAffordable(input) {
    let neededMoneyForVacation = Number(input[0]);
    let availableMoney = Number(input[1]);
    let index = 2;
    let daysSpending = 0;
    let days = 0

    while (availableMoney < neededMoneyForVacation && daysSpending < 5) {
        let command = input[index];
        let currentMoney = Number(input[index + 1]);
        index += 2;
        days++;

        if (command === "spend") {
            daysSpending++;
            availableMoney -= currentMoney;

            if (availableMoney < 0) {
                availableMoney = 0;
            }
        } else if (command === "save") {
            daysSpending = 0;
            availableMoney += currentMoney;
        } else {
            console.log("wrong command");
            return;
        }
    }

    if (availableMoney >= neededMoneyForVacation) {
        console.log(`You saved the money for ${days} days.`);
    } else if (daysSpending === 5) {
        console.log(`You can't save the money.\n${days}`);
    }
}

isVacationAffordable(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"]);