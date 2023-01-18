"use strict";
let chuckNEl = document.getElementById('chuck-N');
let nxtBtn = document.getElementById('nxt-btn');
const url = "https://api.chucknorris.io/jokes/random";
const p = fetch(url)
    .then(response => {
    return response.json();
}).then(chuck => {
    console.log(chuck.value);
    //let length =  chuck.length;
    nxtBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.location.reload();
    });
    //for (let i = 0; i < length; i++){
    //const foo = function(){
    let div1 = document.createElement('p');
    div1.className = "card";
    div1.innerHTML = `${chuck.value}`;
    chuckNEl.append(div1);
    // }
    chuckNEl.innerHTML = chuck.value;
});
