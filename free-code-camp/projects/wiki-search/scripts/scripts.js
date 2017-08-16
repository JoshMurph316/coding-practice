let search = document.querySelector('#search-input').value;
let submit = document.querySelector('#search-submit');
let output = document.querySelector('#output');

function getSearch() {
    let http = new XMLHttpRequest();

    http.onreadystatechange = () => {
        if (http.readyState == 4 && http.status == 200) {
            let wiki = JSON.parse(http.response);
            console.log(wiki);
        }
    };
    http.open("GET", "https://en.wikipedia.org/w/api.php", true);
    http.send();
}

submit.addEventListener('click', getSearch);