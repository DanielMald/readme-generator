// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Discription

${data.discription}


## Installation Instructions

${data.installationInstructions}

## Usage Information

${data.usageInformation}

## Contribution Guidelines

${data.contributionGuidelines}

## Test Instructions

${data.testInstructions}

## Badges

![license](https://img.shields.io/badge/license-${data.license}-blue.svg)

## GitHub Username

${data.username}

## GitHub Email

${data.email}
`;
}

module.exports = generateMarkdown;
