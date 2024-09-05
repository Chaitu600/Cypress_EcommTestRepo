// cypress/integration/price_comparison.js
describe('Price Comparison', () => {
  it('Compares Reliance Digital and Croma prices', () => {
    const relianceDigitalUrl = 'https://www.reliancedigital.in/laptops/c/S101210?searchQuery=:relevance:availability:Exclude%20out%20of%20Stock&page=0';
    const cromaUrl = 'https://www.croma.com/searchB?q=laptop%3Arelevance&text=laptop';

    const relianceDigitalSelector = 'body > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > span:nth-child(1) > span:nth-child(2)';
    const cromaSelector = "div[id='248020'] span[class='amount plp-srp-new-amount']";

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