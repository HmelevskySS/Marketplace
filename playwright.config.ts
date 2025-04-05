import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  timeout: 80000,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : 2,
  reporter: [['html'], ['allure-playwright', { detail: true }]],
  use: {
    trace: 'on',
    video: 'on',
    launchOptions: {
      args: ['--start-fullscreen'],
    },
  },
  projects: [
    {
      name: 'ui-tests',
      testMatch: /ui-tests\/.*\.ts$/, // Запускать только файлы в папке ui-tests
      use: {
        baseURL: 'https://www.21vek.by/',
        ...devices['Desktop Chrome'],
      },
    },
    {
      name: 'api-tests',
      testMatch: /api-tests\/.*\.ts$/, // Запускать только файлы в папке api-tests
      use: {
        baseURL: 'https://jsonplaceholder.typicode.com/',
        // Отключаем ненужное
        video: 'off',
        trace: 'off',
        launchOptions: undefined,
      },
    },
  ],
});
