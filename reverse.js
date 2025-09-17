function reversestring (str) {
    return str.split("").reverse().join("")
}

console.log(reversestring("word"));


// Arrow function

const reversestring = str =>{
    return str.split("").reverse().join("")
}

console.log(reversestring("sowmiya"));