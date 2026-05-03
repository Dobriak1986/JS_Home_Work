
//– створити функцію яка повертає найменьше число з масиву

function minValue (numbers) {
    let min = numbers[0];
    for (const number of numbers) {
        if (number < min) {
            min = number;
        }
    }
    return min;
}
console.log(minValue([-10, 20, 45, 18, -52]))