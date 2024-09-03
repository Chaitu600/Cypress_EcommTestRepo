// description: In this test case we are going to add a product to the cart


describe('Add Product to Cart on AJIO', () => {
    it('should search for a product, add it to the cart, and verify it is added', () => {
      // Step 1: Visit AJIO's homepage
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
      
      // Step 5: Verify that the product is added to the cart
      cy.get("div[id='attachDisplayAddBaseAlert'] h4[class='a-alert-heading']").should('contain.text', 'Added to Cart'); 
    });
    });

