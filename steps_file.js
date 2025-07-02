// in this file you can append custom step methods to 'I' object
const { actor } = require('codeceptjs');
module.exports = function() {
  return actor({

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    //Vì swipe() không phải là hàm có sẵn trong CodeceptJS --> định nghĩa actor trong file step
  
    async aiSwipe(direction) {
      const { browser } = require('codeceptjs').container.helpers().Appium;
      if (!['up', 'down', 'left', 'right'].includes(direction)) throw new Error('Invalid swipe');
      if (['up', 'down'].includes(direction)) {
        const el = await browser.$('//android.widget.ScrollView'); if (!el.elementId) throw new Error('no scroll');
        await browser.execute('mobile:scrollGesture', { elementId: el.elementId, direction, percent: 0.75 });
      } else {
        const { width, height } = await browser.getWindowSize();
        await browser.execute('mobile:swipeGesture', { left: 0, top: 0, width, height, direction, percent: 0.75 });
      }
    },
    

  });
}
