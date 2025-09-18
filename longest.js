import PromptSync from "prompt-sync";
const prompt = PromptSync();
  
function longestword(sentence){
    let words = sentence.split(" ");
    let longest=" ";

    for(let i=0;i<words.length;i++){
        if(words[i].length>longest.length){
            longest=words[i];
        }
    }
    return longest;
}
const sentence = prompt("enter the input");
console.log(longestword(sentence));

