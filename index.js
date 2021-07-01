// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
inquirer 
  .prompt([
{
  name: 'title',
  type: 'input',
  message: "What is the name of your project?"
},
{
  name: 'description',
  type: 'input',
  message: "Provide a brief description of the project."
},
{
  name: 'table',
  type: 'input',
  message: "List what you would like in the table of contents."
},
{
  name: 'install',
  type: 'input',
  message: "Provide instructions on how to install this application."
},
{
  name: 'usage',
  type: 'input',
  message: "Describe how the application is used."
},
{
  name: 'license',
  type: 'checkbox',
  message: "Select any licenses that this application is covered under.",
  choices: [""]
},
{
  name: 'credits',
  type: 'input',
  message: "List the individuals and parties contributing to the project."
},
{
  name: 'tests',
  type: 'input',
  message: "Describe any recommended testing techniques for your application."
},
{
  name: 'github',
  type: 'input',
  message: "Please enter your GitHub username."
},
{
  name: 'email',
  type: 'input',
  message: "Please enter your email address."
}
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
