function printPlateRotations(bandName, albumName, songName) {
    let songDuration = ((bandName.length * albumName.length) * songName.length) / 2;
    let plateRotations = Math.ceil(songDuration / 2.5);

    console.log(`The plate was rotated ${plateRotations} times.`);
}

printPlateRotations('Black Sabbath', 'Paranoid', 'War Pigs');