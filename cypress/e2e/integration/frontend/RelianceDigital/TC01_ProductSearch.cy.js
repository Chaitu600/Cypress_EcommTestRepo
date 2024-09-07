// Description here we are just searching for the product on Reliance Website


describe('TC01_ProductSearch_Reliance', () => {

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