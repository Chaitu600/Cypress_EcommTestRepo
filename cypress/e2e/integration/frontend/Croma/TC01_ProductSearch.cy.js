// Here we are just searching the product 

describe('TC01_ProductSearch_Croma', () => {

  it('This Test case is created to search the product', () => {
    cy.visit('https://www.croma.com');

    // Close any popup or modal that may appear
    cy.get('body').then(($body) => {
      if ($body.find('.close-popup').length > 0) {
        cy.get('.close-popup').click();
      }
    });

    // Search for a laptop
    cy.get('#searchV2').type('laptop{enter}');

    // Verify the search result
    cy.get('.cat-title').should('contain.text','laptop')
  });
});