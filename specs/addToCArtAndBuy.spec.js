let homePage = require('../pageObject/homePage');
let loginPage = require('../pageObject/loginPage');
let tShirtPage = require('../pageObject/tShirtPage');
let summaryPage = require('../pageObject/summaryPage');
let addressPage = require('../pageObject/addressPage');
let shippingPage = require('../pageObject/shippingPage');
let paymentPage = require('../pageObject/paymentPage');


describe('Add to Cat & Buy', () => {
    it('Positive', async () => {
        await homePage.get();
        await homePage.clickLogin();
        await loginPage.userLogin(browser.params.input.mail, browser.params.input.pass);
        await homePage.selectTShirtMenuOption();
        expect(await tShirtPage.getTShirtHeader()).toEqual('T-SHIRTS ');

        await tShirtPage.swithToListview();
        expect(await tShirtPage.getListViewCheckBox().isSelected()).toEqual('selected');

        await tShirtPage.clickAddToCartButton();
        expect(await tShirtPage.getSuccessIconVisibility()).toBe(true);

        await tShirtPage.clickProceedToCheckout();
        expect(await summaryPage.getSummaryPageTitle()).toContain('SHOPPING-CART SUMMARY');

        await summaryPage.quantityPlusClick();
        await summaryPage.quantityInputValueWaitForUpdate();
        expect(await summaryPage.getQuantityInputValue()).toEqual('2');

        await summaryPage.proceedToCheckoutClick();
        await addressPage.proceedToCheckoutClick();
        expect(await shippingPage.termsOfServiceVisibility()).toBe(true);

        await shippingPage.checkTermsOfService();
        await shippingPage.proceedToCheckoutClick();
        expect(await paymentPage.payByCheckButtonVisibility()).toBe(true);

        await paymentPage.payByCheckClick();
        expect(await paymentPage.confirmOrderButtonVisibility()).toBe(true);

        await paymentPage.confirmOrderClick();
        expect(await paymentPage.getSuccessAlertText()).toEqual('Your order on My Store is complete.');
    });
});
