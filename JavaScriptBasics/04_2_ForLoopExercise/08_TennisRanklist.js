function printSeasonPoints(input) {
    let countCompetitions = Number(input[0]);
    let initialPoints = Number(input[1]);
    let pointsFromCompetitions = 0;
    let percentageWonCompetitions = 0;

    for (let i = 0; i < countCompetitions; i++) {
        let currentCompetition = input[i + 2];

        switch (currentCompetition) {
            case "W": pointsFromCompetitions += 2000; 
                percentageWonCompetitions++; break;
            case "F": pointsFromCompetitions += 1200; break;
            case "SF": pointsFromCompetitions += 720; break;
        }
    }

    console.log(`Final points: ${initialPoints + pointsFromCompetitions}`);
    console.log(`Average points: ${Math.floor(pointsFromCompetitions / countCompetitions)}`);
    console.log(`${(percentageWonCompetitions / countCompetitions * 100).toFixed(2)}%`);
}

printSeasonPoints(["5",
"1400",
"F",
"SF",
"W",
"W",
"SF"]);