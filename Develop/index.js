// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");

// TODO: Create an array of questions for user input
// Added questions for every requirement for challenge
// Used the validate input function to test the input and whether anything has been inputted
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title for your project?",
        validate: (input) => {
            return input ? true : 'Please enter a title for your project';
          },
    },
    {
        type: "input",
        name: "githubUsername",
        message: "What is your GitHub Username?",
        validate: (input) => {
            return input ? true : 'Please enter your GitHub Username!';
          },
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (input) => {
            return input ? true : 'Please enter your emial adress!';
          },
    },
    {
        type: "input",
        name: "description",
        message: "What is your project and what problem is it solving?",
        validate: (input) => {
            return input ? true : 'Please enter a description for your project!';
          },
    },
    {
        type: "input",
        name: "explanation",
        message: "Why did you create this project?",
        validate: (input) => {
            return input ? true : 'Please enter a reason for creating your project!';
          },
    },
    {
        type: "input",
        name: "reason",
        message: "How will someone use this application?",
        validate: (input) => {
            return input ? true : 'Please enter how someone will use your porject!';
          },
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide instructions on how to install your project.",
        validate: (input) => {
            return input ? true : 'Please enter valid instructions on how to install your project!';
          },
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions on how to operate this project.",
        validate: (input) => {
            return input ? true : 'Please enter instructions on how to operate your project!';
          },
    },
    // The license took awhile to figure out but I added them based on their url name so the links and badges can accurately be added to the readme.md
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'gpl', 'lgpl', 'mpl', 'apache', 'mit', 'bsl', 'unlicense']
    },
    {
        type: "input",
        name: "contribute",
        message: "Please provide guidelines for contributing.",
        validate: (input) => {
            return input ? true : 'Please enter guidelines for contributing!';
          },
    },
    {
        type: "input",
        name: "testing",
        message: "Please provide instructions on how to test the project.",
        validate: (input) => {
            return input ? true : 'Please enter instructions on how to test this project!';
          },
    },
];

// TODO: Create a function to write README file
// This function writes the readme and passes a console log to show that it has been saved
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
}

// TODO: Create a function to initialize app
// This passes the question answers into the readme and generates the files
function init() {
    return inquirer.prompt(questions)
    .then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('generated-README.md', markdown);
        console.log("README.md file has been created successfully!");
      })
      .catch((error) => {
        console.log(error);
      });
}

// Function call to initialize app
init();