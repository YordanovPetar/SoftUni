function printExamScore(input) {
    let index = 0;
    let allowedBadScores = Number(input[index]);
    let countBadScores = 0;
    let sumScores = 0;
    let averageScore = 0;
    let countOfTasks = 0;
    let lastTask = "";


    
    while (allowedBadScores > 0) {
        let taskName = input[index + 1];

        if (taskName === "Enough") {
            console.log(`Average score: ${averageScore}`);
            console.log(`Number of problems: ${countOfTasks}`);
            console.log(`Last problem: ${lastTask}`);
            return;
        }

        let score = Number(input[index + 2]);

        if (score <= 4) {
            countBadScores++;
            allowedBadScores--;
        }

        sumScores += score;
        countOfTasks++;
        averageScore = (sumScores / countOfTasks).toFixed(2);
        lastTask = taskName;

        index += 2;
    }

    console.log(`You need a break, ${countBadScores} poor grades.`);
}

printExamScore(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"]);