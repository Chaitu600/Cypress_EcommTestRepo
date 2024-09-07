


import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = BodyProvider.bodyUpdate(TestBodyJson.result)+"vdvsdvdsv"
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)
describe('TC08_Negative_UpdatePost_Invalid_RequestBody.cy', () => {
  it('This test case is cretaed to Update post with invalid body', () => {
    makeRequest(RequestMethods.PUT,BaseUrl+"/1",undefined,Header,body).then((response) => {
        expect(response.status).to.eq(500); 
        
  });
}); 
});