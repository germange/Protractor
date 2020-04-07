class LoginPage {
    constructor() {
      this.emailInput = element((by.xpath('//*[@id="email"]')));
      this.passwordInput = element((by.xpath('//*[@id="passwd"]')));
      this.submitButton = element((by.xpath('//*[@id="SubmitLogin"]/span')));
    };
async email(mail){
    await this.emailInput.sendKeys(mail);
};
async password(pass){
    await this.passwordInput.sendKeys(pass);
};
  }

  module.exports = new LoginPage();


