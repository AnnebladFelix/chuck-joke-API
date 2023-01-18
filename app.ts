let chuckNEl = document.getElementById('chuck-N') as HTMLElement;
let nxtBtn = document.getElementById('nxt-btn')!;

const url = "https://api.chucknorris.io/jokes/random";
const p = fetch(url)
.then(response => {
    return response.json();
}).then(chuck => {
    console.log(chuck.value);
        nxtBtn.addEventListener('click', function(e){
        e.preventDefault();
        window.location.reload();
    })
    let div1 = document.createElement('p') as HTMLParagraphElement;
    div1.className = "card";
    div1.innerHTML = `${chuck.value}`;
    chuckNEl.append(div1);
    chuckNEl.innerHTML = chuck.value;   
})


