// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const { writeFile } = require('fs').promises;
// TODO: Create an array of questions for user input
// const questions = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Github username",
            name: "username",
        },
        {
            type: "input",
            message: "What is your email address?",
            name: "emailAddress",
        },
        {
            type: "input",
            message: "What is the project name?",
            name: "projectName",
        },
        {
            type: "description",
            message: "Please write a short description of your project",
            name: "projectDescription",
        },
        {
            type: "input",
            message: "What kind of license should your project have?",
            name: "license",
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "dependancies",
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "test",
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "userInfo",
        },
        {
            type: "input",
            message:
            "What does the user need to know about contributing to the repo?",
            name: "contributions",
        },
    ])
}

// TODO: Create a function to write README file
const generateREADME = ({ userName, emailAddress, projectName, projectDescription, license, dependencies, test, userInfo, contributions}) =>
        `## ${projectName}  
        # Description  
        ${projectDescription}  
        # Installation  
        ${dependencies}  
        # Usage  
        ${userInfo}  
        # License  
        ${license}   
        # Contributing  
        ${contributions}  
        # Tests  
        ${test}  
        # Questions  
        If there are any additiopnal questions or inquirires you can contact me through GitHub or Email.  
        GitHub: ${userName},  
        Email: ${emailAddress},    
        `
// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((response) => writeFile('README.md', generateREADME(response)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));
};       
// Function call to initialize app
init();
