// 사회망 서비스 (SNS)
// 트리 만들기 
let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
// 트리로 풀어야하는건 알겠는데, 풀이 감이 안잡힘 
let N = Number(input.shift());
let arr = input.map(m => m.split(" ").map(m=>Number(m)));
