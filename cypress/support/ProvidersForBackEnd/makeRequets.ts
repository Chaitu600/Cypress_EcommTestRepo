/// <reference types="cypress" />


function makeRequest(method: any,url: any,headers?: any, body?: any, auth?: any ) {
    return cy.request({method,url,headers,body,auth, failOnStatusCode: false});
}

export default makeRequest;