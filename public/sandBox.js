import { Invoice } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payments.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// GENERICS
// Generics allow us to create reusable  block of codes which can be used with different types
// const addUUID = <T>(obj:T)=>{
//   const uuid = Math.floor(Math.random() * 100);
//   return {...obj,uuid}
// }
// const docOne = addUUID({name:'yoshi',age:46});
// console.log(docOne.name);
// const addUUID = <T extends object>(obj: T) => {
//   const uuid = Math.floor(Math.random() * 100);
//   return { ...obj, uuid };
// };
// const docOne = addUUID({ name: "yoshi", age: 46 });
const addUUID = (obj) => {
    const uuid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uuid });
};
const docOne = addUUID({ name: "yoshi", age: 23 });
console.log(docOne.uuid);
const docThree = {
    uid: 2,
    resourceName: "/public/classes",
    data: "",
};
const docFour = {
    uid: 2,
    resourceName: "/public/classes",
    data: { name: "shown" },
};
const docFive = {
    uid: 2,
    resourceName: "shopping list",
    data: ["milk", "bread"],
};
console.log(docThree, docFour, docFive);
