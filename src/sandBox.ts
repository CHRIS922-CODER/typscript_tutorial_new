// let greet = ()=>{
//     console.log('hello')
// }

// greet = 'hello'
let greet: Function;

greet = () =>{
    console.log('hello again')
}

// const add = (a:number, b:number, c?:number | string )=>{
//     return console.log(a + b);    
// }

const add:Function = (a:number, b:number, c:number | string = 12)=>{    
       
    console.log(a + b);    
    console.log(c);
}
add(5,2,12)


const minus = (a:number, b:number)=>{
return a + b;
}
let result = minus(23,45)

// result = ''