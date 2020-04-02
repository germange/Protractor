
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName:'chrome', 
        chromeOptions: {
            //args:["window-size=800,600"]
        }
    },
    onPrepare: function() {
        browser.driver.manage().window().maximize();
        console.log('Maximized');
        browser.waitForAngularEnabled(false)
      },
        params: {
          input: {
            mail: 'apptest709@gmail.com',
            pass: 'testappf0001'
          }
        }    
  }
