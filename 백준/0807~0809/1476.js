const { captureRejectionSymbol } = require('events');
let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
let [E,S,M] = input[0].split(' ').map(Number)
// 1 ≤ E ≤ 15
// 1 ≤ S ≤ 28
// 1 ≤ M ≤ 19


let cnt = 1;
while(true){
   if((cnt -E) % 15 === 0 && (cnt - S) % 28 === 0 && (cnt -M) % 19 === 0){
    console.log(cnt);
    break
   }
   cnt ++;
}

// 메모리 초과남 