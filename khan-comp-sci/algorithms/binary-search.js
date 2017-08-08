function binarySearch(arr, target) {
    let min = 0;
    let max = arr[arr.length - 1];
    let average = (x, y) => Math.floor((x + y) / 2);
    let guess;

    while (max >= min) {
        guess = average(max, min);
        console.log(`guess: ${guess}`);
        if (guess === target) {
            return arr.indexOf(guess);
        } else if (guess < target) {
            min = guess + 1;
            console.log(`too low min: ${min}`);
        } else {
            max = guess - 1;
            console.log(`too high max: ${max}`);
        }
    }
    return -1;
}

var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
    41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97
];

var result = binarySearch(primes, 41);

console.log("Found prime at index " + result);