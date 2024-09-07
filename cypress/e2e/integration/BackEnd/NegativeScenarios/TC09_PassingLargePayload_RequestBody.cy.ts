


import { randomString } from "@support/ProvidersForBackEnd/RandomStr";
import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = BodyProvider.bodyUpdate(TestBodyJson.result,'UserId',randomString(10500000))
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)
describe('TC09_PassingLargePayload_RequestBody.cy', () => {
  it('This test case is cretaed to create new post with large Pay Load body', () => {
    makeRequest(RequestMethods.POST,BaseUrl,undefined,Header,body).then((response) => {
        expect(response.status).to.eq(500); 
        
  });
}); 
});