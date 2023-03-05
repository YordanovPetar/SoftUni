function buildAWall(buildingSections) {
    let usedConcretePerDay = [];
    let totalBuildingCost = 0;
    
    while (buildingSections.length > 0) {
        buildingSections = buildingSections.map(Number).filter(section => section < 30);
        let usedConcrete = 0;
    
        for (let i = 0; i < buildingSections.length; i++) {
            buildingSections[i]++;
            usedConcrete += 195;
        }

        if (usedConcrete > 0) {
            usedConcretePerDay.push(usedConcrete);
            totalBuildingCost += usedConcrete * 1900;
        }
    }

    console.log(usedConcretePerDay.join(", "));
    console.log(`${totalBuildingCost} pesos`);
}

buildAWall([21, 25, 28]);

console.log("----------");

buildAWall([17]);

console.log("----------");

buildAWall([17, 22, 17, 19, 17]);