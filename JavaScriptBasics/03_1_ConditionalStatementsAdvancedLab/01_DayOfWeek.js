function printDayOfTheWeek(input) {
    let weekDayNumber = input[0];
    let weekDay = "";

    switch (weekDayNumber) {
        case "1": weekDay = "Monday"; break;
        case "2": weekDay = "Tuesday"; break;
        case "3": weekDay = "Wednesday"; break;
        case "4": weekDay = "Thursday"; break;
        case "5": weekDay = "Friday"; break;
        case "6": weekDay = "Saturday"; break;
        case "7": weekDay = "Sunday"; break;
        default: weekDay = "Error"; break;
    }

    console.log(weekDay);
}

printDayOfTheWeek(["3"]);

