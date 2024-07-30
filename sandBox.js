// Dyanmic type any
var age = 34;
age = 'chris';
age = { name: 'luigi' };
var mixed = [];
mixed.push(5);
mixed.push('luigi');
mixed.push(false);
console.log(mixed);
var ninja;
ninja = {
    name: 'yoshi', age: 45
};
console.log(ninja);
ninja = {
    name: false, age: 'yoshi'
};
console.log(ninja);
