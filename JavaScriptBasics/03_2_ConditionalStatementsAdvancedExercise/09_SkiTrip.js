function printHotelCost(input) {
    let vacationDaysCount = Number(input[0]) - 1;
    let roomType = input[1];
    let score = input[2];

    let roomPricePerNight = 0;
    let discount = 0;

    if (roomType === "room for one person") {
        roomPricePerNight = 18.00;
    } else if (roomType === "apartment") {
        roomPricePerNight = 25.00 ;

        if (vacationDaysCount < 10) discount = 0.30;
        else if (vacationDaysCount >= 10 && vacationDaysCount <= 15) discount = 0.35;
        else if (vacationDaysCount > 15) discount = 0.50;
    } else if (roomType === "president apartment") {
        roomPricePerNight = 35.00;

        if (vacationDaysCount < 10) discount = 0.10;
        else if (vacationDaysCount >= 10 && vacationDaysCount <= 15) discount = 0.15;
        else if (vacationDaysCount > 15) discount = 0.20;
    }

    let hotelPrice = roomPricePerNight * vacationDaysCount;
    hotelPrice = hotelPrice - (hotelPrice * discount);

    if (score === "positive") {
        hotelPrice = hotelPrice + (hotelPrice * 0.25);
    } else if (score === "negative") {
        hotelPrice = hotelPrice - (hotelPrice * 0.10);
    }

    console.log(hotelPrice.toFixed(2));
}

printHotelCost(["12", "room for one person", "positive"]);