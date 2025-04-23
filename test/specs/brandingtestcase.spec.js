const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const elementset = require('../ElementIdentifier/LoginElement.json')
const brandingElements = require('../ElementIdentifier/brandingElements.json')

describe('Branding Module Business Scanerios', ()=>{
    
        it('Validating Branding option in Menu bar', async()=>{
                
                const login = await $('~LogIn as admin');
                await commonmethods.waitForDisplayedAndClick(login)
                await browser.pause(5000);
                // expect(login).toHaveText('LogIn as admin');

                // enter username
                await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.brandingusername);

                // Enter password
                await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.brandingpassword);

                // Click on the login button
                const loginbutton = await $(elementset.Loginbutton);
                await commonmethods.waitForDisplayedAndClick(loginbutton);

                // Click on Menu bar
                const menu = await $(elementset.menuclick);
                await commonmethods.waitForDisplayedAndClick(menu)
                await browser.pause(10000);

                // Click on brnding option
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.menuBranding));

                 // Click on the logout button
                await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
                await browser.pause(10000);

                // Click on the poup buttton
                const popupbutton = $(elementset.popupbuttonyes);
                await commonmethods.waitForDisplayedAndClick(popupbutton);
                
        })    


        it('Validating HomePage in Branding', async()=>{
                
                const login = await $('~LogIn as admin');
                await commonmethods.waitForDisplayedAndClick(login)
                await browser.pause(5000);
                // expect(login).toHaveText('LogIn as admin');

                // enter username
                await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.brandingusername);

                // Enter password
                await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.brandingpassword);

                // Click on the login button
                const loginbutton = await $(elementset.Loginbutton);
                await commonmethods.waitForDisplayedAndClick(loginbutton);

                // Click on Menu bar
                const menu = await $(elementset.menuclick);
                await commonmethods.waitForDisplayedAndClick(menu)
                await browser.pause(10000);

                // Click on brnding option
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.menuBranding));

                // Click on Branding type site
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.pointofsale));
                await commonmethods.waitForDisplayedAndClick($(brandingElements.outdooroption));

                 // Click on the logout button
                 await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
                 await browser.pause(10000);
 
                 // Click on the poup buttton
                 const popupbutton = $(elementset.popupbuttonyes);
                 await commonmethods.waitForDisplayedAndClick(popupbutton);
                
        })    
        
        
        it('Raise Branding Request for Dealer Cost Sharing', async()=>{
                
                const login = await $('~LogIn as admin');
                await commonmethods.waitForDisplayedAndClick(login)
                await browser.pause(5000);
                // expect(login).toHaveText('LogIn as admin');

                // enter username
                await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.brandingusername);

                // Enter password
                await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.brandingpassword);

                // Click on the login button
                const loginbutton = await $(elementset.Loginbutton);
                await commonmethods.waitForDisplayedAndClick(loginbutton);

                // Click on Menu bar
                const menu = await $(elementset.menuclick);
                await commonmethods.waitForDisplayedAndClick(menu)
                await browser.pause(10000);

                // Click on brnding option
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.menuBranding));

                // Click on raise branding button
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.raiseBrandingrequest));

                // Click on point of contact option
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.pointofsale));
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.dealercostsharing));

                // Click on Branding type
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.Brandingtype));
                await commonmethods.waitForDisplayedAndClick($(brandingElements.selectbrandtype));

                // Search for code /Name/ number
                await browser.pause(3000);
                await commonmethods.waitforDsiplayClickAndSet($(brandingElements.Searchcodename), "AGGARWAL ASSOCIATES | 11080316 | 11080316");
                await commonmethods.waitForDisplayedAndClick($(brandingElements.Setdealers));

                // Refreshing the screen
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.Clickonpartnername));
                await browser.pause(3000);

                // Entering the Quantities
                const quantities = $(brandingElements.enterquantity)
                await commonmethods.waitforDsiplayClickAndSet(quantities, "200");
                await driver.execute('mobile: performEditorAction', { action: 'done' });
                await browser.pause(5000);

                // Navigae to Date page
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Activity Start Date*)"))');
                await browser.pause(5000);
        // ==========================================================================================================
                // Clickon start date and set date
                await browser.pause(2000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.clickonstartdate));

                const today = new Date();
                const day = today.getDate();
                const year = today.getFullYear();
                const month = today.toLocaleString('default', { month: 'long' });
                const weekday = today.toLocaleString('default', { weekday: 'long' });

                // Format the date to match the content-desc attribute
                const formattedDate = `${day}, ${weekday}, ${month} ${day}, ${year}`;

                // Assuming the date picker is already opened, find today's date element
                const dateElement = await $(`//android.view.View[@content-desc="${formattedDate}"]`);
                
                // Click on the desired date
                await dateElement.click();
                // Click on ok button
                await commonmethods.waitForDisplayedAndClick($(brandingElements.okbuttondatepicker))
                await browser.pause(10000);

        // ======================================================================================================

                // Click on the date of compitation
                await browser.pause(5000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.plandatecompletion));

                const today1 = new Date();
                const futureDate1 = new Date(today1);
                futureDate1.setDate(today1.getDate() + 2);

                const day1 = futureDate1.getDate();
                const year1 = futureDate1.getFullYear();
                const month1 = futureDate1.toLocaleString('default', { month: 'long' });
                const weekday1 = futureDate1.toLocaleString('default', { weekday: 'long' });

                // Format the date to match the content-desc attribute
                const formattedDate1 = `${day1}, ${weekday1}, ${month1} ${day1}, ${year1}`;

                // Assuming the date picker is already opened, find the future date element
                const dateElement1 = await $(`//android.view.View[@content-desc="${formattedDate1}"]`);
                
                // Click on the desired date
                await dateElement1.click();
                // Click on ok button
                await commonmethods.waitForDisplayedAndClick($(brandingElements.okbuttondatepicker))
                await browser.pause(10000);

        // ======================================================================================================
                //Click on the objectiveactivity
                await commonmethods.waitForDisplayedAndClick($(brandingElements.Clickonobjectivetarget));
                await commonmethods.waitForDisplayedAndClick($(brandingElements.Selectobjectiveactivity));
                await browser.pause(5000);

                // Click on the objectivepercentage
                await browser.pause(5000);
                const objective = $(brandingElements.objectivetargetpercentage);
                await commonmethods.waitforDsiplayClickAndSet(objective, "50");
                await driver.execute('mobile: performEditorAction', { action: 'done' });

                // Budget planning
                await browser.pause(3000);
                const budget = $(brandingElements.budgetplanning);
                await commonmethods.waitforDsiplayClickAndSet(budget, "100000");
                await driver.execute('mobile: performEditorAction', { action: 'done' });

                // Click on the submit button
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.Clickonsubmitbutton));
                await browser.pause(10000);

                // Click on the arrow button
                const arrow = $(brandingElements.clickonthearrow);
                await commonmethods.waitForDisplayedAndClick(arrow);
                await browser.pause(10000);

                // Click on the track order
                const trackorder = $(brandingElements.Validatetrackstatus);
                if(trackorder.isDisplaying()){
                console.log("Track ordewr generated Successfully!!");
                await commonmethods.waitForDisplayedAndClick(trackorder);
                }else{
                console.log("Track Order Not Created please check once");
                }

                // Click on back buttton
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.barandingbackbackbutton));
                await browser.pause(10000);

                // Click on back buttton
                await browser.pause(3000);
                await commonmethods.waitForDisplayedAndClick($(brandingElements.barandingbackbackbutton));
                await browser.pause(10000);

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


    it('Raise Branding Request [Outdoor]', async()=>{
           
        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        // expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.brandingusername);

        // Enter password
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.brandingpassword);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

         // Click on Menu bar
         const menu = await $(elementset.menuclick);
         await commonmethods.waitForDisplayedAndClick(menu)
         await browser.pause(3000);

        // Click on branding option
        await browser.pause(3000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.menuBranding));

        // Click on raise branding button
        await browser.pause(3000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.raiseBrandingrequest));

         // Click on Branding type site
         await browser.pause(3000);
         await commonmethods.waitForDisplayedAndClick($(brandingElements.pointofsale));
         await commonmethods.waitForDisplayedAndClick($(brandingElements.outdooroption));

        // Click on Branding type
        await browser.pause(3000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.Brandingtype));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.selectbrandtypeHoarding));

        // Enter the Quantities
        await browser.pause(3000);
        await commonmethods.waitforDsiplayClickAndSet($(brandingElements.EnterQuantities), "50");
        await driver.execute('mobile: performEditorAction', { action: 'done' });
        
        // Enter the Dimensios
        await browser.pause(3000);
        const Length = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
        const bredth = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
        await commonmethods.waitforDsiplayClickAndSet($(brandingElements.DimensionLength), Length);
        await driver.execute('mobile: performEditorAction', { action: 'done' });
        await commonmethods.waitforDsiplayClickAndSet($(brandingElements.DimensionBredth), bredth);
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // Scroll
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("Site Name"))');
        await browser.pause(2000);
        // Enter the Site name
        await commonmethods.waitforDsiplayClickAndSet($(brandingElements.SiteName), "Test Site");
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // Enter the Address 1
        await browser.pause(2000);
        await commonmethods.waitforDsiplayClickAndSet($(brandingElements.Address1), "Test Address one");
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // Enter the Address 2
        await browser.pause(2000);
        await commonmethods.waitforDsiplayClickAndSet($(brandingElements.Address2), "Test Address Second");
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // Select State
        await browser.pause(2000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.State));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.StateSelection));

        // Select District
        await browser.pause(2000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.District));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.DistrictSelect));


        // Select Taluka
        await browser.pause(2000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.taluka));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.SelectTaluka));

        // Select City
        await browser.pause(2000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.City));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.selectCity));

        // Scroll and enter pinlocation
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Pin Location(If Applicable)*)"))');
        await commonmethods.waitForDisplayedAndClick($(brandingElements.PinLocation));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.pinlocationbutton));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.Allowpopup));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.Locationpopup));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.PinLocation));

