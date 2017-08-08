function rot13(str) {
    // TODO: rotate 13 letter spaces ex. 'B' => 'O'

    let char = []; // placeholder array

    let add13 = n => n > 64 ? n + 13 : n; // if number = a letter char adds
    let reset = n => n > 90 ? n - 26 : n; // drops anything over 90 back down - prevents symbols

    // iterate over str to get unicode id, push into new array
    for (let i = 0; i < str.length; i++) {
        char.push(str.charCodeAt(i));
    }

    let encrypt = char.map(add13).map(reset);
    let codeStr = String.fromCharCode(...encrypt);

    return codeStr;
}

// Change the inputs below to test
console.log(rot13("SERR PBQR PNZC"));