// 블로그
let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt"
let input = fs.readFileSync(file).toString().split("\n"); 
let [N,X] = input.shift().split(' ').map(Number);
let arr = input.map(m => m.split(' ').map(m => Number(m))).flat();
let cnt = 0;
let sum = 0;
let visitNum = []
for(let i = 0; i < X; i++) sum += arr[i]; // 시작할 때 합 
visitNum.push(sum)
for(let i = X; i < N; i++ ){
    sum +=(arr[i]-arr[i-X])
    visitNum.push(sum)
}

const maxVisit = Math.max(...visitNum);
if(maxVisit === 0){
    console.log('SAD')
}else{
    const maxcnt = visitNum.filter(element => maxVisit === element).length;
    console.log(maxVisit)
    console.log(maxcnt) 
}
// 이중 for문 썻을 때 시간초과 나서 다른 방법 사용하기..
// for(let i =0; i<=N-X; i++){
//     let visit = 0;
//     for (let j = i; j <i+X; j++){
//         visit +=arr[j]
//     }
//     visitNum.push(visit)
// }
// 슬라이딩 윈도우 사용하기 

