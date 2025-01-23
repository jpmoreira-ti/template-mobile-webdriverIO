import path from 'path';

const isSauceLabs = process.env.RUN_ON_SAUCE === 'true';

export const config: WebdriverIO.Config = {

    user: isSauceLabs ? process.env.SAUCE_USERNAME : undefined,
    key: isSauceLabs ? process.env.SAUCE_ACCESS_KEY : undefined,

    specs: [
        './test/specs/**/*.ts'
    ],

    services: isSauceLabs ? [
        ['sauce', {
            sauceConnect: true,
            sauceConnectOpts: {
                tunnelIdentifier: 'oauth-jpmoreira.ti-74da8_tunnel_name',
                logfile: './sauce-connect.log',
                fastFailRegexps: '.*(Connection refused|Connection timed out).*',
                verbose: true
            }
        }]
    ] : [
        ['appium', {
            logPath: './',
            args: {
                address: 'localhost',
                port: 4723,
            },
        }]
    ],

    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],

    capabilities: [{
        'platformName': 'android',
        'appium:automationName': 'uiautomator2',
        'appium:deviceName': isSauceLabs ? 'Google Pixel 5' : 'emulator-5554',
        'appium:platformVersion': isSauceLabs ? '14' : '15',
        'appium:app': isSauceLabs ? 'storage:e33bf165-9364-4336-9174-bb2a0b8b756a' : path.resolve(__dirname, 'app/yodapp.apk'),
        'appium:autoGrantPermissions': true,
        'appium:orientation' : 'PORTRAIT',
        'appium:appPackage': 'com.qaxperience.yodapp',
        'appium:appWaitActivity': '*',
        ...(isSauceLabs && {
            'sauce:options': {
                appiumVersion: 'latest',
                build: 'appium-build-jp',
                name: 'Android App Test',
                tunnelIdentifier: 'oauth-jpmoreira.ti-74da8_tunnel_name',
                idleTimeout: 1000,
                maxDuration: 1800,
                commandTimeout: 600,
                videoUploadOnPass: false,
                recordScreenshots: true,
                recordVideo: true,
                extendedDebugging: true,
                capturePerformance: true,
                sessionCreationRetry: 2
            }
        })
    }],
};