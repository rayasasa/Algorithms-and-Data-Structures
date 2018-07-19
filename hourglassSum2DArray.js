/* Find the largest hourglass sum in a 2D array */
/* Solved it in Hacker Rank*/

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the hourglassSum function below.
function hourglassSum(arr) {
    var max_sum = -100;
    for(var i = 0; i < 6; i++){
        for(var j = 0; j < 6; j++){
            var sum;
            if(i+1 < 6 && j+1 < 6 && i+2 < 6 && j+2 < 6){
                var sum1 = arr[i][j] + arr[i][j+1] + arr[i][j+2];
                var sum2 = arr[i+1][j+1];
                var sum3 = arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
                var sum = sum1 + sum2 + sum3;
            }
            if(sum > max_sum)
                max_sum = sum;
            else
                max_sum = max_sum;
        }       
    }
    return max_sum;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let arr = Array(6);

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    let result = hourglassSum(arr);

    ws.write(result + "\n");

    ws.end();
}
