// checks whether the result of the multiplication numOne * numTwo * numThree is positive or negative
function signCheck(numOne, numTwo, numThree) {
    let sign = (numOne, numTwo, numThree) => {
        let countNegative = 0;

        if (returnSign(numOne) === false) {
            countNegative++;
        }
        
        if (returnSign(numTwo) === false) {
            countNegative++;
        }
        
        if (returnSign(numThree) === false) {
            countNegative++;
        }

        return (countNegative === 1 || countNegative === 3) ? "Negative" : "Positive";
    }

    let returnSign = (n) => n >= 0 ? true : false;

    let result = sign(numOne, numTwo, numThree);

    console.log(result);
}

signCheck(5, 12, -15);
console.log('----------');
signCheck(-6, -12, 14);
console.log('----------');
signCheck(-1, -2, -3);
console.log('----------');
signCheck(-5, 1, 1);
