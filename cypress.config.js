const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter : "cypress-mochawesome-reporter",
  watchForFileChanges : true,
  video : true,
  numTestsKeptInMemory: 50,
  reporterOptions:{
    reporterDir: "cypress/reports",
    overwrite : false,
    saveHtml: true,
    embeddedScreenshots: true,
    inlineAssests: true,
    saveAllAtempts: true,
    code: false,
    reportPageTitle: "Cypress-Test-Results",

  },
  e2e: {
    setupNodeEvents(on, config) {
      //require('cypress-mochawesome-reporter/plugin')(on);
      // other event listeners or configuration can go here
    },
  },
});
