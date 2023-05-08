function calcStrLength (str1, str2, str3) {
    let sumAllStrLength = str1.length + str2.length + str3.length;
    let avgLength = Math.floor(sumAllStrLength / 3);

    console.log(sumAllStrLength);
    console.log(avgLength);
}

calcStrLength('chocolate', 'ice cream', 'cake');
