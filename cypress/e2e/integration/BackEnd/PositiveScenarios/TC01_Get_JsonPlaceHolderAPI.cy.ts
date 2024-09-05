import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";


describe('JSONPlaceholder API Testing', () => {
  it('GET - Fetch all posts', () => {
    makeRequest('Get','https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100); // JSONPlaceholder has 100 posts
        expect(response.body[0]).to.have.property('title');
      });
  });
}); 