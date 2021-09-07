// Ну просто дана строка из букв а тебе надо вернуть строку в которой будет каждая буква и число повторений
// abcaa
// должно быть a1b1c1a2

function countingLetters(inputString) {
    let previousValue = '';
    let result = '';
    let count = 1;
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === previousValue) {
            count++;
            result = result.slice(0, -1) + count;
        } else {
            count = 1;
            result = result + inputString[i] + count;
            previousValue = inputString[i];
        }
    }

    return result;
}

console.log(countingLetters('abbbacaa'));
