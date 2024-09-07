# Cypress E-Commerce Test Repository

This project automates both frontend and backend testing for an e-commerce setup using **Cypress**. It covers price comparison for online platforms (e.g., Reliance Digital and Croma) and backend API testing using **JSONPlaceholder** APIs. We have also integrated **Fiddler** for network debugging purposes.

## Project Structure

```plaintext
cypress_ecommtestrepo/
│
├── cypress/
│   ├── downloads/          # Stores downloaded files during tests
│   ├── e2e/                # E2E (End-to-End) tests (if any)
│   ├── integration/
│   │   └── Specs/          # Cypress test specifications
│   ├── fixtures/           # Test data and JSON files for test input
│   ├── plugins/            # Cypress plugin files
│   ├── reports/            # Test reports and logs
│   ├── screenshots/        # Stores screenshots on test failure
│   ├── support/            # Support files, custom commands, and configurations
│   │   ├── ProvidersForBackEnd/ # Custom provider for backend API tests
│   │   ├── commands.js     # Custom Cypress commands
│   │   ├── e2e.js          # E2E setup or other utilities
│   │   └── index.js        # Main entry point for Cypress support files
│   └── videos/             # Video recordings of test runs
├── node_modules/            # Project dependencies
├── reports/                 # Test report outputs
├── scripts/                 # Miscellaneous scripts
│   ├── cypress.config.js    # Cypress configuration file
│   └── fiddler.ps1          # Fiddler script for configuring the proxy server
├── tsconfig.json            # TypeScript configuration file
├── cypress.config.js        # Cypress configuration for test environment setup
├── cypress.json             # Cypress project-level configuration (legacy)
├── fiddler.ps1              # Script to run Fiddler for proxying requests
├── package.json             # NPM dependencies and scripts
├── package-lock.json        # Lock file for dependencies
└── README.md                # This file


## Features

- **Frontend Automation**: Automated testing for price comparison on Reliance Digital and Croma using Cypress.
- **Backend API Testing**: Automating backend API tests using JSONPlaceholder APIs.
- **Fiddler Integration**: PowerShell script `fiddler.ps1` is included to monitor API traffic via Fiddler. Ensure the correct Fiddler port is used while running the script.
- **Cross-Site Testing**: We make use of `cy.origin()` for testing multiple domains.
- **Custom Commands**: Several custom commands like `fetchPriceFromWebsite` are implemented for reusability.
  
## Pre-requisites

1. **Node.js**: Make sure you have Node.js installed on your machine.
   - [Download Node.js](https://nodejs.org/)

2. **Fiddler**: To monitor API traffic.
   - [Download Fiddler](https://www.telerik.com/fiddler)

3. **PowerShell**: You should have PowerShell available to run the `fiddler.ps1` script.

## Installation Process

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd cypress_ecommtestrepo


Cypress Tutorials
If you're new to Cypress, here are some great tutorials to get started:

Official Cypress Documentation
Cypress Tutorial for Beginners by ToolsQA
End-to-End Testing with Cypress
Cypress for API Testing (Video)
Important Topics to Learn:
Basic Cypress Commands:

Visiting websites, interacting with elements, assertions.
Custom Commands:

Learn how to add custom commands like fetchPriceFromWebsite.
Cross-Origin Testing:

Learn about cy.origin() for testing across multiple domains.
Handling Promises and Async Calls:

Working with .then() and chaining promises.
API Testing:

Making use of cy.request() for API testing.