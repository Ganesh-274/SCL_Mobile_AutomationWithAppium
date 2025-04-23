const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const sclorder = require('../screenobject/android/sclorder.js')

describe('DO app testing', ()=>{
    it('login', async()=>{
        await sclorder.loginasadmin.waitForDisplayed({timeout: 5000});
        await expect(sclorder.loginasadmin).toBeExisting('LogIn as admin');
        await sclorder.loginasadmin.click();
    })

        // Enter the values
    it('should enter username', async()=>{
        
        // const usernameField = await $$("android.widget.EditText")[0];
        await sclorder.username.waitForDisplayed({ timeout: 5000 });
        await sclorder.username.click();
        await sclorder.username.addValue("manoj.kumar9@shreecement.com");
        console.log(await sclorder.username.getText())
    })

    it('should enter password', async()=>{
        // const passwordField = await $$("android.widget.EditText")[1];
        await sclorder.password.waitForDisplayed({ timeout: 5000 });
        await sclorder.password.click();
        await sclorder.password.addValue("1234");
        console.log(await sclorder.password.getText())
        // const loginbutton = await $("~Log In");
        await sclorder.clickloginbtn.click();
    })

    it('Selecting the orders from menu bars', async()=>{
        // const menu = await $('android.widget.Button');
        await sclorder.menubarclick.click();
        // const orderitem = await $('//android.view.View[@content-desc="Orders"]');
        await sclorder.selectordermenu.click();
        // const createorder = $('//android.widget.ImageView[@content-desc="cartBtn"]');
        await sclorder.creatordericon.click();
    })

    it('Selecting Dealers from drop down', async()=>{
        // const searchbutton = await $('android.widget.EditText');
        await sclorder.searchicon.waitForDisplayed({timeout : 5000});
        await sclorder.searchicon.click();
        // const selectdealers = await $('//android.view.View[@content-desc="ABM TRADERS | 11008926"]');
        sclorder.selectdealer.click();
    })

    it('Click on Create order button', async()=>{
        // const createbutton = await $('//android.widget.ImageView[@content-desc="createOrderBtn"]');
        await sclorder.createorderbtn.waitForDisplayed({timeout: 5000});
        sclorder.createorderbtn.click();
        // const selectoption = await $('//android.widget.EditText');
        await sclorder.selectoption.waitForDisplayed({timeout: 5000});
        sclorder.selectoption.click();
        // const selected = await $('//android.view.View[@content-desc="Total Order Quantity (MT)"]');
        await sclorder.selectdealerfrom.waitForDisplayed({timeout: 5000});
        sclorder.selectdealerfrom.click();
    })

    it('Selecting the address from drop down', async()=>{
        // const distict = await $('//android.widget.Button[@content-desc="District"]');
        await sclorder.selecdistricet.waitForDisplayed({timeout: 5000});
        await sclorder.selecdistricet.click();
        // const selectdistrict = await $('//android.view.View[@content-desc="BHIWANI"]');
        sclorder.selecdistrictdropdown.click();
    })

    it('Select SKU Information', async()=>{
        // const skuclick = await $('//android.widget.Button[@content-desc="Select SKU"]');
        sclorder.clicksku.click();
        // await sclorder.clicksku.waitForDisplayed({timeout: 5000});
        // const skuoption = await $('//android.view.View[@content-desc="BANGUR CEMENT_PPC_HDPE"]');
        sclorder.selectskuvalue.click();
        // const mtvalue = await $('//android.widget.ScrollView/android.widget.EditText');
        await sclorder.clickmtinput.waitForDisplayed({ timeout: 5000 });
        sclorder.clickmtinput.click();
        await sclorder.clickmtinput.waitForDisplayed({ timeout: 3000 });
        await sclorder.clickmtinput.addValue("3.5");
        // await sclorder.clickmtinput.waitForDisplayed({ timeout: 5000 });
    })

    it('Check for the address and place order', async()=>{
        // const clickonscreen = await $('//android.view.View[@content-desc="SKU Information"]');
        sclorder.screenclick.click();
        await sclorder.screenclick.waitForDisplayed({ timeout: 5000 });
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // const enterreason = await $('//android.widget.ScrollView/android.widget.EditText');
        await sclorder.selctetreason.addValue('Automation test');
        // const clickbtn = await $('//android.widget.Button[@content-desc="Confirm"]');
        await sclorder.clickreason.waitForDisplayed({ timeout: 5000 });
        sclorder.clickreason.click();
    })

    it('Place Order button', async()=>{
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // const placeorder = await $('//android.widget.Button[@content-desc="Place Order"]');
        await sclorder.placeorderbtnclick.waitForDisplayed({ timeout: 5000 });
        sclorder.placeorderbtnclick.click();
        // const orderconfirmation = await $('//android.widget.ImageView[@content-desc="Order has been Recieved"]');
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await sclorder.confirmbtn.waitForDisplayed({ timeout: 5000 });
        await expect(sclorder.confirmbtn).toBeExisting();
    })
})