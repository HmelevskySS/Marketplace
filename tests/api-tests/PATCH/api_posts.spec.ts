import { test, expect } from '../../../fixtures/api-fixture';

test.describe('PATCH request to update a post title', () => {
  test('Check post title is updated and the status code returned is 200', async ({ request }) => {
    const response = await request.patch(`posts/1`, {
      data: {
        title: 'Updated Post Title',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('title', 'Updated Post Title');
  });
});
