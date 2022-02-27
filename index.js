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