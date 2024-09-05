



describe('TC03_ProceedToCheckOut_Reliance', () => {

  it('Fetches the price of the first laptop from Reliance', () => {
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


    
   //  Navigate to the product page 
   cy.get("a[attr-tag='anchor'][href='/apple-mgn63hna-macbook-air-apple-m1-chip-8gb-256gb-ssd-macos-big-sur-retina-33-78-cm-13-3-inch-/p/491946461']").then((e)=>{
    let url = e.prop('href');
    cy.visit(url);

  })


    
    // Wait for the results to load and retrieve the price of the first listed laptop
    cy.get("span[class='TextWeb__Text-sc-1cyx778-0 kFBgPo'] span:nth-child(2)").invoke('text').then((text) => {
      const cromaPrice = parseInt(text.replace(/[^0-9]/g, ''));
      
      // Store the Croma price for comparison
      cy.wrap(cromaPrice).as('cromaPrice');
    });

    // Click the "Add to Cart" button
    //cy.get('.btn.btn-secondary.pdp-add-to-cart').click();

    cy.get("label[for='RIL_PDPInputPincode']").click({force: true})
    cy.wait(2000)
    cy.get('#RIL_PDPInputPincode').type('500045'); 

    cy.get('#add_to_cart_main_btn').click();
    cy.get('.HyGjh').should('contain','(1 Items)');
    cy.get('body > div:nth-child(1) > main:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > button:nth-child(1)').click();
    // will navigate to loginin page 
    cy.get('.TextWeb__Text-sc-1cyx778-0.LoginContent__Title-sc-1srtv8x-0.cXyRgU.fYYiwl').should('contain','Login');
  });

});

