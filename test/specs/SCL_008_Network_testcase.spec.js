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
  // enter username
  await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);
 
  // Enter password
  await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);
 
  // Click on the login button
  const loginbutton = await $(elementset.Loginbutton);
  await commonmethods.waitForDisplayedAndClick(loginbutton);
 
  await browser.pause(5000);
  
  //click on hamburgermenu
  const hamburgerMenu = await $(elementset.hamburgerMenu);
  await commonmethods.waitForDisplayedAndClick(hamburgerMenu);
  await browser.pause(5000);
  //click on Network
  const ClickonNetwork = await $(elementset.ClickonNetwork);
  await commonmethods.waitForDisplayedAndClick(ClickonNetwork);
  await browser.pause(5000);


//click on ChannelPartners  
 const ClickonChannelPartners = await $(elementset.ClickonChannelPartners);  
 await commonmethods.waitForDisplayedAndClick(ClickonChannelPartners);
 await browser.pause(5000);

 //click on Dealer

 const ClickonDealerTab = await $(elementset.ClickonDealerTab);  
 await commonmethods.waitForDisplayedAndClick(ClickonDealerTab);
 await browser.pause(5000);

 //Click on salesperformance
 const SpPerformance = await $(elementset.SpPerformance);  
 await commonmethods.waitForDisplayedAndClick(SpPerformance);
 await browser.pause(5000);
 

    })
})
