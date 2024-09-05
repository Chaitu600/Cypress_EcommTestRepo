describe('Flipkart Product Search', () => {
    it('Should search for a laptop on Flipkart', () => {
      cy.visit('https://www.flipkart.com');
      
      // Close login modal if it appears
      //cy.get('button').contains('✕').click().then(() => {
        // Search for the product
        cy.get('input[name="q"]').type('laptop{enter}');

  
      // Validate search results
      cy.get('.BUOuZu').should('contain','laptop');
    });
});
  