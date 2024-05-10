// Write a function incrementAll that takes an array of integers and increments each element by one.

const integersArr = [1,2,3,4,5];
function incrementAll(arr : number[]) {
    for(let i=0;i<arr.length;i++ ){
        arr[i] += 1;
        
        
    }
    return (arr);    
}
const incrementedAll=incrementAll(integersArr)
console.log(incrementedAll);