function printScores(input) {
    let n = Number(input[0]);
    let command = input[1];
    let index = 2;
    let finalAverageScore = 0;
    let countPresentations = 0;

    while (command !== "Finish") {
        let presentation = command;
        let averagePresentationScore = 0;

        for (let i = 0; i < n; i++) {
            let score = Number(input[index]);
            averagePresentationScore += score;
            index++;
        }

        averagePresentationScore = averagePresentationScore / n;
        console.log(`${presentation} - ${averagePresentationScore.toFixed(2)}.`);
        finalAverageScore += Number(averagePresentationScore);

        countPresentations++;
        command = input[index];
        index++;
    }

    finalAverageScore = finalAverageScore / countPresentations;
    console.log(`Student's final assessment is ${finalAverageScore.toFixed(2)}.`);
}

printScores(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);