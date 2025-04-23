const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const DJPelements = require("../ElementIdentifier/DJP.json")
const elementset = require('../ElementIdentifier/LoginElement.json')

describe('DJP Plan New Journey dealer', async () => {

    it('DJP Plan New Journey dealer', async () => {

        // Click on the Login as admin button
        await commonmethods.waitForDisplayedAndClick($(elementset.loginasadmin), 5000);
        await browser.pause(5000);
        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield), Dataset.username);

        // Enter password
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield), Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        const menu = await $(elementset.hamburgerMenu);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        //  Click on the DJP from Menu bars
        const selectDJP = await $(elementset.djp);
        await commonmethods.waitForDisplayedAndClick(selectDJP);
        await browser.pause(10000);
        // click on current journey button
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const currentbutton = await $(DJPelements.currentjourneybutton);
        await commonmethods.waitForDisplayedAndClick(currentbutton);
        await browser.pause(10000);
    
        // on click on ongoing button
        const ongoingbutton = await $(DJPelements.ongoingbutton);
        await commonmethods.waitForDisplayedAndClick(ongoingbutton);
        // on click on dealer details
        const dealerdetails = await $(DJPelements.dealerdetails);
        await commonmethods.waitForDisplayedAndClick(dealerdetails);
        await browser.pause(10000);

        //click on next button
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        const nextbutton = await $(DJPelements.dealernextButton);
        await commonmethods.waitForDisplayedAndClick(nextbutton);
        await browser.pause(10000);

        //verify the add brands text

        const textforbrands = await $(DJPelements.addBrands).getAttribute('content-desc');
        await expect(textforbrands).toBe('Add Brands')
        // click on add brands
        const addbrands = await $(DJPelements.addBrands);
        await commonmethods.waitForDisplayedAndClick(addbrands);
        await browser.pause(10000);

        //verify the select brand  text

        const selectbrand = await $(DJPelements.selectbrands).getAttribute('content-desc');
        await expect(selectbrand).toBe('Select Brands')

        //on click on acc brand
        const accbrandcheckbox = await $(DJPelements.accBrand);
        await commonmethods.waitForDisplayedAndClick(accbrandcheckbox);
        await browser.pause(5000);

        // on click on ambuja brand
        const ambujabrandcheckbox = await $(DJPelements.ambujaBrand);
        await commonmethods.waitForDisplayedAndClick(ambujabrandcheckbox);
        await browser.pause(5000);
        //on click on conform button

        const confirmButton = await $(DJPelements.confirmbutton);
        await commonmethods.waitForDisplayedAndClick(confirmButton);
        await browser.pause(10000);

        // //verify the add products text

        const addproducts = await $(DJPelements.addProducts).getAttribute('content-desc');
        await expect(addproducts).toBe('Add Products')
        // click on add product
        const addproduct = await $(DJPelements.addProducts);
        await commonmethods.waitForDisplayedAndClick(addproduct);
        await browser.pause(10000);
        // on selection of slected product

        const selectedproduct = await $(DJPelements.product);
        await commonmethods.waitForDisplayedAndClick(selectedproduct);
        //on click on ambuja product
        const ambujaproduct = await $(DJPelements.ambujaproduct);
        await commonmethods.waitForDisplayedAndClick(ambujaproduct);

        // verify the clear all button
        const clearbutton = await $(DJPelements.clearallButton).getAttribute('content-desc');
        await expect(clearbutton).toBe('Clear All')

        //on click on conform button

        const productconformButton = await $(DJPelements.confirmbutton);
        await commonmethods.waitForDisplayedAndClick(productconformButton);
        await browser.pause(10000);

    })
})