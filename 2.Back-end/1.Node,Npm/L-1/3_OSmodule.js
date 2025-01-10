// first import OS module
const os =  require('os'); /*you dont need "./" in this cuz it in-build function*/

//now you can run all OS module functions - https://nodejs.org/api/os.html
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.release())
console.log(os.platform())
console.log(os.type())
console.log("up time = ",os.uptime())
console.log(os.userInfo())
console.log(os.version())
console.log(os.tmpdir()) //Returns the operating system's default directory for temporary files as a string.

