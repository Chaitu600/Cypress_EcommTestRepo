
import BodyProvider from "../../../../support/ProvidersForBackEnd/BodyProvider";
import HeadersBody, { HeaderBodyTest } from "../../../../support/ProvidersForBackEnd/HeadersBody";
import makeRequest from "../../../../support/ProvidersForBackEnd/makeRequets";
import { RequestMethods } from "../../../../support/ProvidersForBackEnd/ResquestMethods";
import TestBody, { TestBodyJson } from "../../../../support/ProvidersForBackEnd/TestBody";
import { CommonConstants } from "@support/ProvidersForBackEnd/CommonContsants";

const BaseUrl = CommonConstants.BaseUrl;
const body = BodyProvider.bodyUpdate(TestBodyJson.result,'title','updated title','body','updated body','id','1');
const Header = BodyProvider.bodyUpdate(HeaderBodyTest.result)

describe('JTC03_Put_JsonPlaceHolderAPI.cy', () => {
    it('This test case is created to use PUT to Update an existing post', () => {
      
      makeRequest(RequestMethods.PUT,BaseUrl+'/1',undefined,Header,body).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('updated title');
        expect(response.body.body).to.eq('updated body');
        expect(response.body.id).to.eq(1);
        expect(response.body.userId).to.eq(1)
      });
    });
});
 