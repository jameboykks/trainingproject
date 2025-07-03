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
    //click btn finish
    await checkoutPage.clickBtnFinishCheckout();


    const actualMsgAfterOrder = await checkoutPage.isCheckoutSuccess();
    const expectedMsgAfterOrder = "THANK YOU FOR YOU ORDER";
    expect(actualMsgAfterOrder).to.include(expectedMsgAfterOrder, "Actual message does not match expected message");

})

Scenario('User fill invalid first name', async({I}) => {
    // them san pham vao gio hang
    await productPage.addProductToCart(testData.products.productsName.backpack);
    // dieu huong den trang gio hang
    await productPage.goToCart();
    
    // den trang checkout
    await checkoutPage.gotoCheckout();
    // thuc hien dien thong tin de tien hanh checkout
    await checkoutPage.performCheckout('', testData.checkoutData.lastName,testData.checkoutData.zipCode)

    const msgErr = await checkoutPage.getMgsInfo()
    console.log('Message error is', msgErr)

    // Assertion
    const expectMsg = 'First Name is required'
    const isCorrect = await checkoutPage.isInfoValid(expectMsg);
    expect(isCorrect).to.be.true;

})

