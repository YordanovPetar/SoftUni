function printAquariumLitresCapacity(input) {
    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]) / 100;

    let volume = length * width * height;
    let volumeInLitres = volume / 1000;
    let neededLitres = volumeInLitres * (1 - percentage);

    console.log(neededLitres);
}

printAquariumLitresCapacity(["85", "75", "47", "17"]);