function timeToWalk(steps, stepsInMeters, studentSpeedKM_in_H) {
    const distanceMeters = steps * stepsInMeters;
    const speedMetersSec = studentSpeedKM_in_H / 3.6;
    const rest = Math.floor(distanceMeters / 500) * 60;
    const time = (distanceMeters / speedMetersSec) + rest;
    
    const timeMin = Math.floor(time / 60);
    const timeSec = Math.round(time - timeMin * 60);
    const timeHr = Math.floor(time / 3600);

    const hh = timeHr < 10 ? '0' : '';
    const mm = timeMin < 10 ? '0' : '';
    const ss = timeSec < 10 ? '0' : '';
    const output = `${hh + timeHr}:${mm + timeMin}:${ss + timeSec}`;
    console.log(output);
}

// 4000, 0.60, 5
timeToWalk(4000, 0.60, 5);

// 00:22:35
timeToWalk(2564, 0.70, 5.5);