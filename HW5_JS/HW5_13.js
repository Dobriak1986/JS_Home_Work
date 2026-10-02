// – Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:’USD’,value:40},{currency:’EUR’,value:42}],’USD’) // => 250


const exchange = ( sumUAH, currencyValues, exchangeCurrency) => {
    for (let excValue of currencyValues) {
        if ( excValue.currency === exchangeCurrency) {
            let result = sumUAH / excValue.value;
            return result;
        }

    }
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'));