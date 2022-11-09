function printPercentages(input) {
    let countGroups = Number(input[0]);
    let percetnageUnder5 = 0;
    let percentage6To12 = 0;
    let percentage13To25 = 0;
    let percentage26To40 = 0;
    let percentageAbove41 = 0;
    let sumAllParticipants = 0;

    for (let i = 1; i <= countGroups; i++) {
        let currentGroupMembers = Number(input[i]);
        sumAllParticipants += currentGroupMembers;

        if (currentGroupMembers <= 5) {
            percetnageUnder5 += currentGroupMembers;
        } else if (currentGroupMembers >= 6 && currentGroupMembers <= 12) {
            percentage6To12 += currentGroupMembers;
        } else if (currentGroupMembers >= 13 && currentGroupMembers <= 25) {
            percentage13To25 += currentGroupMembers;
        } else if (currentGroupMembers >= 26 && currentGroupMembers <= 40) {
            percentage26To40 += currentGroupMembers;
        } else if (currentGroupMembers >= 41) {
            percentageAbove41 += currentGroupMembers;
        }
    }

    percetnageUnder5 = percetnageUnder5 / sumAllParticipants * 100;
    percentage6To12 = percentage6To12 / sumAllParticipants * 100;
    percentage13To25 = percentage13To25 / sumAllParticipants * 100;
    percentage26To40 = percentage26To40 / sumAllParticipants * 100;
    percentageAbove41 = percentageAbove41 / sumAllParticipants * 100;

    console.log(`${percetnageUnder5.toFixed(2)}%`);
    console.log(`${percentage6To12.toFixed(2)}%`);
    console.log(`${percentage13To25.toFixed(2)}%`);
    console.log(`${percentage26To40.toFixed(2)}%`);
    console.log(`${percentageAbove41.toFixed(2)}%`);
}

printPercentages(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);