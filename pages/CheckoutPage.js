const locators = require('../common/locators');
const {ScrollUtils} = require('../utilities/scrollElemet');
const { ProductPage } = require('./ProductPage');

exports.CheckoutPage = class CheckoutPage extends ProductPage {
    constructor(I) {
        super(I)
    }
    
    async gotoCheckout() {
        await this.waitForVisible(locators.checkoutPage.btnCheckout, 5);
        await this.click(locators.checkoutPage.btnCheckout)
    }

    async performCheckout(firstName, lastName, zipCode) {
        await this.fillField(locators.checkoutPage.firstNameField, firstName);
        await this.fillField(locators.checkoutPage.lastNameField, lastName);
        await this.fillField(locators.checkoutPage.zipCodeField, zipCode);
        await this.click(locators.checkoutPage.btnContinue);
    }

    async clickBtnFinishCheckout() {
        await ScrollUtils.scrollToElement(this.I, locators.checkoutPage.btnFinish) // scroll truoc roi moi wait for
        await this.waitForVisible(locators.checkoutPage.btnFinish, 5);
        await this.click(locators.checkoutPage.btnFinish)
    }

    async getMgsInfo() {
        return await this.grabText(locators.checkoutPage.msgErr)
    }

    async isCheckoutSuccess() {
        return await this.grabText(locators.checkoutPage.msgOrderSuccess);
    }

    async isInfoValid(expectedMsg) {
        const actualMsg = await this.getMgsInfo()
        return actualMsg === expectedMsg;
    }
}