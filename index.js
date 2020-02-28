
//require inquirer
var inquirer = require("inquirer");
//require fs
var fs = require("fs");
//linking the api file. 
var api = require("./Develop/utils/api.js");

inquirer
//prompt for input, questions and title name. 
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?"
    },
    {
      type: "input",
      name: "projectname",
      message: "What is your projects name?"
    },
    {
      type: "input",
      name: "description",
      message: "please write a short description of your project?"
    },
    {
      type: "list",
      message: "What Kind of lisence should your project have?",
      name: "license",
      choices: ["MIT", "Apache 2.0", "Gp/3.0", "BSD3", "None"]
    },
    {
      type: "input",
      name: "dependencies",
      message: "What command should be run to install dependencies?"
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?"
    },
    {
      type: "input",
      name: "repo",
      message: "What does the user need to know about using the repo?"
    },
    {
      type: "input",
      name: "contributing",
      message: "What does the user need to know about contributing to the repo?"
    },
    {
      type: "input",
      message: "Enter your GitHub username",
      name: "username"
    }
  ])
  //function gets user data and appends it. 
  .then(function(data) {
    //inside object includes project name, titles, contents and links to user photo, license and email. 
    api.getUser(data.username).then(apidata => {
      console.log(apidata);

      var readmeData = `
# ${data.name}

![github-med](https://avatars2.githubusercontent.com/u/58678985?s=460&v=4)
 
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Project Name: 
 ${data.projectname}

## Table of Contents:
- [Description](#Description)
- [Install-Dependencies](#Install-Dependencies)
- [Test](#Test)
- [Repository](#Repository)
- [Contributing](#Contributing)
- [Followers](#Followers)
- [Contact](#Contact)
- [Questions](#Questions)

## Description: 
 ${data.description}

## Install Dependencies: 
\`${data.dependencies}\`

## Test: 
\`${data.test}\`

## Repository: 
 ${data.repo}

## Contributing: 
 ${data.contributing}

## Contact: 
 ${apidata.data.email || "michaeljamesplichta@gmail.com"}

## [Link to deployd App](https://mekaleka.github.io/readme-generator/)

## Questions
If you have any questions please email me directly. Thank You 
`;
      var filename = "README.md";
      //fs to write file to filename and readmeData
      fs.writeFileSync(filename, readmeData, function(err) {
        if (err) {
          //if no err then return success in the console. 
          return console.log(err);
        }

        console.log("Success!");
      });
    });
  });

const questions = [];
