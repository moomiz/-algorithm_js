let fs = require('fs');
let file = process.platform == "linux" ? "dev/stdin":"example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const[N,d,k,c] = input.shift().split(" ").map(m =>Number(m))
const sushi = input.map(m=>m.split(" ").map(m => Number(m))).flat();
console.log(sushi)
console.log(N,d,k,c)
// k개의 접시를 연달아 먹는 경우 할인 해줌 
// N: 접시의 수 d:초밥의 가짓수 
// k:연속해서 먹는 접시의 수  c: 쿠폰번호 
// 초밥 가짓수의 최댓값 ?

// 투포인터 알고리즘 이해하기! 