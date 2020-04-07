let homePage = require('./pageObject/homePage');
let loginPage = require('./pageObject/loginPage');
let accountPage = require('./pageObject/accountPage');

describe('Login', function() {
    it('Jo Jo', async function() {
      await homePage.get();
      await homePage.logInButton.click();
      await loginPage.email(browser.params.input.mail);
      await loginPage.password(browser.params.input.pass);
      await loginPage.submitButton.click();
        
      //expect(element(by.xpath('//*[@id="header"]/div[2]//a/span')).isPresent()).toBe(true);
        expect(await accountPage.getUserName()).
        toEqual('Jo Do'); // This is wrong!        
    });
  });