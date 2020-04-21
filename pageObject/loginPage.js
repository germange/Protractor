let Input = require('../elements/input');
let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let TextBox = require('../elements/textBox');

let emailInputLocator = by.xpath('//*[@id="email"]');
let passwordInputLocator = by.xpath('//*[@id="passwd"]');
let submitButton = by.xpath('//*[@id="SubmitLogin"]')
let errorMessageLocator = by.css('.alert.alert-danger li');

class LoginPage extends BasePage{
    async userLogin(mail,pass){
        await allure.createStep(`Login user ${mail} / ${pass}`, async ()=> {
            await this.getEmailInput().sendKeys(mail);
            await this.getPasswordInput().sendKeys(pass)
            await this.getSubmitButton().click();
        })();
    }
    async getErrorMessage(){
        return this.getError().getText();
    }
    async clearEmail(){
        await allure.createStep(`Clean email`, async ()=> { 
        await this.getEmailInput().clear();
        })();
    }

  getEmailInput(){
      return new Input(element(emailInputLocator), "Email input");
   }
  getPasswordInput(){
      return new Input(element(passwordInputLocator), "Password input");
   }
  getSubmitButton(){
      return new Button(element(submitButton), "Submit button");  
   }
  getBaseElement(){
      return new Input(element(emailInputLocator), "Email input");
   }
  getError(){
    return new TextBox(element(errorMessageLocator),"Error Message");
   }   
}

  module.exports = new LoginPage();


