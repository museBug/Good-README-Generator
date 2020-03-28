const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const fetch = require('node-fetch');
const generateReadme = require('./generator.js');

const writeFileAsync = util.promisify(fs.writeFile);

let answers;
let readme;

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: `What is your project's name?`
  },
  {
      type: `input`,
      name: `description`,
      message: `What is your project's description?`
  },
  {
      type: `input`,
      name: `installation`,
      message: `What command should be run to install dependencies?`,
  },
  {
      type: `input`,
      name: `usage`,
      message: `Any instructions on how the app should be used?`,

  },
  {
      type: `input`,
      name: `license`,
      message: `What kind of license should your project have?`
  },
  {
      type: `input`,
      name: `contributors`,
      message: `Usernames of contributors, separated by commas?`
  },
  {
      type: 'input',
      name: `username`,
      message: `What is your Github username?`
  }
])
}

async function init() {
  
  try {
    const answers = await promptUser();
    answers.contributors = answers.contributors.split("").join("").split(",");
    let getApi = await fetch(`https://api.github.com/users/${answers.username}`);
    getApi = await getApi.json();
    let getEmail = await fetch(`https://api.github.com/users/${answers.username}/events/public`);
    getEmail = await getEmail.json();
    answers.userAvatar = getApi.avatar_url;
    answers.userMail = getEmail[0].payload.commits[0].author.email;
    const myText = generateReadme(answers);

    await writeFileAsync("README.md", myText, 'utf8');

    console.log("Successfully wrote to README.md");
  } catch(err) {
    console.log(err);
  }
}

init();
