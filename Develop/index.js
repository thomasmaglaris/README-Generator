var inquirer = require("inquirer");
var fs = require("fs")
var generateMd = require("./utils/generateMarkdown");
var fileName = "README.md"

// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Describe the project",
    name: "description"
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation"
  },
  {
    type: "input",
    message: "What are the contribution guidelines?",
    name: "contribution"
  },
  {
    type: "input",
    message: "Any information about the usage?",
    name: "usage"
  },
  {
    type: "input",
    message: "What are the instructions to test this?",
    name: "test"
  },
  {
    type: "list",
    message: "Choose a license",
    name: "license",
    choices: [
      "MIT",
      "Apache 2.0",
      "GNU General Public License v3.0"
    ]
  },
  {
    type: "input",
    message: "Enter your github username",
    name: "github"
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "email"
  },
];

// function to write README file
function writeToFile(fileName, data) {
  var dataMd = generateMd(data);
  fs.writeFile(fileName, dataMd, function(err, result) {
      if (err) {
          throw err
      }
      else {
          console.log("README.md creation succesfful!");
      }
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(response => writeToFile(fileName, response));
}

// function call to initialize program
init();
