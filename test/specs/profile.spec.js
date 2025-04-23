const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const elementset = require('../ElementIdentifier/LoginElement.json')
const profiledataset = require('../Dataset/profile.json')
const profileIdentifier = require('../ElementIdentifier/profileElements.json')
const assert = require('assert');

describe('Profile test cases', ()=>{

    it('Click on menu Bar and validate the profile tag', async()=>{
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

        // Slect the profile option
        await commonmethods.waitForDisplayedAndClick($(profileIdentifier.menuprofile));
        
         // Click on Menu bar
         await commonmethods.waitForDisplayedAndClick(menu)
         await browser.pause(10000);
 
         // Click on the logout button
         await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
         await browser.pause(20000);
 
         // Click on the poup buttton
         const popupbutton = $(elementset.popupbuttonyes);
         await commonmethods.waitForDisplayedAndClick(popupbutton);
    })

    it('Click on menu Bar and validate the profile Page', async()=>{
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

        // Slect the profile option
        await commonmethods.waitForDisplayedAndClick($(profileIdentifier.menuprofile))    

        // Validate the profile name displaying
        await $(profileIdentifier.Profilename).isEqual(profiledataset.Dealername)

        // Validate the Employee Id
        await $(profileIdentifier.EmployeeId).isEqual(profiledataset.EmployeeId)

        // Validate the Email Id
        await $(profileIdentifier.EmailId).isEqual(profiledataset.EmailId)

        // Mobile Number
        await $(profileIdentifier.MobileNumber).isEqual(profiledataset.Mobilelabel)

        // Territory Code
        await $(profileIdentifier.Territory).isEqual(profiledataset.Territorycode)

        // Taluka Code
        await browser.pause(5000)
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const taluka = ["BHATAR", "BURDWAN", "BURDWAN - I", "GUSHKARA", "KETUGRAM - II", "MANGALKOTE", "MANGOLKOTE", "MANTESWAR", "PURBASTHALI - I"];

        for (let i = 0; i < taluka.length; i++) {
            let talukaName = taluka[i];
            let selector = `//android.view.View[${i + 10}]`; // Assuming the index matches the view index
            let isEqual = await $(selector).isEqual(talukaName);

            if (isEqual) {
                console.log(`${talukaName} is equal to the view element`);
            } else {
                console.log(`${talukaName} is not equal to the view element`);
            }
        }

         // Click on Menu bar
         await commonmethods.waitForDisplayedAndClick(menu)
         await browser.pause(10000);
 
         // Click on the logout button
         await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
         await browser.pause(20000);
 
         // Click on the poup buttton
         const popupbutton = $(elementset.popupbuttonyes);
         await commonmethods.waitForDisplayedAndClick(popupbutton);
    })


    it('Click on menu Bar and upload the image', async()=>{
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

        // Slect the profile option
        await commonmethods.waitForDisplayedAndClick($(profileIdentifier.menuprofile))    

        // Validate the profile name displaying
        await $(profileIdentifier.Profilename).isEqual(profiledataset.Dealername)

        // Image upload
        const imageclick = $('//android.widget.ScrollView/android.view.View[1]/android.view.View')
        await commonmethods.waitForDisplayedAndClick(imageclick)
        await browser.pause(5000);

        // Upload from gallery

        const galleryxpath = $('//android.widget.Button[@content-desc="Gallery"]');
        await commonmethods.upload(galleryxpath, 'C:/WebdriverAppium/test/Image/Rose.jpg')
        await browser.pause(5000)

         // Click on Menu bar
         await commonmethods.waitForDisplayedAndClick(menu)
         await browser.pause(10000);
 
         // Click on the logout button
         await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
         await browser.pause(20000);
 
         // Click on the poup buttton
         const popupbutton = $(elementset.popupbuttonyes);
         await commonmethods.waitForDisplayedAndClick(popupbutton);

    })
})