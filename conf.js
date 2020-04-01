
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName:'chrome', 
        chromeOptions: {
            args:["window-size=800,600"]
        }
    },
    onPrepare: function() {
        browser.driver.manage().window().maximize();
        console.log('Maximized');
      },
        params: {
          input: {
            first: '22',
            second: '4432'
          }
        }    
  }
