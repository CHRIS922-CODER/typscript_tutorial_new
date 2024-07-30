// Dyanmic type any

let age: any = 34;
age = 'chris';
age = { name:'luigi'}

let mixed: any[] = [];
mixed.push(5);
mixed.push('luigi');
mixed.push(false)

console.log(mixed)

let ninja: { name:any, age:any}
ninja ={
    name:'yoshi',age:45
}
console.log(ninja)

ninja ={
    name:false,age:'yoshi'
}