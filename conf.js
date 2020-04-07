
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
      },
        params: {
          input: {
            mail: 'apptest709@gmail.com',
            pass: 'testappf0001'
          }
        }    
  }
