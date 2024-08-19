import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the PUT method can be used to update posts', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('Check the post is updated and the request returns the status code 200', async ({ request }) => {
        const response = await request.put(`posts/1`, {
            data: {
                "userId": 5,
                "id": 1,
                "title": "Test title",
                "body": "Some text here"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('userId', 5);
        expect(responseBody).toHaveProperty('title', 'Test title');
        expect(responseBody).toHaveProperty('body', 'Some text here');
    });

    test('Check the request returns the status code 404 for non-existing post', async ({ request }) => {
        const response = await request.put(`/posts/9999`, {
            data: {
                "userId": 5,
                "id": 9999,
                "title": "Test title for non-existing post",
                "body": "Some text for a non-existing post"
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        expect(response.status()).toBe(404); //Когда мы аплейтим несуществующий пост, то возвращает 500-ю ошибку
    });
});
