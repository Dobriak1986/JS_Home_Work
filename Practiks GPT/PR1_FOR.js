// Умова:
//
//     Створи цикл for, який:
//
//     виведе в консоль числа від 0 до 9
//
// кожне число — з нового рядка
for (let i = 0; i < 10; i++) {
    console.log(i)
}

// Умова:
//
//     Є масив чисел:
//
//     let numbers = [2, 5, 8, 3, 10, 7];
//
//
// Використовуючи цикл for:
//
// перебери масив
//
// виведи в консоль тільки ті числа, які більші за 5

let numbers = [2, 5, 8, 3, 10, 7];
for (let i = 0; i < numbers.length; i++)
    if (numbers[i] > 5){
    console.log(numbers[i])
}

// Є масив курсів:
//
//     let courses = [
//         { title: 'JavaScript', monthDuration: 5 },
//         { title: 'Java', monthDuration: 6 },
//         { title: 'Python', monthDuration: 4 },
//         { title: 'QA', monthDuration: 3 },
//     ];
// Потрібно:
//
//     за допомогою циклу for
//
//     перевірити кожен курс
//
// якщо monthDuration >= 5 — вивести в консоль назву курсу

let courses = [
        { title: 'JavaScript', monthDuration: 5 },
        { title: 'Java', monthDuration: 6 },
        { title: 'Python', monthDuration: 4 },
        { title: 'QA', monthDuration: 3 },
    ];

for (let i = 0; i < courses.length; i++) {
    const cour = courses[i];
        if (cour.monthDuration >= 5)
    console.log(cour.title);

}
