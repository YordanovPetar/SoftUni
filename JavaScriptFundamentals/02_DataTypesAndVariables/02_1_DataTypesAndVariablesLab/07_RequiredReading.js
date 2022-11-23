function printReadingHoursPerDay(bookPages, readPagesPerHour, daysToRead) {
    let totalReadingHours = bookPages / readPagesPerHour;
    let requiredHoursPerDay = totalReadingHours / daysToRead;

    console.log(requiredHoursPerDay );
}

printReadingHoursPerDay(212, 20, 2);