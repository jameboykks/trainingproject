const { expect } = require('chai'); // hoặc dùng chai nếu muốn đầy đủ
const { LoginPage } = require('../pages/LoginPage');
const testData = require('../common/testData');

Feature('Login');

let loginPage;
Before(async ({ I }) => {
    loginPage = new LoginPage(I);
});
//Login successfull
Scenario('User login successfull and see Product page', async ({ I }) => {

    await loginPage.login(testData.users.valid.username, testData.users.valid.password)

    const heading = await loginPage.getHeadingProductPage()
    console.log('Heading is', heading)
    expect(heading).to.equal('PRODUCTS', "Heading does not match");
    
});

// Login failed
Scenario('User login failed and see msg err', async ({ I }) => {

    await loginPage.login(testData.users.invalid.username, testData.users.invalid.password)
    
    const msgErr = await loginPage.getMessageErr()
    console.log('Message error is', msgErr)
    expect(msgErr).to.equal('Username and password do not match any user in this service.')

});