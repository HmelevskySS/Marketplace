import { test, expect } from '../../../fixtures/api-fixture';

test.describe('Check the POST method can be used to create a post', () => {
  test('Check the post is created and the request returns the status code 201', async ({
    request,
  }) => {
    const response = await request.post(`posts`, {
      data: {
        userId: 5,
        id: 101,
        title: 'Test title',
        body: 'Some text here',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('id', 101);
    expect(responseBody).toHaveProperty('userId', 5);
    expect(responseBody).toHaveProperty('title', 'Test title');
    expect(responseBody).toHaveProperty('body', 'Some text here');
  });
});
