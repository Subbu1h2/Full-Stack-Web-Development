/* simple calculator

var num1 = 2;
var num2 = 5;
var operator = '';

switch(operator){
    case '+':
        console.log(num1 + '+' + num2 + '=' + (num1 + num2));
        break;
    case '-':
        console.log(num1 + '-' + num2 + '=' + (num1 - num2));
        break;
    case '*':
        console.log(num1 + '*' + num2 + '=' + (num1 * num2));
        break;
    case '/':
        console.log(num1 + '/' + num2 + '=' + (num1 / num2));
        break;
    case '%':
        console.log(num1 + '%' + num2 + '=' + (num1 % num2));
        break;
    default:
        console.log('invalid operator');
}
        */

/*
 Task 2:

for(let i = 1; i <= 10; i++){
     console.log(i + ' * 5 = ' + (i * 5));
     
}
     */

/* Task 3:

var number = 5;
var factorial = 1;
for( let i = 1; i <= number; i++){
    factorial = factorial  * i; 
}
console.log('Factorial of ' + number + ' is ' + factorial);
*/

// Task 4:

for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");     
    }else if(i % 3 == 0){
        console.log ("Fizz");
    }else if(i % 5 == 0){
        console.log("Buzz"); 
    }else {
        console.log(i);
        
    }
}
