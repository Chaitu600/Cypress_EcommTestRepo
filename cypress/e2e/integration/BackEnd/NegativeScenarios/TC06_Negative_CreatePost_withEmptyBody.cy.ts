


import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = {};
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)
describe('TC06_Negative_CreatePost_withEmptyBody', () => {
  it('This test case is cretaed to create new post with empty body', () => {
    makeRequest(RequestMethods.POST,BaseUrl,undefined,Header,body).then((response) => {
        expect(response.status).to.eq(201); // the reason it is giving 201 because somehow it is creating the post empty request
        
  });
}); 
});