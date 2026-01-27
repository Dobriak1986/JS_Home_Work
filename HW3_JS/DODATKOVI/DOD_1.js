// #WpkK0ZH1
// –створити масив з:
// – з 5 числових значень
// – з 5 стічкових значень
// – з 5 значень стрічкового, числового та булевого типу
// – та вивести його в консоль

// Відповідь:
// let numArr = [ 5, 13, 28, 42, 97];
//     console.log(numArr)
// let strArr = ["погода", "карта", "потяг", "дитинство", "сім'я"];
// console.log(strArr);
// let allArr = [3,17,54,123,456, "навчання", "мрії", "прогулянка", "мистецтво", "подорож", true, false, NaN, undefined, null];
// console.log(allArr);

// #4aDbSgh
// — Створити пустий масив. Наповнити його будь-якими значеннями, звертаючись до конкретного індексу. Вивести в консоль
// Відповідь:
//             let empArray = [1,10,`masyv`];
//                 console.log(empArray[0]);
//                 console.log(empArray[1]);
//                 console.log(empArray[2]);

// #qLQLJSeN7i
// – є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число, кратне 3, на слово “okten”
// 8. вивести масив у зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)

// Відповідь:
// 1:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < qLQLJSeN7iArr.length) {
//     console.log(qLQLJSeN7iArr[i]);
//     i++
// }

//2:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < qLQLJSeN7iArr.length; i++) {
//     console.log(qLQLJSeN7iArr[i]);
// }

//3:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < qLQLJSeN7iArr.length) {
//     if (i % 2 !== 0) {
//         console.log(qLQLJSeN7iArr[i])
//
//     }
//     i++
// }

//4:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
//     for (let i = 0; i < qLQLJSeN7iArr.length; i++)
//         if (i % 2 !== 0) {
//     console.log(qLQLJSeN7iArr[i]);
// }
//5:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
// let i = 0;
// while (i < qLQLJSeN7iArr.length) {
//     if (i % 2 === 0) {
//         console.log(qLQLJSeN7iArr[i])
//     }
//     i++
// }

//6:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
// for (let i = 0; i < qLQLJSeN7iArr.length; i++)
//     if (i % 2 === 0) {
//         console.log(qLQLJSeN7iArr[i]);
//     }

//7:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
// let octenString = "октен"
// for (let i = 0; i < qLQLJSeN7iArr.length ; i++) {
//     if ((i + 1) % 3 === 0) {
//         qLQLJSeN7iArr[i] = octenString;
//     }
// }
// console.log (qLQLJSeN7iArr)

//8:
// let qLQLJSeN7iArr = [2,17,13,6,22,31,45,66,100,-18];
// qLQLJSeN7iArr.reverse();
// console.log(qLQLJSeN7iArr);


// #yHAwJOyiC
// – Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < newArray.length; i++) {
//     console.log(newArray[i]);
// }

//     #GamKju89ob
// – Створити масив з 10 строкових елементів. Вивести в консоль всі його елементи в циклі.
// let stringArray = ["рядок 1", "рядок 2", "рядок 3", "рядок 4", "рядок 5", "рядок 6", "рядок 7", "рядок 8", "рядок 9", "рядок 10"];
// for (let i = 0; i < stringArray.length; i++) {
//    console.log(stringArray[i]);
//
// }

//     #Bm76xmg
// – Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let allArray = [3, 4, 5, 6, 7, 8, "рядок 2", "рядок 3", "рядок 4", "рядок 5", "рядок 6", false, true];
// for (let i = 0; i < allArray.length; i++) {
//     console.log(allArray[i]);
// }


//     #u3vmD0YJXh
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let allArray = [3, 4, 5, 6, 7, 8, "рядок 2", "рядок 3", "рядок 4", "рядок 5", "рядок 6", false, true];
//     for (let i = 0; i < allArray.length; i++) {
//         if (typeof allArray[i] === 'boolean') {
//             console.log(allArray[i]);
//         }
//     }
//

// #9stMq2ou
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let allArray = [3, 4, 5, 6, 7, 8, "рядок 2", "рядок 3", "рядок 4", "рядок 5", "рядок 6", false, true];
//     for (let i = 0; i < allArray.length; i++) {
//         if (typeof allArray[i] === 'number') {
//             console.log(allArray[i]);
//         }
//     }

// #mK4pmM4
// – Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let allArray = [3, 4, 5, 6, 7, 8, "рядок 2", "рядок 3", "рядок 4", "рядок 5", "рядок 6", false, true];
//     for (let i = 0; i < allArray.length; i++) {
//         if (typeof allArray[i] === 'string') {
//             console.log(allArray[i]);
//         }
//     }