// ==========================================================================================================
        // Clickon start date and set date
        await browser.pause(2000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.OutdoorStart));

        const today = new Date();
        const day = today.getDate();
        const year = today.getFullYear();
        const month = today.toLocaleString('default', { month: 'long' });
        const weekday = today.toLocaleString('default', { weekday: 'long' });

        // Format the date to match the content-desc attribute
        const formattedDate = `${day}, ${weekday}, ${month} ${day}, ${year}`;

        // Assuming the date picker is already opened, find today's date element
        const dateElement = await $(`//android.view.View[@content-desc="${formattedDate}"]`);
        
        // Click on the desired date
        await dateElement.click();
        // Click on ok button
        await commonmethods.waitForDisplayedAndClick($(brandingElements.okbuttondatepicker))
        await browser.pause(2000);

//==============================================================================================================

        // Click on the date of compitation
        await browser.pause(2000);
        await commonmethods.waitForDisplayedAndClick($(brandingElements.OutdoorEnddate));

        const today1 = new Date();
        const futureDate1 = new Date(today1);
        futureDate1.setDate(today1.getDate() + 2);

        const day1 = futureDate1.getDate();
        const year1 = futureDate1.getFullYear();
        const month1 = futureDate1.toLocaleString('default', { month: 'long' });
        const weekday1 = futureDate1.toLocaleString('default', { weekday: 'long' });

        // Format the date to match the content-desc attribute
        const formattedDate1 = `${day1}, ${weekday1}, ${month1} ${day1}, ${year1}`;

        // Assuming the date picker is already opened, find the future date element
        const dateElement1 = await $(`//android.view.View[@content-desc="${formattedDate1}"]`);
        
        // Click on the desired date
        await dateElement1.click();
        // Click on ok button
        await commonmethods.waitForDisplayedAndClick($(brandingElements.okbuttondatepicker))
        await browser.pause(2000);

