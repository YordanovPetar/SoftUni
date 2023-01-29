function formatGrade(grade) {
    let score;

    if (grade < 3.00) {
        console.log("Fail (2)");
    } else if (grade >= 3.00 && grade < 3.50) {
        score = "Poor";
    } else if (grade >= 3.50 && grade < 4.50) {
        score = "Good";
    } else if (grade >= 4.50 && grade < 5.50) {
        score = "Very good";
    } else if (grade >= 5.50) {
        score = "Excellent";
    }

    if (grade >= 3.00) {
        console.log(`${score} (${grade.toFixed(2)})`);
    }
}

formatGrade(4.50);
