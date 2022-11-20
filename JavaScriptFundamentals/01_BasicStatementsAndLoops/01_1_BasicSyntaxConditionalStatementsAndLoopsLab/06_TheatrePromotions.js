function printTicketPrice(dayType, age) {
    let ticketPrice = 0;

    if (dayType === "Weekday") {
        if (age >= 0 && age <= 18) {
            ticketPrice = 12;
        } else if (age >= 19 && age <= 64) {
            ticketPrice = 18;
        } else if (age >= 65 && age <= 122) {
            ticketPrice = 12;
        }
    } else if (dayType === "Weekend") {
        if (age >= 0 && age <= 18) {
            ticketPrice = 15;
        } else if (age >= 19 && age <= 64) {
            ticketPrice = 20;
        } else if (age >= 65 && age <= 122) {
            ticketPrice = 15;
        }
    } else if (dayType === "Holiday") {
        if (age >= 0 && age <= 18) {
            ticketPrice = 5;
        } else if (age >= 19 && age <= 64) {
            ticketPrice = 12;
        } else if (age >= 65 && age <= 122) {
            ticketPrice = 10;
        }
    }

    if (ticketPrice > 0) {
        console.log(ticketPrice + "$");
    } else {
        console.log("Error!");
    }
}

printTicketPrice("Weekday", 42);