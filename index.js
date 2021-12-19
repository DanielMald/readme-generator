// TODO: Include packages needed for this application
const generateMarkdown=require("./utils/generateMarkdown")
const inquirer=require("inquirer")
const fs=require("fs")
// TODO: Create an array of questions for user input
const questions = [{
    type:"input",
    name:"title",
    message:"What's the title to your project?"
},
{
    type:"input",
    name:"discription",
    message:"What do you want in the discription?",
},
{
    type:"list",
    name:"license",
    message:"Choose a license",
    choices:["Mit","GNU","Apache"]
},
{
    type:"input",
    name:"installationInstructions",
    message:"What are the Installation Instructions?",
},
{
    type:"input",
    name:"usageInformation",
    message:"What would you like to put in the Usage Information?",
},
{
    type:"input",
    name:"contributionGuidelines",
    message:"What would you like to put in the Contribution Guidelines?",
},
{
    type:"input",
    name:"testInstructions",
    message:"What would you like to put in the Test Instructions?",
},
{
    type:"input",
    name:"username",
    message:"What is your GitHub username?",
},
{
    type:"input",
    name:"email",
    message:"What is your GitHub email?",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName,data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(response){
        console.log(response)
        const readMeText=generateMarkdown(response)
        console.log(readMeText)
        writeToFile("newReadMe.md",readMeText)
    })
}

// Function call to initialize app
init();
