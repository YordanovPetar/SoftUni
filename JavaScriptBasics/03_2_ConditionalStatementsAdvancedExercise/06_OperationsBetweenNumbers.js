function printCalculation(input) {
  let num1 = Number(input[0]);
  let num2 = Number(input[1]);
  let operator = input[2];

  if (operator === "+" || operator === "-" || operator === "*") {
    let isEven;
    let result;

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
    }

    result % 2 === 0 ? (isEven = "even") : (isEven = "odd");

    console.log(`${num1} ${operator} ${num2} = ${result} - ${isEven}`);
  } else {
    if (num2 === 0) {
      console.log(`Cannot divide ${num1} by zero`);
      return;
    }

    if (operator === "/") {
      console.log(`${num1} / ${num2} = ${(num1 / num2).toFixed(2)}`);
    } else if (operator === "%") {
      console.log(`${num1} % ${num2} = ${num1 % num2}`);
    }
  }
}

printCalculation(["123", "0", "%"]);
