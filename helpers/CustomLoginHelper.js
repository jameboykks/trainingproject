const Helper = require('@codeceptjs/helper');
const {LoginPage} = require('../pages/LoginPage');
const testData = require('../common/testData');

class CustomLoginHelper extends Helper {
    async login() {
        const { I } = this.helpers.Appium;
        const loginPage = new LoginPage(I);
        console.log('[CustomLoginHelper] ⏳ Logging in...');
        await loginPage.login(testData.users.valid.username, testData.users.valid.password);
        console.log('[CustomLoginHelper] ✅ Login done!');
    }

    async _before() {
        await this.login(); // Tự động gọi trước mỗi test
    }
}


module.exports = CustomLoginHelper;