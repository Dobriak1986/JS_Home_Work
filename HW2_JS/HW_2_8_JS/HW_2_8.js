// – У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину (декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt(`enter a day`)
if (day >= 1 && day <= 10)
{
    console.log(`decade 1`)
}
else if (day >= 11 && day<=20) {
    console.log(`decade 2`)
}
else if (day >= 21 && day<=31)
{
    console.log(`decade 3`)
}

