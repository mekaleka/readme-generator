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
      choices: ["MIT", "Apache 2.0", "Gp/3.0", "BSD 3", "None"]
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

      var readmeData = `Good Read.me Generator\n NAME:${data.name}\n
      PROJECT:${data.projectname}\n
      DESCRIPTION:${data.description}\n
      [![GitHub license](https://img.shields.io/badge/license-${data.license}-blue.svg)]
      DEPENDENCIES:${data.dependencies}\n
      TEST:${data.test}\n
      REPO:${data.repo}\n
      FOLLOWERS:${apidata.data.followers}
      CONTRIBUTING:${data.contributing}`;
      var filename = "README.md";
      // data.name
      //   .toLowerCase()
      //   .split(" ")
      //   .join("") + ".json";

      fs.writeFileSync(filename, readmeData, function(err) {
        if (err) {
          return console.log(err);
        }

        console.log("Success!");
      });
    });
  });

const questions = [];

// function writeToFile(fileName, data) {}

// function init() {}

// init();
