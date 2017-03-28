// Initialization file for our application

// nodejs.org/api for documentation about modules
console.log("Starting app.js..");

// require use case #1 Built in modules
const fs = require('fs'); // Call all the module information for File System and store them in fs variable.
const os = require('os'); // Call OS module

// require use case #2 Import your own files using module
const notes = require('./notes.js'); // './' relative path

// require use case #3 Import 3PP modules. We define these in package.json


var name = os.userInfo();
var result = notes.addNote(name.username);
console.log(result);

var add = notes.add(-9,-3);
console.log(add);
//console.log(name);
// fs.appendFile('greetings.txt', 'Hello, World! ' + name.username + '!');

// fs.appendFile('greetings.txt', `\nHello! ${name.username}. You are ${notes.age}.`); // Another method
