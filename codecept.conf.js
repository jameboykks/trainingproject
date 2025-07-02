const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

setHeadlessWhen(process.env.HEADLESS);
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',

  helpers: {
    Appium: {
      host: 'localhost',
      port: 4723,
      path: '/wd/hub', // 🔥 THÊM DÒNG NÀY
      app: './apps/Android.SauceLabs.Mobile.Sample.app.2.7.1.apk',
      platform: 'Android',
      desiredCapabilities: {
        deviceName: 'emulator-5554',
        automationName: 'UiAutomator2',
        appPackage: 'com.swaglabsmobileapp',
        appActivity: 'com.swaglabsmobileapp.MainActivity',
        platformName: 'Android', 
        platformVersion: '16.0',
        noReset: false,
        newCommandTimeout: 600,
        appWaitDuration: 60000,
        restart: false,
      }
    }
  },

  include: {
    I: './steps_file.js'
  },
  mocha: {
    reporterOptions: {
      reportDir: "output/logs"
    }
  },
  name: 'tranning-tests',

  plugins: {
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: false
    },
    pauseOnFail: {
      enabled: true
    },
    allure: {
      enabled: true
    }
  }
};
