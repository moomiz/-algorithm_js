//게리맨더링 
let fs = require('fs');
let file = process.platform == "linux" ? "dev/stdin":"example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const N = Number(input.shift());
const people = input.shift().split(" ").map(m=>Number(m));
const tree = input.map(m=> m.split(" ").map(m => Number(m)));
console.log(tree)
// 구현 감이 안잡혀서 다시 풀어보기 ㅠㅠ 
