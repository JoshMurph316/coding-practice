let cardBtn = document.getElementById('newCard');
let quoteDiv = document.getElementById('quote');


function getCard() {
    // create new http object
    let http = new XMLHttpRequest();

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            let card = JSON.parse(http.response);
            let randomCard = card.cards[Math.floor(Math.random() * 100)]
            quoteDiv.innerHTML = `Card Name: ${randomCard.name}`;
        }
    };
    // setup request
    http.open("GET", "https://api.magicthegathering.io/v1/cards", true);
    http.send();
}

cardBtn.addEventListener('click', getCard);