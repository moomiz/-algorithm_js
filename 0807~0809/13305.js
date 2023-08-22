// 주유소 
let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const N = input.shift();
const load = input.shift().split(" ").map(v=>BigInt(v));
const oilHouse = input.shift().split(" ").map(v=>BigInt(v));

// 풀이봄  ㅠㅠ 
// 그리디로 풀어야함 
// 현재 위치한 주유소 보다 기름값이 더 저렴한 가장 가까운 주유소 찾아서 
// 거기 가는 만큼 기름 충전해서 이동 
let nowOilHouse = oilHouse[0];
let cost = 0n;
for(let i =0; i < N-1; i++){
    cost += nowOilHouse * load[i];
    if(nowOilHouse > oilHouse[i+1]) nowOilHouse = oilHouse[i+1]; 
}

console.log(String(cost))