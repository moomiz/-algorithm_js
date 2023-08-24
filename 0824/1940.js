let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt"
let input = fs.readFileSync(file).toString().split("\n");
let N = Number(input.shift());
let M = Number(input.shift());
let arr = input.map( M =>M.split(' ').map(m => Number(m))).flat();
// console.log(arr)
// 완탐으로 구해봄! 
let result = 0;
for (let i = 0; i < N-1; i++){
    for(let j = i+1; j<N; j++){
        if(arr[i]+arr[j] === M){
            result++
        }
    }
}
console.log(result)
// 맞음! 

