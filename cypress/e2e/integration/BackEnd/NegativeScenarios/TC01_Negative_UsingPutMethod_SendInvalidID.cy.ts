

import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = BodyProvider.bodyUpdate(TestBodyJson.result,'title','Invalid content','body','Invalid content');
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)

describe('TC01_Negative_UsingPutMethod_SendInvalidID.cy',()=>{
it('This test case is created to update a non-existing post', () => {
    
  makeRequest(RequestMethods.PUT,BaseUrl+'/9999',undefined,Header,body).then((response) => {
      expect(response.status).to.eq(500);
    });
  });
});