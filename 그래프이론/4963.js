let fs = require("fs");
let file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().trim().split("\n");
// 1. 1인 곳을 찾는다.
// 2. 찾은 지점에서 시작(찾은 지점은 방문처리) 8방향 탐색해서 있는 경우
// 3. 방문 표시 후 재귀 통해서 다시 탐색
// 4. 없는 경우 리턴
let graph, visited, W, H;

const cntLand = () => {
  let cnt = 0;
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (!visited[i][j] && graph[i][j] == 1) {
        cnt += 1
        console.log(i,j)
      }
    }
  }
};

const dfs = (x, y) => {
  dx = [0, 0, -1, 1, -1, 1, -1, 1];
  dy = [-1, 1, 0, 0 - 1, -1, 1, 1];
  for (let i = 0; i < 8; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];
    if (
      ny >= 0 &&
      ny < H &&
      nx >= 0 &&
      nx < W &&
      !visited[ny][nx] &&
      graph[ny][nx]
    ) {
      visited[ny][nx] = true;
      dfs(ny, nx);
    }
  }
};

for (let idx = 0; idx < input.length - 1; idx++) {
  [W, H] = input[idx];
  graph = input.slice(idx + 1, idx + H + 1);
  idx += H;
  visited = Array.from(Array(H), () => Array(W).fill(false));
  cntLand();
}

// 이상함 다시 풀것 
