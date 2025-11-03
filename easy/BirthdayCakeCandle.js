const userinput = require('prompt-sync')();

let input=userinput('Enter the number of candles with space :');

const candles=input.trim().split(' ').map(Number);

//console.log(candles);

let tallestcandles = Math.max(...candles);
let count=0;
function birthdayCakeCanles(candles){
    for(let i=0; i<candles.length; i++){
        if(tallestcandles===candles[i]) 
            count++;
    }
    return count;
}

let result=birthdayCakeCanles(candles);
console.log(result);
