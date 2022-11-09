function printIsBudgetEnough(input) {
    let budget = Number(input[0]);
    let videocardsCount = Number(input[1]);
    let processorsCount = Number(input[2]);
    let ramPlatesCount = Number(input[3]);

    let videocardPrice = 250;
    let pruchasedVideocards = videocardsCount * videocardPrice;
    let processorPrice = pruchasedVideocards * 0.35;
    let purchasedProcessors = processorsCount * processorPrice;
    let ramPlatesPrice = pruchasedVideocards * 0.10;
    let purchasedRamPlates = ramPlatesCount * ramPlatesPrice;

    let expences = pruchasedVideocards + purchasedProcessors + purchasedRamPlates;
    if (videocardsCount > processorsCount) expences = expences * 0.85;

    let differenceBetweenBudgedAndExpences = Math.abs(budget - expences).toFixed(2);

    budget >= expences ?
    console.log(`You have ${differenceBetweenBudgedAndExpences} leva left!`) :
    console.log(`Not enough money! You need ${differenceBetweenBudgedAndExpences} leva more!`);
}

printIsBudgetEnough(["920.45", "3", "1", "1"]);