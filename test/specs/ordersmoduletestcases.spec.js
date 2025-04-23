const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const orderElement = require("../ElementIdentifier/orderidentifier.json")
const orderData = require("../Dataset/order.json")
const elementset = require('../ElementIdentifier/LoginElement.json')

describe('Order Module Business Scanerios ', ()=>{

        it('DO_Orders_Undaan Pro_Create cart Icon', async()=>{
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

            // Click on cart button
            await browser.pause(20000);

            const cartbutton = await $(orderElement.Homecreatecarticon);

            if (await cartbutton.isDisplayed()) {
                await commonmethods.waitForDisplayedAndClick(cartbutton);
            } else {
                throw new Error("Cart icon is not displayed");
            }

            await browser.pause(5000);

            //  If input field is displaying or not
            const secarchinput = $(orderElement.Searchdealerfield);

            if (await secarchinput.isDisplayed()) {
                await secarchinput.click();
                await secarchinput.setValue("ABU TALEB HARDWARE | 11028325 | 11028325"); // Enter some text
            } else {
                throw new Error("Search Dealer Field is not displayed");
            }

            await browser.pause(10000);

            // Click on back button
            await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));

             // Click on Menu bar
            // const menu = await $(elementset.menuclick);
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(elementset.menuclick));
            await browser.pause(10000);

            // Click on the logout button
            await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
            await browser.pause(20000);

            // Click on the poup buttton
            const popupbutton = $(elementset.popupbuttonyes);
            await commonmethods.waitForDisplayedAndClick(popupbutton);

            
        })


        it('DO_Orders_Undaan Pro_Order Details Entering Order Deatils', async()=>{
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

            // // Click on back button
            // await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));

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
        })
      
        it('DO_Orders_Undaan Pro_Order Details Click on receive Tab', async()=>{

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

            // Click on received Tab
            await commonmethods.waitForDisplayedAndClick($(orderElement.orderreceived))
            await browser.pause(10000);

            // Click on reorder button
            await commonmethods.waitForDisplayedAndClick($(orderElement.reorderxpath));
            await browser.pause(5000);

            // Click and enter Mt value
            const randomNumberMT = Math.floor(Math.random() * 6) + 4;
            await commonmethods.waitforDsiplayClickAndSet($(orderElement.clickMtinputfield), randomNumberMT);
            await driver.execute('mobile: performEditorAction', { action: 'done' });

             // delivery Mode
             await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Delivery Mode, Incoterm and Source)"))');
             const orderdeliverymode = $(orderElement.Orderdeliverymode);
             const selectoption = $(orderElement.Selectroad)
             await commonmethods.waitForDisplayedAndClick(orderdeliverymode);
             await commonmethods.waitForDisplayedAndClick(selectoption);

            // Click on Confirm Button
            await browser.pause(10000)
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Confirm)"))');
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.Clickonconfirmbutton))

            // Click on the next button
            await browser.pause(10000)
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
             await browser.pause(10000)

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

        })

        
        it('DO_Orders_Undaan Pro_Order Qualtity less than limit', async()=>{
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
            const randomNumberMT = (Math.random() * 2.4).toFixed(2);
            await commonmethods.waitforDsiplayClickAndSet($(orderElement.clickMtinputfield), randomNumberMT);
            await driver.execute('mobile: performEditorAction', { action: 'done' });

            // Validate the Error message
            const Mterrormessage = await $(orderElement.ordererrorMessage);

            if (Mterrormessage.isDisplayed()){
                console.log('The error message is Displaying.');
                
            }else{
                console.log('The error message is not Displaying.');
            }


        // Assert that the error message is displayed
        

            // Click on Confirm Button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Confirm)"))');
            await browser.pause(5000);
            const button = $(orderElement.Clickonconfirmbutton)
            const isButtonEnabled = await button.isEnabled();
            // Log the state of the button
            if (isButtonEnabled) {
                console.log('The button is enabled.');
            } else {
                console.log('The button is disabled.');
            }
            // You can also use assertions if you are using a testing framework like Mocha or Jest
            expect(isButtonEnabled).toBe(false);
            await browser.pause(10000);


            // Click on back button
            await browser.pause(5000)
            await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));

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
        })


        it('DO_Orders_Undaan Pro_Order Qualtity greater than limit', async()=>{
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
            const randomNumberMT =  Math.floor(Math.random() * (100 - 51 + 1)) + 51;
            await commonmethods.waitforDsiplayClickAndSet($(orderElement.clickMtinputfield), randomNumberMT);
            await driver.execute('mobile: performEditorAction', { action: 'done' });

            // Validate the Error message
            const Mterrormessage = await $(orderElement.ordererrorMessage);

            if (Mterrormessage.isDisplayed()){
                console.log('The error message is Displaying.');
                
            }else{
                console.log('The error message is not Displaying.');
            }

        // Assert that the error message is displayed
        
            // Click on Confirm Button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Confirm)"))');
            await browser.pause(5000);
            const button = $(orderElement.Clickonconfirmbutton)
            const isButtonEnabled = await button.isEnabled();
            // Log the state of the button
            if (isButtonEnabled) {
                console.log('The button is enabled.');
            } else {
                console.log('The button is disabled.');
            }
            // You can also use assertions if you are using a testing framework like Mocha or Jest
            expect(isButtonEnabled).toBe(false);
            await browser.pause(10000);

            // Click on back button
            await browser.pause(5000)
            await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));

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
        })

        it('DO_Orders_Undaan Pro_Order Details Entering Order Deatils', async()=>{
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
            const randomNumberMT = Math.floor(Math.random() * 10) + 4;
            await commonmethods.waitforDsiplayClickAndSet($(orderElement.clickMtinputfield), randomNumberMT);
            await driver.execute('mobile: performEditorAction', { action: 'done' });

            // Click on the edit button
            try {
                // Attempt to scroll to the Delivery Address
                const deliveryAddressElement = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Delivery Slot"))');
                
                // Pause to ensure the scroll action completes
                await browser.pause(1000);
                
                // Check if the element is displayed
                const isDisplayed = await deliveryAddressElement.isDisplayed();
                console.log(`Delivery Address Element Displayed: ${isDisplayed}`);
                
                // If the element is displayed, proceed with clicking the edit button
                if (isDisplayed) {
                    const editButton = await $(orderElement.ordereditbutton);
                    await editButton.waitForDisplayed();
                    await editButton.click();
                    
                    // Pause to observe the result of the click action
                    await browser.pause(2000);
                } else {
                    console.log("Delivery Address element not found!");
                }
            } catch (error) {
                console.error(`An error occurred: ${error.message}`);
            }

            // Select the Value of the address
            await browser.pause(5000);
            const selectaddress = $(orderElement.savedaddress);

            if (selectaddress.isDisplayed()){
                await commonmethods.waitForDisplayedAndClick(selectaddress);
                console.log("Select Address element found!");
            }else{
                console.log("Select Address element not found!");
            }
            
             // delivery Mode
             await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Delivery Mode, Incoterm and Source)"))');
             const orderdeliverymode = $(orderElement.Orderdeliverymode);
             const selectoption = $(orderElement.Selectroad)
             await commonmethods.waitForDisplayedAndClick(orderdeliverymode);
             await commonmethods.waitForDisplayedAndClick(selectoption);

             // Click on Confirm Button
             await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Confirm)"))');
             await browser.pause(5000);
             const button = $(orderElement.Clickonconfirmbutton)
             const isButtonEnabled = await button.isEnabled();
             // Log the state of the button
             if (isButtonEnabled) {
                 console.log('The button is enabled.');
             } else {
                 console.log('The button is disabled.');
             }
             // You can also use assertions if you are using a testing framework like Mocha or Jest
             expect(isButtonEnabled).toBe(true);
             await browser.pause(5000);

            // Click on back button
            // await browser.pause(5000)
            // await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton)); 

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
        })


        it('DO_Orders_Undaan Pro_Order Add New Address Entering Order Deatils', async()=>{
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
            const randomNumberMT = Math.floor(Math.random() * 10) + 3;
            await commonmethods.waitforDsiplayClickAndSet($(orderElement.clickMtinputfield), randomNumberMT);
            await driver.execute('mobile: performEditorAction', { action: 'done' });

            // Click on the edit button
            try {
                // Attempt to scroll to the Delivery Address
                const deliveryAddressElement = await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Delivery Slot"))');
                
                // Pause to ensure the scroll action completes
                await browser.pause(1000);
                
                // Check if the element is displayed
                const isDisplayed = await deliveryAddressElement.isDisplayed();
                console.log(`Delivery Address Element Displayed: ${isDisplayed}`);
                
                // If the element is displayed, proceed with clicking the edit button
                if (isDisplayed) {
                    const editButton = await $(orderElement.ordereditbutton);
                    await editButton.waitForDisplayed();
                    await editButton.click();
                    
                    // Pause to observe the result of the click action
                    await browser.pause(2000);
                } else {
                    console.log("Delivery Address element not found!");
                }
            } catch (error) {
                console.error(`An error occurred: ${error.message}`);
            }
            
            // Add new address
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.orderAddnewaddress));

            // Click on popup
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.orderlocation));

            // Select the access location
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.accessapplocation));

            // Click On Add new address
            // await browser.pause(5000);
            // await commonmethods.waitForDisplayedAndClick($(orderElement.orderAddnewaddress));

            // Click on Done Button
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.mapdonebutton));

            // Click on back button
            await browser.pause(5000)
            await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));
            
             // Click on back button
             await browser.pause(5000)
             await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton));

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

        })   


        it('DO_Orders_Undaan Pro_Order Details Waiting for Dispatch', async()=>{

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

            // Click for view details
            await commonmethods.waitForDisplayedAndClick($(orderElement.orderwaitfordispatch))
            await browser.pause(10000);

            // Click on the view details
            await commonmethods.waitForDisplayedAndClick($(orderElement.clickonvieworder))
            await browser.pause(10000);

            // Check for DI Created 
            const xpathDI = $(orderElement.DIcreated);
            
            if (xpathDI.isDisplayed()){
                console.log("DI Is Displaying")
            }else{
                console.log("DI is not displaying");
            }

            //  Click on back button
            await browser.pause(5000)
            await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton)); 

            //  Click on back button
            await browser.pause(5000)
            await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton)); 

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

        })


        it('DO_Orders_Undaan Pro_Order Details MRN Pending', async()=>{

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

            // Click for view details
            await commonmethods.waitForDisplayedAndClick($(orderElement.MRNPendingtab))
            await browser.pause(10000);

            // Click on the Select Product
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.Selectproductdropdown));
            await commonmethods.waitForDisplayedAndClick($(orderElement.Selectproduct));
            await browser.pause(3000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.orderoutclick));
            await browser.pause(3000);

            // Slect deposit
            await browser.pause(8000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.SelectDepositdropdown));
            await commonmethods.waitForDisplayedAndClick($(orderElement.SelectDeposit));
            await browser.pause(3000);
            await commonmethods.waitForDisplayedAndClick($(orderElement.orderoutclick));

            //  //  Click on back button
            //  await browser.pause(5000)
            //  await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton)); 
 
            //  //  Click on back button
            //  await browser.pause(5000)
            //  await commonmethods.waitForDisplayedAndClick($(orderElement.Orderbackbutton)); 
 
            //  // Click on Menu bar
            //  const menu1 = await $(elementset.menuclick);
            //  await commonmethods.waitForDisplayedAndClick(menu1)
            //  await browser.pause(10000);
 
            //  // Click on the logout button
            //  await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
            //  await browser.pause(10000);
 
            //  // Click on the poup buttton
            //  const popupbutton = $(elementset.popupbuttonyes);
            //  await commonmethods.waitForDisplayedAndClick(popupbutton);

        })
})