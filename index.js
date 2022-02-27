// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const { writeFile } = require('./utils/generateReadMe');

// TODO: Create an array of questions for user input
//const questions = [];

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();

// using module 9 portifolio generator as base to build on //
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmAddReadMe',
        message: 'would you like to add a ReadMe file"',
        default: false
    },

    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You need to enter a title for your project');
          return false;
        }
      }
  },

     {
      type: "input",
      name: "description",
      message: "Please provide a description for your project?",
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to provide a description for your project');
          return false;
        }
      }
  },

  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions?",
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('You need to provide installation instructions for your project');
        return false;
      }
    }
},

   {
    type: "input",
    name: "usage",
    message: "How will this application be used?",
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('Please state how your project can be used');
        return false;
      }
    }
},

{
  type: 'list',
  name: 'license',
  message: 'What license would you assign with your project? Choose one',
  choices: [
  'MIT', 
  'Apache 2.0', 
  'GNU GPL v3', 
  'GNU GPL v2']

  //  [
  // 'MIT: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
  // 'Apache 2.0: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)', 
  // 'GNU GPL v3: [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)', 
  // 'GNU GPL v2: [![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)']
},

{
  type: "input",
  name: "credits",
  message: "Any third-party attributions?",
  validate: creditsInput => {
    if (creditsInput) {
      return true;
    } else {
      console.log('Please list attributions');
      return false;
    }
  }
},

{
type: "input",
name: "gitHub",
message: "Enter your GitHub profile link?",
validate: gitHubInput => {
  if (gitHubInput) {
    return true;
  } else {
    console.log('Please enter your GitHub profile link');
    return false;
  }
}
},

{
type: "input",
name: "email",
message: "Enter your email address?",
validate: emailInput => {
  if (emailInput) {
    return true;
  } else {
    console.log('Please enter your email');
    return false;
  }
}
}

]);
};

promptUser()
    .then(data => {
        console.log(data)
        return generateMarkdown(data)
    })
  .then((readMePage) => {
    return writeFile(readMePage);
  })
  .catch((err) => {
    console.log(err);
  });