// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
//['MIT', 'GPLv2', 'Apache', 'GPLv3', 'IBM']
// const { writeFile } = require('fs').promises;
class Markdown {
  static renderLicenseBadge(license) {
      const badges = {
        MIT: '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
        GPLv2: '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)',
        GPLv3: '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)',
        Apache: '![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)',
        IBM: '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)',
      }
      return badges[license];
    }
  // TODO: Create a function that returns the license link
  // // If there is no license, return an empty string
  static renderLicenseLink(license) {
    const licenseLinks = { 
      MIT: '[MIT](https://opensource.org/licenses/MIT)',
      GPLv2: '[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
      GPLv3: '[GPLv3](https://www.gnu.org/licenses/gpl-3.0)',
      Apache: '[Apache](https://opensource.org/licenses/Apache-2.0)',
      IBM: '[IBM](https://opensource.org/licenses/IPL-1.0)',
    }
    return licenseLinks[license];
  }
  // // TODO: Create a function that returns the license section of README
  // // If there is no license, return an empty string
  static renderLicenseSection(license) {
    if(license) {
      return `Licensed under the ${this.renderLicenseLink(license)} license.`
    }
    else {
      return ' '
    }

  }

  // TODO: Create a function to generate markdown for README
  static generateMarkdown(data) {
    return `# ${data.projectName}  

  ${this.renderLicenseBadge(data.license)}

  ## Table of Content
  -[Project Description](#description)  

  -[Installation](#installation)  

  -[Usage](#usage)  

  -[License](#license)  

  -[Contributing](#contributing)  

  -[Tests](#tests)  

  


  ## Description 

  ${data.description}  

  ## Installation  

  ${data.dependencies}

  ## Usage  

  ${data.usage} 

  ## License  

  ${this.renderLicenseSection(data.license)}
  
  ## Links

  Preview of Application:

  https://watch.screencastify.com/v/wVZOM39eNooqgurRaLlb

  Link to Repository:

  https://github.com/AndyLaBorde/README_generator

  ## Contributing          

  ${data.contributions}

  ## Tests   

  ${data.tests}  

  ## Questions  

  If there are any additiopnal questions or inquirires you can contact me through GitHub or Email.      
  GitHub: https://github.com/${data.userName},      
  Email: ${data.emailAddress}       
  `;
  }
}
module.exports = Markdown;

