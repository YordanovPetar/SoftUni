function isWorldRecordAchieved(input) {
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let swimmingTimeInSecondsForOneMeter = Number(input[2]);

    let delayTime = (Math.floor(distanceInMeters / 15) * 12.5);
    let finalSwimmingTime = ((swimmingTimeInSecondsForOneMeter * distanceInMeters) + delayTime);

    finalSwimmingTime < recordInSeconds ? 
    console.log(`Yes, he succeeded! The new world record is ${finalSwimmingTime.toFixed(2)} seconds.`) : 
    console.log(`No, he failed! He was ${(finalSwimmingTime - recordInSeconds).toFixed(2)} seconds slower.`);
}

isWorldRecordAchieved(["10464", "1500", "20"]);