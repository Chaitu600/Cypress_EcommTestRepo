describe('Amazon Laptop Purchase - Navigate to Buy Now', () => {
    before(() => {
      // Visit the Amazon homepage
      cy.visit('https://www.amazon.in');
      
     // Step 2: Search for a product
     cy.get('input[name="field-keywords"]').type('laptop{enter}');
      
     // Step 3: Click on the first product in the search results
     cy.get("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1'] a[class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal']").then((e)=>{
       let url = e.prop('href');
       cy.visit(url);

     })
     
     // Step 4: Click the "Add to Bag" button
     cy.get('body > div:nth-child(5) > div:nth-child(78) > div:nth-child(7) > div:nth-child(7) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > form:nth-child(1) > div:nth-child(27) > div:nth-child(1) > div:nth-child(38) > div:nth-child(2) > span:nth-child(1) > span:nth-child(1) > span:nth-child(1) > input:nth-child(2)').click(); 

     cy.wait(5000);
     
     //step 5: Add to cart validation
     cy.get("div[id='attachDisplayAddBaseAlert'] h4[class='a-alert-heading']")
  .then(($el) => {
    if ($el.length > 0) {
      // If the first element is found, assert its text
      cy.wrap($el).should('contain.text', 'Added to Cart');
    } else {
      // If the first element is not found, try the second one
      cy.get('.a-size-medium-plus').should('contain.text', 'Added to Cart');
    }
  });

     
    // step 6: store the price in an constant for futher comaprision 
    cy.get(':nth-child(2) > .a-price > [aria-hidden="true"] > .a-price-whole').invoke('text').then((text) => {
        const amazonPrice = parseInt(text.replace(/[^0-9]/g, ''));
        
        // Store the Amazon price for comparison
        cy.wrap(amazonPrice).as('amazonPrice');
        cy.log(amazonPrice);
        
    });
    });

    // step 6: store the price in an constant for futher comaprision 
      
 
  
    it('Should navigate to Buy Now screen', () => {
      // Click on "Proceed to Check out" from the cart
      cy.get("input[aria-labelledby='attach-sidesheet-checkout-button-announce']").click();
  
      // Validate that the Sign In screen is loaded
      cy.url().should('include', 'ap/signin');
      cy.get("h1[class='a-spacing-small']").should('contain.text', 'Sign in');
    });
  });
