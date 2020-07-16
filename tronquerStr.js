const container = document.querySelector('.container');
const parag = document .querySelectorAll('.text');


// parag.forEach((para) =>{
//     truncateStr(para.innerHTML,100, para)
// })

// function truncateStr(str, num, elem){
//     return elem.innerHTML = str.slice(0,num).concat('...')
       
//  }

let paragraphe = [];

parag.forEach(para => {
    paragraphe.push(para.innerHTML);
});
console.log(truncateStr(paragraphe.join(''), 70, paragraphe))


function truncateStr(str, num, elem){
    return elem = str.split(' ').slice(0,num).join(' ')

}
parag.innerHTML = paragraphe;
//console.log(truncateStr('Salut la compagie jhefgkegu erbjrirbiru rejghrehier ohiugytfdr', 5));