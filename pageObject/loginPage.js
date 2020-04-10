let Input = require('../elements/inputs');
let Button = require('../elements/buttons');


class LoginPage {
    constructor() {
    };

async userLogin(mail,pass){
  await this.getEmailInput().sendKeys(mail);
  await this.getPasswordInput().sendKeys(pass)
  await this.getSubmitButton().click();
};

getEmailInput(){
return new Input(element((by.xpath('//*[@id="email"]'))), "Email input");
}
getPasswordInput(){
return new Input(element((by.xpath('//*[@id="passwd"]'))), "Password input");
}
getSubmitButton(){
  return new Button(element((by.xpath('//*[@id="SubmitLogin"]/span'))), "Submit button");  
}

  }

  module.exports = new LoginPage();


