function printRequiredMaterialsForBuildingPyramid(base, stepHeight) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let finalPyramidHeight = 0;

    for (let i = base; i > 0; i -= 2) {
        finalPyramidHeight++;
        currentStepStone = ((i - 2) * (i - 2)) * stepHeight;
        currentStepMarble = ((i * 4) - 4) * stepHeight;

        if (i === 1 || i === 2) {
            gold = i * i * stepHeight;
            break;
        } else {
            stone += currentStepStone;
        }

        if (finalPyramidHeight % 5 === 0) {
            lapisLazuli += currentStepMarble;
        } else {
            marble += currentStepMarble;
        }
    }

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalPyramidHeight * stepHeight)}`);
}

printRequiredMaterialsForBuildingPyramid(11, 1);