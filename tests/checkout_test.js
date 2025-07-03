const { expect } = require('chai'); // hoặc dùng chai nếu muốn đầy đủ

const {ProductPage} = require('../pages/ProductPage')
const {CheckoutPage} = require('../pages/CheckoutPage');
const { Common } = require('../common/Common');
const testData = require('../common/testData');

Feature('Checkout')

let productPage;
let checkoutPage;
Before(async ({ I }) => {
    await Common.login(I);
    productPage = new ProductPage(I);
    checkoutPage = new CheckoutPage(I);
});

Scenario('User perform checkout order', async({I}) => {
    // them san pham vao gio hang
    await productPage.addProductToCart(testData.products.productsName.backpack);
    // dieu huong den trang gio hang
    await productPage.goToCart();
    
    // den trang checkout
    await checkoutPage.gotoCheckout();
    // thuc hien dien thong tin de tien hanh checkout
    await checkoutPage.performCheckout(testData.checkoutData.firstName, testData.checkoutData.lastName,testData.checkoutData.zipCode)


    const actualMsgAfterOrder = await checkoutPage.isCheckoutSuccess();
    const expectedMsgAfterOrder = "THANK YOU FOR YOU ORDER";
    expect(actualMsgAfterOrder).to.include(expectedMsgAfterOrder, "Actual message does not match expected message");

})

