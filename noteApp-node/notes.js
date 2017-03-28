console.log("Starting notes.js..");

module.exports.age = 24;
module.exports.addNote = function (name) {
  console.log("Inside addNote..");
  return `Hello! ${name}.`;
}

// Arrow based function
module.exports.add = (a, b) => {
  return a + b;
}
