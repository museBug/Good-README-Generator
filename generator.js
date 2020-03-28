module.exports = function({title, description, installation, usage, license, contributors, username, userAvatar, userMail}) {
    let buildString = `# ${title}

### ${description}

## Table of Contents

[Installation](#Installation) | [Usage](#Usage) | [License](#License) | [Contributors](#Contributors) | [Questions](#Questions)

## Installation

${installation}

## Usage

${usage}
## License
${license}
 ## Contributors`;

    for (let name of contributors) {
        buildString += `
[![](https://img.shields.io/badge/github-${name}-brightgreen?style=plastic)](https://www.github.com/${name})`
    }
    buildString += `
## Questions
![](${userAvatar}&s=200)
[![](https://img.shields.io/badge/gitHub-${username}-blue?style=plastic)](https://www.github.com/${username}) | 
[![](https://img.shields.io/badge/email-${userMail}-purple?style=plastic)](mailto:${userMail})
`
    
    return buildString;
    }