// import axios from "axios";
// import inquirer from "inquirer";
const axios = require("axios");
const inquirer = require("inquirer");

// const api = {
//   getUser(username) {

//   }
// };

// module.exports = api;

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function({ username }) {
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl);
  })
  .then(function({ data: repos }) {
    console.log(repos);
  });
