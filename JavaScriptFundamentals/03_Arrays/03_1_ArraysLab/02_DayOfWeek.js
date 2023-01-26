function dayOfWeek(day) {
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    (day >= 1 && day <= days.length) ? console.log(days[day - 1]) : console.log("Invalid day!"); 
}

dayOfWeek(8);