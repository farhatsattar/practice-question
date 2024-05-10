// 21: Write a function calculateProduct that takes an array of numbers and returns the product of all elements.
let arrayOfnum = [4,8,10,12];
function calculateProduct(arr:number[]){
    
       let product =1;
       for(let num of arr)
       {product*=num

       }return product;
    
}
console.log("product of all elements:",calculateProduct(arrayOfnum));