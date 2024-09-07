// Description here we are comparing the croma and reliance Price and chossing the best 


describe('PriceComparision_Reliance_croma.cy', () => {

  it('Compares Reliance Digital and Croma prices', () => {
    const relianceDigitalUrl = 'https://www.reliancedigital.in/laptops/c/S101210?searchQuery=:relevance:availability:Exclude%20out%20of%20Stock&page=0';
    const cromaUrl = 'https://www.croma.com/searchB?q=laptop%3Arelevance&text=laptop';

    const relianceDigitalSelector = 'body > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)';
    const cromaSelector = "div[id='248020'] span[class='amount plp-srp-new-amount']";

    /* from here we are getting the function from a command,js file were we have already created  two function for croma and reliance
    the main reason is to show the code resuability as well to reduce the line of code
    
    And Another important reason In This script there a challenge to run the two different website in same script for that we have create a 
    function in commad.Js file and used them another import fact to validate them in same script to validate that we have used the .then to initiate the values in the
    respeective varibales 

    SO this is what all we have done here and a condition to validate them 
    */ 
    
    
    cy.fetchPriceFromWebsite(relianceDigitalUrl, relianceDigitalSelector)
      .then((relianceDigitalPrice) => {
        cy.fetchPriceFromWebsiteCroma(cromaUrl, cromaSelector)
          .then((cromaPrice) => {
            cy.log(`Reliance Digital Price: ₹${relianceDigitalPrice}`);
            cy.log(`Croma Price: ₹${cromaPrice}`);

            if (relianceDigitalPrice < cromaPrice) {
              cy.log(`Reliance Digital offers a lower price: ₹${relianceDigitalPrice}`);
            } else if (cromaPrice < relianceDigitalPrice) {
              cy.log(`Croma offers a lower price: ₹${cromaPrice}`);
            } else {
              cy.log(`Both platforms offer the same price: ₹${relianceDigitalPrice}`);
            }
          });
      });
  });
});