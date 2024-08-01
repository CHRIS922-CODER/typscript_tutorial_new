// const anchor = document.querySelector('a');
// if (anchor) {
    
//     console.log(anchor.href);
// }


// const anchor = document.querySelector('a')!;
// console.log(anchor.href);

// const form = document.querySelector('form')!;
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// console.log(form.children);


// inputs

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#toFrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
        console.log('Form submitted');
        console.log('Type:', type.value);
        console.log('To/From:', toFrom.value);
        console.log('Details:', details.value);
        console.log('Amount:', amount.valueAsNumber);
    
        type.value = '';
        toFrom.value = '';
        details.value = '';
        amount.value = '';
    
})