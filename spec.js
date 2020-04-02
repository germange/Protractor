describe('Login', function() {
    it('Jo Jo', function() {
      browser.get('http://automationpractice.com/index.php');
      browser.sleep(1000);
      element((by.xpath('//*[@id="header"]//nav/div[1]/a'))).click();
      browser.sleep(1000);
      element((by.xpath('//*[@id="email"]'))).sendKeys(browser.params.input.mail);
      browser.sleep(1000);
      element((by.xpath('//*[@id="passwd"]'))).sendKeys(browser.params.input.pass);
      browser.sleep(1000);
      element((by.xpath('//*[@id="SubmitLogin"]/span'))).click();
      browser.sleep(1000);
  
      //expect(element(by.xpath('//*[@id="header"]/div[2]//a/span')).isPresent()).toBe(true);
      expect(element(by.xpath('//*[@id="header"]/div[2]//a/span')).getText()).
        toEqual('Jo Do'); // This is wrong!      
    });
  });