//require axios
const axios = require("axios");
//require inquirer
const inquirer = require("inquirer");
//api call to user GitHub with username. 
const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;
    //getting the axios return from queryUrl.
    return axios.get(queryUrl);
  }
};
//exporting public api
module.exports = api;
