//– створити функцію, яка приймає масив об’єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об’єкту окремий блок.

function listUsers(list){
    for (const listElement of list) {
        document.write(`<div>${listElement.id} ${listElement.name} ${listElement.age}</div>`)

    }
}
listUsers([{id: 12, name: 'misha', age: 42},
{id: 13, name: 'misha1', age: 43},
{id: 14, name: 'misha2', age: 44},
{id: 15, name: 'misha3', age: 45}]);