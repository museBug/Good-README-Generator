const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const api = require('./utils/api')


const questions = [
    {
        type: 'input',
        name: 'github',
        message: `What is your Github username?`
    },
    {
        type: `input`,
        name: `title`,
        message: `What is your project's name?`
    },
    {
        type: `input`,
        name: `description`,
        message: `How would you describe your repo?`
    },
    {
        type: `input`,
        name: `installation`,
        message: `How should your app be installed?`
    },
    {
        type: `input`,
        name: `usage`,
        message: `Any instructions on how the app should be used?`
    },
    {
        type: `list`,
        name: `license`,
        message: `What kind of license should your project have?`,
        choices: [`"MIT", "APACHE 2.0", "none", "GPL 3.0", "BSD 3"`]
    },
    {
        type: `input`,
        name: `contributing`,
        message: `What does the user need to know about contributing to the repo?`
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}


function init() {
    inquirer.prompt(questions).then((inquirerResponses) => {
        console.log("Thinking...");

        api.getUser(inquirerResponses.github)
        .then(({ data }) => {
            console.log(data);
            console.log(inquirerResponses);
            writeToFile("README.md", generateMarkdown({...inquirerResponses, ...data}));
        })
    })
}
init();