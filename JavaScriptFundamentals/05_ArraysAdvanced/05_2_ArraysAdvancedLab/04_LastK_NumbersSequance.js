function sumLastKNumbersSequence(n, k) {
    let seq = [1];

    for (let current = 1; current < n; current++) {

        let start = Math.max(0, current - k);
        let end = current - 1;

        let sum = (start, end) => {
            let sumNumbers = 0;

            for (let i = start; i<= end; i++) {
                sumNumbers += seq[i];
            }

            return sumNumbers;
        };

        seq[current] = sum(start, end);
    }

    console.log(seq.join(' '));
}

sumLastKNumbersSequence(8, 2);