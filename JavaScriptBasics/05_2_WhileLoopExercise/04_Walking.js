function printIsStepsTargetAchieved(input) {
    let index = 0;
    let command = input[index];
    let steps = 0;
    let isTargetReached = false;

    while (command !== "Going home") {
        steps += Number(command);
        index++;

        if (steps >= 10000) {
            console.log(`Goal reached! Good job!\n${steps - 10000} steps over the goal!`);
            isTargetReached = true;
            break;
        }

        command = input[index];
    }

    if (isTargetReached === false) {
        index++;
        command = input[index];
        steps += Number(command);

        if (steps >= 10000) {
            console.log(`Goal reached! Good job!\n${steps - 10000} steps over the goal!`);
        } else {
            console.log(`${10000 - steps} more steps to reach goal.`);
        }
    }
}

printIsStepsTargetAchieved(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);