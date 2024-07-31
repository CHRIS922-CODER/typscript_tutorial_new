"use strict";
// let greet = ()=>{
//     console.log('hello')
// }
// greet = 'hello'
let greet;
greet = () => {
    console.log('hello again');
};
// const add = (a:number, b:number, c?:number | string )=>{
//     return console.log(a + b);    
// }
const add = (a, b, c = 12) => {
    console.log(a + b);
    console.log(c);
};
add(5, 2, 12);
const minus = (a, b) => {
    return a + b;
};
let result = minus(23, 45);
// result = ''
