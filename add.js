import PromptSync from "prompt-sync";
const prompt = PromptSync();

const add =(a,b) =>a+b;
const sub =(a,b) =>a-b;
const mul = (a,b) => a*b;
const div = (a,b) => a/b;
const modulo =(a,b) =>a%b;


const a=Number(prompt("a: "));
const b=Number(prompt("b: "));
// console.log(add(a,b));
// console.log(sub(a,b));
// console.log(mul(a,b));
// console.log(div(a,b));
// console.log(modulo(a,b));


const choice = prompt("enter the choice add/sub/mul/div/modulo: ");

if(choice=="add"){
console.log("addition:",add(a,b));
} else if(choice=="sub") {
    console.log("substraction:",sub(a,b));
} else if(choice=="mul") {
    console.log("multiplication:",mul(a,b));
    } else if(choice=="div"){
        console.log("divison:",div(a,b));
    } else if(choice=="modulo"){
        console.log("modulo division:",div(a,b));
    }else{
        console.log("invalid input");
    }
    



