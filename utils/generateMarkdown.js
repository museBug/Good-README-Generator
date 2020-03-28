function generateProjectUrl(github, title) {
  const kebabCaseTitle = title.toLowerCase().split("").join("-");
  return `https://github.com/${github}/${kebabCaseTitle}`;
}

function renderLicenseBadge(license, github, title) {
  if (license !== "None") {
    return `[![GitHub license] (https://img.shields.io/badge/license-${license}-pink.svg)](${generateProjectUrl})`
  }
  return ''
}

function renderLicenseSection(license) {
  if (license !== "None") {
    return (
      `## License
      
      This project is licensed under the ${license} license.`
    )
  }
  return ''
}

function generateMarkdown(data) {
  return `
# ${data.title}
${renderLicenseBadge(data.lecense, data.github, data.title)}

## Description

${data.description}

## Table of contents

* [Installation](#installation)
* [License](#license)
* [Contributing](#contributing)
* [Questions](#questions)
* [Usage](#usage)

## Installation

${installation}

## Usage

${usage}

## License

${license}

## Contributors`
}

renderLicenseBadge()
renderLicenseSection()

module.exports = generateMarkdown();

//     for (let name of contributors) {
//         buildString += `
// [![](https://img.shields.io/badge/github-${name}-brightgreen?style=plastic)](https://www.github.com/${name})`
//     }
//     buildString += 
// ## Questions
// ![](${userAvatar}&s=200)
// [![](https://img.shields.io/badge/gitHub-${username}-blue?style=plastic)](https://www.github.com/${username}) | 
// [![](https://img.shields.io/badge/email-${userMail}-purple?style=plastic)](mailto:${userMail})

// return buildString;
//   }


