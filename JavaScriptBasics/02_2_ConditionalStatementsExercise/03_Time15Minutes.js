function printHourIn15Minutes(input) {
    let hour = Number(input[0]);
    let minutes = Number(input[1]);

    minutes += 15;

    if (minutes > 59) {
        hour += 1;
        minutes -= 60;
    }

    if (hour > 23) {
        hour -= 24;
    }

    minutes < 10 ? console.log(`${hour}:0${minutes}`) : console.log(`${hour}:${minutes}`);
}

printHourIn15Minutes(["23", "59"]);