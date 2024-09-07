// Description: Here we are adding and validating the cart
describe('TC02_AddToCart_Reliance', () => {

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

    // befor Clicking  on "Add to Cart" button let enter pin code for delivery validation

    cy.get("label[for='RIL_PDPInputPincode']").click({force: true})
    cy.wait(2000)
    cy.get('#RIL_PDPInputPincode').type('500045'); 

    cy.get('#add_to_cart_main_btn').click();
    cy.get('.TextWeb__Text-sc-1cyx778-0.HyGjh').should('contain','(1 Items)');
  });
});