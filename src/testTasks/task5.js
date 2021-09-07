// Постановка
// Требуется написать функцию, выводящую в консоль числа от 1 до n, где n — это целое число, которая функция принимает в качестве параметра, с такими условиями:
// вывод fizz вместо чисел, кратных 3;
// вывод buzz вместо чисел, кратных 5;
// вывод fizzbuzz вместо чисел, кратных как 3, так и 5.

function fizzbuzz(number) {
    let array = [];
    for (let i = 1; i <= number; i++) {
        if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
            array.push('fizzbuzz');
        } else if (Number.isInteger(i / 3)) {
            array.push('fizz');
        } else if (Number.isInteger(i / 5)) {
            array.push('buzz');
        } else {
            array.push(i);
        }
    }
    return array;
}

console.log(fizzbuzz(5).join('\r\n'));
