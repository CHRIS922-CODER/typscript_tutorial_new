import {Invoice} from './classes/Invoices.js'

interface isPerson {
name:string;
age:number;
speak(a:string):void;
spend(a:number):number;
}

const me: isPerson = {
    name:'shawn',
    age:23,
    speak(text:string):void {
        console.log(text)
    },
    spend(amount:number):number {
        console.log('I spent ',amount)
        return amount;
    }

}

console.log(me)
const greetPerson = (person: isPerson)=>{
    console.log("Hello ",person.name)
}


const invOne = new Invoice('chris','system update',456666)
const invTwo = new Invoice('youngkim','Error and testing',45226)

// console.log(invOne.format(),invTwo);

// let invoices: string[]= [];

let invoices: Invoice[] = []
// invoices.push({name:"john"})
invoices.push(invOne)
invoices.push(invTwo)

console.log(invoices);
// invOne.client = 'something else'

invoices.forEach((inv)=>{
    console.log(inv.client,inv.amount,inv.format());    
})




        
    