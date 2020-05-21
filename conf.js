exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER:false,
    restartBrowserBetweenTests: false,
    jasmineNodeOpts: {
      defaultTimeoutInterval: 90000,
    },
    specs: [
    //'.//specs/login.spec.js',
    //'.//specs/negativelogin.spec.js',
    //'.//specs/createAccount.spec.js',
    //'.//specs/createAccountNegative.spec.js',
    './/specs/searchHomePage.spec.js',
    //'.//specs/addToCArtAndBuy.spec.js',
    //'.//specs/deleteFromCart.spec.js'
    ],
    capabilities: {
        browserName:'chrome', 
        chromeOptions: {
            //args:["window-size=800,600"]
        }
    },

    onPrepare: async function() {
        beforeEach(async function() {
            await browser.driver.manage().window().maximize();
            console.log('Maximized');
            browser.waitForAngularEnabled(false);
            browser.manage().timeouts().implicitlyWait(2000);
          });

        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));

        jasmine.getEnv().afterEach(async function() {
          await createScreenshotAllure();
          await browser.restart();
        });
      },    
        params: {
          input: {
            mail: 'apptest709@gmail.com',
            pass: 'testappf0001'
          }
        }    
  }

  async function createScreenshotAllure() {
    let screenshotFile = await browser.takeScreenshot();
    await allure.createAttachment("Screenshot", ()=>{
      return new Buffer.from(screenshotFile, "base64")
    }, 'image/png')();
  }
