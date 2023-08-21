// 고냥이 
// 번역기가 인식 할 수 있는 최대 문자열 길이? 
let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin":"example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const N = Number(input.shift())
const arr = input.map(m =>m.split("")).flat();
// 연속되는 문자열 중 가장 긴 값 구하는 문제 

let maxlst =[0];
for(let i = 0; i < arr.length; i++){
    let MaxNum = Math.max(...maxlst)
    let start = i;
    let cnt = 0;
    let lst = [];            
    if((arr.length-start)<=MaxNum) {
        break
    };
    while(true){
        if(lst.includes(arr[start])){
            cnt++
            start++
        }else{
        // 새로운 문자인 경우 
            if(lst.length < N){
            // 인식 범위 가능횟수가 남은 경우  
                lst.push(arr[start])
                cnt++
                start++ 
            }else{
                maxlst.push(cnt)
                break
            }
        }

    }
}
console.log(Math.max(...maxlst))
// 시간 초과 남 ㅠ - > 75%에서 시간 초과 
// 이분 탐색 해야하나? 
// 풀이 확인 했더니 투포인터 알고리즘 사용해야함 
// 투포인터 알고리즘 공부하기.. 이해가 안됨 ㅠ 
