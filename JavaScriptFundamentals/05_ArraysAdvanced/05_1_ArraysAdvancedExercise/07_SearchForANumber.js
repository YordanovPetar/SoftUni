function searchForANumber(nums, actions) {
    let countElementsToTake = actions[0];
    let countElementsToDelete = actions[1];
    let numberToSearchFor = actions[2];
    let takenNumbers = nums.slice(0, countElementsToTake);
    takenNumbers.splice(0, countElementsToDelete);

    let countSearchedNum = 0;
    for (let element of takenNumbers) {
        if (element === numberToSearchFor) {
            countSearchedNum++;
        }
    }

    console.log(`Number ${numberToSearchFor} occurs ${countSearchedNum} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);