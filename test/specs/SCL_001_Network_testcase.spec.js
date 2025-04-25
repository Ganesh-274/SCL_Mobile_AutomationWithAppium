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

 const ClickonDealerTab = await $(elementset.ClickonDealerTab);  
 await commonmethods.waitForDisplayedAndClick(ClickonDealerTab);
 await browser.pause(5000);

 const Clickonnumericreach = await $(elementset.Clickonnumericreach);  
 await commonmethods.waitForDisplayedAndClick(Clickonnumericreach);
 await browser.pause(5000);

 //const ClickonACV = await $(elementset.ClickonACV);  
 //await commonmethods.waitForDisplayedAndClick(ClickonACV);
 //await browser.pause(5000);

 const ClickonChannelDetailsandPlanning = await $(elementset.ClickonChannelDetailsandPlanning);  
 await commonmethods.waitForDisplayedAndClick(ClickonChannelDetailsandPlanning);
 await browser.pause(5000);

 const Clickoncurrentnetworklist = await $(elementset.Clickoncurrentnetworklist);  
 await commonmethods.waitForDisplayedAndClick(Clickoncurrentnetworklist,5000);
 await browser.pause(10000);

 await commonmethods.waitforDsiplayClickAndSet($(elementset.Searchfeild) , Dataset.Searchbyname1);
 await browser.pause(10000);

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("R S STEELS"))').click();

 //validation Dealer360

 //verify name RSSteels
 const verifyRSSteels = await $(elementset.RSSteels).getAttribute('content-desc');
 await expect(verifyRSSteels).toBe('R S STEELS');

 //verifycategory
 await browser.pause(10000);
 const verifycategory = await $(elementset.category).getAttribute('content-desc');
 await expect(verifycategory).toBe('Category ');
 await browser.pause(10000);

 //verifyLastLifting
 const verifyLastLifting = await $(elementset.LastLifting).getAttribute('content-desc');
 await expect(verifyLastLifting).toBe('Last Lifting');
await browser.pause(10000);

//verifyLastVisitDate
 const verifyLastVisitDate = await $(elementset.LastVisitDate).getAttribute('content-desc');
 await expect(verifyLastVisitDate).toBe('Last Visit Date');
 await browser.pause(10000);

 //verifyNetworkType
 const verifyNetworkType = await $(elementset.NetworkType).getAttribute('content-desc');
 await expect(verifyNetworkType).toBe('Network Type');
 await browser.pause(10000);

 //verifyPotential
 const verifyPotential = await $(elementset.Potential).getAttribute('content-desc');
 await expect(verifyPotential).toBe('Potential');
 await browser.pause(10000);

//verifyVisits
 const verifyVisits = await $(elementset.Visits).getAttribute('content-desc');
 await expect(verifyVisits).toBe('Visits');
 await browser.pause(10000);

//verifyWholesale
 const verifyWholesale = await $(elementset.Wholesale).getAttribute('content-desc');
 await expect(verifyWholesale).toBe('Wholesale');
 await browser.pause(10000);

 //verifyCountersale
 const verifyCountersale = await $(elementset.Countersale).getAttribute('content-desc');
 await expect(verifyCountersale).toBe('Countersale');
 await browser.pause(10000);

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Sales (MT)"))').click();
 await browser.pause(10000);

 //verifySalesMT
 const verifySalesMT = await $(elementset.SalesMT).getAttribute('content-desc');
 await expect(verifySalesMT).toBe('Sales (MT)');
 await browser.pause(10000);

 //verifyAchievementpercentage
 const verifyAchievementpercentage = await $(elementset.Achievementpercentage).getAttribute('content-desc');
 await expect(verifyAchievementpercentage).toBe('Achievement %');
 await browser.pause(10000);

//verifyProductMix
 const verifyProductMix = await $(elementset.ProductMix).getAttribute('content-desc');
 await expect(verifyProductMix).toBe('Product Mix (Volume-MT)');
 await browser.pause(10000);

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Counter Share"))').click();
 await browser.pause(10000);


 //verifyCounterShare 
 const verifyCounterShare = await $(elementset.CounterShare).getAttribute('content-desc');
 await expect(verifyCounterShare).toBe('Counter Share');
 await browser.pause(10000);


//verifyLastmonthSale
 //const verifyLastmonthSale = await $(elementset.LastmonthSale).getAttribute('content-desc');
 //await expect(verifyLastmonthSale).toBe('March-2025');
 //await browser.pause(10000);


 //const verifyLastyearSale = await $(elementset.LastyearSale).getAttribute('content-desc');
 //await expect(verifyLastyearSale).toBe('April-2025');
 //await browser.pause(10000);


 const Clickonarrow = await $(elementset.Clickonarrow);  
 await commonmethods.waitForDisplayedAndClick(Clickonarrow,5000);
 await browser.pause(10000);

 const Clickonarrow1= await $(elementset.Clickonarrow);  
 await commonmethods.waitForDisplayedAndClick(Clickonarrow,5000);
 await browser.pause(10000);

 const Prospectivenetworklist = await $(elementset.Prospectivenetworklist);  
 await commonmethods.waitForDisplayedAndClick(Prospectivenetworklist,5000);
 await browser.pause(5000);

 //const Searchfeild = await $(elementset.Searchfeild);  
 //await commonmethods.waitForDisplayedAndClick(Searchfeild,5000);
 //await browser.pause(5000);
 const enterSearchfeild = await $(elementset.Searchfeild);
 await commonmethods.waitforDsiplayClickAndSet($(enterSearchfeild) , Dataset.Searchbyname);
 await browser.pause(10000);
 await enterSearchfeild.setValue('');
 await browser.pause(10000);

 

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("SHREE DISTRIBUTOR "))').click();
await browser.pause(10000);

