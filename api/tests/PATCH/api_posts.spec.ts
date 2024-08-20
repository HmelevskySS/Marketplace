import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('PATCH request to update a post title', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('Check post title is updated and the status code returned is 200', async ({ request }) => {
        const response = await request.patch(`posts/1`, {
          data: {
            "title": "Updated Post Title"
          },
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        expect(response.status()).toBe(200);
    
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('title', 'Updated Post Title');
      });
})