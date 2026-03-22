// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function foobar (text, lichilnyk) {
    document.write('<ul>');
    for (i = 0; i < lichilnyk; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write('</ul>');
}
foobar("Hello, World!", 50);