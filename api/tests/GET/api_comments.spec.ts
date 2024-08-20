import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the /comments endpoint can be reached by GET-request', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('GET /comments?postId=1 returns status code 200 and correct data', async ({ request }) => {
        const response = await request.get(`comments?postId=1`);
        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBeTruthy();
        expect(responseBody.length).toBeGreaterThan(0);
        expect(responseBody[0]).toHaveProperty('postId', 1);
    });

    test('GET /comments?postId=1 returns exactly 5 comments with correct fields', async ({ request }) => {
        const response = await request.get(`posts/1/comments`);
        expect(response.status()).toBe(200);
    
        const responseBody = await response.json();
        expect(Array.isArray(responseBody)).toBeTruthy();
        expect(responseBody.length).toBe(5);
    
        responseBody.forEach(comment => {
          expect(comment).toHaveProperty('postId', 1);
          expect(comment).toHaveProperty('id');
          expect(comment).toHaveProperty('name');
          expect(comment).toHaveProperty('email');
          expect(comment).toHaveProperty('body');
        });
    });
})