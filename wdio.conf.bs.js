import { join } from 'path';

const browserstackOptions = {
    userName: 'pavankumarjois_5Qklh9',
    accessKey: '8WzLRB6LJLdh7ssoVFUe',
    buildIdentifier: process.env.BUILD_NUMBER,
    appiumVersion: '3.1.0'
};

export const config = {

    user: 'pavankumarjois_5Qklh9',
    key: '8WzLRB6LJLdh7ssoVFUe',

    specs: ['./features/**/login.feature'],
    exclude: [],

    maxInstances: 1,

    capabilities: [
        {
            platformName: 'Android',
            'appium:platformVersion': '12.0',
            'appium:deviceName': 'Samsung Galaxy S22 Ultra',
            'appium:automationName': 'UiAutomator2',
            'appium:app': 'bs://699284aea40976e6df6f690d3977c8180bfbaea4',
            'bstack:options': browserstackOptions
        }
    ],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,

    services: [
        ['browserstack', { browserstackLocal: false }]
    ],

    framework: 'cucumber',

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        timeout: 60000
    },

    afterScenario: async function (world, result) {
        if (!result.passed) {
            try {
                const scenarioName = world.pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
                const filePath = join(process.cwd(), 'screenshots', `${scenarioName}.png`);
                await driver.saveScreenshot(filePath);
            } catch (err) {
                console.log('Screenshot skip: ' + err.message);
            }
        }
    }
};
