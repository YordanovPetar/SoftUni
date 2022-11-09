function printIsFishingTripAffordable(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermanCount = Number(input[2]);

    let boatRentPrice = 0;

    switch (season) {
        case "Spring": boatRentPrice = 3000; break;
        case "Summer":
        case "Autumn": boatRentPrice = 4200; break;
        case "Winter": boatRentPrice = 2600; break;
    }

    let discount = 0;

    if (fishermanCount >= 1 && fishermanCount <= 6) {
        discount = 0.10;
    } else if (fishermanCount >= 7 && fishermanCount <= 11) {
        discount = 0.15;
    } else if (fishermanCount >= 12) {
        discount = 0.25;
    }

    let tripPrice = boatRentPrice - (boatRentPrice * discount);

    if (fishermanCount % 2 === 0 && season != "Autumn") {
        tripPrice = tripPrice - (tripPrice * 0.05);
    }

    budget >= tripPrice ?
    console.log(`Yes! You have ${(budget - tripPrice).toFixed(2)} leva left.`) :
    console.log(`Not enough money! You need ${(tripPrice - budget).toFixed(2)} leva.`);
}

printIsFishingTripAffordable(["2000", "Winter", "13"]);