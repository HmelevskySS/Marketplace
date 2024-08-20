import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the POST method can be used to create a comment', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('Check the comment is created and the request returns the status code 201', async ({ request }) => {
        const response = await request.post(`comments?postId=501`, {
        data: {
            "postId": 1,
            "id": 501,
            "name": "User Tester",
            "email": "user_tester@mail.biz",
            "body": "I cried when I was reading it"
        },
        headers: {
            'Content-Type': 'application/json'
        }
        });

        expect(response.status()).toBe(201);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('postId', 1);
        expect(responseBody).toHaveProperty('id', 501);
        expect(responseBody).toHaveProperty('name', 'User Tester');
        expect(responseBody).toHaveProperty('email', 'user_tester@mail.biz');
        expect(responseBody).toHaveProperty('body', 'I cried when I was reading it');
    });
})