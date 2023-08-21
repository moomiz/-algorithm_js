// 촌수 계산
let fs = require('fs');
let file = process.platform === "linux" ? "dev/stdin" : "example.txt";
let input = fs.readFileSync(file).toString().split("\n");
// console.log(input)
let n =Number(input.shift()); // 전체 사람의 수
let [A,B] = input.shift().split(' ').map(Number) // 촌 수 계산이 필요한 사람 번호 
console.log(A)
console.log(B)
let M = Number(input.shift()); // 부모 자식간 관계의 계수 
let arr = input.map(i=>i.split(" ").map(i=>Number(i)));
// console.log(arr)
let childlst = [...Array(n+1)].map(e =>[]);
let parentlst = [...Array(n+1)].map(e =>[]);
let chon = 0
// 부모<-> 자식을 담을 수 있는 list 만들기 
for(const[p,c] of arr){
    childlst[p].push(c)
    parentlst[c].push(p)
}


// if(childlst[A].includes(B) || childlst[B].includes(A)){
//     // 경우1: 부모 인 경우 
//     chon = 1
// }else{
 
//     for(let i =0; i< parentlst.length; i++){
//            //경우2: 할아버지인 경우
//         if(parentlst[i][0] === A && childlst[i].includes(B) || parentlst[i][0] === B&& childlst[i].includes(A)){
//             chon = 2
//             break
//         }else if(childlst[i].includes(A) && childlst[i].includes(B)){
//               // 경우3: 내 형제인 경우 
//             chon = 2
//             break
//         }else if( ){
//             // ruddn 

//         }
      

//     }
// }
console.log(chon)