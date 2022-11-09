function printSoldTickets(input) {
    let index = 0;
    let command = input[index];
    let totalSoldTickets = 0;
    let countStudentTickets = 0;
    let countStandardTickets = 0;
    let countKidsTickets = 0;

    while (command !== "Finish") {
        let movie = command;
        let freeSeats = input[index + 1];
        let nextLine = input[index + 2];
        index += 3;
        let countCurrentMovieStudentTickets = 0;
        let countCurrentMovieStandardTickets = 0;
        let countCurrentMovieKidsTickets = 0;
        let currentSoldTickets = 0;

        while (nextLine !== "End" && nextLine !== "Finish" && currentSoldTickets < freeSeats) {
            currentSoldTickets++;
            let ticketType = nextLine;
            
            switch (ticketType) {
                case "student":
                    countCurrentMovieStudentTickets++;
                    break;
                case "standard":
                    countCurrentMovieStandardTickets++;
                    break;
                case "kid":
                    countCurrentMovieKidsTickets++;
                    break;
            }

            if (currentSoldTickets < freeSeats) {
                nextLine = input[index];
                index++;
            }
        }

        countStudentTickets += countCurrentMovieStudentTickets;
        countStandardTickets += countCurrentMovieStandardTickets;
        countKidsTickets += countCurrentMovieKidsTickets;
        totalSoldTickets += currentSoldTickets;

        let soldCurrentMovieSeats = (countCurrentMovieStudentTickets + countCurrentMovieStandardTickets + countCurrentMovieKidsTickets);
        let percentageCinemaOccupacy = ((soldCurrentMovieSeats / freeSeats) * 100).toFixed(2);

        console.log(`${movie} - ${percentageCinemaOccupacy}% full.`);

        if (nextLine === "Finish") {
            break;
        }

        command = input[index];
    }

    
    let percentageStudentTickets = ((countStudentTickets / totalSoldTickets) * 100).toFixed(2);
    let percentageStandardTickets = ((countStandardTickets / totalSoldTickets) * 100).toFixed(2);
    let percentageKidsTickets = ((countKidsTickets / totalSoldTickets) * 100).toFixed(2);
    
    console.log(`Total tickets: ${totalSoldTickets}`);
    console.log(`${percentageStudentTickets}% student tickets.`);
    console.log(`${percentageStandardTickets}% standard tickets.`);
    console.log(`${percentageKidsTickets}% kids tickets.`);
}

printSoldTickets(["Shutter Island",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Rush",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Deadpool",
"9",
"standard",
"standard",
"standard",
"student",
"student",
"student",
"kid",
"kid",
"kid",
"Finish"]);