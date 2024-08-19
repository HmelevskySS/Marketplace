import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the POST method can be used to create a user', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });

    test('Check the user is created and the request returns the status code 201', async ({ request }) => {
        const response = await request.post(`users`, {
            data: {
            "id": 11,
            "name": "John Doe",
            "username": "johndoe",
            "email": "johndoe@example.com",
            "address": {
                "street": "123 Main St",
                "suite": "Apt. 4B",
                "city": "Metropolis",
                "zipcode": "54321",
                "geo": {
                "lat": "40.7128",
                "lng": "-74.0060"
                }
            },
            "phone": "555-1234",
            "website": "johndoe.com",
            "company": {
                "name": "Doe Enterprises",
                "catchPhrase": "Innovating the Future",
                "bs": "delivering value to customers"
            }
            },
            headers: {
            'Content-Type': 'application/json'
            }
        });
    
        expect(response.status()).toBe(201);
    
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('id', 11);
        expect(responseBody).toHaveProperty('name', 'John Doe');
        expect(responseBody).toHaveProperty('username', 'johndoe');
        expect(responseBody).toHaveProperty('email', 'johndoe@example.com');
        expect(responseBody.address).toHaveProperty('street', '123 Main St');
        expect(responseBody.company).toHaveProperty('name', 'Doe Enterprises');
    });    
    
})