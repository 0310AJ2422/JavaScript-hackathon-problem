const prompt = require('prompt-sync')();

function diagonalDifference(arr){
    let leftDiagonal=0;
    let rightDiagonal=0;
    for(let i =0; i<arr.length; i++){
        leftDiagonal +=arr[i][i];
        rightDiagonal +=arr[i][arr.length-1-i];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}

let size=parseInt(prompt("enter the size of the square matrix:"));

let matrix=[];
for(let i=0; i<size;i++){
    matrix[i]=[];
    for(let j=0; j<size; j++){
        matrix[i][j]=parseInt(prompt(`enter element at position[${i}][${j}]:`));
    }
}
console.log(matrix)

let difference=diagonalDifference(matrix);
console.log("the absolute difference between the sums of the matrix diagonals is : ",difference);