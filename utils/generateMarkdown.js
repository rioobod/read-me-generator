// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Apache 2.0':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'GNU GPL v3':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    case 'GNU GPL v2':
      return 'License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg';
    default:
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
  function renderLicenseLink(license) {
    switch (license) {
      case 'MIT':
        return 'https://opensource.org/licenses/MIT';
      case 'Apache 2.0':
        return 'https://opensource.org/licenses/Apache-2.0';
      case 'GNU GPL v3':
        return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'GNU GPL v2':
        return 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html';
      default:
        return '';
    }
  }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ''
  } else {
    let licBadge = renderLicenseBadge(license);
    let licLink = renderLicenseLink(license);
    return `[![License: ${license}](${licBadge})](${licLink})`
  }
}

// TODO: Create a function to generate markdown for README
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
  ## License ${renderLicenseSection(license)}
  ## Contributing
  ## Credits ${generateMarkDown(credits)}
  ## Tests 
  ## Questions
  [GitHub Profile](${generateMarkDown(gitHub)})
  [Contact Me:](${generateMarkDown(email)})
  `
 }
