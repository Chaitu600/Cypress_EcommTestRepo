


import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = BodyProvider.bodyUpdate(TestBodyJson.result)+"jhsbdvjhsbvs";
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)
describe('TC07_Negative_CreatePost_withInvalidRequestBody', () => {
  it('This test case is cretaed to create new post with invalid body', () => {
    makeRequest(RequestMethods.POST,BaseUrl,undefined,Header,body).then((response) => {
        expect(response.status).to.eq(500); 
        
  });
}); 
});