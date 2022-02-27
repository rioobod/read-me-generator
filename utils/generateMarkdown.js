// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//function generateMarkdown(data) {
  //return `# ${data.title}

//`;
//}

const generateMarkDown = titleText => {
  if (!titleText) {
    return '';
  }
  return `
   ${titleText}
  `
  // console.log(titleText);
}

//const generateProj = projArrs => {
  //return `
  
  //`
//}
module.exports = templateData => {
  const {title, description, installation, usage, license, credits, gitHub, email} = templateData;
  return `
  # Project Title: ${generateMarkDown(title)}
  ## Project Description: ${generateMarkDown(description)}
  ## Table of Contents:

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation ${generateMarkDown(installation)}
  ## Usage ${generateMarkDown(usage)}
  ## License ${generateMarkDown(license)}
  ## Contributing
  ## Credits ${generateMarkDown(credits)}
  ## Tests 
  ## Questions
  ${generateMarkDown(gitHub)}
  ${generateMarkDown(email)}
  `
 }
