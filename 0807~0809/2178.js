// 미로 탐색
// 최소경로는 bfs로 풀기!
let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
let [N,M] = input[0].split(' ').map(Number);
// const [yMax, xMax] = input.shift().split(" ");
let arr = input.splice(1).map(i => i.split("").map(i => Number(i)))
// const arr = input.map(v => v.split("").map(x => +x)); 
// 상하좌우
const dx = [0,0,-1,1];
const dy = [-1,1,0,0];

const queue = [[0,0,1]];

while(queue.length){
    const [x, y, distance] = queue.shift();
    for(let i = 0; i <4; i++){
        const nx = x + dx[i];
        const ny = y + dy[i];
        if(0<= nx && 0 <= ny && nx < M && ny < N){
            if(arr[ny][nx] === 1){
                arr[ny][nx] = distance+1
                queue.push([nx,ny,distance+1]);
            }
        }
    }
}
console.log(arr[N-1][M-1]);

