// Ну просто дана строка из букв а тебе надо вернуть строку в которой будет каждая буква и число повторений
// abccddd
// a1b1c2d3

function countingLetters(string) {
    let map = new Map();
    let result = [];

    for (let i = 0; i < string.length; i++) {
        if (map.has(string[i])) {
            let valueMap = map.get(string[i]);
            valueMap++;
            map.set(string[i], valueMap);
        } else {
            map.set(string[i], 1);
        }
    }
    for (let entry of map) {
        result.push(entry);
    }
    return result.reduce((ac, cv) => ac.concat(cv)).join('');
}

console.log(countingLetters('acbccdddaav'));
