import { test, expect, APIRequestContext } from '@playwright/test';
import { createNewContext, deleteContext } from '../../test.setup';


test.describe('Check the /posts endpoint can be reached by GET-request', () => {

  let apiContext: APIRequestContext;

  test.beforeAll(async () => {
      apiContext = await createNewContext();
  });

  test.afterAll(async () => {
      await deleteContext(apiContext);
  });

  test('Check the resource returns the status code 200', async ({ request }) => {
    const response = await request.get(`/posts`);
    expect(response.status()).toBe(200);
  });

  test('Check the resource returns the status code 404 in case the post was not found', async ({ request }) => {
    const response = await request.get(`/posts/123`);
    expect(response.status()).toBe(404);
  });

});
