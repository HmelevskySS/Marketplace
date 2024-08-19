import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the PATCH method can be used to partially update user info', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('Check user email and name are updated and the status code returned is 200', async ({ request }) => {
        const response = await request.patch(`users/1`, {
            data: {
            "name": "Tester QA",
            "email": "hello@cap.com"
            },
            headers: {
            'Content-Type': 'application/json'
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('name', 'Tester QA');
        expect(responseBody).toHaveProperty('email', 'hello@cap.com');
    });

    test('Check the updated user info is saved and can be returned with status code 200', async ({ request }) => {
        const response = await request.get(`users/1`);
        expect(response.status()).toBe(200);
    
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('name', 'Tester QA'); //Свойства не апдейтнулись
        expect(responseBody).toHaveProperty('email', 'hello@cap.com');
    });
    
})
