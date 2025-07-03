const locators = require('../common/locators');
const {ScrollUtils} = require('../utilities/scrollElemet');
const { ProductPage } = require('./ProductPage');

exports.CheckoutPage = class CheckoutPage extends ProductPage {
    constructor(I) {
        super(I)
    }
    
    async gotoCheckout() {
        await this.I.waitForElement(locators.checkoutPage.btnCheckout, 5);
        await this.I.click(locators.checkoutPage.btnCheckout)
    }

    async performCheckout(firstName, lastName, zipCode) {
        await this.I.fillField(locators.checkoutPage.firstNameField, firstName);
        await this.I.fillField(locators.checkoutPage.lastNameField, lastName);
        await this.I.fillField(locators.checkoutPage.zipCodeField, zipCode);
        await this.I.click(locators.checkoutPage.btnContinue);

        await ScrollUtils.scrollToElement(this.I, locators.checkoutPage.btnFinish) // scroll truoc roi moi wait for
        await this.I.waitForElement(locators.checkoutPage.btnFinish, 5);
        await this.I.click(locators.checkoutPage.btnFinish)
    }

    async isCheckoutSuccess() {
        return await this.I.grabTextFrom(locators.checkoutPage.msgOrderSuccess);
    }
}