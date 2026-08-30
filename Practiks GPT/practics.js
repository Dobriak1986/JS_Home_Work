// Завдання 1 — привітання
// Створи функцію greet, яка приймає ім'я та повертає:

function greet (name) {
    console.log(`Hello, ${name} `);

}
greet ('Serhii');

// Завдання 2 — квадрат числа
// Створи функцію square, яка приймає число та повертає його квадрат.

function square (number) {
    let sum = number * number;
    console.log(`Square: ${sum}`);
}
square (6);

// Завдання 3 — парне чи непарне
// Створи функцію checkNumber, яка приймає число.

function checkNumber(number) {
    if (number % 2 === 0) {
        console.log("Число парне");
    } else (console.log("Число непарне"));
}
checkNumber(7)

// Завдання 4 — перевірка віку
// Створи функцію checkAge, яка приймає вік.

function checkAge(age) {
    if (age >= 18) {
        console.log("Доступ дозволено")
    }else {
        console.log("Доступ заборонено")
    }
}
checkAge(17)

// Завдання 5 — найбільше з двох чисел
// Створи функцію maxNumber, яка приймає два числа.
//     Функція повинна повернути більше з них.

function maxNumber(a,b){
    if (a > b) {
        console.log(a)
    }else {
        console.log(b)
    }
}
maxNumber(7,13)
