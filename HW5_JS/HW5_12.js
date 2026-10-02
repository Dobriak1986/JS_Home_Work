// – створити функцію swap(arr,index1,index2). Функція міняє місцями значення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

const swap = (array, index1, index2) =>{
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}
console.log(swap([15,12,42,17], 0,1) );
console.log(swap([15,12,42,17], 0,2));