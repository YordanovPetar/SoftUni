function printSumSecondsInMinutes(input) {
    let firstPlayerSeconds = Number(input[0]);
    let secondPlayerSeconds = Number(input[1]);
    let thirdPlayerSeconds = Number(input[2]);

    let seconds = firstPlayerSeconds + secondPlayerSeconds + thirdPlayerSeconds;
    let minutes = Math.floor(seconds / 60);
    let restSeconds = seconds % 60;
    
    restSeconds < 10 ? console.log(`${minutes}:0${restSeconds}`) : console.log(`${minutes}:${restSeconds}`);
}

printSumSecondsInMinutes(["14", "12", "10"]);