//=================================================================================================================

        //Click on the objectiveactivity
        await commonmethods.waitForDisplayedAndClick($(brandingElements.Clickonobjectivetarget));
        await commonmethods.waitForDisplayedAndClick($(brandingElements.Selectobjectiveactivity));
        await browser.pause(2000);

        // Click on the objectivepercentage
        const objective = $(brandingElements.objectivetargetpercentage);
        await commonmethods.waitforDsiplayClickAndSet(objective, "50");
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // Budget planning
        await browser.pause(2000);
        const budget = $(brandingElements.budgetplanning);
        await commonmethods.waitforDsiplayClickAndSet(budget, "100000");
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // Enter contact Number
        await browser.pause(2000);
        const contact = $(brandingElements.EntercontactNumber);
        await commonmethods.waitforDsiplayClickAndSet(contact, '8924261313');
        await driver.execute('mobile: performEditorAction', { action: 'done' });

        // Scroll to upload the picture
        await browser.pause(2000);
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().descriptionContains("Upload Photo (Before branding activity performed)"))');
        // Pic Image
        await browser.pause(3000);
        const pic = $(brandingElements.PicImage);
        await commonmethods.waitForDisplayedAndClick(pic);
        await browser.pause(2000);
        // await commonmethods.waitForDisplayedAndClick($(brandingElements.Photo));
        // await browser.pause(2000);
        // await commonmethods.waitForDisplayedAndClick($(brandingElements.takepicture));


    })

})