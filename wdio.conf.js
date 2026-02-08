import { join } from 'path';

export const config = {
    runner: 'local',
    port: 4723,
    
    specs: [
        './features/**/login.feature'
    ],
    exclude: [],

    maxInstances: 1, 
    
    capabilities: [{
        'platformName': 'Android',
        'appium:deviceName': 'Android Emulator',
        'appium:automationName': 'UiAutomator2',
        'appium:app': join(process.cwd(), './apps/demo.apk'),
        'appium:appPackage': ' com.swaglabsmobileapp',
        'appium:appActivity': 'com.swaglabsmobileapp.MainActivity', 
        'appium:ignoreHiddenApiPolicyError': true,
        'appium:autoGrantPermissions': true,
        'appium:noReset': false, 
        'appium:newCommandTimeout': 300
    }],

    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['appium'],
    framework: 'cucumber',
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: false,
            disableWebdriverScreenshotsReporting: false,
        }],
    ],

    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },

    // beforeScenario: async function (world) {

    // },

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

// to generate allure report, run the following command in terminal after test execution:
// npx allure generate allure-results --clean -o allure-report

// to open allure report, run the following command in terminal:
// npx allure open allure-report