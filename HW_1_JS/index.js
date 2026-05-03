

//Створити змінні. Присвоїти кожному з них значення: ‘hello’,’owu’,’com’, ‘ua’, 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//Вивести кожну змінну за допомогою: console.log
let a=`hello`
let b=`owu`
let c=`com`
let d=`ua`
let e= 1
let f= 10
let g= -999
let h = 123
let i = 3.14
let j = 2.7
let k = true
let l = false
console.log(a)
console.log(b)
console.log(c)
console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(j)
console.log(k)
console.log(l)


//– Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З’єднати їх в одну змінну person (Не об’єкт, просто за допомогою конкатенації)
let firstName=`Сергій`
let middleName=`Юрійович`
let lastName=`Занько`
let person = firstName + " " + middleName + " " + lastName
console.log(person)

//– За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
// let a = 100; let b = ‘100’; let c = true;
{
    let a = 100
    let b = `100`
    let c = true
    console.log(typeof (a))
    console.log(typeof (b))
    console.log(typeof (c))
}

//Додаткове для тих, хто цікавився prompt`oм
//– За допомогою 3-х різних prompt() отримати 3 слова які являються вашими Імʼям, По-батькові та роками. Та вивести в консоль
{
let userName = prompt("Введіть ім'я")
let lastName = prompt("Введи прізвище")
let Age = prompt("Введіть Ваш вік")
}
