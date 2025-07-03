
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
        await this.I.waitForElement(locators.loginPage.headingProductPage, 10);
        const heading = await this.grabText(locators.loginPage.headingProductPage);
        return heading;
    }
    
    // get err message when login failed
    async getMessageErr() {
        await this.I.waitForElement(locators.loginPage.msgErr, 10);
        const msgErr = await this.grabText(locators.loginPage.msgErr);
        return msgErr;
    }

    async isMsgEqual(expectedMsg) {
        const actualMsg = await this.getMessageErr();
        return actualMsg === expectedMsg;
    }
}