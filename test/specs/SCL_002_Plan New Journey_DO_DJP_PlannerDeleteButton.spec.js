const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const DJPelements = require("../ElementIdentifier/DJP.json")
const elementset = require('../ElementIdentifier/LoginElement.json')

describe('Plan New Journey_DO_DJP _Journey Planner-Delete Button', () => {

        it('Plan New Journey_DO_DJP _Journey Planner-Delete Button', async () => {

                const login = await $('~LogIn as admin');
                await commonmethods.waitForDisplayedAndClick(login)
                await browser.pause(5000);
                // expect(login).toHaveText('LogIn as admin');

                // enter username
                await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield), Dataset.username);

                // Enter password
                await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield), Dataset.password);

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

                // Verify DJP URL
                const currentUrl = await driver.getCurrentActivity();
                console.log("URL:", currentUrl)
                expect(currentUrl).toContain('.MainActivity');

                //Click on Current plan journey button
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
                const CurrentJourney = await $(DJPelements.currentJourneyButton).getAttribute('content-desc');
                await expect(CurrentJourney).toBe('Current Journey')
                await commonmethods.waitForDisplayedAndClick(CurrentJourney);

                // Click on pencil Icon to delete the visit ot finalize
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
                const EditVisit = await $(DJPelements.editVisit);
                await commonmethods.waitForDisplayedAndClick(EditVisit);

                // Verify the Visit
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
                const VerifyVisit = await $(DJPelements.VisitValidation).getAttribute('content-desc');
                await expect(VerifyVisit).toBe('Ganesh dealer \nchintal , Hyderabad \n1002266001\nD')

                //Verify Add Counter Button
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
                const VerifyAddCounterButton = await $(DJPelements.addCounterButton).getAttribute('content-desc');
                await expect(VerifyAddCounterButton).toBe('Add Counters')

                //Verify Finalize Button
                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
                const FinalizeButton = await $(DJPelements.finalizeButton).getAttribute('content-desc');
                await expect(FinalizeButton).toBe('Finalize')
                // await commonmethods.waitForDisplayedAndClick(FinalizeButton);

                await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
                const DeleteVisit = await $(DJPelements.deleteVisit).getAttribute('content-desc');
                await commonmethods.waitForDisplayedAndClick(DeleteVisit);


        })

})