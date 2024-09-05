import _ from 'lodash';

export default class BodyProvider {
    /**
     *
     * @param initialObject is the object you want to change the values of keys
     * @param updates is the list of key value pairs, it follows the order of however many
     * key value pairs you want to update
     * @returns the updated body
     * Ex:
     * To update DecisionServiceBody, provide it in the first param initialObject, and
     * To change the decisionType only, here's how
     * BodyProvider.bodyUpdate(DecisionServiceBody.result, 'menuDecisionContext.decisionRequest[0].decisionType', 123456789)
     * To delete a key value pair, here's how
     * BodyProvider.bodyUpdate(DecisionServiceBody.result, 'menuDecisionContext.decisionRequest[0].decisionType', undefined)
     * To change the decisionType and requestId at the same time, here's how
     * BodyProvider.bodyUpdate(DecisionServiceBody.result, 'menuDecisionContext.decisionRequest[0].decisionType', 'fakeItem', 'requestContext.request.requestId', "")
     * To change 3 key value pairs, here's how
     * const body = BodyProvider.bodyUpdate(DecisionServiceBody.result, 'menuDecisionContext.decisionRequest[0].decisionType', 'fakeItem', 'requestContext.request.requestId', undefined, 'requestContext.request.sessionId', 121212121212112)
     */


    public static bodyUpdate(initialObject: object, ...updates:any) {
        let updatedObject = _.cloneDeep(initialObject);
        for (let i = 0; i < updates.length; i += 2) {
            updatedObject = _.set(updatedObject, updates[i], updates[i + 1]);
        }
        return updatedObject;
    }


    /**
     *
     * @param initialObject is the object you want to delete either keys or objects inside({})
     * @param propertiesToDelete  provide the path to the object you want to delete
     * @returns the new object after the updates
     * Examples:
     *Example 1:
     *const body = BodyProvider.bodyDelete(bodyInitial, ['requestContext.request'])
     * Example 2:
     * const body = BodyProvider.bodyDelete(bodyInitial, ['menuDecisionContext.decisionRequest', 'menuDecisionContext.request'])
     * Note: To delete key pairs inside an array use bodyUpdate, but to delete array and others use bodyDelete
     */


    public static bodyDelete(initialObject: object, propertiesToDelete: string[]) {
        const updatedObject = _.cloneDeep(initialObject);


        for (const property of propertiesToDelete) {
            if (property.includes('[')) {
                const pathToArray = property.substring(0, property.lastIndexOf('.'));
                const propertyToDelete = property.split('.').pop();


                const objectInArray = _.get(updatedObject, pathToArray);
                if (objectInArray && typeof objectInArray === 'object') {
                    delete objectInArray[propertyToDelete];
                }
            } else {
                _.unset(updatedObject, property);
            }
        }
        return updatedObject;
    }
}

