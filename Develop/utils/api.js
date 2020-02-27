const axios = require("axios");
const inquirer = require("inquirer");

const api = {
  getUser(username) {
    const queryUrl = `https://api.github.com/users/${username}`;

    return axios.get(queryUrl);
  }
};

module.exports = api;


