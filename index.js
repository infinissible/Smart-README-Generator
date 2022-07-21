// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project ?',
  },
  {
    type: 'input',
    name: 'description',
    message:
      'Provide a short description explaining the what, why, and how of your project:',
  },
  {
    type: 'input',
    name: 'install',
    message: 'What are the steps required to install your project ?',
    default: 'npm install',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions and examples for use:',
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Who are the contributors of this project?',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Provide examples on how to run this project:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What kind of license is this project covered under ?',
    choices: [
      'MIT',
      'APACHE2.0',
      'Boost1.0',
      'CCO',
      'Eclipse',
      'Perl',
      'GPL3.0',
      'BSD3',
      'None',
    ],
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username ?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address:',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      console.log('README file has been successfully created !');
    });
  });
}

// TODO: Create a function to initialize app
async function init() {
  return await inquirer
    .prompt(questions)
    .then((answers) => {
      return generateMarkdown(answers);
    })
    .then((readmeFile) => {
      return writeToFile('./dist/README.md', readmeFile);
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
