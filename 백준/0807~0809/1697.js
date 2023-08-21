// 숨바꼭질 
let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split(' ');
var N = parseInt(input[0]);
var K = parseInt(input[1]);
// 걷기는 X +- 1
// 순간이동 2*X
// +1 -1 *2 경우를 다 구해서 K 값이 되면 return  -> 완탐 -> 시간초과 날 듯,,
// 최단 경로 ? bfs로 풀기
let visited = new Array(100001).fill(0);
let result = 0;
function BFS(){
    let queue =[];
    queue.push(N);
    visited[N] = 1;
    let cnt = 0 ;
    while (queue.length){
        let len = queue.length; // 반복문 돌기전에 변수 선언 안하면 계속 값이 바뀌면서 돌아감..! 
        // console.log(len)
        for (let i = 0; i < len; i++){
            let now = queue.shift();
            if (now === K) return cnt;// 찾은 경우에는 시간 return 
            for(let next of [now-1,now+1,now*2]){
                if(next >=0 && next <= 100000 && visited[next]!==1){
                    visited[next] =1;
                    queue.push(next);
                }
            }
        }
        cnt++;
    }
}
result = BFS();
console.log(result)