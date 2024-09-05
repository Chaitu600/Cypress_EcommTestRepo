



describe('Croma Frontend Price Retrieval', () => {

    it('Fetches the price of the first laptop from Croma', () => {
      cy.visit('https://www.croma.com');
  
      // Close any popup or modal that may appear
      cy.get('body').then(($body) => {
        if ($body.find('.close-popup').length > 0) {
          cy.get('.close-popup').click();
        }
      });
  
      // Search for a laptop
      cy.get('#searchV2').type('laptop{enter}');
      
      // Wait for the results to load and retrieve the price of the first listed laptop
      cy.get('[data-testid="product-list"] > :nth-child(1)').find('.amount').invoke('text').then((text) => {
        const cromaPrice = parseInt(text.replace(/[^0-9]/g, ''));
        
        // Store the Croma price for comparison
        cy.wrap(cromaPrice).as('cromaPrice');
      });
    });
  
  });
