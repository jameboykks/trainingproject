module.exports = {
    
    // LoginPage locator
  loginPage: {
    usernameField : '~test-Username',
    passwordField : '~test-Password',
    btnLogin : '~test-LOGIN',
    msgErr: '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView',
    headingProductPage : '//android.widget.TextView[@text="PRODUCTS"]' ,

  },
  

  // ProductPage locator
  productsPage: {
    items : '~test-Item title',
    btnAddCart : '~test-ADD TO CART',
    textBtnAddCart : '//android.widget.TextView[@text="ADD TO CART"]',
    cartCount : '//android.view.ViewGroup[@content-desc="test-Cart"]//android.view.ViewGroup//android.widget.TextView',
    btnCartIcon : '~test-Cart',
    btnBackToProduct: '~test-BACK TO PRODUCTS'
  },

  // CheckoutPage locator
  checkoutPage: {
    btnCheckout : '//android.widget.TextView[@text="CHECKOUT"]',
    firstNameField : '~test-First Name',
    lastNameField : '~test-Last Name',
    zipCodeField : '~test-Zip/Postal Code',
    btnContinue : '//android.widget.TextView[@text="CONTINUE"]',
    btnFinish : '~test-FINISH',
    msgOrderSuccess : '//android.widget.TextView[@text="THANK YOU FOR YOU ORDER"]',
    msgErr: '//android.view.ViewGroup[@content-desc="test-Error message"]/android.widget.TextView'
  },

  // LogoutPage locator
  logoutPage: {
    btnMenu : '~test-Menu',
    btnLogout :'~test-LOGOUT',
    idLoginPage : 'com.swaglabsmobileapp:id/action_bar_root',
  }
}; 