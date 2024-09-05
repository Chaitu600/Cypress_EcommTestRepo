import makeRequest from '@support/ProvidersForBackEnd/makeRequest';

describe('JSONPlaceholder API Testing', () => {
    it('GET - Fetch all posts', () => {
      makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts')
        //cy.request('GET', 'https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.length(100); // JSONPlaceholder has 100 posts
          expect(response.body[0]).to.have.property('title');
        });
    });
  });