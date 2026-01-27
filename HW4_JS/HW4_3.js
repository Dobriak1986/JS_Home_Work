// – створити функцію, яка обчислює та повертає площу циліндру висотою h, та радіусом r
// формула 2πrh
// r = radius
// h = height

function sqCil (r, h) {
    const res = 2 * Math.PI * r * h;

    console.log(res);
    return res;
}
let sqC = sqCil(2, 7);