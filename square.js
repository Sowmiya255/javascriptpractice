// const values = [2,3,5,6,1,8,9]
// const mapvalues  = values.map(value => value * value)
// console.log(mapvalues)

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const input = prompt("Enter the input values:");
const values =input.split("").map(Number);
const mapvalues = values.map(value => value * value);

console.log("Input values:",values);
console.log("square of given numbers:",mapvalues);
