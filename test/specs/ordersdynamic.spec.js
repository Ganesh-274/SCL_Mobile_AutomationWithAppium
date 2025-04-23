const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
// const data = require('../Dataset/login.json')
describe('DO app testing', ()=>{
    it('Place Order [Happy Path]', async()=>{
       
        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        
        // enter username
        const usernameField = await $$("android.widget.EditText")[0];
        await commonmethods.waitforDsiplayClickAndSet(usernameField,"manoj.kumar9@shreecement.com");

        // Enter password
        const passwordField = await $$("android.widget.EditText")[1];
        await commonmethods.waitforDsiplayClickAndSet(passwordField,"Qaz1@3ws%x");

        // Click on the login button
        const loginbutton = await $("~Log In");
        await commonmethods.waitForDisplayedAndClick(loginbutton)

        // Click on Menu bar
        const menu = await $('android.widget.Button');
        await commonmethods.waitForDisplayedAndClick(menu)

        // Click on orders option
        const orderitem = await $('//android.view.View[@content-desc="Orders"]');
        await commonmethods.waitForDisplayedAndClick(orderitem)

        // Click on cart button
        const createorder = $('//android.widget.ImageView[@content-desc="cartBtn"]');
        await commonmethods.waitForDisplayedAndClick(createorder)

        // Click on Search button to select the dealer values
        const searchbutton = await $('android.widget.EditText');
        await commonmethods.waitForDisplayedAndClick(searchbutton);

        // Slecting the particular value from dropdown
        const selectdealers = await $('//android.view.View[@content-desc="ABM TRADERS | 11008926"]');
        // await commonmethods.waitForDisplayedAndClick(selectdealers)
        // const selectdealers = '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View';
        // await commonmethods.SelectingTextBasedOnValue(selectdealers, "ANUJ ENTERPRISE | 11042951");
        // await browser.pause(10000); // Wait for 2 minutes
        await commonmethods.waitForDisplayedAndClick(selectdealers);

        // Click on create order button
        const clickoncreateorderbtn = $('//android.widget.ImageView[@content-desc="createOrderBtn"]');
        await browser.pause(10000);
        await commonmethods.waitForDisplayedAndClick(clickoncreateorderbtn);
        await browser.pause(10000);

        
        // Click on Search button to select the orderdetail search button
        const searchbuttonorder = await $('//android.widget.EditText');
        await commonmethods.waitForDisplayedAndClick(searchbuttonorder);
        await commonmethods.waitForDisplayedAndClick(selectdealers);
        browser.refresh();

        // Select the district from the drop down
        await browser.pause(10000);
        const ClickonDistrict = $('//android.widget.Button[@content-desc="District"]');
        if (ClickonDistrict.isExisting()){
            browser.refresh();
        }else {
            console.error("Element 'District' not found even after refreshing.");
        }
        await commonmethods.waitForDisplayedAndClick(ClickonDistrict);

        // Select the district value from drop down
        const SelectDistrictvalue = $('//android.view.View[@content-desc="BHIWANI"]');
        await commonmethods.waitForDisplayedAndClick(SelectDistrictvalue);
        await browser.pause(10000);

        // Select the SKU Values from the drop down
        const SelectSKU = $('//android.widget.Button[@content-desc="Select SKU"]');
        await commonmethods.waitForDisplayedAndClick(SelectSKU);

        // Select Sku values

        // const alternatevalue = $('//android.view.View[@content-desc="BANGUR POWER_PPC_PAPER"]');
        // await commonmethods.waitForDisplayedAndClick(SkuValues);
        const SkuValues = $('//android.view.View[@content-desc="BANGUR CEMENT_PPC_HDPE"]')
        await commonmethods.waitForDisplayedAndClick(SkuValues);
        // await commonmethods.waitForDisplayedAndClick(SkuValues);
        

        // Enter the Metric ton value
        const EnterMTValue = $('//android.widget.ScrollView/android.widget.EditText');
        await commonmethods.waitforDsiplayClickAndSet(EnterMTValue, "4.5")
        
        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // Enter the Value
        const AddressDetails = $('//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View/android.widget.ScrollView/android.widget.ScrollView/android.view.View[2]');
        if (AddressDetails.isExisting()){
            await commonmethods.waitForDisplayedAndClick(AddressDetails);
            browser.refresh();
        } else{
            const Editbutton = $('//android.widget.ScrollView/android.widget.Button[1]');
            await commonmethods.waitForDisplayedAndClick(Editbutton);
            await browser.paues(5000);
            const selectaddress = $('//android.widget.ImageView[@content-desc="NEW123 line 4556 Dange Chowk Road, Bhumkar Nagar, Wakad BHIWANI, BHIWANI BHIWANI, HARYANA - 127021"]');
            await commonmethods.waitForDisplayedAndClick(selectaddress);
        }
        
        // Selection of Source from drop down
        // await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const SourceSelection = $('//android.widget.Button[@content-desc="Select Source"]');
        await browser.wait('5000')
        await commonmethods.waitForDisplayedAndClick(SourceSelection);

        const selectValue1 = $('//android.view.View[@content-desc="1006 - SCL-Jobner"]');
        await commonmethods.waitForDisplayedAndClick(selectValue1);   
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        
        // Enter remark for delivery
        const delivery = $('//android.widget.ScrollView/android.widget.EditText');
        await commonmethods.waitForDisplayedAndSetvalue(delivery, "Remark Delivery Automation");
        await browser.pause(5000);

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        // Click on confirm order button
        const confirmbutton = $('//android.widget.Button[@content-desc="Confirm"]');
        if (confirmbutton.isExisting()){
            await commonmethods.waitForDisplayedAndClick(confirmbutton);
        }else{
            await browser.error('Confirm Button is not exists')
        }

        await browser.pause(10000)

        // Place order 
        const placeorderbtn = $('//android.widget.Button[@content-desc="Place Order"]');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,10)');
        await commonmethods.waitForDisplayedAndClick(placeorderbtn);

        await browser.pause(5000)

    })

       
   

})


