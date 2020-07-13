/*
Vérifier si une chaine de charactère est un palindrome:
Créer une fonction qui renvoie le message:  O'ui c'est un palinrome',
si la chaune de charactère en arg est un palindrome.

*/

const palindromeWord = (str) => {
    let strLowercase = str.toLowerCase()
    console.log(str.toLowerCase())
    let inversedPalind = strLowercase.split('').reverse().join('');
    console.log(inversedPalind)

    if(inversedPalind === strLowercase){
        console.log('YES, it is a palindrome')
    }else{
        console.log('No, it is not a palindrome')
    }
}

console.log(palindromeWord('Kayak'))