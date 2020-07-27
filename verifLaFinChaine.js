function checkEndOfStr(str, target){
    const endStr = str.split('').slice(-1).join('');
    console.log(endStr);
    const lastWord = str.split(' ').slice(-1).join('')
    console.log(lastWord);
    const bothChars = str.substr(-target.length);
    console.log(bothChars);
    
    if(endStr === target || lastWord === target || bothChars === target){
        console.log(`The target MATCHS the last element`);
    }else{
        console.log(`The target DOESN'T MATCH the last element`);
    }
    
    
    
}
checkEndOfStr('Hello les gens', 'gens')