describe.only('DO app testing with Anjantha', ()=>{
    it('Place Order [Happy Path]', async()=>{
       
        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        
        // enter username
        const usernameField = await $$("android.widget.EditText")[0];
        await commonmethods.waitforDsiplayClickAndSet(usernameField,"anjan.tah@shreecement.com");

        // Enter password
        const passwordField = await $$("android.widget.EditText")[1];
        await commonmethods.waitforDsiplayClickAndSet(passwordField,"1234");

        // Click on the login button
        const loginbutton = await $("~Log In");
        await commonmethods.waitForDisplayedAndClick(loginbutton)

        // Click on Menu bar
        const menu = await $('android.widget.Button');
        await commonmethods.waitForDisplayedAndClick(menu)

        // Click on orders option
        const orderitem = await $('//android.view.View[@content-desc="Orders"]');
        await commonmethods.waitForDisplayedAndClick(orderitem)

        // Click on cart button
        const createorder = $('//android.widget.ImageView[@content-desc="cartBtn"]');
        await commonmethods.waitForDisplayedAndClick(createorder)

        // Click on Search button to select the dealer values
        const searchbutton = await $('android.widget.EditText');
        await commonmethods.waitForDisplayedAndClick(searchbutton);

        // Slecting the particular value from dropdown
        const selectdealers = await $('//android.view.View[@content-desc="ARKA ROY | 11027506"]');
        // await commonmethods.waitForDisplayedAndClick(selectdealers)
        // const selectdealers = '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.view.View/android.view.View';
        // await commonmethods.SelectingTextBasedOnValue(selectdealers, "ANUJ ENTERPRISE | 11042951");
        // await browser.pause(10000); // Wait for 2 minutes
        await commonmethods.waitForDisplayedAndClick(selectdealers);

        // Click on create order button
        const clickoncreateorderbtn = $('//android.widget.ImageView[@content-desc="createOrderBtn"]');
        await browser.pause(10000);
        await commonmethods.waitForDisplayedAndClick(clickoncreateorderbtn);
        await browser.pause(10000);

        
        // Click on Search button to select the orderdetail search button

        const searchbuttonorder = await $('//android.widget.EditText');
        await commonmethods.waitForDisplayedAndClick(searchbuttonorder);
        const selectdealersfrom = await $('//android.view.View[@content-desc="G S HARDWARE | 11011718"]');
        await commonmethods.waitForDisplayedAndClick(selectdealersfrom);
        browser.refresh();

        
        // Select the SKU Values from the drop down
        const SelectSKU = $('//android.widget.Button[@content-desc="Select SKU"]');
        await commonmethods.waitForDisplayedAndClick(SelectSKU);

        // Select Sku values

        const SkuValues = $('//android.view.View[@content-desc="BANGUR CEMENT_PPC_HDPE"]')
        await commonmethods.waitForDisplayedAndClick(SkuValues);
        // await commonmethods.waitForDisplayedAndClick(SkuValues);
        

        // Enter the Metric ton value
        let randomNumber = Math.floor(Math.random() * 10) + 1;;
        
        const EnterMTValue = $('//android.widget.ScrollView/android.widget.EditText');
        await commonmethods.waitforDsiplayClickAndSet(EnterMTValue, randomNumber)
        
        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
       
        
        //Click out side the screen
        // const outsideaddressheader = $('//android.view.View[@content-desc="Delivery Address"]');
        // await commonmethods.waitForDisplayedAndClick(outsideaddressheader);
        // Selection of Source from drop down
        
        
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        
        // Enter remark for delivery
        const delivery = $('//android.widget.ScrollView/android.widget.EditText');
        await commonmethods.waitForDisplayedAndSetvalue(delivery, "Automation Test");

        // Click on confirm order button
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Confirm")').click();
        // const confirmbutton = $('//android.widget.Button[@content-desc="Confirm"]');
        // await commonmethods.waitForDisplayedAndClick(confirmbutton);

        // // Click outside of surface on screen
        // const remarkdeliveryclick = $('//android.view.View[@content-desc="Remarks for Delivery"]')
        // await commonmethods.waitForDisplayedAndClick(remarkdeliveryclick);

        browser.refresh();
        await browser.pause(10000)

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Place Order")').click();
        // Place order 
        // const placeorderbtn = $('//android.widget.Button[@content-desc="Place Order"]');

        // await commonmethods.waitForDisplayedAndClick(placeorderbtn);


    })

})