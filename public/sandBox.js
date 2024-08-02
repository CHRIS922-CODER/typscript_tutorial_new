import { Invoice } from './classes/Invoices.js';
import { Payment } from './classes/payments.js';
// let docOne : HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice('chirs','system approval',3455)
// docTwo = new Payment('jane','data entry',456789)
// let docs : HasFormatter[] =[]
// docs.push(docOne)
// docs.push(docTwo)
// console.log(docs);
// const invOne = new Invoice('chris', 'system update', 456666)
// const invTwo = new Invoice('youngkim', 'Error and testing', 45226)
// // console.log(invOne.format(),invTwo);
// // let invoices: string[]= [];
// let invoices: Invoice[] = []
// // invoices.push({name:"john"})
// invoices.push(invOne)
// invoices.push(invTwo)
// console.log(invoices);
// // invOne.client = 'something else'
// invoices.forEach((inv) => {
//     console.log(inv.client, inv.amount, inv.format());
// })
const form = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
