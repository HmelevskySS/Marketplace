import { test, expect } from '../../../fixtures/api-fixture';

test.describe('Check the DELETE method can be used to delete posts and comments', () => {
  test('Check the post can be deleted by id with status code 200', async ({ request }) => {
    const response = await request.delete(`posts/11`);
    expect(response.status()).toBe(200);
  });

  test('Check deleted post cannot be retrieved. Request status code is 404', async ({
    request,
  }) => {
    const response = await request.get(`posts/11`);
    expect(response.status()).toBe(404); //the post should be deleted
  });
});
