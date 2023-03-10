// The following code uses template literals to call each section the the correct placement in the reamme file. 
// Finally the generateMarkdwon takes the data from the index.js and adds it to the scetion based on the literal for when the readme is produced.

/// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "unlicense" ) {
    return `![badge](https://img.shields.io/badge/license-${license}-blue)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "unlicense") {
  return `[${license}](https://choosealicense.com/licenses/${license})`;
} else {
  return "";
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "unlicense") {
    return`
  ## [License](#table-of-contents)

  This application is under the following license:

  ${renderLicenseLink(license)}
    `;
  } else {
    return "This project does not have a designated license";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.description}

  ${data.explanation}

  ${data.reason}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  ## [Credits](#table-of-contents)

  ${data.contribute}

  ${renderLicenseSection(data.license)}
  
  ## [Tests](#table-of-contents)

  ${data.testing}

  ## [Questions](#table-of-contents)

  Contact Information:

  GitHub: (https://github.com/${data.githubUsername})

  Email: ${data.email}
`;
}

module.exports = generateMarkdown;
