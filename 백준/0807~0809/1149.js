let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const N = input[0].trim();
// console.log(N)
const arr = input.slice(1,N+1);
const newArr = arr.map(m=>m.split(' ').map(m => Number(m)));
// console.log(newArr)
// 문제 풀이 생각 
// 현재 순서인 색상이 앞에 색상과 다른 색상을 선택해야함! 
for(let i = 1; i < N; i++){
    newArr[i][0] += Math.min(newArr[i-1][1],newArr[i-1][2]);
    newArr[i][1] += Math.min(newArr[i-1][0],newArr[i-1][2]);
    newArr[i][2] += Math.min(newArr[i-1][0],newArr[i-1][1]);
}
const result = Math.min(newArr[N-1][0],newArr[N-1][1],newArr[N-1][2])
console.log(result)