const BackArrow= await $(elementset.BackArrow);  
 await commonmethods.waitForDisplayedAndClick(BackArrow,5000);
 await browser.pause(10000);

 const channeldetails= await $(elementset.channeldetails);  
 await commonmethods.waitForDisplayedAndClick(channeldetails,5000);
 await browser.pause(10000);

 const clickbackarrow = await $(elementset.clickbackarrow);  
 await commonmethods.waitForDisplayedAndClick(clickbackarrow,5000);
 await browser.pause(10000);

 const DealersExclusivetoshree = await $(elementset.DealersExclusivetoshree);  
 await commonmethods.waitForDisplayedAndClick(DealersExclusivetoshree);
 await browser.pause(5000);

 const enterSearchfeild1 = await $(elementset.Searchfeild);
 await commonmethods.waitforDsiplayClickAndSet($(enterSearchfeild) , Dataset.Searchbyname2);
 await browser.pause(10000);
 await enterSearchfeild.setValue('');
 await browser.pause(10000);

 await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("CHAKRADHAR  ENTERPRISES"))').click();
 await browser.pause(10000);
 
 const CHAKRADHARENTERPRISES = await $(elementset.CHAKRADHARENTERPRISES);  
 await commonmethods.waitForDisplayedAndClick(CHAKRADHARENTERPRISES,5000);
 await browser.pause(5000);

 





 //const verifySHREEDISTRIBUTOR = await $(elementset.SHREEDISTRIBUTOR).getAttribute('content-desc');
 //await expect(verifySHREEDISTRIBUTOR).toBe('SHREE DISTRIBUTOR ');

 //verifycategory
 //await browser.pause(10000);
 //const verifyCategory = await $(elementset.Category).getAttribute('content-desc');
 //await expect(verifyCategory).toBe('Category ');
 //await browser.pause(10000);

 //verifyLastLifting

//const verifyLastlifting = await $(elementset.Lastlifting).getAttribute('content-desc');
 //await expect(verifyLastlifting).toBe('Last Lifting');
 //await browser.pause(10000);


//verifyLastVisitDate
 //const verifyLastVistDate= await $(elementset.LastVistDate).getAttribute('content-desc');
 //await expect(verifyLastVistDate).toBe('Last Visit Date');
 //await browser.pause(10000);

 //verifyNetworkType
 //const verifyNetworktype = await $(elementset.Networktype).getAttribute('content-desc');
 //await expect(verifyNetworktype).toBe('Network Type');
 //await browser.pause(10000);

 //verifyPotential
 //const verifyPotential1 = await $(elementset.Potential1).getAttribute('content-desc');
 //await expect(verifyPotential1).toBe('Potential');
 //await browser.pause(5000);

//verifyVisits
 //const verifyVisits1 = await $(elementset.Visits1).getAttribute('content-desc');
 //await expect(verifyVisits1).toBe('Visits');
 //await browser.pause(5000);

//verifyWholesale
 //const verifyWholeSale = await $(elementset.WholeSale).getAttribute('content-desc');
 //await expect(verifyWholeSale).toBe('Wholesale');
 //await browser.pause(5000);

 //verifyCountersale
 //const verifyCounterSale = await $(elementset.CounterSale).getAttribute('content-desc');
 //await expect(verifyCounterSale).toBe('Countersale');
 //await browser.pause(5000);

 //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Sales (MT)"))').click();
 //await browser.pause(5000);

 //verifySalesMT
 //const verifySalesMT1 = await $(elementset.SalesMT).getAttribute('content-desc');
 //await expect(verifySalesMT).toBe('Sales (MT)');
 //await browser.pause(10000);

 //verifyAchievementpercentage
 //const verifyAchievementpercentage1 = await $(elementset.Achievementpercentage).getAttribute('content-desc');
 //await expect(verifyAchievementpercentage).toBe('Achievement %');
 //await browser.pause(10000);

//verifyProductMix
 //const verifyProductMix1 = await $(elementset.ProductMix).getAttribute('content-desc');
 //await expect(verifyProductMix).toBe('Product Mix (Volume-MT)');
 //await browser.pause(10000);

 //await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(new UiSelector().description("Counter Share"))').click();
 //await browser.pause(10000);


 //verifyCounterShare 
 //const verifyCounterShare1 = await $(elementset.CounterShare).getAttribute('content-desc');
 //await expect(verifyCounterShare).toBe('Counter Share');
 //await browser.pause(10000);


 })
 
 
})


