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
describe('TC02_Post_JsonPlaceHolder.cy', () => {
  it('Post - Fetch all posts', () => {
    makeRequest(RequestMethods.POST,BaseUrl,Header,body)
      .then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.title).to.eq('foo');
        expect(response.body.body).to.eq('bar');
        expect(response.body.id).to.eq(101);
        expect(response.body.userId).to.eq(1)
      });
  });
}); 