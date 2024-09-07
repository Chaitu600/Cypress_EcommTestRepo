//The main of importing all these can be reuseable and if there is any change in any thing we can eaisly make those changes in a single move 


import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = BodyProvider.bodyUpdate(TestBodyJson.result);
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)
describe('TC03_Negative_Create_NewPostUsing.InvalidUrl.cy', () => {
  it('This test case is cretaed to use to creata post using invalid baseUrl', () => {
    makeRequest(RequestMethods.POST,BaseUrl+'ABC',undefined,Header,body).then((response) => {
        expect(response.status).to.eq(404);
      });
  });
}); 