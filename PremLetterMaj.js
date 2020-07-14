/*
Faire une function qui met la première lettre de
chaque mot passé en argument en Majuscule.
*/

 let fisrtLetterMaj = (str) => {
     return str.toLowerCase()
     .split(' ')
     .map((word) =>{
         return word.charAt(0).toUpperCase() + word.slice(1)
     }).join(' ')
 }
 console.log(fisrtLetterMaj('Salut les gens!'));

//Version 2 With forEach();
let fisrtLetterMaj2 = (str) => {
    let mots = str.toLowerCase().split(' ');
    let lastWords = [];
    mots.forEach((mot) =>{
        lastWords.push(mot.charAt(0).toUpperCase() + mot.slice(1));
        
    });
    return lastWords.join(' ')
    
    
 
}
console.log(fisrtLetterMaj2('hello little fella!'));

