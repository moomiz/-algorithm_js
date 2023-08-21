let fs = require('fs');
let file = process.platform == "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const N = Number(input.shift());
const M = Number(input.shift());
const arr = input.map(m => m.split(' ').map(m => Number(m))).flat()
// 조합 문제 인듯 // DP군,, ,
// Dp[i] = DP[i-1] + Dp[i-2]인데
// 중간에 vip석이 있는 경우 vip석 기준으로 나눠진 걸로 계산함! 
// 예제 같은 경우  Dp[3] * DP[2] * Dp[2] 로 생각함
const dp = new Array(N+1).fill(0);
dp[0] = 1; dp[1] = 1;
let cnt = 0;
let section = [];
// vip 석 찾는 코드 
for (let i = 1; i <= N; i++){
    if(arr.includes(i)){
        section.push(cnt);
        cnt = 0;
    }else{
        cnt++
    }
}
section.push(cnt);
cnt = 0;
for(let i = 2; i <= N; i++){
    dp[i] = dp[i-1]+ dp[i-2]
}
let result = 1;
for(const i of section){
    result *=dp[i]
}

console.log(result)

// 정답! 맞아서 기쁘당 ㅎ