const { BasePage } = require('../pages/BasePage');
const { Utilities } = require('../utilities/scrollElemet');


exports.ProductPage = class ProductPage {
    constructor(I) {
        this.I = I
        this.items = '~test-Item title'
        this.btnAddCart = '~test-ADD TO CART'   
        this.textBtnAddCart = '//android.widget.TextView[@text="ADD TO CART"]'
        this.cartCount = '//android.view.ViewGroup[@content-desc="test-Cart"]//android.view.ViewGroup//android.widget.TextView'
        this.btnCartIcon = '~test-Cart'
    }

    //Add product to Cart
    async addProductToCart(productName) {
        const scroll_Utility = new Utilities(this.I);
        const productXpath = `//android.widget.TextView[@content-desc="test-Item title" and contains(@text,"${productName}")]`;
        await this.I.click(productXpath)
        await scroll_Utility.scrollToElement(this.textBtnAddCart)
        await this.I.waitForElement(this.btnAddCart, 3);
        await this.I.click(this.btnAddCart)
    } 

    // Go to Cart Page
    async goToCart() {
        await this.I.click(this.btnCartIcon)
    }

    // Get product volumn in cart
    async getCartVolumn() {
        const isVisible = await this.I.grabNumberOfVisibleElements(this.cartCount);

        if (isVisible > 0) {
            const count = await this.I.grabTextFrom(this.cartCount);
            return count
        }
        else {
            return '0'
        }
    }
} 