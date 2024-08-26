# Automated Testing Project for 21vek.by

This repository contains a set of automated tests for the [21vek.by](https://www.21vek.by/) website, written using the latest principles and best practices in testing.

## Key Features

- **Test Framework**: The project is built on Playwright, which allows running tests across different browsers, simulating various devices and networks, and using many other powerful tools.
- **Modern Testing Approaches**: The project employs the latest methods of building automated tests, such as the Page Object Model (POM), which enhances the maintainability and scalability of the tests.
- **Allure Support**: Integration with Allure enables the generation of detailed reports on test results, simplifying analysis and troubleshooting.
- **CI/CD Integration**: The project is easily integrated with CI/CD systems (e.g., GitHub Actions, Jenkins), providing the capability to automatically run tests whenever code changes are made.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/your-username/21vek-tests.git
    cd 21vek-tests
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Ensure that all necessary tools are installed, including [Node.js](https://nodejs.org/) and [Allure Commandline](https://docs.qameta.io/allure/#_installing_a_commandline).

## Running Tests

### Local Execution

You can run all tests using the following command:

```bash
npx playwright test
```

### Running with Allure Report Generation

To run tests and generate an Allure report, use the following command:

```bash
npm run allure:reporter
```

This will execute the tests, generate a report, and open it in the browser.

## Project Structure

- `tests/` - Directory containing test scripts, categorized by types (e.g., `GET`, `POST`, `PUT`, `PATCH`).
- `pages/` - Implementation of the Page Object Model (POM), containing pages and elements of the 21vek.by website.
- `playwright.config.ts` - Playwright configuration file, including settings for running the tests.
- `package.json` - File with dependencies and scripts for running tests and generating reports.
- `allure-results/` - Directory for storing test execution results, used for generating Allure reports.

## Technologies and Tools

- **Playwright**: A modern testing tool supporting browser and device emulation.
- **TypeScript**: The project is written in TypeScript, ensuring strict typing and improved code quality.
- **Allure**: Generates clear and detailed reports on testing results.

## Contact

If you have any questions or suggestions, feel free to contact me at hmelevsky.ss@gmail.com or create an issue in the repository.
