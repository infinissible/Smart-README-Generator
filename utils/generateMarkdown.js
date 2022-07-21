// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  }
  return `![badge](https://img.shields.io/badge/license-${license}-brightgreen)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return '';
  }
  return '(https://choosealicense.com/licenses/)';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `This application is covered under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installtation
  ${data.install}

  ## Usage
  ${data.usage}

  ## License  
  ${renderLicenseSection(data.license)}
  [Link]${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  Find me on GitHub
  ${data.username}
  repo: https://github.com/${data.username}
  
  Email me with any questions
  ${data.email}

`;
}

module.exports = generateMarkdown;
