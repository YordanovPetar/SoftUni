function printPercentages(input) {
    let countNumbers = input[0];
    let percentageUnder200 = 0;
    let percentage200To399 = 0;
    let percentage400To599 = 0;
    let percentage600To799 = 0;
    let percentageAbove800 = 0;

    for (let i = 1; i <= countNumbers; i++) {
        let currentNumber = Number(input[i]);

        if (currentNumber < 200) {
            percentageUnder200++;
        } else if (currentNumber >= 200 && currentNumber <= 399) {
            percentage200To399++;
        } else if (currentNumber >= 400 && currentNumber <= 599) {
            percentage400To599++;
        } else if (currentNumber >= 600 && currentNumber <= 799) {
            percentage600To799++;
        } else if (currentNumber >= 800) {
            percentageAbove800++;
        }
    }

    console.log((percentageUnder200 / 7 * 100).toFixed(2));
    console.log((percentage200To399 / 7 * 100).toFixed(2));
    console.log((percentage400To599 / 7 * 100).toFixed(2));
    console.log((percentage600To799 / 7 * 100).toFixed(2));
    console.log((percentage600To799 / 7 * 100).toFixed(2));
    console.log((percentageAbove800 / 7 * 100).toFixed(2));
}

printPercentages(["7", "800", "801", "250", "199", "399", "599", "799"]);