# Mobile Testing Project with WebdriverIO

## Configuration

### Environment Variables

Make sure to set the following environment variables:

```sh
export SAUCE_USERNAME=your_username
export SAUCE_ACCESS_KEY=your_access_key
export RUN_ON_SAUCE=true
```

### Install dependencies
Run the following command:

```sh
npm install
```

### Execution
To run tests locally:

```sh
export RUN_ON_SAUCE=false
npx wdio run wdio.conf.ts
```

To run tests on Sauce Labs:

```sh
export RUN_ON_SAUCE=true
npx wdio run wdio.conf.ts
```

### Generating Allure Reports
To generate Allure reports and open report, follow these steps:

```sh
npx allure generate allure-results --clean -o allure-report
```

```sh
npx allure open allure-report
```

# Documentation
[Sauce Labs - Automated Mobile App Testing](https://docs.saucelabs.com/mobile-apps/automated-testing/)
[Sauce Labs - File Storage API Endpoints](https://docs.saucelabs.com/dev/api/storage/)