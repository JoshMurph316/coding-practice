function count(x) {
    var numbers = [];
    if (x % 2 == 0) { // TODO check that x is even
        for (var i = 0; i < x; i += 2) { // TODO assign i to 0; give i the limit of x; and increment by 2
            numbers.push(i);
        }
    } else {
        for (var i = 1; i < x; i += 2) { // TODO assign i to 1; give i the limit of x; and increment by 2
            numbers.push(i);
        }
    }
    return numbers;
}

console.log(count(10));