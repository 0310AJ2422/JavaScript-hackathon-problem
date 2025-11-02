const userinput=require('prompt-sync')();
let arrays=[5];
for(let i=0; i<5; i++){
    arrays[i]=parseInt(userinput(`enter element at position[${i}]:`));
}

function minmaxsum(arr){
    let temarr=[];
    let store=0;
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(i===j) continue;
            store +=arr[j];
        }
        temarr[i]=store;
        store=0;
    }
    console.log(Math.min(...temarr), Math.max(...temarr));
}

minmaxsum(arrays);