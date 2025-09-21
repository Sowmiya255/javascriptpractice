// const values = [12, 4,3,6,8,10,25,23];
// const mapvalues = values.filter(value => value>=10)
// console.log(mapvalues);



import PromptSync from "prompt-sync";
const prompt = PromptSync();

const input = prompt("Enter the values:");
const values = input.split(" ").map(Number);
const output = values.filter(number => number>=10);
console.log("given input:",input);
console.log("values greater the 10:",output)