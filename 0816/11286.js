let fs = require('fs')
const file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
const N = Number(input.shift());



let plusLst =[];
let minusLst =[];
for(let i = 0; i <= N; i++){
    if(input[i] == 0){
    // 0인 경우 배열에서 절댓값이 가장 작은 값 출력해야함 
        if(plusLst.length == 0 & minusLst.length == 0){
            console.log(0)
        }else{
            plusLst.sort((a,b)=> a-b);
            minusLst.sort((a,b)=> a-b);
            const plusAbs =Math.abs(plusLst[0]);
            const minusAbs = Math.abs(minusLst[minusLst.length-1]);
            // console.log(plusAbs,"plusAbs")
            // console.log(minusAbs,"minusAbs")
            if(plusLst.length!== 0 & minusLst.length == 0){
                console.log(plusLst.shift())
            }else if(plusLst.length == 0 & minusLst.length !== 0){
                console.log(minusLst.pop())
            }
            else if(plusAbs < minusAbs){
                console.log(plusLst.shift())
            }else{
                console.log(minusLst.pop())
             }

        }
    }else{
    // 0이 아닌 경우 배열에 넣어야함 
        if(input[i]>0){
            plusLst.push(input[i])
        }else{
            minusLst.push(input[i])
        }
    }
}

// 1. 음수용 lst , 양수용 lst 만들기 
// 시간 초과 남 // 다시 풀어보기 