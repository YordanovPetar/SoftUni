function theBiscuitFactory(input) {
    let numberOfBiscuitsPerDayPerWorker = +input[0];
    let countOfWorkers = +input[1];
    let competingFactory30DaysProducedBiscuits = +input[2];
    let producedBiscuitsPerDay = numberOfBiscuitsPerDayPerWorker * countOfWorkers;;
    let producedBiscuitsFor30Days = 0;

    for (let day = 1; day <= 30; day++) {
        if (day % 3 === 0) {
            producedBiscuitsFor30Days += Math.floor(producedBiscuitsPerDay * 0.75);
        } else {
            producedBiscuitsFor30Days += producedBiscuitsPerDay;
        }
        
    }

    console.log(`You have produced ${producedBiscuitsFor30Days} biscuits for the past month.`);

    let diffProducedBuiscuitsInPercentage = ((Math.abs(producedBiscuitsFor30Days - competingFactory30DaysProducedBiscuits) / competingFactory30DaysProducedBiscuits) * 100).toFixed(2);

    producedBiscuitsFor30Days > competingFactory30DaysProducedBiscuits ?
        console.log(`You produce ${diffProducedBuiscuitsInPercentage} percent more biscuits.`) :
        console.log(`You produce ${diffProducedBuiscuitsInPercentage} percent less biscuits.`);
}

theBiscuitFactory(["78",
"8",
"16000"]);

console.log('----------');

theBiscuitFactory(["65",
"12",
"26000"]);

console.log('----------');

theBiscuitFactory(["163",
"16",
"67020"]);