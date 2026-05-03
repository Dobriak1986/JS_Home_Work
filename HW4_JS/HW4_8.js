// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write



function homeWork (arrayPrim){
    document.write(`<ul>`)
    for (const arrayPrimElement of arrayPrim) {
        document.write(`<li>${arrayPrimElement}</li>`)

    }
    document.write(`</ul>`);

}
homeWork([147, 258, 369, 'string', 'string 12', true]);