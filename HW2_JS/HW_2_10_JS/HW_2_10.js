// – Користувач вводить або має два числа.
//
// Потрібно знайти та вивести максимальне число з тих двох .
//
// Також потрібно врахувати, коли введені рівні числа.


let a = +prompt('enter the first number')
let b = +prompt('enter the second number')
if (a > b) {
    console.log(a)
}
else if (a < b) {
    console.log(b)
}
else if (a === b) {
    console.log(`=`)
}