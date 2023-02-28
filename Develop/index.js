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
    {
        type: "input",
        name: "description",
        message: "What is your project and what problem is it solving?",
        required: true
    },
    {
        type: "input",
        name: "explanation",
        message: "Why did you create this project?",
        required: true
    },
    {
        type: "input",
        name: "reason",
        message: "How will someone use this application?",
        required: true
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install your project.",
        required: true
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to use this project.",
        required: true
    },
    {
        type: "input",
        name: "contribute",
        message: "Please provide guidelines for contributing.",
        required: true
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide instructions on how to test the project.",
        required: true
    },
];

inquirer.prompt(questions).then((answers) => {
    console.log('Answers:', answers);
    // Perform additional processing or output based on the user's answers here
  });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init()