const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");

describe('DO app testing', ()=>{
    it('login', async()=>{
        // await driver.pause(5000);
        const login = await $('~LogIn as admin');
       await expect(login).toBeExisting('LogIn as admin');
    //    await login.waitForDisplayed({ timeout: 20000 });
      //  console.log(login.getValue())
        await login.click();
    })

        // Enter the values
    it('should enter username', async()=>{
        
        const usernameField = await $$("android.widget.EditText")[0];
        await usernameField.waitForDisplayed({ timeout: 20000 });
        await usernameField.click();
        await usernameField.addValue("manoj.kumar9@shreecement.com");
        console.log(await usernameField.getText())
    })

    it('should enter password', async()=>{
        
        const passwordField = await $$("android.widget.EditText")[1];
        await passwordField.waitForDisplayed({ timeout: 20000 });
        await passwordField.click();
        await passwordField.addValue("Qaz1@3ws%x");
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
        const selectdealers = await $('//android.view.View[@content-desc="ABM TRADERS | 11008926"]');
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

    it('Selecting the address from drop down', async()=>{
        const distict = await $('~District');
        await distict.waitForDisplayed({timeout: 20000});
        await distict.click();
        const selectdistrict = await $('//android.view.View[@content-desc="BHIWANI"]');
        await selectdistrict.click();
    })

    it('Select SKU Information', async()=>{
        const skuclick = await $('//android.widget.Button[@content-desc="Select SKU"]');
        skuclick.waitForDisplayed({timeout: 20000});
        skuclick.click();
        const skuoption = await $('//android.view.View[@content-desc="BANGUR CEMENT_PPC_HDPE"]');
        skuoption.waitForDisplayed({timeout: 20000});
        skuoption.click();
        const mtvalue = await $('//android.widget.ScrollView/android.widget.EditText');
        await mtvalue.waitForDisplayed({ timeout: 20000 });
        mtvalue.click();
        await mtvalue.addValue("3.5");
        await mtvalue.waitForDisplayed({ timeout: 20000 });
    })

    it('Check for the address and place order', async()=>{
        const clickonscreen = await $('//android.view.View[@content-desc="SKU Information"]');
        clickonscreen.click();
        await clickonscreen.waitForDisplayed({ timeout: 20000 });
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const enterreason = await $('//android.widget.ScrollView/android.widget.EditText');
        enterreason.waitForDisplayed({timeout: 20000});
        await enterreason.addValue('Automation test');
        const clickbtn = await $('//android.widget.Button[@content-desc="Confirm"]');
        await clickbtn.waitForDisplayed({ timeout: 20000 });
        clickbtn.click();
    })

    it('Place Order button', async()=>{
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const placeorder = await $('//android.widget.Button[@content-desc="Place Order"]');
        await placeorder.waitForDisplayed({ timeout: 20000 });
        placeorder.click();
        const orderconfirmation = await $('//android.widget.ImageView[@content-desc="Order has been Recieved"]');
        await orderconfirmation.waitForDisplayed({ timeout: 20000 });
        await expect(orderconfirmation).toBeExisting();
    })
})