// Напишите функцию, которая на вход принимает массив из студентов,
// где студент — это объект с полями «имя», «возраст» и «номер группы» {name: string, age: number, groupId: number},
// а на выходе возвращает объект, где ключ — это номер группы, а значение — массив из студентов старше 17 лет.
const MAX_AGE = 17;

function filterStudent(students) {
    const obj = {};
    const studentsOlderOfMaximumAge = [];

    students.forEach(student => {
        if (student.age >= MAX_AGE) {
            studentsOlderOfMaximumAge.push(student);
            obj[student.groupId] = studentsOlderOfMaximumAge.filter(
                studentOlderOfMaximumAge => studentOlderOfMaximumAge.groupId === student.groupId,
            );
        }
    });
    return obj;
}

console.log(
    filterStudent([
        { name: 'Ivan', age: 16, groupId: 1 },
        { name: 'Via', age: 17, groupId: 1 },
        { name: 'Ira', age: 18, groupId: 2 },
        { name: 'Leora', age: 19, groupId: 2 },
        { name: 'Igor', age: 13, groupId: 2 },
    ]),
);
