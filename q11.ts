// 11:Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.

function wordsStartsWithA(words:string[]) : string[] {
    return words.filter(words => words.toLowerCase().startsWith("a"));
}  
const wordsArr:  string[] = ["arry","push","amuse","wonder","arrow","awesome"];
const wordsWithAArray : string[] = wordsStartsWithA(wordsArr);


{console.log(wordsWithAArray);

}





