describe('Protractor Demo App', function() {
    it('should add one and two', function() {
      browser.get('http://juliemr.github.io/protractor-demo/');
      //element(by.model('first')).sendKeys(1);
      //element(by.model('second')).sendKeys(2);
      element(by.xpath('//form/input[1]')).sendKeys(browser.params.input.first);
      element(by.css('input:nth-child(3)')).sendKeys(browser.params.input.second);
      element(by.id('gobutton')).click();
  
      expect(element(by.binding('latest')).getText()).
          toEqual('5'); // This is wrong!
    });
  });