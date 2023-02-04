function loadingBar(num) {
    let createPercentages = (num) => {
        let countPercentages = num / 10;

        return '%'.repeat(countPercentages); 
    };

    let createDots = (num) => {
        let countDots = Math.abs(num - 100) / 10;

        return dots = '.'.repeat(countDots);;
    };

    let printPercentagesAndDots = (num) => {
        let result = '[' + createPercentages(num) + createDots(num) + ']';
        return result;
    };
    
    if (num === 100) {
        console.log(`${num}% Complete!`);
        console.log(printPercentagesAndDots(num));
    } else {
        console.log(`${num}% ` + printPercentagesAndDots(num));
        console.log('Still loading...');
    }
}

loadingBar(50);
console.log('----------');
loadingBar(30);
console.log('----------');
loadingBar(100);
console.log('----------');
loadingBar(0);
