function printTripDestinationAndExpences(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let destination;
    let accomodation;
    let expences;

    if (budget <= 100) {
        destination = "Bulgaria";

        if (season === "summer") {
            expences = budget * 0.30;
            accomodation = "Camp";
        } else if (season === "winter") {
            expences = budget * 0.70;
            accomodation = "Hotel";
        }
    } else if (budget > 100 && budget <= 1000) {
        destination = "Balkans";

        if (season === "summer") {
            expences = budget * 0.40;
            accomodation = "Camp";
        } else if (season === "winter") {
            expences = budget * 0.80;
            accomodation = "Hotel";
        }
    } else {
        destination = "Europe";
        expences = budget * 0.90;
        accomodation = "Hotel";
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${expences.toFixed(2)}`);
}

printTripDestinationAndExpences(["75", "winter"]);