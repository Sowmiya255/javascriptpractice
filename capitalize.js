import PromptSync from "prompt-sync";
const prompt = PromptSync();

function capitalizeword(sentence){
    let words = sentence.split(" ");
    for(let i=0;i<words.length;i++){
        words[i] = words[i][0].toUpperCase()+words[i].slice(1);
    }
    return words.join(" ");
}
const sentence = prompt("enter the sentence");
console.log(capitalizeword(sentence));

 