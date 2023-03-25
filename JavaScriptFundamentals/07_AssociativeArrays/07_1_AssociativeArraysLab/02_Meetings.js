function manageMeetings(input) {
    let successfulMeetings = {};

    input.forEach(el => {
        let [weekday, name] = el.split(' ');
        
        if (successfulMeetings.hasOwnProperty(weekday)) {
            console.log(`Conflict on ${weekday}!`);
        } else {
            successfulMeetings[weekday] = name;
            console.log(`Scheduled for ${weekday}`);
        }
    });

    for (const weekday in successfulMeetings) {
        console.log(`${weekday} -> ${successfulMeetings[weekday]}`);
    }
}

manageMeetings([
    'Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);