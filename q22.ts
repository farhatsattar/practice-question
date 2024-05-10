//22:Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n character.

const words = ["Civic","Honda","Corolla","Suzuki"];
const n1  =  5;
function filterByLength(words:string[], n1 : number):string[]{
    return words.filter(words=> words.length>n1)
    
}    
const filteredWords = filterByLength(words,5)
console.log(filteredWords);