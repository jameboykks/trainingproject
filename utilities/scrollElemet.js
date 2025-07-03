exports.ScrollUtils = class ScrollUtils {
    //Scroll để thấy element có XPath `xpath`, tối đa `maxScrolls` lần
    static async scrollToElement(I,xpath, maxScrolls = 5) {   
        for (let i = 0; i < maxScrolls; i++) {
        const isVisible = await I.grabNumberOfVisibleElements(xpath);
        if (isVisible > 0) {
            I.say(`Đã thấy element: ${xpath}`);
            return;
        }
        I.say(`Cuộn lần ${i + 1}`);
        await I.aiSwipe("down"); // dùng swipe helper
        }
        throw new Error(`Không tìm thấy element: ${xpath}`);
    }
}