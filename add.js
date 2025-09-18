import PromptSync from "prompt-sync";
const prompt = PromptSync();

const add =(a,b) =>a+b;
const sub =(a,b) =>a-b;
const multipication = (a,b) => a*b;
const div = (a,b) => a/b;
const modulo =(a,b) =>a%b;


const a=Number(prompt("a: "));
const b=Number(prompt("b: "));
console.log(add(a,b));
console.log(sub(a,b));
console.log(multipication(a,b));
console.log(div(a,b));
console.log(modulo(a,b));



