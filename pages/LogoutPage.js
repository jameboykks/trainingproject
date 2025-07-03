const { ProductPage } = require("./ProductPage")
const locators = require('../common/locators');

exports.LogoutPage = class LogoutPage extends ProductPage {
    constructor(I) {
        super(I);
    }
    async logout() { 
        await this.I.click(locators.logoutPage.btnMenu)
        await this.I.waitForElement(locators.logoutPage.btnLogout, 5);
        await this.I.click(locators.logoutPage.btnLogout)
    }
    async isLoginPageDisplay() {
        return this.I.seeElement({ id: locators.logoutPage.idLoginPage });
    }

}