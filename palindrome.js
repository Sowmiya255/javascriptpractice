// function palindrome (str){
//     const reversed = str.split("").reverse().join("");

//     if(str==reversed){
//         console.log("it is palindrome");
//     }
//     else {
//         console.log("not a palindrome");
//     }
// }

// console.log(palindrome("wow"));






// //arrow function

// const prompt = require("prompt-sync")();

// const plaindrome =(name)=>{
//     const reversed =name.split("").reverse().join("")
//     if(name == reversed){
//         return "it is a pailndrome";}
//         else {
//         return "not a palindrome";
//     }
// }
// const name = prompt("enter the input:");

// console.log(plaindrome(name));


// using return 

import PromptSync from "prompt-sync";
const prompt = PromptSync();

const palindrome = (name) =>{
    const reversed = name.split("").reverse().join("");
    return {
        original: name,
        reversedstring :reversed,
        ispalindrome : name==reversed,

    }

}
const name = prompt("enter your input");
console.log(palindrome(name));