let Button = require('../elements/buttons');


class HomePage {
    constructor() {
    };
async get(){
    await browser.get('http://automationpractice.com/index.php');
};
async clickLogin(){
  await this.getLogInButton().click();
};

getLogInButton(){
  return new Button(element((by.xpath('//*[@id="header"]//nav/div[1]/a'))),"Login Button");  
}
  }

  module.exports = new HomePage();



