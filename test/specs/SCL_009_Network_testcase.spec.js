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

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Onboarding Details"))').click();
 await browser.pause(10000);

 //const OnboardingDetails = await $(elementset.OnboardingDetails);  
 //await commonmethods.waitForDisplayedAndClick(OnboardingDetails);
 //await browser.pause(5000);

//verifyOnboardingrequest 
 const verifyOnboardingrequest = await $(elementset.Onboardingrequest).getAttribute('content-desc');
 await expect(verifyOnboardingrequest).toBe('Onboarding Request');
 await browser.pause(10000);

//verifyNewDealerDashboard
 const verifyNewDealerDashboard = await $(elementset.NewDealerDashboard).getAttribute('content-desc');
 await expect(verifyNewDealerDashboard).toBe('New Dealer Dashboard');
 await browser.pause(10000);

 const Clickonarrow = await $(elementset.Clickonarrow);  
 await commonmethods.waitForDisplayedAndClick(Clickonarrow,5000);
 await browser.pause(10000);



 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Network Type"))').click();
 await browser.pause(10000);;

 //const verifyNetworkaddition = await $(elementset.Networkaddition).getAttribute('content-desc');
 //await expect(verifyNetworkaddition).toBe('Network Addition\n 0\nTotal target \n 0\nAchievement %\nNA\n0 \nDealer addition \nahead \nof target');
 //await browser.pause(10000);

 const verifyNetworkchurn = await $(elementset.Networkchurn).getAttribute('content-desc');
 await expect(verifyNetworkchurn).toBe('Network Churn (MTD)');
 await browser.pause(10000);
 

    })
})