import { test, expect } from '../../../fixtures/api-fixture';

test.describe('Check the DELETE method can be used to delete posts and comments', () => {
  test('Check the user can be deleted by id with status code 200', async ({ request }) => {
    const response = await request.delete(`users/1`);
    expect(response.status()).toBe(200);
  });

  test('Check deleted user cannot be retrieved. Request status code is 404', async ({
    request,
  }) => {
    const response = await request.get(`users/1`);
    expect(response.status()).toBe(404); //the user should be deleted
  });
});
