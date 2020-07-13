/*
Creer une fonction qui renvoie la chaine de charactères passée en
argument, en chaine de charactère inversée.
*/

const strReverse = (str) => {
    let splitStr = str.split('').reverse().join('');
    return splitStr;
    
}

console.log(strReverse('Hello word!'));

