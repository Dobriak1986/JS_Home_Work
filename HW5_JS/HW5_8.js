// #gEFoxMMO
//
// – створити функцію, яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список

const homeWork = (arrayPrim) => {
    document.write(`<ul>`)
    for (const arrayPrimElement of arrayPrim) {
        document.write(`<li>${arrayPrimElement}</li>`)

    }
    document.write(`</ul>`); }

homeWork([1,7,15, `hello`, true,15])
