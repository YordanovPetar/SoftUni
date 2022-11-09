function printIsOscarWon(input) {
    let actorName = input[0];
    let score = Number(input[1]);
    let countJuryMembers = Number(input[2]);

    for (let i = 1; i <= countJuryMembers * 2; i += 2) {
        let juryMemberName = input[2 + i];
        let currentScore = Number(input[3 + i]);
        score += (juryMemberName.length * currentScore) / 2;

        if (score >= 1250.5) {
            break;
        }
    }

    score >= 1250.5 ?
        console.log(`Congratulations, ${actorName} got a nominee for leading role with ${score.toFixed(1)}!`) :
        console.log(`Sorry, ${actorName} you need ${(1250.5 - score).toFixed(1)} more!`);
}

printIsOscarWon(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"]);