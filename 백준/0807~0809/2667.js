// 단지 번호 붙이기 // 덜품
let fs = require('fs')
let file = process.platform === "linux" ? "dev/stdin":"example.txt"
let input = fs.readFileSync(file).toString().split("\n");
const N = input.shift();
const apartMap = input.map(m=>m.split("").map(i => Number(i)));
let visited = Array.from(Array(N), () => new Array(N).fill(false));

// 첫 시작할 지점 찾기 
// 이중 반복문으로! 
for(let i =0 ; i < N; i ++){
    for(let j = 0; j< N; j++){
        if(apartMap[i][j] === 1){
            if(apartMap[i][j] === 1 &&!visited[i][j]){
            }
        }
    }
    
}
const apartCnt = 0;

const dfs= (x,y) =>{
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, -1, 1];
    for(let i = 0; i < 4; i++){
        nx = x + dx[i];
        ny = y + dy[i];
        if(nx <= 0 && ny <= 0 && nx > N && ny >N){
            if(apartMap === 1 && !visited[nx][ny]){

            }
        }
    }
}

