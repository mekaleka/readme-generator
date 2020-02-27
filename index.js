var inquirer = require("inquirer");
var fs = require('fs');

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "name",
    message: "What is your projects name?"
  },
  {
    type: "input",
    name: "name",
    message: "please write a short description of your project?"
  },
  {
    type: "checkbox",
    message: "What Kind of lisence should your project have?",
    name: "License",
    choices: [
      "MIT", 
      "Apache 2.0", 
      "Gp/3.0", 
      "BSD 3",
      "None"
    ]
  },
  {
    type: "input",
    name: "name",
    message: "What Kind of lisence should your project have?"
  },
  {
    type: "input",
    name: "name",
    message: "What command should be run to install dependencies?"
  },
  {
    type: "input",
    name: "name",
    message: "What command should be run to run tests?"
  },
  {
    type: "input",
    name: "name",
    message: "What does the user need to know about using the repo?"
  },
  {
    type: "input",
    name: "name",
    message: "What does the user need to know about contributing to the repo?"
  },
  

  
]).then(function(data) {

  var filename = data.name.toLowerCase().split(' ').join('') + ".json";

  fs.writeFile(filename, JSON.stringify(data, null, '\t'), function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});




const questions = [

];

function writeToFile(fileName, data) {
}

function init() {

}

init();
