const fs = require('fs');
/*
fs.readFile('testfile', 'utf8', (err, data) => {
    console.log(data);
})
console.log("this should be printed after file content BUT it print before")
*/

// //# READ FILE SYNC - await type bs
/*
const x = fs.readFileSync('file')
console.log(x.toString()) //important to convert in string
console.log("this should be printed after file content")
*/

// //# WRITE
/*
fs.writeFile('file', "data given to file by FS mod",()=>{
    console.log("line 1")
});
console.log('write file after line')
*/

// // # WRITE SYNC
/*
const wrs = fs.writeFileSync('file2.txt', "data given to file 2 by FS mod")
console.log("write file sync after line")/
*/
