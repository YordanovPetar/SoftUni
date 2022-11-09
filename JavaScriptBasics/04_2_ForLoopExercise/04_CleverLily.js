function printIsSavingsEnough(input) {
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let oneToyPrice = Number(input[2]);

    let sumToys = 0;
    let sumMoney = 0;
    let countYearsSavingMoney = 1;

    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            sumMoney += (10 * countYearsSavingMoney) - 1;
            countYearsSavingMoney++;
        } else {
            sumToys += 1;
        }
    }

    let savedMoney = sumMoney + (sumToys * oneToyPrice);
    let diff = Math.abs(savedMoney - washingMachinePrice).toFixed(2);

    savedMoney >= washingMachinePrice ?
        console.log(`Yes! ${diff}`) :
        console.log(`No! ${diff}`);
}

printIsSavingsEnough(["21", "1570.98", "3"]);