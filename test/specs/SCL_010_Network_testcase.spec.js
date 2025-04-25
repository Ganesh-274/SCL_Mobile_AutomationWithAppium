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

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Network Type"))').click();
 await browser.pause(10000);

 const Icon= await $(elementset.Icon);  
 await commonmethods.waitForDisplayedAndClick(Icon);
 await browser.pause(5000);

 const Close= await $(elementset.Close);  
 await commonmethods.waitForDisplayedAndClick(Close);
 await browser.pause(5000);

 const Active= await $(elementset.Active);  
 await commonmethods.waitForDisplayedAndClick(Active);
 await browser.pause(5000);

 const Clickonarrow = await $(elementset.Clickonarrow);  
 await commonmethods.waitForDisplayedAndClick(Clickonarrow,5000);
 await browser.pause(10000);

 const Inactive= await $(elementset.Inactive);  
 await commonmethods.waitForDisplayedAndClick(Inactive);
 await browser.pause(5000);

 const Clickonarrow1 = await $(elementset.Clickonarrow);  
 await commonmethods.waitForDisplayedAndClick(Clickonarrow,5000);
 await browser.pause(10000);

 const Dormant = await $(elementset.Dormant);  
 await commonmethods.waitForDisplayedAndClick(Dormant);
 await browser.pause(5000);

 const Clickonarrow2 = await $(elementset.Clickonarrow);  
 await commonmethods.waitForDisplayedAndClick(Clickonarrow,5000);
 await browser.pause(10000);

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Dealer Sales Performance"))').click();
 await browser.pause(10000);

 const MTD = await $(elementset.MTD);  
 await commonmethods.waitForDisplayedAndClick(MTD);
 await browser.pause(5000);

 const YTD = await $(elementset.YTD);  
 await commonmethods.waitForDisplayedAndClick(YTD);
 await browser.pause(5000);

 const verifyActual = await $(elementset.Actual).getAttribute('content-desc');
 await expect(verifyActual).toBe('Actual');
 await browser.pause(10000);

 const verifyTarget = await $(elementset.Target).getAttribute('content-desc');
 await expect(verifyTarget).toBe('Target');
 await browser.pause(10000);

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Market Mapping"))').click();
 await browser.pause(10000);





 
    })

})