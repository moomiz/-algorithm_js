let fs = require('fs');
let file = process.platform =="linux" ? "dev/stdin":"example.txt";
let input = fs.readFileSync(file).toString().split("\n");
let N = Number(input.shift())
let Ropes = input.map(m =>m.split(" ").map(m => Number(m))).flat();
// 최솟값 뽑아서 최솟값 * 로프 갯수 한 값 비교하면서 전체 탐색해서 보기 ! 
Ropes.sort((a,b)=>a-b); // 오름차순 
let result = 0;
for(let i = 0; i<N; i++){
    const w = Ropes[i] * (N-i)
    if(w>=result){
        result = w
    }
}
console.log(result)
// 틀렸다는데 이유 알아보기! ㅠㅠ