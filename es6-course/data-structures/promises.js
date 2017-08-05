let p = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Resolved promise data'), 2000);
});
p.then(response => console.log(response));
//********################**********/
let q = new Promise((resolve, reject) => {
    reject('Rejected promise data');
});
q.then(response => console.log(response))
    .catch(error => console.log(error));