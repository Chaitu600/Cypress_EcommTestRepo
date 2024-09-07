

import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)

describe('TC02_Negative_Delete_InvalidID.cy',()=>{
it('Thsi test case is created to update a non-existing post', () => {
    
  makeRequest(RequestMethods.DELETE,BaseUrl+'/9999090909090909',undefined,Header).then((response) => {
      expect(response.status).to.eq(200); // The reason of geting 200 is API doesnt care about the post number it just delete what ever we porvide as post number 
    });
  });
});