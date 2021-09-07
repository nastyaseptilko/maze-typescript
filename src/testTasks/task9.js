// напиши функцию факториала
// 3! это 1 * 2 * 3 = 6

function factorial(number) {
    let sequenceOfNumbers = [];

    for (let i = 1; i <= number; i++) {
        sequenceOfNumbers.push(i);
    }
    if (sequenceOfNumbers.length !== 0) {
        return sequenceOfNumbers.reduce((pv, cv) => pv * cv);
    } else return 1;
}

console.log(factorial(5));
