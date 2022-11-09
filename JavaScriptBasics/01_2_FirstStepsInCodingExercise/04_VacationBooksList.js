function readingHoursPerDay(input) {
    let bookPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysToRead = Number(input[2]);

    let sumHoursToReadPerDay = (bookPages / pagesPerHour) / daysToRead;

    console.log(sumHoursToReadPerDay);
}

readingHoursPerDay(["212", "20", "2"]);