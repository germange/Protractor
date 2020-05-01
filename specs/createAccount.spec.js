let randomstring = require('randomstring');
let homePage = require('../pageObject/homePage');
let loginPage = require('../pageObject/loginPage');
let createAccountPage = require('../pageObject/createAccountPage');
let accountPage = require('../pageObject/accountPage');

let mail = randomstring.generate(7);


describe('Create Account', () => {
    it('Positive', async () => {
        await homePage.get();
        await homePage.clickLogin();
        await loginPage.createAccount(`test${mail}@mail.com`);
        await createAccountPage.enterPersonalInfo('David', 'Noel', 'fsdf53445');
        await createAccountPage.SelectDoB('22', 'January', '2011');
        await createAccountPage.enterAddressInfo('fsdf', 'sdf', 'sdf', 'sdf', 'sdf', '00000', '06969455645', 'sdf');
        expect(await accountPage.getUserName()).toEqual('David Noel');
    });
});