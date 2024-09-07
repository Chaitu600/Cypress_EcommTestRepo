const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // Configure Cypress to generate JUnit reports
    reporter: 'junit',
    reporterOptions: {
      mochaFile: 'cypress/reports/junit-[hash].xml',
      toConsole: true
    }
  }
})