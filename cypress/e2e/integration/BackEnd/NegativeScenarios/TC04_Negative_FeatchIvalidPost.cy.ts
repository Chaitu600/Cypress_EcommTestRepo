

import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = BodyProvider.bodyUpdate(TestBodyJson.result);
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)
describe('TC04_Negative_FeatchIvalidPost', () => {
  it('This test case is cretaed to use Featch invalid Url', () => {
    makeRequest(RequestMethods.GET,BaseUrl+'ABC',undefined,Header,body).then((response) => {
        expect(response.status).to.eq(404);
      });
  });
}); 