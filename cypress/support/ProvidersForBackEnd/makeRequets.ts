/// <reference types="cypress" />
//The reason I have created a make request to make Cy.request very simple we as with the the endpoint, query and remaining 
//componenets of an API can be easily equmulated and can use very simply and easily and decreases the line of code as well and importantly reusablity of code

function makeRequest(method: any,url:any, qs?:any,headers?: any, body?: any, auth?: any ) {
    return cy.request({method,url,qs,headers,body,auth, failOnStatusCode: false});
}

export default makeRequest;