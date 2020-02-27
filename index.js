var inquirer = require("inquirer");
var fs = require("fs");
var api = require("./Develop/utils/api.js");

inquirer
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
  .then(function(data) {
    api.getUser(data.username).then(apidata => {
      console.log(apidata);

      var readmeData = `
# ${data.name}

![github-med](https://avatars2.githubusercontent.com/u/58678985?s=460&v=4)
 
![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## Project Name: 
 ${data.projectname}

## DESCRIPTION: 
 ${data.description}

## INSTALL DEPENDENCIES: 
\`${data.dependencies}\`

## TEST: 
\`${data.test}\`

## REPO: 
 ${data.repo}

## FOLLOWERS: 
 ${apidata.data.followers}

## CONTRIBUTING: 
 ${data.contributing}

## CONTACT: 
 ${apidata.data.email || "No contact information"}
`;
      var filename = "README.md";

      fs.writeFileSync(filename, readmeData, function(err) {
        if (err) {
          return console.log(err);
        }

        console.log("Success!");
      });
    });
  });

const questions = [];

