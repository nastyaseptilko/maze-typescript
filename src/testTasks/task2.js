// Напишите функцию, которая на вход принимает строку, состоящую из букв нижнего регистра,
// а на выход возвращает boolean, который отвечает, является ли данная строка палиндромом или нет.
//   Палиндром — слово или текст, одинаково читающееся в обоих направлениях.

function filterString(string) {
    const stringToLowerCase = string.toLowerCase();
    const upsideDownString = stringToLowerCase.split('').reduce((acc, cv) => cv + acc);
    return stringToLowerCase === upsideDownString;
}

console.log(filterString('leVel'));
console.log(filterString('dasr'));
