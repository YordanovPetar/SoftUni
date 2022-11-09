function isThereTimeForMovie(input) {
    let movieName = input[0];
    let movieDuration = Number(input[1]);
    let lunchBreakDuration = Number(input[2]);

    let lunchTime = lunchBreakDuration * 0.125;
    let leasureTime = lunchBreakDuration * 0.25;
    let timeLeftForMovie = lunchBreakDuration - (lunchTime + leasureTime);
    let timeDiff = Math.ceil(Math.abs(movieDuration - timeLeftForMovie));

    timeLeftForMovie >= movieDuration ?
    console.log(`You have enough time to watch ${movieName} and left with ${timeDiff} minutes free time.`) :
    console.log(`You don't have enough time to watch ${movieName}, you need ${timeDiff} more minutes.`);
}

isThereTimeForMovie(["Game of Thrones", "48", "60"]);