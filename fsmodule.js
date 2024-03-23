const fs = require('fs');

// fs.readFile('file.txt', 'utf-8' ,(err,data)=>{
//     console.log(err,data);
// } )

const bruh = fs.readFileSync('file.txt')
console.log(bruh.toString());

console.log("Finishing reading file");