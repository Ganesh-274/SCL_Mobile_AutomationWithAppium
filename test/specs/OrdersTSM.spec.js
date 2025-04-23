const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const orderElement = require("../ElementIdentifier/orderidentifier.json")
const orderData = require("../Dataset/order.json")
const elementset = require('../ElementIdentifier/LoginElement.json')
const writemethod = require('../screenobject/android/writemethod');

describe('TSM RH Orders', ()=>{
    it('Record the Order number and Validate in TSM', async()=>{
        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        // expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Select the order from hamburg
        const orderfrommenu = await $(orderElement.ordermenu);
        await commonmethods.waitForDisplayedAndClick(orderfrommenu);

        // click on the orders button
        const clickicon = await $(orderElement.orderclickIcon);
        if(clickicon.isDisplayed()){
            await commonmethods.waitForDisplayedAndClick(clickicon);
        }else{
            throw new Error("Cart icon is not displayed");
        }

         //  If input field is displaying or not
         const secarchinput = $(orderElement.Searchdealerfield);

         if (await secarchinput.isDisplayed()) {
             await secarchinput.click();
             await secarchinput.setValue("ABU TALEB HARDWARE | 11028325 | 11028325"); // Enter some text
         } else {
             throw new Error("Search Dealer Field is not displayed");
         }

        // Click on create order button
        const clickoncreateorderbtn = await $(orderElement.createorderbutton);
        if(clickoncreateorderbtn.isDisplayed()){
            await commonmethods.waitForDisplayedAndClick(clickoncreateorderbtn);
        }else{
            throw new Error("Create order button is not displayed");
        }

        // Select Dealer from Drop Down
        const clickondealerinput = $('//android.widget.EditText[1]');
        await commonmethods.waitForDisplayedAndClick(clickondealerinput)

        const selectdealer = await $(orderElement.selectoptiondealer)
        await commonmethods.waitForDisplayedAndClick(selectdealer)    
          
        //  click and Select District 
        await commonmethods.waitForDisplayedAndClick($(orderElement.SelectDistict))
        await commonmethods.waitForDisplayedAndClick($(orderElement.SlectDistrictoption))
        await browser.pause(10000)

        // Select the Sku option
        await commonmethods.waitForDisplayedAndClick($(orderElement.Selectskuoption));
        await commonmethods.waitForDisplayedAndClick($(orderElement.Selectskuoptionindropdown));
        await browser.pause(10000)

        // Click and enter Mt value
        const min = 4; // minimum value (more than 3)
        const max = 49; // maximum value (less than 50)
        const randomNumberMT = Math.floor(Math.random() * (max - min + 1)) + min;
        await commonmethods.waitforDsiplayClickAndSet($(orderElement.clickMtinputfield), randomNumberMT);
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // delivery Mode
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Incoterm and Source details)"))');
        const orderdeliverymode = $(orderElement.Orderdeliverymode);
        const selectoption = $(orderElement.Selectroad)
        await commonmethods.waitForDisplayedAndClick(orderdeliverymode);
        await commonmethods.waitForDisplayedAndClick(selectoption);

        // Click on Confirm Button
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Confirm)"))');
        await browser.pause(5000);
        await commonmethods.waitForDisplayedAndClick($(orderElement.Clickonconfirmbutton))

        // Click on the next button
        await browser.pause(10000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Place Order)"))');
        await browser.pause(5000);
        await commonmethods.waitForDisplayedAndClick($(orderElement.PlaceOrderbutton));
        
        // Confirmation Popup
        await browser.pause(5000);
        const confirmation = $(orderElement.lastconfirmationpopup);
        const orderarrow = $(orderElement.orderarrowicon);
        if(await confirmation.isDisplayed()){
            console.log("Order Placed successfully");
            await commonmethods.waitForDisplayedAndClick(orderarrow)
        }else{
            console.log("Order Not placed")
        } 
        await browser.pause(5000)

        // Click on the Order received tab
        await commonmethods.waitForDisplayedAndClick($(orderElement.OrderReceived));
        await browser.pause(5000);

        // Click on Order view 
        await commonmethods.waitForDisplayedAndClick($(orderElement.orderview));

        // Click the View Detail inside the track order
        await commonmethods.waitForDisplayedAndClick($(orderElement.Trackorderclick));
        await browser.pause(5000);

        // Getting the Text from order
        const appno = $('//android.view.View[@hint="App Order No"]');
        var ordernumber = await appno.getText();
        console.log("The Order Number: "+ordernumber);
        await writemethod(ordernumber);
        await browser.pause(3000);

        // Click on back Button
        await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));
        await browser.pause(3000);

        // Click on back Button
        await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));
        await browser.pause(3000);

        // Click on back Button
        await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));
        await browser.pause(3000);

        // Click on Menu bar
        const menu1 = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu1)
        await browser.pause(10000);

        // Click on the logout button
        await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
        await browser.pause(10000);

        // Click on the poup buttton
        const popupbutton = $(elementset.popupbuttonyes);
        await commonmethods.waitForDisplayedAndClick(popupbutton);

        // Click on Login as TSM
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        // expect(login).toHaveText('LogIn as admin');

        // enter username as TSM
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.UsernameTSM);

        // Enter password
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Select the order from hamburg
        await commonmethods.waitForDisplayedAndClick(orderfrommenu);

         // Click on the Order received tab
         await commonmethods.waitForDisplayedAndClick($(orderElement.OrderReceived));
         await browser.pause(5000);

        //  Click on the TSM Search input box 
        await commonmethods.waitForDisplayedAndSetvalue($(orderElement.TSMordersearch), ordernumber);
        await browser.pause(5000);

         


    })
})