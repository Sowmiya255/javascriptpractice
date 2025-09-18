// const numbers = [1,2,3,4,6,5,7,9,2,14,12,11]

// const evennumber = numbers.filter(num => num%2 == 0)

// console.log(evennumber);

import PromptSync from "prompt-sync";
const prompt = PromptSync();
 const numbers = prompt("enter the value:");

 const number = numbers.split(" ").map(Number);

 const evennumber = number.filter(num => num % 2==0)


 console.log(evennumber);