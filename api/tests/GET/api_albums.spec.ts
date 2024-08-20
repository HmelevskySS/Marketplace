import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the /albums endpoint can be reached by GET-request', () => {
    
    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });

    test('GET /albums returns status code 200 and correct data', async ({ request }) => {
        const response = await request.get(`albums`);
        expect(response.status()).toBe(200);
    
        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBeTruthy();
        expect(responseBody.length).toBeGreaterThan(0);
        expect(responseBody[0]).toHaveProperty('userId');
        expect(responseBody[0]).toHaveProperty('id');
        expect(responseBody[0]).toHaveProperty('title');
    });

})