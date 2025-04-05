import { test, expect } from '../../../fixtures/api-fixture';

test.describe('Check the /posts endpoint can be reached by GET-request', () => {
  test('Check the resource returns the status code 200', async ({ request }) => {
    const response = await request.get(`/posts`);
    expect(response.status()).toBe(200);
  });

  test('Check the resource returns the status code 404 in case the post was not found', async ({
    request,
  }) => {
    const response = await request.get(`/posts/123`);
    expect(response.status()).toBe(404);
  });
});
