// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const Markdown = require('./utils/generateMarkdown');
const fs = require('fs');
// TODO: Create an array of questions for user input
// const questions = [];
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is your Github username",
            name: "userName",
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
            name: "description",
        },
        {
            type: "checkbox",
            message: "What kind of license should your project have?",
            choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'IBM'],
            name: "license",
        },
        {
            type: "input",
            message: "What command should be run to install dependencies?",
            name: "dependencies",
        },
        {
            type: "input",
            message: "What command should be run to run tests?",
            name: "tests",
        },
        {
            type: "input",
            message: "What does the user need to know about using the repo?",
            name: "usage",
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
// const generateREADME = ({ userName, emailAddress, projectName, projectDescription, license, dependencies, test, userInfo, contributions, licenseImg}) => 
//         `# ${projectName} ${licenseImg} 

// ## Description 

// ${projectDescription}  

// ## Installation  

// ${dependencies}

// ## Usage  

// ${userInfo} 

// ## License  

// ${license}   

// ## Contributing          

// ${contributions}

// ## Tests   

// ${test}  

// ## Questions  

// If there are any additiopnal questions or inquirires you can contact me through GitHub or Email.      
// GitHub Username: ${userName},      
// Email: ${emailAddress}       
// `


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((response) => {
            const mark = Markdown.generateMarkdown(response)
            fs.writeFile('README.md', mark, function (err) {
                if (err){
                    console.error(err);
                }
                else {
                    console.log('Successfully wrote to README.md')
                }
            })
        })
        .catch((error) => {
            console.log(error);
        })
};       
// Function call to initialize app
init();
