// fetching POST from https://jsonplaceholder.typicode.com/posts/1

const root = 'https://jsonplaceholder.typicode.com/posts/1';

module.exports = fetch(root, { method: "GET" })
    .then(response => response.json())
    .then(json => console.log(json));