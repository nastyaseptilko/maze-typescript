// Поиск гласных
// Достаточно простая задача, которая часто попадается на собеседованиях.
// Постановка
// Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
// Гласными являются «a», «e», «i», «o», «u».

function findVowels(string) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let numberVowel = 0;
    const strings = string.split('');

    strings.forEach(str => {
        vowels.forEach(vowel => {
            if (str === vowel) {
                numberVowel++;
            }
        });
    });
    return numberVowel;
}

console.log(findVowels('hello'));
console.log(findVowels('why'));
