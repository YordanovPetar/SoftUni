function printHotelExpences(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let score = input[2];

    let nights = days - 1; // nigths are with 1 less than the days
    let hotelPrice = 0;

    switch (roomType) {
        case "room for one person":
            hotelPrice = nights * 18.00;
            break;
        case "apartment":
            hotelPrice = nights * 25.00;
            break;
        case "president apartment":
            hotelPrice = nights * 35.00;
            break;
    }

    let discount = 0;

    if (days < 10) {
        if (roomType === "apartment") discount = 0.30;
        else if (roomType === "president apartment") discount = 0.10;
    } else if (days >= 10 && days <= 15) {
        if (roomType === "apartment") discount = 0.35;
        else if (roomType === "president apartment") discount = 0.15;
    } else {
        if (roomType === "apartment") discount = 0.50;
        else if (roomType === "president apartment") discount = 0.20;
    }

    hotelPrice = hotelPrice - (hotelPrice * discount);

    if (score === "positive") hotelPrice += hotelPrice * 0.25;
    else if (score === "negative") hotelPrice -= hotelPrice * 0.10;

    console.log(hotelPrice.toFixed(2));
}

printHotelExpences(["30",
"president apartment",
"negative"]);