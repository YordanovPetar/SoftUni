function printRepaintingExpences(input) {
    let neededNylon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let thinner = Number(input[2]);
    let workHours = Number(input[3]);
    let nylonPrice = 1.50;
    let paintPrice = 14.50;
    let thinnerPrice = 5.00;
    let additionalPaint = neededPaint * 0.10;
    let additionalNylon = 2;
    let bagsPrice = 0.40;
    
    let expenses = ((neededNylon + additionalNylon) * nylonPrice) + 
                    ((neededPaint + additionalPaint) * paintPrice) +
                    (thinner * thinnerPrice) + 
                    bagsPrice;

    let pricePerHour = expenses * 0.30;
    let workersPrice = pricePerHour * workHours;
    let finalPrice = expenses + workersPrice;
    
    console.log(finalPrice);
}

printRepaintingExpences(["10", "11", "4", "8"])