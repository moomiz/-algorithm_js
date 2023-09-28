let fs = require("fs");
let file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
let N  = Number(input.shift());
const graph = [...new Array(N+1)].map(() => []);
let arr = new Array(N).fill(0);
console.log(arr)
input.forEach(v => {
    const [ start, end ] = v.split(' ').map(v => +v);
    graph[start].push(end);
    graph[end].push(start);
  });

for(const i of graph[1]){
    arr[i] = 1;
    dfs(i,arr)
}

const dfs = (i,arr)=>{
    for(const num of graph[i]){
        if(num !== 1 && arr[num] == 0){
            arr[num] = i
            dfs(i,arr)
        }
    } 
    return arr
}

