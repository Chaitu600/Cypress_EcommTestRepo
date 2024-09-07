//The main of importing all these can be reuseable and if there is any change in any thing we can eaisly make those changes in a single move 

import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";



const BaseUrl = CommonConstants.BaseUrl;
const header = BodyProvider.bodyUpdate(HeaderBodyTest.result)

describe('TC01_Get_JsonPlaceHolderAPI', () => {
  it('This test case id create to use GET and Fetch all posts', () => {
    makeRequest(RequestMethods.GET,BaseUrl,undefined,header)
      .then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100); 
        expect(response.body[0]).to.have.property('title');
      });
  });
}); 