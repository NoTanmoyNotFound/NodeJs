const fs = require('fs');

// fs.readFile('file.txt', 'utf-8' ,(err,data)=>{
//     console.log(err,data);
// } )


// const bruh = fs.readFileSync('file.txt')
// console.log(bruh.toString());

fs.writeFile('file2.txt', "This is file 2 content",()=>{
    console.log("file changed");
})

console.log("Finishing reading file");