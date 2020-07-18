// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License 
  (https://img.shields.io/badge/License-${data.license}-green)

  ## Description
  ${data.description}

  ## Table of Contents

  * [Installation](#installation)

  * [Contributing](#contributing)

  * [Usage](#usage)

  * [Tests](#tests)

  * [License](#license)

  * [Questions?](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  The licensing for this application is through: ${data.license}
  (https://img.shields.io/badge/License-${data.license}-green)
      
  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.test}
      
  ## Questions?
 
  GitHub: http://github.com/${data.github}
  Email: ${data.email}`;
}


module.exports = generateMarkdown;
