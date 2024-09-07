//Here we are adding the Product and validating it 

describe('Add Product to Cart in Croma', () => {
  it('This test case is created to add the product into cart and validate it ', () => {
    cy.visit('https://www.croma.com');
    
     // Close any popup or modal that may appear
     cy.get('body').then(($body) => {
      if ($body.find('.close-popup').length > 0) {
        cy.get('.close-popup').click();
      }
    });

    // Search for a laptop
    cy.get('#searchV2').type('laptop{enter}');

   //  Navigate to the product page 
   cy.get("a[href='/hp-15s-eq2143au-amd-ryzen-3-5300u-thin-light-laptop-8gb-512gb-ssd-windows-11-home-15-6-inch-full-hd-display-ms-office-2019-natural-silver-1-69-kg-/p/248020'][rel='noopener noreferrer']").then((e)=>{
    let url = e.prop('href');
    cy.visit(url);

  })

    // Scroll down to make "Add to Cart" button visible
    cy.scrollTo(0, 500); 

    // Click the "Add to Cart" button
    cy.get('.btn.btn-secondary.pdp-add-to-cart').click();
    
    // Wait for the cart to be updated and verify the product was added
    cy.get('.success-cart').should('contain.text','1 Item added to the cart!'); 
  });



    
  });
