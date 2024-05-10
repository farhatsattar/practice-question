// 25:Develop a function countOccurrences that counts how many times a specific element appears in an array.
let elementArr = [2,3,4,5,4,4,6,4];
function countOccurrences(arr : number[] , target: number){
let count = 0;
for(const items of arr){
    if(items===target){
        count++;
    }
}
return count;
}
let targetElement =4;
let occurrences = countOccurrences(elementArr,targetElement);
console.log(`The element ${targetElement} appears ${occurrences} times in the array.`);