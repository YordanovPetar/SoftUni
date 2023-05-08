function printDaysCountInAMonth(month, year) {
    let date = new Date(Date.UTC(year, month, 0)).getDate();

    console.log(date);
}

printDaysCountInAMonth(2, 2021);