// 11 - #EKRNVPM
// – створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13

const sum = (arr) => {
    let total = 0;
    for ( let number of arr ) {
        total += number;
    }
    return total;
}
console.log(sum([ 7,2,3,4,5])) ;
// test
