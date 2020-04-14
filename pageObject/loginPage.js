let Input = require('../elements/input');
let Button = require('../elements/button');
let BasePage = require('../base/bagePage');

let emailInputLocator = by.xpath('//*[@id="email"]');
let passwordinputLocator = by.xpath('//*[@id="passwd"]');
let submitButton = by.xpath('//*[@id="SubmitLogin"]')

class LoginPage extends BasePage{
    async userLogin(mail,pass){
        await this.getEmailInput().sendKeys(mail);
        await this.getPasswordInput().sendKeys(pass)
        await this.getSubmitButton().click();
    }

  getEmailInput(){
      return new Input(element(emailInputLocator), "Email input");
   }
  getPasswordInput(){
      return new Input(element(passwordinputLocator), "Password input");
   }
  getSubmitButton(){
      return new Button(element(submitButton), "Submit button");  
   }
  getBaseElement(){
      return new Input(element(emailInputLocator), "Email input");
   }
}

  module.exports = new LoginPage();


