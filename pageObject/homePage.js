let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let Input = require('../elements/input');
let TextBox = require('../elements/textBox');
let BaseElement = require('../base/baseElement');
let DropDown = require('../elements/dropdown');
let Image = require('../elements/image');

let loginbuttonLocator = by.css('a.login');
let searchTopInputLocator = by.css('#search_query_top');
let submitSearchTopButtonLocator = by.css('.button-search');
let searchResultsTextBoxLocator = by.css('.heading-counter');
let firstSearchResultButton = by.css('.product_list.row > li:nth-child(1) h5 > a');
let womenMenuDropdownLocator = by.css('#block_top_menu a[title="Women"]');
let womenMenuTShirtButtonLocator = by.css('.sfHover a[title="T-shirts"]');
let firstItemImageLocator = by.css('.homefeatured img[alt="Faded Short Sleeve T-shirts"]');
let addToCart1stItemButtonLocator = by.css('.homefeatured a[data-id-product="1"]');
let continueShoppingButtonLocator = by.css('span[title="Continue shopping"]');
let secondItemImageLocator = by.css('.homefeatured img[alt="Blouse"]');
let addToCart2ndItemButtonLocator = by.css('.homefeatured a[data-id-product="2"]');
let thirdItemImageLocator = by.css('.homefeatured img[alt="Printed Dress"]');
let addToCart3rdItemButtonLocator = by.css('.homefeatured a[data-id-product="3"]');
let shoppingCartDropDownLocator = by.css('a[title="View my shopping cart"]');
let cartItemQuantityTextBoxLocator = by.css('.products > dt'); // $x("count(//*[class = products]|//dt)")
let cartItemRemoveButtonLocator = by.css('.first_item a[class="ajax_cart_block_remove_link"]');
let cartProductsNumberTextBoxLocator = by.css('.shopping_cart span[class="ajax_cart_quantity"]');
let cartFIrstItemImmageLocator = by.css('.first_item a[title="Faded Shor..."]');


class HomePage extends BasePage {
    async get() {
        await allure.createStep(`Open link`, async () => {
            await browser.get('http://automationpractice.com/index.php');
        })();
    }

    async clickLogin() {
        await allure.createStep(`Open login page`, async () => {
            await this.getLogInButton().click();
        })();
    }

    async searchTOpFor(query) {
        await allure.createStep(`Search for ${query}`, async () => {
            await this.getSearchTopInput().sendKeys(query);
            await this.getSubmitSearchTopButton().click();
        })();
    }

    async searchResults() {
        return await this.getsSearchResultsTextBox().getText();
    }

    async searchResultsCount() {
        let stringvalue = await this.searchResults();
        return parseInt(stringvalue, 10);
    }


    async selectFirstResult() {
        await allure.createStep(`Select First Search Result`, async () => {
            await this.getFirstSearchResultButton().click();
        })();
    }

    async selectTShirtMenuOption() {
        await allure.createStep(`Select T-Shirt Menu Option`, async () => {
            await this.getWomenMenuDropdown().openMenu();
            await this.getWomenMenuTShirtButton().click();
        })();
    }

    async addToCart1stItem() {
        await allure.createStep(`Add To Cart 1-st Item`, async () => {
            await this.getFirstItemImage().hover();
            await this.getAddToCart1stItemButton().click();
            await (new Button(element(continueShoppingButtonLocator), "Continue Shopping Btn")).waitForPresenceOf();
            await this.getContinueShoppingButton().click();
        })();
    }

    async addToCart2ndItem() {
        await allure.createStep(`Add To Cart 2-nd Item`, async () => {
            await this.getSecondItemImage().hover();
            await this.getAddToCart2ndItemButton().click();
            await (new Button(element(continueShoppingButtonLocator), "Continue Shopping Btn")).waitForPresenceOf();
            await this.getContinueShoppingButton().click();
        })();
    }

    async addToCart3rdItem() {
        await allure.createStep(`Add To Cart 3-rd Item`, async () => {
            await this.getThirdItemImage().hover();
            await this.getAddToCart3rdItemButton().click();
            await (new Button(element(continueShoppingButtonLocator), "Continue Shopping Btn")).waitForPresenceOf();
            await this.getContinueShoppingButton().click();
        })();
    }

    async cartItemQuantity() {
        await this.getShoppingCartDropDown().hover();
        return await element.all(cartItemQuantityTextBoxLocator).count(); // TBD
    }

    async removeCartItem() {
        await allure.createStep(`Remove 1-st Cart Item`, async () => {
            await this.getCartItemRemoveButton().click();
        })();
    }

    async cartDropDownClick() {
        await this.getShoppingCartDropDown().click();
    }

    async getCartProductsNumber() {
        return await this.getCartProductsNumberTextBox().getText();
    }

    async waitForFirstCartItemToBeRemoved() {
        await (new Image(element(cartFIrstItemImmageLocator), "1-st Cart Item Immage")).waitForInvisible(3000);
    }

    getLogInButton() {
        return new Button(element(loginbuttonLocator), "Login Button");
    }

    getSearchTopInput() {
        return new Input(element(searchTopInputLocator), "Search Top input");
    }

    getSubmitSearchTopButton() {
        return new Button(element(submitSearchTopButtonLocator), "Submit Search button");
    }

    getsSearchResultsTextBox() {
        return new TextBox(element(searchResultsTextBoxLocator), "Search results texbox");
    }

    getFirstSearchResultButton() {
        return new Button(element(firstSearchResultButton), "First Search Resul");
    }


    getWomenMenuDropdown() {
        return new DropDown(element(womenMenuDropdownLocator), "Women Dropdown Menu");
    }

    getWomenMenuTShirtButton() {
        return new Button(element(womenMenuTShirtButtonLocator), "Women TShirt button");
    }

    getFirstItemImage() {
        return new Image(element(firstItemImageLocator), "First Item Image");
    }

    getAddToCart1stItemButton() {
        return new Button(element(addToCart1stItemButtonLocator), "Ddd To Cart 1st Item Button");
    }

    getSecondItemImage() {
        return new Image(element(secondItemImageLocator), "Secon Item Image");
    }

    getAddToCart2ndItemButton() {
        return new Button(element(addToCart2ndItemButtonLocator), "Ddd To Cart 2nd Item Button");
    }

    getThirdItemImage() {
        return new Image(element(thirdItemImageLocator), "Third Item Image");
    }

    getAddToCart3rdItemButton() {
        return new Button(element(addToCart3rdItemButtonLocator), "Ddd To Cart 3rd Item Button");
    }

    getContinueShoppingButton() {
        return new Button(element(continueShoppingButtonLocator), "Continue Shopping Button");
    }

    getShoppingCartDropDown() {
        return new DropDown(element(shoppingCartDropDownLocator), "Shopping Cart DropDown");
    }


    getCartItemQuantityTextBox() {
        return new TextBox(element(cartItemQuantityTextBoxLocator), "Cart Item Quantity TextBox");
    }

    getCartItemRemoveButton() {
        return new Button(element(cartItemRemoveButtonLocator), "Cart Item Remove Button");
    }

    getCartProductsNumberTextBox() {
        return new TextBox(element(cartProductsNumberTextBoxLocator), "Cart Products Number TextBox");
    }

    getBaseElement() {
        return new BaseElement(element(loginbuttonLocator), "Login Button");
    }
}

module.exports = new HomePage();
