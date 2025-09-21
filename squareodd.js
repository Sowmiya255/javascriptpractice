import PromptSync from "prompt-sync";
const prompt=PromptSync();

const input = prompt("enter the input values:");

const values = input.split(" ").map(Number);
const mapvalues = values.filter(value => value % 2 !=0).map(value=>value*value);
console.log(mapvalues)