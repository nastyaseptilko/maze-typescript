// найти все простые множители
// Простое число — это такое число, которое делится нацело только на единицу и на само себя.
// Например, число 7 простое, потому что его можно разделить только на 1 и 7.
// А число 8 — не простое, потому что у него много делителей: 1, 2, 4 и 8.
//
// Если значение можно получить умножением одних чисел на другие, не считая единицы и самого числа,
// то такие числа называют множителями числа. В нашем примере у числа 8 множители 2 и 4.
// У числа 18 множителей больше — 2, 3, 6 и 9:
// Значит, если мы введём число 18, программа должна выдать в ответ числа 2 и 3

function findPrimeFactors(number) {
    let allFactors = new Set();
    let notPrimeNumbers = new Set();

    for (let i = 2; i < number; i++) {
        if (Number.isInteger(number / i)) {
            allFactors.add(i);
        }
    }

    allFactors.forEach(factor => {
        for (let j = 2; j < factor; j++) {
            if (Number.isInteger(factor / j)) {
                notPrimeNumbers.add(factor);
            }
        }
    });

    return Array.from(allFactors).filter(factor => !notPrimeNumbers.has(factor));
}

console.log(findPrimeFactors(18));
console.log(findPrimeFactors(9));
console.log(findPrimeFactors(21));
