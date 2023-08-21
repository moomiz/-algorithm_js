// 로봇 청소기
let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
let [N,M] = input.shift().split(" ").map(Number);
let [x,y,d] = input.shift().split(" ").map(Number);
let arr = input.map(m =>m.split(" ").map(m =>Number(m)));
let visited = Array.from({length:N},()=> Array.from({length:M}),()=>false) ;

// 북: 0, 동:1, 남:2, 서:3
// 북 서 남 동 순 
dx = [-1,0,1,0];
dy = [0,1,0,-1];

let ans = 0;
let cnt = 0;

while (1) {
  if (cnt === 4) {
    const [backx, backy] = [x + dx[(d + 6) % 4], y + dy[(d + 6) % 4]];
    if (arr[backx][backy] === 1) break;
    else {
      x = backx;
      y = backy;
      cnt = 0;
    }
  }
  
  if (!visited[x][y]) {
    visited[x][y] = true;
    arr[x][y] = 2;
    ans++;
  }

  const [leftx, lefty] = [x + dx[(d + 3) % 4], y + dy[(d + 3) % 4]];
  if (arr[leftx][lefty] === 0) {
    x = leftx;
    y = lefty;
    cnt = 0;
  } else {
    cnt++;
  }
  d = (d + 3) % 4;
}

console.log(ans);