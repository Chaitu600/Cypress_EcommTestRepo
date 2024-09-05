describe('Add Product to Cart', () => {
  it('Should add the first laptop from search results to the cart', () => {
    cy.visit('https://www.flipkart.com');
    
    // Close login modal if it appears
    
      cy.get('input[name="q"]').type('laptop{enter}');

     // Step 3: Click on the first product in the search results
     cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)").then((e)=>{
        let url = e.prop('href');
        cy.visit(url);

      })

      // check pin code 
      cy.get('#pincodeInputId').type('500045{enter}');

    // Click 'Add to Cart'
    cy.get("button[class='QqFHMw vslbG+ In9uk2']").click();

    // Verify that the product is added to the cart
    cy.get('._2sKwjB').should('contain.text', 'My Cart');
  });
});