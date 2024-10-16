 /* Task 1
 
 var numbers = [23,45,67,12,89,34];
var max = numbers[0];

for(let i = 0; i < numbers.length; i++){
     if(numbers[i] > max){
        max = numbers[i];
     }
}
console.log('The maximum number is '+ max);

*/

/*
 Task 2

var numbers = [1,2,3,4,5];
var reverseArray = numbers.reverse();
console.log(reverseArray);

*/

/*
 Task 3:

var numbers = [1,2,3,1,2,4,5,4,6];
let uniqueNumbers = [...new Set(numbers)];
console.log(uniqueNumbers);

*/

/*
 Task 4 :

var matrix = [[1,2,3],[4,5,6],[7,8,9]];
var res = matrix.flat();
console.log(res);

*/

/*
 Task 5:

var numbers = [1,2,3,4,5];
var sum = 0;
for(let i = 0; i < numbers.length; i++){
    sum = sum + numbers[i];
}
let average = sum / numbers.length;
console.log(average);

*/

// Task 6:

var array  = [1,2,3,4,5,6,7];
var targetSum = 8;
var result = [];
for(let i = 0; i <array.length; i++){
    for(let j = i + 1; j <array.length; j++){
        if(array[i] + array[j] === targetSum){
            result.push([array[i],array[j]]);
        }
    }
}
console.log( 'Pairs that add ' ,targetSum , ':' , result);


