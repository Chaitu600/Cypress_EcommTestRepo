// description : We are navigating to the amazon page doing product search and validating the deatils 
 
describe('Product Search', () => {
  it('should search for a product and display the results', () => {
    // Step 1: Visit the homepage
    cy.visit('https://www.amazon.in');  // Make sure your baseUrl is set in `cypress.json`
    
    // Step 2: Type a product name into the search bar
    cy.get('input[name="field-keywords"]').type('laptop{enter}'); 
    
    // Step 3: Submit the search
    // (The {enter} in the type method handles this)

    // Step 4: Verify that the search results are displayed
    cy.get('.s-main-slot').should('contain.text', 'laptop');  
  });
});