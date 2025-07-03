const { LoginPage } = require('../pages/LoginPage');
const testData = require('./testData');

const Common =  {
    async login(I, username = testData.users.valid.username, password = testData.users.valid.password) {
        const loginPage = new LoginPage(I);
        await loginPage.login(username, password);
  }
};
module.exports = { Common };
