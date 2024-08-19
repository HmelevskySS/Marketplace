import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the PUT method can be used to update todos lists', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });

    test('Check the todos list can be updated and the request returns the status code 200', async ({ request }) => {
        const response = await request.put(`/todos/1`, {
            data: {
                "userId": 112,
                "id": 199,
                "title": "Test title",
                "completed": true
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('userId', 112);
        expect(responseBody).toHaveProperty('title', 'Test title');
        expect(responseBody).toHaveProperty('completed', true);
    });
});