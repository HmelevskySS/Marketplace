import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('PATCH request to update a comment body', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('Check comment body is updated and the status code returned is 200', async ({ request }) => {
        const response = await request.patch(`comments/1`, {
          data: {
            "body": "Updated comment body"
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        expect(response.status()).toBe(200);
    
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('body', 'Updated comment body');
    });
})