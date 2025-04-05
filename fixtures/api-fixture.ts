import { test as base, APIRequestContext, expect } from '@playwright/test';
import { createNewContext, deleteContext } from '../setup/test.setup';

type SetupContext = {
  apiContext: APIRequestContext;
};

export const test = base.extend<SetupContext>({
  apiContext: async ({}, use) => {
    const context = await createNewContext();
    await use(context);
    await deleteContext(context);
  },
});

export { expect };
