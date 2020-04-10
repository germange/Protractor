let TextBox = require('../elements/textboxes');

class AccountPage {
    constructor() {
  
    };
async getUserName(){
    return this.getUser().getText();
};

getUser(){
  return new TextBox(element(by.xpath('//*[@id="header"]/div[2]//a/span')),"User name");  
}
  }

  module.exports = new AccountPage();