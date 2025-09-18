import PromptSync from "prompt-sync";
const prompt = PromptSync();

function numberofvowels(word){
    word = word.toLowerCase();

    let count = 0;
    let vowels ="aeiou";

    for(let i =0;i<word.length;i++){
        if(vowels.includes(word[i])){
            count++;
        }
    }
    return count;
}
const word = prompt("enter the word: ");
console.log(numberofvowels(word));