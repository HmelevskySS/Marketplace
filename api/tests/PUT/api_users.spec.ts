import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the PUT method can be used to update user info', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });


    test('Check the user data is updated and the request returns the status code 200', async ({ request }) => {
        const response = await request.put(`users/1`, {
            data: {
                "id": 1,
                "name": "Updated User Name",
                "username": "updatedusername",
                "email": "updatedemail@example.com",
                "address": {
                    "street": "Updated Street",
                    "suite": "Apt. 100",
                    "city": "Updated City",
                    "zipcode": "12345-6789",
                    "geo": {
                    "lat": "-37.3159",
                    "lng": "81.1496"
                    }
                },
                "phone": "1-770-736-8031 x56442",
                "website": "updatedwebsite.org",
                "company": {
                    "name": "Updated Company Name",
                    "catchPhrase": "Updated Catch Phrase",
                    "bs": "Updated BS"
                }
            },
            headers: {
                'Content-Type': 'application/json'
            }
        });

        expect(response.status()).toBe(200);

        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('name', 'Updated User Name');
        expect(responseBody).toHaveProperty('username', 'updatedusername');
        expect(responseBody).toHaveProperty('email', 'updatedemail@example.com');
        expect(responseBody.address).toHaveProperty('street', 'Updated Street');
        expect(responseBody.company).toHaveProperty('name', 'Updated Company Name');
        });
})