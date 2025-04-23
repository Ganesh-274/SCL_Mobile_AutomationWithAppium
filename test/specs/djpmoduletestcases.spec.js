const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const DJPelements = require("../ElementIdentifier/DJP.json")
const elementset = require('../ElementIdentifier/LoginElement.json')

describe('DJP Module Business Scanerios', ()=>{
    before(() => {
        // Disable clipboard using adb command
        // exec('adb shell pm disable-user com.android.shell:content://settings/secure', (err, stdout, stderr) => {
        //     if (err) {
        //         console.error(`exec error: ${err}`);
        //         return;
        //     }
        //     console.log(`stdout: ${stdout}`);
        //     console.log(`stderr: ${stderr}`);
        // });
    });
        it('Plan New Journey_DO_DJP_New Counter_Regression_ADD_EXISTING_CUATOMER', async()=>{
           
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

        //  Click on the DJP from Menu bars
        const selectDJP = await $(DJPelements.onlydjpselection);
        await commonmethods.waitForDisplayedAndClick(selectDJP);
        
        // Validate the Items
        const Daily = await $(DJPelements.Dailytab).getAttribute('content-desc');
        await expect(Daily).toBe('Daily')
        console.log(Daily)  
        
        // weekly validation
        const weekely = await $(DJPelements.weekely).getAttribute('content-desc');
        await expect(weekely).toBe('Weekly')
        console.log(weekely) 

        // Manthly validation
        const Monthly = await $(DJPelements.Monthly).getAttribute('content-desc');
        await expect(Monthly).toBe('Monthly')
        console.log(Monthly)

        // Plan New Journey button click
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const plannewjourneybtn = await $(DJPelements.plannewjourneybutton);
        await commonmethods.waitForDisplayedAndClick(plannewjourneybtn);

        // Click on get Route button
        const getroutebutton = await $(DJPelements.getRoutebutton);
        await commonmethods.waitForDisplayedAndClick(getroutebutton);

        // Click on the getobjective Button
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await commonmethods.waitForDisplayedAndClick($(DJPelements.getObjectivebutton));
        
        // Click on view counter button
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await commonmethods.waitForDisplayedAndClick($(DJPelements.Viewcounterbutton));

        // Click on the add counter button
        await commonmethods.waitForDisplayedAndClick($(DJPelements.Addcounterbutton));

        // Click on existing Counter/SIte/Influenzer
        await commonmethods.waitForDisplayedAndClick($(DJPelements.addexistingcounterbutton));

        // Select the Cuonter 
        const selectedvalues = $(DJPelements.Slectedvalues);
        await commonmethods.waitForDisplayedAndClick(selectedvalues);

        // Click on the add selected counter plan
        const addselectedcounterplan = $(DJPelements.Addselectedcounterplanbutton);
        await commonmethods.waitForDisplayedAndClick(addselectedcounterplan);

        // Click on Finalize Button
        await commonmethods.waitForDisplayedAndClick($(DJPelements.ClickonFinalizebutton));

        await browser.pause(5000)    
            
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

        it.skip('Plan New Journey_DO_DJP_New Counter_Regression_CURRENT_PLAN_CUSTOMER', async()=>{

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
    
            //  Click on the DJP from Menu bars
            const selectDJP = await $(DJPelements.onlydjpselection);
            await commonmethods.waitForDisplayedAndClick(selectDJP);

            //Click on Current plan journey button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await commonmethods.waitForDisplayedAndClick($(DJPelements.clikoncurrentjourneybutton));

            // Click on the start button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            for (let i = 1; i <= 2; i++) {
                const element = $(`(//android.widget.Button[@content-desc="Start Visit"])[${i}]`);
                if (element.isDisplayed()) {
                    commonmethods.waitForDisplayedAndClick(element);
                    break; // Exit the loop once the first available element is clicked
                }
            }

            await browser.pause(5000);

            // Click on popup
            await commonmethods.waitForDisplayedAndClick($(DJPelements.Clcikonyesbutton));

            await browser.pause(5000);

            // Select the dealer and retailer from the list
            const selctingdealerfromlist = $('//android.view.View[@content-desc="150.0"]');
            await browser.pause(10000);
            if(selctingdealerfromlist.isDisplayed()){
                await commonmethods.waitForDisplayedAndClick(selctingdealerfromlist);
            }
            await browser.pause(30000)
            
            // Click on the location 
            const locationpopup = $('//android.widget.ImageView[@content-desc="Scanning for your location"]');
            await browser.pause(5000)
            // await commonmethods.isDisplayed();
            await browser.pause(5000)

            // Dealer Detail 
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

            // Click on the Next button
            const nextbutton = $('//android.widget.Button[@content-desc="Next"]');
            await commonmethods.waitForDisplayedAndClick(nextbutton);

            // Enter the total potential value
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Total Potential (MT/Month)"))');
            const wholesale = $('//android.widget.ScrollView/android.widget.EditText[1]');
            await commonmethods.waitforDsiplayClickAndSet(wholesale, "50");
            await driver.execute('mobile: performEditorAction', { action: 'done' });

            // Enter retailer sales value
            // const retailersale = $('//android.widget.ScrollView/android.widget.EditText[2]');
            // await commonmethods.waitforDsiplayClickAndSet(retailersale, "50");
            // await browser.pause(3000)
            // await driver.execute('mobile: performEditorAction', { action: 'done' });

            // Select the Brand;
            await browser.pause(3000);
            const selectbrand = $('//android.widget.EditText[@hint="Search Brand"]');
            await commonmethods.waitforDsiplayClickAndSet(selectbrand, "ACC");
            await driver.execute('mobile: performEditorAction', { action: 'done' });
            
            // Select the Product Value
            await browser.pause(3000);
            const clickproduct = $('//android.widget.Button[@content-desc="Select Product"]');
            const selectproduct = $('//android.view.View[@content-desc="ACC CEMENT_CC_HDPE"]');
            await commonmethods.waitForDisplayedAndClick(clickproduct);
            await commonmethods.waitForDisplayedAndClick(selectproduct);
           
            // Add the price Intelligence
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Price Intelligence (INR per Bag)"))');
            const WSP = $('//android.widget.EditText[@hint="INR"][1]');
            const RSP = $('//android.widget.EditText[@hint="INR"][2]');
            await commonmethods.waitforDsiplayClickAndSet(WSP, "50");
            await driver.execute('mobile: performEditorAction', { action: 'done' });
            // await commonmethods.waitforDsiplayClickAndSet(RSP, "50");
            // await driver.execute('mobile: performEditorAction', { action: 'done' });
            // await browser.pause(5000);

            // Adding the wholesale and retailersales
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Wholesales"))');
            const Wholesale = $('//android.widget.ScrollView/android.widget.EditText[8]');
            const retailer =  $('//android.widget.ScrollView/android.widget.EditText[9]');
            await commonmethods.waitforDsiplayClickAndSet(Wholesale, "50");
            await driver.execute('mobile: performEditorAction', { action: 'done' });
            await browser.pause(3000)
            // await commonmethods.waitforDsiplayClickAndSet(retailer, "40");
            // await driver.execute('mobile: performEditorAction', { action: 'done' });
            // await browser.pause(5000);

            // Click on the calculate button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Calculate"))');
            const clickoncalculatebutton = $('//android.widget.Button[@content-desc="Calculate"]');
            await commonmethods.waitForDisplayedAndClick(clickoncalculatebutton);

            // Click on Submit Button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Submit"))');
            const clickonsubmitbutton = $('//android.widget.Button[@content-desc="Submit"]');
            await commonmethods.waitForDisplayedAndClick(clickonsubmitbutton);
            await browser.pause(10000);

            // // Validate on the complete popupp
            // const clickoncomplatetbutton = $('//android.widget.ImageView[@content-desc="Complete Visit"]');
            // await commonmethods.waitForDisplayedAndClick(clickoncomplatetbutton);
            // await browser.pause(10000);

            // // Click on the End Current journey button
            // const Endcurrentjourneybutton = $('//android.widget.Button[@content-desc="End Current Journey"]');
            // await commonmethods.waitForDisplayedAndClick(Endcurrentjourneybutton);
            // await browser.pause(10000);

            // // click on the DONE button
            // const clickondonebutton = $('//android.widget.Button[@content-desc="Done"]');
            // await commonmethods.waitForDisplayedAndClick(clickondonebutton);
            // await browser.pause(10000);

            //  // click on the yes button
            //  const clickonyesbutton = $('//android.widget.Button[@content-desc="Yes"]');
            //  await commonmethods.waitForDisplayedAndClick(clickonyesbutton);
            //  await browser.pause(10000);

        })

        it('Plan New Journey_DO_DJP_New END Journey [Daily]', async()=>{
           
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
    
            //  Click on the DJP from Menu bars
            const selectDJP = await $(DJPelements.onlydjpselection);
            await commonmethods.waitForDisplayedAndClick(selectDJP);

             // Validate the Items
            const Daily = await $(DJPelements.Dailytab).getAttribute('content-desc');
            await expect(Daily).toBe('Daily');
            console.log(Daily);

            //Click on Current plan journey button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await commonmethods.waitForDisplayedAndClick($(DJPelements.clikoncurrentjourneybutton));

            // Click on the start button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            for (let i = 1; i <= 2; i++) {
                const element = $(`(//android.widget.Button[@content-desc="Start Visit"])[${i}]`);
                if (element.isDisplayed()) {
                    commonmethods.waitForDisplayedAndClick(element);
                    break; // Exit the loop once the first available element is clicked
                }
            }

            await browser.pause(5000);

             // Click on popup
             await commonmethods.waitForDisplayedAndClick($(DJPelements.Clcikonyesbutton));

             await browser.pause(5000);

            //  Click on End current journey button
            await commonmethods.waitForDisplayedAndClick($(DJPelements.ClickonEndcurrentJourney));
            await browser.pause(5000);

            // Click on DONE button
            await commonmethods.waitForDisplayedAndClick($(DJPelements.Clickondonebutton));
            await browser.pause(5000);

            // click on select reason option
            await commonmethods.waitForDisplayedAndClick($(DJPelements.SelectReason));
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(DJPelements.selectreasonoption));
            await browser.pause(10000);

            // Enter COunter comments
            // Define the selector
            const commentSelector = '//android.widget.EditText[@hint="Counter Comment"]';

            // Wait for the element to be displayed and then set its value
            await commonmethods.waitForDisplayedAndSetvalue(commentSelector, "Partner Unavailable");
            await driver.execute('mobile: performEditorAction', { action: 'done' });
            await browser.pause(5000);

            // Click on End Journey button
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(DJPelements.EndJourneyDONEbutton));

            // Pop up button yes option
            await browser.pause(10000);
            await commonmethods.waitForDisplayedAndClick($(DJPelements.Clcikonyesbutton));

             // Click on Back Button
             const backbutton = $(DJPelements.ClickonBackbutton)
             await commonmethods.waitForDisplayedAndClick(backbutton);
 
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

        it('Click on the CurrentPlan Journey', async()=>{
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
    
            //  Click on the DJP from Menu bars
            const selectDJP = await $(DJPelements.onlydjpselection);
            await commonmethods.waitForDisplayedAndClick(selectDJP);

             // Validate the Items
            const Daily = await $(DJPelements.Dailytab).getAttribute('content-desc');
            await expect(Daily).toBe('Daily');
            console.log(Daily);

            //Click on Current plan journey button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await commonmethods.waitForDisplayedAndClick($(DJPelements.clikoncurrentjourneybutton));


            // Click on Back Button
            const backbutton = $(DJPelements.ClickonBackbutton)
            await commonmethods.waitForDisplayedAndClick(backbutton);

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


        it('Click on the CurrentPlan Journey', async()=>{
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
    
            //  Click on the DJP from Menu bars
            const selectDJP = await $(DJPelements.onlydjpselection);
            await commonmethods.waitForDisplayedAndClick(selectDJP);

             // Validate the Items
            const Daily = await $(DJPelements.Dailytab).getAttribute('content-desc');
            await expect(Daily).toBe('Daily');
            console.log(Daily);

            //Click on Current plan journey button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await commonmethods.waitForDisplayedAndClick($(DJPelements.clikoncurrentjourneybutton));


            // Click on Back Button
            const backbutton = $(DJPelements.ClickonBackbutton)
            await commonmethods.waitForDisplayedAndClick(backbutton);

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

        it('Click on the CurrentPlan Journey', async()=>{
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
    
            //  Click on the DJP from Menu bars
            const selectDJP = await $(DJPelements.onlydjpselection);
            await commonmethods.waitForDisplayedAndClick(selectDJP);

             // Validate the Items
            const Daily = await $(DJPelements.Dailytab).getAttribute('content-desc');
            await expect(Daily).toBe('Daily');
            console.log(Daily);

            //Click on Current plan journey button
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await commonmethods.waitForDisplayedAndClick($(DJPelements.clikoncurrentjourneybutton));
 
             // Click on the start button
             await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
             for (let i = 1; i <= 2; i++) {
                 const element = $(`(//android.widget.Button[@content-desc="Start Visit"])[${i}]`);
                 if (element.isDisplayed()) {
                     commonmethods.waitForDisplayedAndClick(element);
                     break; // Exit the loop once the first available element is clicked
                 }
             }
 
             await browser.pause(5000);
 
             // Click on popup
             await commonmethods.waitForDisplayedAndClick($(DJPelements.Clcikonyesbutton));
 
             await browser.pause(5000);
 
             // Select the dealer and retailer from the list
             const agencyName = "SRI GOPAL AGANCY";
             const location = "Arambagh, Arambagh";
             const amount = 150; // Dynamic amount

            // Format the XPath string using template literals and contains()
             const xpathTemplate = `//android.view.View[contains(@content-desc, "${agencyName}") and contains(@content-desc, "${location}") and contains(@content-desc, "Potential (MT/Month): ${amount}") and contains(@content-desc, "D")]`;

            // Use the dynamic XPath in your WebdriverIO code
             const element = await $(xpathTemplate);

            // Now you can interact with the element
            // await element.click();

             await browser.pause(10000);
             if(element.isDisplayed()){
                 await commonmethods.waitForDisplayedAndClick(element);
             }
             
             // Click on the location 
            const locationpopup = $('//android.widget.ImageView[@content-desc="Scanning for your location"]');
            // await browser.pause(5000)
            // if(locationpopup.isDisplayed()){
            //     console.log("Location Popup is Displaying");
            //     await commonmethods.waitForDisplayedAndClick(locationpopup)
            // }
            
            // Location Allow Popup
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(DJPelements.LocationAllowpopup));

            // Click on While Using App
            await browser.pause(3000);
            await commonmethods.waitForDisplayedAndClick($(DJPelements.Whileusingtheapp));

               // Click on the location 
            await browser.pause(5000)
            if(locationpopup.isDisplayed()){
                console.log("Location Popup is Displaying");
                // await commonmethods.waitForDisplayedAndClick(locationpopup)
            }

            // Dealer Detail 
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');

            // Click on the Next button
            const nextbutton = $('//android.widget.Button[@content-desc="Next"]');
            await commonmethods.waitForDisplayedAndClick(nextbutton);

            // Click on Confirm button
            await browser.pause(5000);
            await commonmethods.waitForDisplayedAndClick($(DJPelements.Confirmbutton));

            // Click on Price and bag
            await browser.pause(3000);
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Price (₹/Bag) & Stock (MT)"))');
            const WSP = $("//android.widget.EditText[@hint='INR'][1]");
            await commonmethods.waitForDisplayedAndSetvalue(WSP, "150");

            // Click on the Close Visit Button
            await browser.pause(7000);
            await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Close Visit"))');
            const Closevisit = $('//android.widget.Button[@content-desc="Close Visit"]');
            
            if(Closevisit.isDisplayed()){
                console.log("Close Button is Displayed");
            }else{
                console.log("Close Button is Not Disabled");
            }
        })
})