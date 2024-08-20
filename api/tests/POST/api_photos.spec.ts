import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';

test.describe('Check the POST method can be used to create a photo', () => {

    let apiContext: APIRequestContext;

    test.beforeAll(async () => {
        apiContext = await createNewContext();
    });
  
    test.afterAll(async () => {
        await deleteContext(apiContext);
    });

    test('Check the photo is created and the request returns the status code 201', async ({ request }) => {
        const response = await request.post(`photos`, {
            data: {
            "albumId": 1,
            "id": 5001,
            "title": "Sunset over the mountains",
            "url": "http://example.com/sunset.jpg",
            "thumbnailUrl": "http://example.com/sunset_thumbnail.jpg"
            },
            headers: {
            'Content-Type': 'application/json'
            }
        });
    
        expect(response.status()).toBe(201);
    
        const responseBody = await response.json();
        expect(responseBody).toHaveProperty('albumId', 1);
        expect(responseBody).toHaveProperty('id', 5001);
        expect(responseBody).toHaveProperty('title', 'Sunset over the mountains');
        expect(responseBody).toHaveProperty('url', 'http://example.com/sunset.jpg');
        expect(responseBody).toHaveProperty('thumbnailUrl', 'http://example.com/sunset_thumbnail.jpg');
    });
    
})