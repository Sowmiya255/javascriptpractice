// const fruits=["apple","orange","grapes","mango"]
// const mapfruit = fruits.map(fruit => fruit.length)
// console.log(fruits)
// console.log(mapfruit)


import PromptSync from "prompt-sync";
const prompt = PromptSync();

const input = prompt("enter the value:");
const element = input.split(" ");
const mapelement = element.map(word => word.length)

console.log(input);
console.log(mapelement);