// TODO: Include packages needed for this application
// Finished

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?",
        required: true
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username?",
        required: true
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        required: true
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()