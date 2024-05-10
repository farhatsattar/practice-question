//19:Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.

let elementinArr = [1,2,3,4,5,] ;
function findElement(arr : any[], element :any ){
    for(let i=0;i<arr.length;i++){
        if( arr[i]=== element){
        return i
    }
        
    

    }return -1
}
let index1= findElement(elementinArr,4);
console.log("index of element 4:",index1);
let index2=findElement(elementinArr,6);
console.log("index of element 6:",index2)