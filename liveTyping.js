const inputLive = document.querySelector('.livetyping');
const resultat = document.querySelector('.resultat')

inputLive.addEventListener('keyup', inputLiveTyping);
let valInput;
function inputLiveTyping(){
    let entree = inputLive.value;
    resultat.innerHTML = entree;
}


