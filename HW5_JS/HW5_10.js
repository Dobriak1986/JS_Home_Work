//– створити функцію яка повертає найменьше число з масиву

//– створити функцію яка повертає найменьше число з масиву

const minValue = (array) => {
    let min = array[0];
    for (let minimum of array) {
        if (minimum < min) {
            min = minimum;
        }
    }
    return min;
};
console.log(minValue([1,2,3,4,5]));




