// #bolvdlhP
//
//  описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу
//
// Після опису, використовуючи функції масивів:
//
//  - знайти піковий туз
//
//  - всі шістки
//
//  - всі червоні карти
//
//  - всі буби
//
//  - всі трефи від 9 та більше
//
//

let suits = ['spade', 'diamond', 'heart', 'clubs'];

let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

const deck = [];

for (const suit of suits) {
    for (const val of values) {
        let cardColor = (suit === 'heart' || suit === 'diamond') ? 'red' : 'black';
        deck.push({
            cardSuit: suit,
            value:val,
            color: cardColor,
        })

    }

}
console.log(deck);

const peakAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
console.log(peakAce);

const allSixs = deck.filter(card => card.value === '6');
console.log(allSixs);

const allRed = deck.filter(card => card.color === 'red');
console.log(allRed);

const allDiamond = deck.filter(card => card.cardSuit === 'diamond');
console.log(allDiamond);

const cardClubs = deck.filter(card => card.cardSuit === 'clubs' && ['9', 'jack', 'queen', 'king', 'ace'].includes(card.value));
console.log(cardClubs);

const cardGroup = deck.reduce((acc, card) => {acc[card.cardSuit].push(card);
    return acc;
}, {
    spade: [],
    diamond: [],
    heart: [],
    clubs: []
});
console.log(cardGroup);
