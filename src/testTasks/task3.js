// Анаграмма - так называют слово, которое содержит все буквы другого слова в том же количестве, но ином порядке.
// Нужно написать функцию, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения.
// Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

function anagram(firstString, secondString) {
    const firstStringToLowerCase = firstString
        .replace(' ', '')
        .replace(',', '')
        .replace('.', '')
        .toLowerCase()
        .split('');
    const secondStringToLowerCase = secondString
        .replace(' ', '')
        .replace(',', '')
        .replace('.', '')
        .toLowerCase()
        .split('');

    return firstStringToLowerCase.every(
        f =>
            firstStringToLowerCase.length === secondStringToLowerCase.length &&
            secondStringToLowerCase.includes(f),
    );
}

console.log(anagram('finder', 'Friend'));
console.log(anagram('hello', 'bye'));
