
// Task 1:

function string(str){
   var resverseString = str.split('').reverse().join('')
   console.log(resverseString);
   
}string("hello")

console.log("--------------------------------------------------------------------------------");
// Task 2:

function factorial(n){
   if(n == 0){
    return 1;
   }else{
    return factorial(n-1) * n
   }
   
}
console.log(factorial(5));

console.log("--------------------------------------------------------------------------------");
// Task 3:

/*
function fibnacci(n){
    var a = 0, b = 1; sum = 0;
    for(var i = 0; i < n; i++){
        sum = a + b;
        a = b;
        b = sum
        console.log(b);
        
    }
}
fibnacci(5); */

function fibnacci(n){
    const fib = [0,1]
    for(let i = 2; i < n; i++){
        fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}
console.log(fibnacci(5));

console.log("--------------------------------------------------------------------------------");
// Task 4:

function stringOperations(str){
     return {
        length: str.length,
        uppercase: str.toUpperCase(),lowercase: str.toLowerCase()
      };

    
}
console.log(stringOperations("swamy"));
console.log(stringOperations("HelloWorld"));
console.log(stringOperations("JavaScript"));

console.log("--------------------------------------------------------------------------------");

// Task 5:

function countVowels(str){
    const vowels = "aeiouAEIOU";
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));
console.log(countVowels("Java Script"));
console.log(countVowels("alphabets"));

console.log("--------------------------------------------------------------------------------");

// Task 6

function flattenArray(nestedArray){
   var flattened = [];
   for(var i = 0;i < nestedArray.length; i++){
    if(Array.isArray(nestedArray[i])){
        flattened = flattened.concat(flattenArray(nestedArray[i]));
    }else {
        flattened.push(nestedArray[i]);
    }
   }
   return flattened;
}
console.log(flattenArray([1, [2, [3, 4], 5], 6]));

console.log("--------------------------------------------------------------------------------");
/*
 have a doubt on this abput flat 
const array = ([1, [2, [3, 4], 5], 6]);
const res = array.flat(Infinity);
console.log(res);
*/