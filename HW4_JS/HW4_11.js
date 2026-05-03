//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// Приклад sum([1,2,10]) //->13

function sum(arr){
    let sm = 0;
    for (const item of arr) {
        sm = sm + item;
    }
    return sm;
}
console.log(sum([3, 4, 5, 6, 7]));