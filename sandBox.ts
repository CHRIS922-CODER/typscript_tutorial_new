// explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;
age = 45;
// age = 'luigi';
isLoggedIn = true;
// isLoggedIn = 23;

// arrays
let ninjas: string[];
ninjas = ['roy','john']
ninjas.push('john');

//  union types
let mixed: (string|number)[]=[]
mixed.push(3)
mixed.push('roy')
// mixed.push(false)
let uuid: string|number;
uuid ='123';
uuid = 123
// uuid = true

//  objects
let ninjaOne: object;
ninjaOne = {name:"chris", age:56, beltColor:'orange'}

ninjaOne = [];

let ninjaTwo: {
    name:string,
    age:number,
    blackbelt:string
}

ninjaTwo = {
    name:"chris",
    age:33,
    blackbelt:"black"
}

// ninjaTwo = {
//     name:"yoshi",
//     age:12,
//     blackbelt:'green',
//     skills:[]
// }