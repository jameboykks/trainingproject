
const { BasePage } = require('./BasePage');
const locators = require('../common/locators');

exports.LoginPage = class LoginPage extends BasePage {
    constructor(I) {
        super(I);
    }

    async login(username, password) {
        await this.fillField(locators.loginPage.usernameField, username);
        await this.fillField(locators.loginPage.passwordField, password);
        await this.click(locators.loginPage.btnLogin);
    }

    // get heading PRODUCTS
    async getHeadingProductPage() {
        await this.I.waitForElement(locators.loginPage.headingProductPage, 5);
        const heading = await this.I.grabTextFrom(locators.loginPage.headingProductPage);
        return heading;
    }
    
    // get err message when login failed
    async getMessageErr() {
        await this.I.waitForElement(locators.loginPage.msgErr, 20);
        const msgErr = await this.I.grabTextFrom(locators.loginPage.msgErr);
        return msgErr;
    }
}