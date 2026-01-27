// – створити функцію, яка обчислює та повертає площу кола з радіусом r
function roundSquare(r) {
    // r = radius
    const res = Math.PI * r * r;
    console.log(res);
    return res;
}
let rsq = roundSquare(5);