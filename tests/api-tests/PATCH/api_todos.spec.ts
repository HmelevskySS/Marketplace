import { test, expect } from '../../../fixtures/api-fixture';

test.describe('PATCH request to update todo completion status', () => {
  test('Check todo completion status is updated and the status code returned is 200', async ({
    request,
  }) => {
    const response = await request.patch(`todos/1`, {
      data: {
        completed: true,
      },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('completed', true);
  });
});
