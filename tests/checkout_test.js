const { expect } = require('chai'); // hoặc dùng chai nếu muốn đầy đủ

const { LoginPage } = require('../pages/LoginPage');
const {ProductPage} = require('../pages/ProductPage')
const {CheckoutPage} = require('../pages/CheckoutPage')

Feature('Checkout')

Before(async ({ I }) => {
    const username = 'standard_user'
    const pass = 'secret_sauce'

    const loginPage = new LoginPage(I);
    await loginPage.login(username, pass);
});

Scenario('User perform checkout order', async({I}) => {
    const productPage = new ProductPage(I);
    const checkoutPage = new CheckoutPage(I);

    const firstName = 'abc'
    const lastName = 'thanh'
    const zipCode = '123123'
    const productName='Sauce Labs Backpack'

    // them san pham vao gio hang
    await productPage.addProductToCart(productName);
    // dieu huong den trang gio hang
    await productPage.goToCart();
    
    // den trang checkout
    await checkoutPage.gotoCheckout();
    // thuc hien dien thong tin de tien hanh checkout
    await checkoutPage.performCheckout(firstName, lastName, zipCode)


    const actualMsgAfterOrder = await checkoutPage.isCheckoutSuccess();
    const expectedMsgAfterOrder = "THANK YOU FOR YOU ORDER";
    expect(actualMsgAfterOrder).to.include(expectedMsgAfterOrder, "Actual message does not match expected message");

})

