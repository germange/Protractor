let randomstring = require('randomstring');
let homePage = require('../pageObject/homePage');
let loginPage = require('../pageObject/loginPage');
let createAccountPage = require('../pageObject/createAccountPage');

let mail = randomstring.generate(7);


describe('Create Account', () => {
    it('Negative', async () => {
        await homePage.get();
        await homePage.clickLogin();
        await loginPage.createAccount(`apptest709@gmail.com`);
        await browser.sleep(2000);
        expect(await loginPage.getErrorMessageAccount()).toContain("An account using this email a"
        + "ddress has already been registered.");

        await loginPage.clearEmailAccount();
        await loginPage.createAccount(`test${mail}@mail.com`);
        await createAccountPage.enterPersonalInfo('David', 'Noel', 'fsdf53445');
        await createAccountPage.SelectDoB('22', 'January', '2011');
        await createAccountPage.enterAddressInfo('fsdf', 'sdf', 'sdf',
            'sdf', 'sdf', '0000000000', '06969455645', 'sdf');
        expect(await createAccountPage.getAccountpageAlert()).toContain("The Zip/Postal code you've e"
        + "ntered is invalid");
    });
});
