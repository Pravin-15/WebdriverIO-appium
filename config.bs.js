const { generate } = require('multiple-cucumber-html-reporter');
exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'vasanth_jVRaqt',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'puuq9RxzxnXjDNKEeuah',
  hostname: 'hub.browserstack.com',
  services: [
    [
      'browserstack',
      {
        app: 'bs://93da080b9ba6fc42a70be503acf47432de022174',
        buildIdentifier: "Testing",
        browserstackLocal: true
      },
    ]
  ],

  framework: 'cucumber',

  capabilities: [{
    'bstack:options': {
      deviceName: 'Samsung Galaxy S22 Ultra',
      platformVersion: '12.0',
      platformName: 'android',
    }
  }, {
    'bstack:options': {
      deviceName: 'Google Pixel 7 Pro',
      platformVersion: '13.0',
      platformName: 'android',
    }
  }, {
    'bstack:options': {
      deviceName: 'OnePlus 9',
      platformVersion: '11.0',
      platformName: 'android',
    }
  }],
  specs: [
    './features/login.feature'
  ],
  commonCapabilities: {
    'bstack:options': {
      projectName: "BrowserStack Sample",
      buildName: "bstack-demo",
      debug: true,
      networkLogs: true
    }
  },
  maxInstances: 10,

  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: ['./features/step-definitions/steps.js'],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false
  },


  reporters: [
    [
      'cucumberjs-json', {
        jsonFolder: './reports/json',
        language: 'en',
      }
    ]
  ],

  onComplete: function (exitCode, config, capabilities, results) {
    generate({
      jsonDir: './reports/json',
      reportPath: './reports/html',
      openReportInBrowser: false
    });
  },

}