const arrayIterator = (array) => {
    let index = 0;

    return {
        next: () => {
            if (index < array.length) {
                let next = array[index];
                index += 1;
                return next;
            }
        }
    }
}
let it = arrayIterator([1, 2, 3]);
console.log(it.next()); // 1
console.log(it.next()); // 2
console.log(it.next()); // 3
console.log(it.next()); // undefined
//**************************/
function* arrayIterator2() {
    yield* arguments;
}
let bit = arrayIterator2(4, 5, 6);
console.log(bit.next().value); // 4
console.log(bit.next().value); // 5
console.log(bit.next().value); // 6