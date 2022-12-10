function printExpences(input) {
    let people = Number(input[0]);
    let stays = Number(input[1]);
    let transportCards = Number(input[2]);
    let museumTickets = Number(input[3]);
    let expenxes = ((stays * 20 + transportCards * 1.60 + museumTickets * 6) * people);
    expenxes += expenxes * 0.25;

    console.log(expenxes.toFixed(2));
}

printExpences(["20", "14", "30", "6"]);
