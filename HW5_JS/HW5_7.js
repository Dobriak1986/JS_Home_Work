// #0Kxco1edSN
//
// – створити функцію, яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const createList = (text, lichilnyk) => {
    document.write('<ul>');
    for (let i = 0; i < lichilnyk; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
};

createList('привіт', 5)
