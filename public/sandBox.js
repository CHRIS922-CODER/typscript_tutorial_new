"use strict";
// Classes
class Invoice {
    constructor(c, d, a) {
        this.client = c,
            this.details = d,
            this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details} `;
    }
}
const invOne = new Invoice('chris', 'system update', 456666);
const invTwo = new Invoice('youngkim', 'Error and testing', 45226);
// console.log(invOne.format(),invTwo);
// let invoices: string[]= [];
let invoices = [];
// invoices.push({name:"john"})
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.client = 'yoshi';
invTwo.amount = 234;
