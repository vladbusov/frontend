let text = document.getElementById('text');

console.log('I am js!', text.innerText);

let button = document.getElementById('button');

button.onclick = function() {
    text.innerText = 'Welcome to Frontend!!';
    console.log("tut");
};