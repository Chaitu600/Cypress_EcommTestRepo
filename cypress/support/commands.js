
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Custom command to fetch Reliance Digital price
// Custom command to fetch price from a given URL and selector
// cypress/support/commands.js
Cypress.Commands.add('fetchPriceFromWebsite', (url, selector) => {
    cy.visit(url)
      .wait(5000) // Adjust timeout as needed
      .get('body').then(($body) => {
        if ($body.find('#wzrk-cancel').length > 0) {
          cy.get('#wzrk-cancel').click();
        }
      })
      .get(selector)
      .invoke('text')
      .then((text) => {
        // Check if the #wzrk-cancel element exists and click it if present
        const price = parseInt(text.replace(/[^0-9]/g, '').slice(0, 6));
        return price;
      });
  });

  Cypress.Commands.add('fetchPriceFromWebsiteCroma', (url, selector) => {
    const origin = 'https://www.croma.com'; // The base domain
  
    cy.origin(origin, { args: { url, selector } }, ({ url, selector }) => {
      // Use the passed variables inside cy.origin
      cy.visit(url);
      cy.wait(5000) // Adjust timeout as needed
      .get(selector)
      .invoke('text')
      .then((text) => {
        // Check if the #wzrk-cancel element exists and click it if present
        const price = parseInt(text.replace(/[^0-9]/g, '').slice(0, 6));
        return price;
      });
      });
  });