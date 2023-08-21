// 겹치는 건 싫어
let fs = require("fs");
const { listeners } = require("process");
let file = process.platform == "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const [n, k] = input.shift().split(" ").map(Number);
const arr = input.map((m) => m.split(" ").map((m) => Number(m))).flat();
// console.log(arr);
// 갯수 셀 수 있는 list 만들고
let lst = new Array(100001).fill(0);
let cnt = 0;
let result = 0;
let start = 0;
while (n - start > result) {
  for (let i = start; i < n; i++) {
    lst[arr[i]] += 1;
    if (lst[arr[i]] > k) {
      // k 값 초과하는 수가 생길 경우, 길이 세는 변수 초기화
      if (cnt > result) {
        result = cnt;
        // console.log(result)
      }
      cnt = 1;
      lst.fill(0);
      start++;
      break;
    }
    cnt++;
  }
  if (cnt > result) {
    result = cnt;
    // console.log(result)
  }
  cnt = 0;
  lst.fill(0);
  start++;
//   if (n - start <= result) {
//     break;
//   }
}
console.log(result)

// 완탐 했을 때는 시간초과 남 투포인터로 풀기..

