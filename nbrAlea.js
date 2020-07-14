/*
Créer une function qui renvoie dans la console
un nombre aléatoire comprit entre 0 et 10.
*/

const aleatoire = document.querySelector('.aleatoire');

// aleatoire.addEventListener('click', nbrAleatoire);

// function nbrAleatoire(){
//     let nbrAleator = Math.floor(Math.random() * 10);
//     console.log(nbrAleator);
  
// }

let nbrAleatoire = () => {
    let nbrAleator = Math.floor(Math.random() * 15);
    console.log(nbrAleator);
}
aleatoire.addEventListener('click', nbrAleatoire);


//Générer fruits
const fruits = ['Mango', 'Grapes', 'Banana', 'Strawberry', 'Watermelon', 'Papaye', ''];
const fruit = document.querySelector('.fruit');

let fruitAleatoire = () =>{
    let random = Math.floor(Math.random() * (fruits.length - 1));
    console.log(fruits[random])
}

fruit.addEventListener('click', fruitAleatoire);




