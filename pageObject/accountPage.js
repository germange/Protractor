let TextBox = require('../elements/textBox');
let BasePage = require('../base/bagePage');

let userNameLocator = by.css('a.account');

class AccountPage extends BasePage {

    async getUserName(){
        return this.getUser().getText();
    }

  getUser(){
      return new TextBox(element(userNameLocator),"User name");
   }

  getBaseElement(){
      return new TextBox(element(userNameLocator),"User name");
   }
}

  module.exports = new AccountPage();