let Input = require('../elements/input');
let Button = require('../elements/button');
let BasePage = require('../base/bagePage');
let DropDown = require('../elements/dropdown');
let BaseElement = require('../base/baseElement');


let perFirstNameInputLocator = by.css('#customer_firstname');
let perLastNameInputLocator = by.css('#customer_lastname');
let perPasswordInputLocator = by.css('#passwd');
let dayofbDropdownLocator = by.css('#days');
let monthofbDropdownLocator = by.css('#months');
let yearofbDropdownLocator = by.css('#years');
let addFirstNameInputLocator = by.css('#firstname.form-control');
let addLastNameInputLocator = by.css('#lastname.form-control');
let companyInputLocator = by.css('#company.form-control');
let addressInputLocator = by.css('#address1.form-control');
let cityInputLocator = by.css('#city.form-control');
let stateDropdownLocator = by.css('#id_state.form-control');
let postcodeInputLocator = by.css('#postcode.form-control');
let countryDropdownLocator = by.css('#id_country.form-control');
let mobileInputLocator = by.css('#phone_mobile.form-control');
let aliasInputLocator = by.css('#alias.form-control');
let submitButtonLocator = by.css('#submitAccount');


class CreateAccountPage extends BasePage {
    async enterPersonalInfo(first, last, pass) {
        await allure.createStep(`Login user ${first} / ${last} / ${pass}`, async () => {
            await this.getPerlFirstNameInput().sendKeys(first);
            await this.getPerLastNameInput().sendKeys(last);
            await this.getPerPasswordInput().sendKeys(pass);
        })();
    }

    async SelectDoB() {
        await allure.createStep(`DoB`, async () => {
            await this.getdayofbDropdown().selectOption('22');
            await this.getmonthofbDropdown().selectOption('January');
            await this.getyearofbDropdown().selectOption('2011');
        })();
    }

    async enterAddressInfo(first, last, company, address, city, zip, mobile, assign) {
        await allure.createStep(`Enter Address ${first} / ${last} / ${company} / ${address}  
        /${city} / ${zip} / ${mobile} / ${assign}`, async () => {
            await this.getAddlFirstNameInput().sendKeys(first);
            await this.getAddLastNameInput().sendKeys(last);
            await this.getCompanyInput().sendKeys(company);
            await this.getAddressInput().sendKeys(address);
            await this.getCityInput().sendKeys(city);
            await this.getStateDropdown().selectOption('California');
            await this.getPostcodeInput().sendKeys(zip);
            await this.getCountryDropdown().selectOption('United States');
            await this.getMobileInput().sendKeys(mobile);
            await this.getAliasInput().sendKeys(assign);
            await this.getSubmitButton().click();
        })();
    }

    getPerlFirstNameInput() {
        return new Input(element(perFirstNameInputLocator), "First Name");
    }

    getPerLastNameInput() {
        return new Input(element(perLastNameInputLocator), "Last Name");
    }

    getPerPasswordInput() {
        return new Input(element(perPasswordInputLocator), "Password");
    }

    getdayofbDropdown() {
        return new DropDown(element(dayofbDropdownLocator), "Day");
    }

    getmonthofbDropdown() {
        return new DropDown(element(monthofbDropdownLocator), "Month");
    }

    getyearofbDropdown() {
        return new DropDown(element(yearofbDropdownLocator), "Year");
    }

    getAddlFirstNameInput() {
        return new Input(element(addFirstNameInputLocator), "First Name/address");
    }

    getAddLastNameInput() {
        return new Input(element(addLastNameInputLocator), "Last Name/address");
    }

    getCompanyInput() {
        return new Input(element(companyInputLocator), "Company/address");
    }

    getAddressInput() {
        return new Input(element(addressInputLocator), "Address/address");
    }

    getCityInput() {
        return new Input(element(cityInputLocator), "City/address");
    }

    getStateDropdown() {
        return new DropDown(element(stateDropdownLocator), "State/address");
    }

    getPostcodeInput() {
        return new Input(element(postcodeInputLocator), "Postcode/address");
    }

    getCountryDropdown() {
        return new DropDown(element(countryDropdownLocator), "Country/address");
    }

    getMobileInput() {
        return new Input(element(mobileInputLocator), "Mobile/address");
    }

    getAliasInput() {
        return new Input(element(aliasInputLocator), "Alias/address");
    }

    getSubmitButton() {
        return new Button(element(submitButtonLocator), "Submit button");
    }

    getBaseElement() {
        return new BaseElement(element(perFirstNameInputLocator), "First Name").waitForVisible();
    }
}

module.exports = new CreateAccountPage();