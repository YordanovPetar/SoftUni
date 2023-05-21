function previousDay(year, month, day) {
    const date = new Date(Date.UTC(year, month - 1, day));
    date.setDate(date.getDate() - 1);

    const yy = date.getFullYear();
    const mm = date.getMonth() + 1;
    const dd = date.getDate();
    const output = `${yy}-${mm}-${dd}`;

    console.log(output);
}

// 2016-9-29
previousDay(2016, 9, 30);

// 2015-5-9
previousDay(2015, 5, 10);