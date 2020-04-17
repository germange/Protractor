exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    SELENIUM_PROMISE_MANAGER:false,
    specs: ['spec.js'],
    capabilities: {
        browserName:'chrome', 
        chromeOptions: {
            //args:["window-size=800,600"]
        }
    },

    onPrepare: async function() {
        await browser.driver.manage().window().maximize();
        console.log('Maximized');
        browser.waitForAngularEnabled(false);
        browser.manage().timeouts().implicitlyWait(2000);

        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
        jasmine.getEnv().afterEach(function(done){
          browser.takeScreenshot().then(function (png) {
            allure.createAttachment('Screenshot', function () {
              return new Buffer(png, 'base64')
            }, 'image/png')();
            done();
          })
        });
      },    
        params: {
          input: {
            mail: 'apptest709@gmail.com',
            pass: 'testappf0001'
          }
        }    
  }

  /*async function createScreenshotAllure(){
    let screenshotFile = await browser.takeScreenshot();
    await allure.createAttachment("Screenshot", ()=>{
      return new Buffer (screenshotFile, "base64")
    }, 'image/png')();
  }
*/