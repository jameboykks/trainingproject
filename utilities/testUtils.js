// const { expect } = require('chai');

class TestUtils {
    static async waitForVisible(I, locator, timeout = 10) {
        await I.waitForVisible(locator, timeout);
    }

}

module.exports = TestUtils; 