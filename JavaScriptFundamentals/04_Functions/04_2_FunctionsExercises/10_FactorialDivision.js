function factorialDivision(firstNum, secondNum) {
    let calculateFactorial = (num) => {
        let factorial = 1;

        for (let i = 1; i <= num; i++) {
            factorial *= i;
        }

        return factorial;
    };

    let divideFactorials = (a , b) => (a / b).toFixed(2);

    let factorialFirstNum = calculateFactorial(firstNum);
    let factorialSecondNum = calculateFactorial(secondNum);
    let dividedFactorials = divideFactorials(factorialFirstNum, factorialSecondNum);
    
    console.log(dividedFactorials);
}

factorialDivision(6, 2);