// 연결 요소의 개수
let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt"
let input = fs.readFileSync(file).toString().split("\n"); 
let [N,M] = input.shift().split(' ').map(Number)
let graph = input.map( i =>i.split(' ').map(Number));
let tree = [...Array(N+1)].map(e=>[]);
for(let node of graph){
    let i = node[0];
    let j = node[1];
    tree[i].push(j);
    tree[j].push(i);
}
let cnt = 0
let visited = Array.from({length:N},()=>Array.from({length:M},()=>false))
for(let i = 1; i< N; i++){
    if(visited[i]!==true){
         dfs(tree,i,visited)
         cnt++;
    }
}

function dfs(tree,v,visited){
    if(visited[v] === true) return
    visited[v] =true;
    tree[v].forEach(i => {
        if(visited[i] !== true){
            dfs(tree,i,visited)
        }
    });
}
console.log(cnt)