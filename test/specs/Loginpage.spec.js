const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const login = require('../screenobject/android/login.js')
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const elementset = require('../ElementIdentifier/loginpagenew.json')

describe('Login Scanerios', async()=>{

    it ('Login Page Cred', async()=>{

        // Click on the Login as admin button
        await commonmethods.waitForDisplayedAndClick($(elementset.loginasadmin), 5000);
        await browser.pause(5000);

        // Clik on the user name field and password 
        await commonmethods.waitForDisplayedAndClick($(elementset.usernamefield), 5000);
        await commonmethods.waitForDisplayedAndClick($(elementset.passwordfield), 5000);
    })


})