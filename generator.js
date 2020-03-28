module.exports = function ({title, description, installation, usage, license, contributors, username, userAvatar, userMail}) {
    let generateString = `# ${title}
  
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
          generateString += `
          
  [![](https://img.shields.io/badge/GitHub-${name}-brightgreen?style=plastic)](https://www.github.com/${name})`
      }
      generateString += `
  ## Questions
  
  ![](${userAvatar}&s=150)
  
  [![](https://img.shields.io/badge/gitHub-${username}-blue?style=plastic)](https://www.github.com/${username}) | 
  [![](https://img.shields.io/badge/email-${userMail}-pink?style=plastic)](mailto:${userMail})
  `
      
      return generateString;
      
  }

