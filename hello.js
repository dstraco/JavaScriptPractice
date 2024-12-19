let x = 1;
let y = 2;


let arr = [1,2,3,4];
let arr2 = ['apple', 'pineapple', 'mango'];

let evenNums = arr.filter((num) =>{
    if(num % 2 ===0){
        return num;
    } 
})

console.log(evenNums);


let companies = [
    {name: 'Company1', type: 'finance'},
    {name: 'Company2', type: 'education'}
];

let finCos = companies.filter((company)=>{
    if (company.type === 'finance'){
        return company
    }
})
 
console.log(finCos);






















