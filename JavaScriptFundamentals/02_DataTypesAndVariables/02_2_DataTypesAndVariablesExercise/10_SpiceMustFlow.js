function printSpiceTotalAmount(startingYield) {
    let minedDays = 0;
    let totalAmountExtractedSpice = 0;

    while (startingYield >= 100) {
        totalAmountExtractedSpice += startingYield;
        totalAmountExtractedSpice -= 26;
        startingYield -= 10;



        minedDays++;
    }

    if (totalAmountExtractedSpice >= 26) {
        totalAmountExtractedSpice -= 26;
    }

    console.log(minedDays);
    console.log(totalAmountExtractedSpice);
}

printSpiceTotalAmount(450);