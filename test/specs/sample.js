const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");

describe('DO app testing', ()=>{
    it('login', async()=>{
        // await driver.pause(5000);
        const login = await $('~LogIn as admin');
       await expect(login).toBeExisting('LogIn as admin');
    //    await login.waitForDisplayed({ timeout: 5000 });
      //  console.log(login.getValue())
        await login.click();
    })

        // Enter the values
    it('should enter username', async()=>{
        
        const usernameField = await $$("android.widget.EditText")[0];
        await usernameField.waitForDisplayed({ timeout: 5000 });
        await usernameField.click();
        await usernameField.addValue("krishnat.bhosale@bangurcement.com");
        console.log(await usernameField.getText())
    })

    it('should enter password', async()=>{
        
        const passwordField = await $$("android.widget.EditText")[1];
        await passwordField.waitForDisplayed({ timeout: 5000 });
        await passwordField.click();
        await passwordField.addValue("1234");
        console.log(await passwordField.getText())
        const loginbutton = await $("~Log In");
        await loginbutton.click();
    })

    it('Selecting the orders from menu bars', async()=>{
        const menu = await $('android.widget.Button');
        await menu.click();
        const orderitem = await $('//android.view.View[@content-desc="Orders"]');
        await orderitem.click();
        const createorder = $('//android.widget.ImageView[@content-desc="cartBtn"]');
        await createorder.click();
    })

    it('Selecting Dealers from drop down', async()=>{
        const searchbutton = await $('android.widget.EditText');
        await searchbutton.click();
        const selectdealers = await $('//android.view.View[@content-desc="DHANLAXMI CEMENT SHOPPY | 11006312 | 11006312"]');
        await selectdealers.click();
    })

    it('Click on Create order button', async()=>{
        const createbutton = await $('//android.widget.ImageView[@content-desc="createOrderBtn"]');
        await createbutton.click();
        const selectoption = await $('//android.widget.EditText');
        await selectoption.click();
        const selected = await $('//android.view.View[@content-desc="Total Order Quantity (MT)"]');
        await selected.click();
    })

    it('Select city', async()=>{
        const city = await $('//android.widget.Button[@content-desc="City"]');
        city.click();
        const cityselection = await $('//android.view.View[@content-desc="BALINGE"]');
        cityselection.click();
        const pincode = await $('//android.widget.Button[@content-desc="Select Pincode"]');
        pincode.click();
    })

    it('Select SKU Information', async()=>{
        const skuclick = await $('//android.widget.Button[@content-desc="Select SKU"]');
        skuclick.click();
        const skuoption = await $('//android.view.View[@content-desc="SHREE CEMENT_OPC 53_HDPE"]');
        skuoption.click();
        const mtvalue = await $('//android.widget.ScrollView/android.widget.EditText');
        await mtvalue.waitForDisplayed({ timeout: 5000 });
        mtvalue.click();
        await mtvalue.addValue("3.5");
        await mtvalue.waitForDisplayed({ timeout: 5000 });
    })

    it('Check for the address and place order', async()=>{
        const clickonscreen = await $('//android.view.View[@content-desc="SKU Information"]');
        clickonscreen.click();
        await clickonscreen.waitForDisplayed({ timeout: 5000 });
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const enterreason = await $('//android.widget.ScrollView/android.widget.EditText');
        await enterreason.addValue('Automation test');
        const clickbtn = await $('//android.widget.Button[@content-desc="Confirm"]');
        await clickbtn.waitForDisplayed({ timeout: 5000 });
        clickbtn.click();
    })

    it('Place Order button', async()=>{
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const placeorder = await $('//android.widget.Button[@content-desc="Place Order"]');
        await placeorder.waitForDisplayed({ timeout: 5000 });
        placeorder.click();
        const orderconfirmation = await $('//android.widget.ImageView[@content-desc="Order has been Recieved"]');
        await orderconfirmation.waitForDisplayed({ timeout: 5000 });
        await expect(orderconfirmation).toBeExisting();
    })
})