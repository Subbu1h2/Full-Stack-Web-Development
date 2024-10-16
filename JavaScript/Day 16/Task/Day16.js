// Task :1

let book = {
    title : "na saavu nenu sastha neeku enduku",
    author : "priya darshi",
    yearPublished : 2018 ,
    genre : "pakka commercial"
}

console.log(book.title);
console.log(book.author);
console.log(book.yearPublished);
console.log(book.genre);
console.log(book["title"]);
console.log(book["author"]);
console.log(book["yearPublished"]);
console.log(book["genre"]);


// Task :2 

let car = {
    make : "TATA",
    model : "Altroz",
    year : 2022,
    color : "black"
}
car.color = "blue",
delete car.year;
console.log(car);


// Task : 3

let student = {
    name : "swamy",
    age : 21,
    address : {
       street : "Narsipatnam",
       city : "Visakhapatnam",
       state : "Andhra Pradesh"
    },
    courses : {
        HTML : 'A',
        CSS : 'A',
        JavaScript : 'A'
    }
}

console.log(student.address.city);
console.log(student.address.state);
console.log(student["courses"]["HTML"]);


// Task : 4

let employee = {
    name : "Swamy kola",
    position : "jr.Developer",
    department : "Developement",
    salary : 50000,
}
for(let key in employee){
    console.log(`${key}: ${employee[key]}`);
    
}

// Task : 5

let calculator = {
    num1 : 10,
    num2 : 5,


add: function(){
    return this.num1 + this.num2;
},
subtract: function() {
    return this.num1 - this.num2;
},
multiply: function(){
    return this.num1 * this.num2;
},
divide: function(){
    return this.num1 / this.num2;
}
}
console.log(calculator.add());
console.log(calculator.subtract());
console.log(calculator.multiply());
console.log(calculator.divide());


// Task : 6

let company = {
      name : "HSC",
      location : "HYD",
      employees :{
        swamy : "Developer",
        sai : "Testing",
        suresh : "Automation"
      }
};
for(let key in company){
    console.log(`${key}: ${company[key]}`);   
  if (key === 'employees') {
    console.log('Employee List:');
    for (let employee in company.employees) {
      console.log(`${employee}: ${company.employees[employee]}`);
    }
  }
}


// Task : 7

let  people = {
    swamy : 21,
    sai : 23,
    pavani : 23,
    manoj : 24,
};

let totalAge = 0;
let numberOfPeople = 0;

for(let person in people){
    totalAge += people[person];
    numberOfPeople++;
}

let averageAge = totalAge / numberOfPeople;

console.log(`The average age is ${averageAge}`);
