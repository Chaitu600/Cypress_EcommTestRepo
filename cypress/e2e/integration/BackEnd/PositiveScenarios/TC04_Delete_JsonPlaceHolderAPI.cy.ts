import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";


const BaseUrl = CommonConstants.BaseUrl;
const header = BodyProvider.bodyUpdate(HeaderBodyTest.result)

describe('TC04_Delete_JsonPlaceHolderAPI', () => {
    it('This test case is create to use DELETE method and Delete a post', () => {
      makeRequest(RequestMethods.DELETE,BaseUrl+'/1').then((response) => {
          expect(response.status).to.eq(200);
        });
    });
  });