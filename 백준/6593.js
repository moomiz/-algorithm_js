let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
console.log(input)
const num = input[0].split(' ');
console.log(num)
const L = parseInt(num[0]);
const R = parseInt(num[1]);
const C= parseInt(num[2]);
console.log(L,R,C)
// 동 서 남 북 상 하 
dx = [1,-1,0,0,0,0]
dy = [0,0,1,-1,0,0]
dz = [0,0,0,0,1,-1]

