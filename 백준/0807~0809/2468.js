// 안전영역
let fs = require('fs');
let file = process.platform ==="linux" ? "dev/stdin":"example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const N = Number(input.shift());
const arr = input.map(m=>m.split(" ").map(i=>Number(i)))
// 영역 갯수 수하는 배열 
let arrList = [1]; 
// for(let i = 1; i <=100; i++){

// }



const dfs = (h) =>{
    let visited = Array.from(Array(N), () => new Array(N).fill(false));
    for(let i = 0; i < N; i++){
        for(let j = 0; j< N; j++){
            if(arr[i][j] <= h) visited[i][j] = true
        }
    }
    dx =[0,0,-1,1];
    dy = [1,-1,0,0];
    for(let i = 0; i < N; i++){
        for(let j = 0; j< N; j++){
           
    }
  }
}