// #0pm3EyTKy9
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let empArr = [];
// empArr.push(13);
// empArr.push(14);
// empArr.push(45);
// empArr.push("рядок");
// empArr.push("рядок 1");
// empArr.push("рядок 2");
// empArr.push("рядок 3");
// empArr.push("рядок 4");
// empArr.push(true);
// empArr.push(false);
// for (i = 0; i < empArr.length; i++) {
//     console.log(empArr[i]);
// }
//     #mDMWMW5a
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// #4sXhaa5YMM
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i++) {
//     console.log(i);
//     document.write(i + " ");
// }

// #s24slNyz7
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// for (let i = 1; i <= 100; i += 2) {
//     console.log(i);
//     document.write(i + " ");
// }


// #zananT5FR1
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         document.write(i + " ")
//     }
// }
//

// #Tfrwls7FM
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for (i = 0; i < 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//         document.write(i + " ")
//     }
// }

// #reLkOkTB29Q

// створити масив книжок (назва, кількість сторінок, автори , жанри).
// – знайти найбільшу книжку.
// – знайти книжку/ки з найбільшою кількістю жанрів
// – знайти книжку/ки з найдовшою назвою
// – знайти книжку/ки, які писали 2 автори
// – знайти книжку/ки, які писав 1 автор
// Відповідь:
// let books = [
//     {
//         title: "Кобзар",
//         pages: 352,
//         authors: ["Тарас Шевченко"],
//         genres: ["Поезія", "Класика"]
//     },
//     {
//         title: "Тигролови",
//         pages: 320,
//         authors: ["Іван Багряний"],
//         genres: ["Пригоди", "Роман"]
//     },
//     {
//         title: "1984",
//         pages: 328,
//         authors: ["Джордж Орвелл"],
//         genres: ["Антиутопія", "Фантастика"]
//     }
// ];
// let maxPages = books[0].pages;
//
// for (let i = 1; i < books.length; i++) {
//     if (books[i].pages > maxPages) {
//         maxPages = books[i].pages;
//     }
// }
// console.log(maxPages);


// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
// let numbers = [];
// for (let i = 0; i < 50; i++) {
//     numbers.push(i * 2);
// }
// console.log(numbers);
//     b. заповнити його 50 непарними числами за допомоги циклу.
// let numbers = [];
// for (let i = 0; i < 100; i++) {
//     if (i % 2 !== 0)
//     numbers.push (i)
// }
// console.log(numbers);
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
// let randomNumbers = [];
// for (let i = 0; i < 20; i++) {
//     randomNumbers.push(Math.random() * 100);
//     console.log(randomNumbers[i]);
// }

// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let randomNumbers = [];
// for (let i = 0; i < 20; i++) {
//     randomNumbers.push(Math.random(732 - 8) * 100);
//     console.log(randomNumbers[i]);
// }
// 2. Вивести за допомогою console.log кожен третій елемент
// let emplyArr = [];
// for (let i = 0; i < 100; i++ ) {
//     if (i % 3 === 0) {
//         console.log(i);
//     }
// }
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
// let emplyArr = [];
// for (let i = 0; i < 100; i++ ) {
//     if (i % 3 === 0) {
//     else if  (i % 2 === 0) {
//             console.log(i)
//         }
//     }
// }
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.

// – Дано 2 масиви з рівною кількістю об’єктів.
//     Масиви:
// let usersWithId = [
//     {id: 1, name: ‘vasya’, age: 31, status: false},
// {id: 2, name: ‘petya’, age: 30, status: true},
// {id: 3, name: ‘kolya’, age: 29, status: true},
// {id: 4, name: ‘olya’, age: 28, status: false}

// ];

// let citiesWithId = [
//     {user_id: 3, country: ‘USA’, city: ‘Portland’},
// {user_id: 1, country: ‘Ukraine’, city: ‘Ternopil’},
// {user_id: 2, country: ‘Poland’, city: ‘Krakow’},
// {user_id: 4, country: ‘USA’, city: ‘Miami’}

// ];

// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
// Записати цей об’єкт в новий масив
// Example:
//     let usersWithCities = [
//
//         {
//             id: 1, // <===
//             name: ‘vasya’,
// age: 31,
//     status: false,
//     address: {
//     user_id: 1, // <===
//         country: ‘Ukraine’,
//     city: ‘Ternopil’
// }
//
// },
// // TO BE CONTINUED …..
//
// ]

// – Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

// – Взяти масив з 10 чисел або створити його. Створити 2-й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
// – Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.

