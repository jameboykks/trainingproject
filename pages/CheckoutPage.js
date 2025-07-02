const { BasePage } = require('../pages/BasePage');

exports.CheckoutPage = class CheckoutPage {
    constructor(I) {
        this.I = I;
        this.btnCheckout = '//android.widget.TextView[@text="CHECKOUT"]'
        this.firstNameField = '~test-First Name'
        this.lastNameField = '~test-Last Name'
        this.zipCodeField = '~test-Zip/Postal Code'
        this.btnContinue = '//android.widget.TextView[@text="CONTINUE"]'
        this.btnFinish = '~test-FINISH'
        this.msgOrderSuccess = '//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]'
    }
    
    async gotoCheckout() {
        await this.I.waitForElement(this.btnCheckout, 5);
        await this.I.click(this.btnCheckout)
    }

    async performCheckout(firstName, lastName, zipCode) {
        const basePage = new BasePage(this.I);
        await this.I.fillField(this.firstNameField, firstName);
        await this.I.fillField(this.lastNameField, lastName);
        await this.I.fillField(this.zipCodeField, zipCode);
        await this.I.click(this.btnContinue);

        await basePage.scrollToElement(this.btnFinish) // scroll truoc roi moi wait for
        await this.I.waitForElement(this.btnFinish, 5);
        await this.I.click(this.btnFinish)
    }

    async isCheckoutSuccess() {
        return await this.I.grabTextFrom(this.msgOrderSuccess);
    }
}