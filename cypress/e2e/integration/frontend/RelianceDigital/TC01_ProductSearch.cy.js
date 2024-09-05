// Description here we are just searching for the product 


describe('TC01_ProductSearch', () => {

  it('search the laptop from Reliancedigital website', () => {
    cy.visit('https://www.reliancedigital.in');

    cy.wait(10000)

    cy.get('body').then(($body) => {
      if ($body.find('#wzrk-cancel').length > 0) {
        cy.get('#wzrk-cancel').click();
      }
    });

    // Search for a laptop
    cy.get('#suggestionBoxEle').type('laptop{enter}');
    cy.get("#RIL_HomeSearchButton").click();
  });
});