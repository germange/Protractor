let homePage = require('../pageObject/homePage');
let summaryPage = require('../pageObject/summaryPage');


describe('Delete from Cart', () => {
    it('Positive', async () => {
        await homePage.get();
        await homePage.addToCart1stItem();
        await homePage.addToCart2ndItem();
        await homePage.addToCart3rdItem();
        expect(await homePage.cartItemQuantity()).toBe(3);

        await homePage.removeCartItem();
        await homePage.waitForFirstCartItemToBeRemoved();
        expect(await homePage.cartItemQuantity()).toBe(2);

        await homePage.cartDropDownClick();
        await summaryPage.deleteLastCartItem();
        await summaryPage.waitForLastCartItemToBeRemoved();
        expect(await homePage.cartItemQuantity()).toBe(1);

        await summaryPage.homeButtonClick();
        expect(await homePage.getCartProductsNumber()).toEqual('1');
    });
});

/*

Step 2
Remove first item
=> Popup is still opened. 2 items in cart is shown

Step 3
Click "Cart"
=> "Your shopping cart" page is opened. 2 items are shown

Step 4
Remove last item
=> 1 item is present

Step 5
Go to Main page
=> 1 is shown in the upper right corner of Cart icon
*/