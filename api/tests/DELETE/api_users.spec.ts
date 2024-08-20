import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the DELETE method can be used to delete posts and comments', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('Check the user can be deleted by id with status code 200', async ({ request }) => {
        const response = await request.delete(`users/1`);
        expect(response.status()).toBe(200);
    });

    test('Check deleted user cannot be retrieved. Request status code is 404', async ({ request }) => {
        const response = await request.get(`users/1`);
        expect(response.status()).toBe(404);  //the user should be deleted
    });
    
})