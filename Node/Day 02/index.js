//import file

let data = require('./app.js')

// console.log(data())

// console.log(data)
// console.log(data.age)
// console.log(data.studentData())
// console.log(data.student.name)

let fs  = require('fs')
// console.log (fs)

fs.writeFile("index.txt","Hello from the node js", ()=>{
    // console.log("file has created successfully");
    
} )
fs.readFile("index.txt",'utf8',(err,data) =>{
//    console.log(data);
   
})
fs.unlink("index.txt",()=>{
    // console.log("this file has deleted");
    
})

let path = require('path')
// console.log(path);

let filePath = path.join('folder','subfolder','file.txt')
// console.log(filePath);
console.log(path.extname(filePath));

