function printTriangleFrom1ToN(n) {
    for (let i = 1; i <= n; i++) {
        let rowNums = "";

        for (j = 0; j < i; j++) {
            rowNums += i + " ";
        }

        console.log(rowNums);
    }
}

printTriangleFrom1ToN(6);