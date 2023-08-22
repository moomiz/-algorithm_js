let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt"
let input = fs.readFileSync(file).toString().split("\n");
let arr = input.map(m=>m.split('-')).flat();
result = 0
arr.map((num,index) => {
   if(num.includes('+')){
        const lst = num.split("+").map(m => Number(m)) ;
        const sum = lst.reduce((a,b)=>a+b)
        if(index === 0){
            result = sum;
        }else{
            result -= sum
        }
    }else if(index === 0){
        result = num
    }
    else{
        result -= num
    }
})
console.log(result)

// 맞았음! 