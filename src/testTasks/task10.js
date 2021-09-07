// Напишите функцию, которая будет проходить через массив целых чисел и выводить индекс каждого элемента с задержкой в 3 секунды.

function outputIndex(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        setTimeout(() => {
            console.log(i);
        }, 3000 * (i + 1));
    }
}

outputIndex([10, 3, 42, 2]);
