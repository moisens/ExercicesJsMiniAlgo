let counter = document.querySelector('.counter');
const input = document.querySelector('#message')
let count = Number(counter.textContent);
console.log(count); 
input.addEventListener('keyup', putValueInDoc);


function putValueInDoc(){
    let tabVal = input.value.length;
    let counte = count - tabVal;
    counter.innerHTML = counte;
    if(counter.innerHTML <= 0){
        counter.style.color = 'red';
    }else{
        counter.style.color = 'blue';
    }
    
    

}