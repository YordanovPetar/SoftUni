function printProjectCreationTime(input) {
    let architect = input[0];
    let numberOfProjects = Number(input[1]);
    let oneProjectNeededTime = 3;

    let timeNeeded = numberOfProjects * oneProjectNeededTime;

    console.log(`The architect ${architect} will need ${timeNeeded} hours to complete ${numberOfProjects} project/s.`);
}

printProjectCreationTime(['George', '4']);