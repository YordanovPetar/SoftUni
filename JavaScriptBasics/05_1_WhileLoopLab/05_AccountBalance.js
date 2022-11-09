function printMoneyInBankAccount(input) {
    let index = 0
    let command = input[index];
    let sumMoney = 0;

    while (command !== "NoMoreMoney") {
        let increase = Number(command);

        if (increase < 0) {
            console.log("Invalid operation!");
            break;
        }

        console.log(`Increase: ${increase.toFixed(2)}`);
        sumMoney += increase;

        index++;
        command = input[index];
    }

    console.log(`Total: ${sumMoney.toFixed(2)}`);
}

printMoneyInBankAccount(["120",
"45.55",
"-150"]);