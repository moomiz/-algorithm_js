// 종이의 개수
let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt"
let input = fs.readFileSync(file).toString().split("\n"); 
// 같은 수 종이 그대로 사용 
// 아닌 경우 같은 크기의 종이 9개로 자르고 잘린종이를 가지고 
// 같은 수인 경우 그대로 사용함 
const N = Number(input.shift());
const arr = input.map(m => m.split(' ').map(m => Number(m)));
// 분할정복 재귀써서 해야하는데 머리가 어지러워서,,,,,,,,,,,,,무리.....