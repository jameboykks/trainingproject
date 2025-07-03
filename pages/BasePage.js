const TestUtils = require('../utilities/testUtils');
const locators = require('../common/locators');

exports.BasePage = class BasePage {
    constructor(I) {
        this.I = I
    }

    // async waitForElement(locator, timeout = 10) {
    //     await TestUtils.waitForElement(this.I, locator, timeout);
    // }

    async waitForVisible(locator, timeout = 10) {
        await TestUtils.waitForVisible(this.I, locator, timeout);
    }

    async click(locator) {
        await this.waitForVisible(locator);
        await this.I.click(locator);
    }

    async fillField(locator, value) {
        await this.waitForVisible(locator);
        await this.I.fillField(locator, value);
    }

    async grabText(locator) {
        await this.waitForVisible(locator);
        return await this.I.grabTextFrom(locator);
    }

    // async isVisible(locator) {
    //     return await this.I.grabNumberOfVisibleElements(locator) > 0;
    // }

    // async wait(seconds) {
    //     await this.I.wait(seconds);
    // }

    // async refreshPage() {
    //     await this.I.refreshPage();
    // }

   
}