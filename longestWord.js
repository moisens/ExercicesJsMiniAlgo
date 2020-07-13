/*
Touver le mot le plus long:
Créer un algorithme qui renvoie la longueur du mot 
le plus long d'une chaine de caractère.
*/

const longestWord = (str) =>{
    let strArr = str.split(' ');
    let longWord = [];
    for(let i=0; i<strArr.length; i++){
        longWord.push(strArr[i].length)
        //console.log(longWord);
    
    }
    return `The longetst word has a length of: ${Math.max(...longWord)}`;
    

    

}
console.log(longestWord('Understanding and analysis of business needs'))