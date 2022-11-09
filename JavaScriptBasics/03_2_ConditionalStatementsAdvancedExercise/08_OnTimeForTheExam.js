function onTimeForTheExam(input) {
    let examHour = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHour = Number(input[2]);
    let arrivalMinutes = Number(input[3]);
    
    let examTimeInMinutes = (examHour * 60) + examMinutes;
    let arrivalTimeInMinutes = (arrivalHour * 60) + arrivalMinutes;
    let arrivalDifferenceInMinutes = Math.abs(examTimeInMinutes - arrivalTimeInMinutes);
    let hourDifference = Math.trunc(arrivalDifferenceInMinutes / 60);
    let minutesDifference = arrivalDifferenceInMinutes % 60;

    if (arrivalTimeInMinutes >= (examTimeInMinutes - 30) && arrivalTimeInMinutes <= examTimeInMinutes) {
        console.log("On time");

        if (arrivalDifferenceInMinutes > 0) {
            if (hourDifference === 0) {
                console.log(`${minutesDifference} minutes before the start`);
            } else {
                if (minutesDifference < 10) {
                    console.log(`${hourDifference}:0${minutesDifference} hours before the start`);
                } else {
                    console.log(`${hourDifference}:${minutesDifference} hours before the start`);
                }
            }
        }
    } else if (arrivalTimeInMinutes < (examTimeInMinutes - 30)) {
        console.log("Early");

        if (hourDifference === 0) {
            console.log(`${minutesDifference} minutes before the start`);
        } else {
            if (minutesDifference < 10) {
                console.log(`${hourDifference}:0${minutesDifference} hours before the start`);
            } else {
                console.log(`${hourDifference}:${minutesDifference} hours before the start`);
            }
        }
    } else if (arrivalTimeInMinutes > examTimeInMinutes) {
        console.log("Late");

        if (hourDifference === 0) {
            console.log(`${minutesDifference} minutes after the start`);
        } else {
            if (minutesDifference < 10) {
                console.log(`${hourDifference}:0${minutesDifference} hours after the start`);
            } else {
                console.log(`${hourDifference}:${minutesDifference} hours after the start`);
            }
        }
    }

}

onTimeForTheExam(["11", "30", "12", "29"]);