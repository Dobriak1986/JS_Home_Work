function sayHello(name) {
    let user = (`Привіт, ${name}`
    );
    return user;
}
let u1 = sayHello("Олег");
console.log(u1);

function calc(a,b) {
    let sum = a + b;
    return sum
};
let u2=calc (5,3)
console.log(u2)


//     Моє розуміння
//     let age = +prompt("введіть свій вік");
//     if (age >= 18)
//     {
//     console.log("Доступ дозволено");
//     }
//         else
// {
//     console.log("Доступ заборонено");
//     }

function checkAge(age) {

    if (age >= 18) {
        console.log("Доступ дозволено");
    }

    else {
        console.log("Доступ заборонено");
    }
}

let userAge = +prompt("Введіть свій вік");

checkAge(userAge);