import { Invoice } from "./classes/Invoices.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payments.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul") as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();
  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
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

const addUUID = <T extends { name: string }>(obj: T) => {
  const uuid = Math.floor(Math.random() * 100);
  return { ...obj, uuid };
};

const docOne = addUUID({ name: "yoshi", age: 23 });
console.log(docOne.uuid);

// const docOne = addUUID({ name: 23, age: 46 });


// With Interfaces


// interface Resource {
//   uid:number,
//   resourceName:string,
//   data:"???"
// }

// ENUMS
// Enums are special types in typescript that allows us to store set of constants or keyworkds and associate them with numeric valuep


enum ResourceType {BOOK,AUTHOR,FILM,DIRECTOR,PERSON}
interface Resource<T>{
  uuid:number,
  resourceType:ResourceType,
  data:T
}

const docTwo : Resource<object> = {
uuid:1,
resourceType:ResourceType.BOOK,
data: {title:'name of the wind'}
}

const docThree: Resource<object> = {
  uuid: 10,
  resourceType:ResourceType.PERSON,
  data: {name:'yoshi'}

};

console.log(docTwo,docThree);

