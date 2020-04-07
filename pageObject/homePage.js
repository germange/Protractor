class HomePage {
    constructor() {
      this.logInButton = element((by.xpath('//*[@id="header"]//nav/div[1]/a')))
    };
async get(){
    await browser.get('http://automationpractice.com/index.php');
};
  }

  module.exports = new HomePage();



