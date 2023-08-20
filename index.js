"use strict";
// var index:number=1;
// var result:number=index++
// console.log("index", index);
// console.log("result", result);
// post fix increment operator
// index= index + 1
// shortcut why of line 2, called increment operator
// index++
// decrement operator
// index--
// post fix decrement operator
// index= index-1
// pre fix increment & decrement operator
// ++index;
// --index;
// while loop perform
// var index:number = 1;
// while(index<10){
//     console.log(index)
//     index++
// }
// console.log("console")
// jo kam  hum ne while loop me kam 3 line me kiya he "forloop" me wo kam hum ik line me  ker sakte hain, programe ki duniya me 3 line ho gi but actualme hum se for loop me ik hi line me likhe ge
// jo variable block k bahir likhte hain ab use prenthises k ander likhe ge
// var index:number = 1;
// for(let index=1; index<10; index++){
//     console.log(index);
// }
// for(let index=10; index>=5; index--){
//     console.log("Zubair", index)
// }
// weather condition is true or false  do loop  atleast run one time, on the other hand while loop run when condition is true.
// var i:number= 1
// do{
//     console.log("do loop Zubair")
//     i++
// }while(i<10)
// var i:number= 1
// do{
//     console.log("do loop Zubair", i);
//     i--
// }while(i<10)
// write a ts program , that  calculate sum of even number between 1-1000
// var sum:number= 0;
// for(let index=1; index<=1000; index++){
//     if(index%2==0){
//     sum= sum+ index;
//     }
// }
// console.log("sum", sum)
var sum = 0;
var list = [];
for (let index = 1; index <= 100; index++) {
    if (index % 2 == 0) {
        sum = sum + index;
        list.push(index);
    }
}
console.log("sum", sum, list);
