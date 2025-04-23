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
        await usernameField.addValue("manoj.kumar9@shreecement.com");
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
        const orderitem = await $('//android.view.View[@content-desc="DJP"]');
        await orderitem.click();
    })

    it('Check for weekely', async()=>{
        const weekely = await $('//android.widget.Button[@content-desc="Weekly"]');
        await weekely.click(); 
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    })

    it('View all visits', async()=>{
        const viewvisits = await $('//android.widget.Button[@content-desc="View all Visits"]');
        await viewvisits.click();
        const viewdetails = await $('(//android.widget.Button[@content-desc="View Details"])[1]');
        await viewdetails.click();
    })
    })