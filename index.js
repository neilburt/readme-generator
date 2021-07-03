const fs = require('fs');
const inquirer = require('inquirer');

// questions for Inquirer prompt method to gather information from user
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
  type: 'list',
  message: "Select the license that this application is covered under.",
  choices: ["Apache", "Eclipse", "GNU", "MIT", "Mozilla", "Unlicense"]
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
])

// table of contents formulation
.then(function(responses){
  let table = `## Table of Contents\n`;

  if(responses.install){
    table += `- ### [Installation](#installation)\n`
  }
  if(responses.usage){
    table += `- ### [Usage](#usage)\n`
  }
  if(responses.license !== ""){
    table += `- ### [Licenses](#licenses)\n`
  }
  if(responses.credits){
    table += `- ### [Contributing](#contributing)\n`
  }
  if(responses.tests){
    table += `- ### [Tests](#tests)\n`
  }
  if(responses.questions){
    table += `- ### [Questions](#questions)\n`
  }

// renders the Markdown language
  const readme =
`# ${responses.title}  \n
![license badge](https://img.shields.io/badge/license-${responses.license}-orange)  \n
## Description  \n
${responses.description}  \n
${table}  \n
## Installation  \n
${responses.install}  \n
## Usage  \n
${responses.usage}  \n
## License  \n
This application is covered under the ${responses.license} license.  \n
## Contributing  \n
${responses.credits}  \n
## Tests  \n
${responses.tests}  \n
## Questions  \n
If you have any additional questions:  \n
Visit my [GitHub profile](https://github.com/${responses.github}).  \n
Or you can [email me](mailto:${responses.email}).`

  // produces the actual README.md
  fs.writeFile("README.md", readme, (error) => {
    if(error){console.log(error)}
    else{console.log("Your README is complete.")}
  })
})