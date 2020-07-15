/*function qui repète une chaine de caractère*/

 function repeatAfterMe(str, nbr){

     return nbr < 0 ? str : str.repeat(nbr);
     

 }
 console.log(repeatAfterMe('Once upon a time, a little dragon fly.. ', 2));

 function repeatAfterMe2(str, nbr){
    let string = '';
     for(let i=0; i<nbr; i++){
        string += str;
     }
     return string;
 }

 console.log(repeatAfterMe2('Once  ', 5));