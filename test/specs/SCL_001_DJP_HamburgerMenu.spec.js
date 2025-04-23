const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const DJPelements = require("../ElementIdentifier/DJP.json")
const elementset = require('../ElementIdentifier/LoginElement.json')

describe('DJP Module Business Scanerios', ()=>{

        it('Hamburger Menu_DO_DJP Button', async()=>{
           
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

        // Verify DJP URL
        const currentUrl = await driver.getCurrentActivity();
        console.log("URL:",currentUrl)  
        expect(currentUrl).toContain('.MainActivity');
        
        // Validate Daily Items
        const Daily = await $(DJPelements.Dailytab).getAttribute('content-desc');
        await expect(Daily).toBe('Daily') 
        
        // weekly validation
        const weekely = await $(DJPelements.weekely).getAttribute('content-desc');
        await expect(weekely).toBe('Weekly')

        // Manthly validation
        const Monthly = await $(DJPelements.Monthly).getAttribute('content-desc');
        await expect(Monthly).toBe('Monthly')

        // Validation of Buttons to be clickable
        // Validation of Counters to be Visited 
        const counterVisits = await $(DJPelements.visitedButton).getAttribute('content-desc');
        // await browser.execute((el) => {
        //         el.scrollIntoView();
        //     }, counterVisits);
        await expect(counterVisits).toBe('Counters to be Visited')
        
        // validation of Plan New Journey Button
        const NewJourney = await $(DJPelements.newJournyButton).getAttribute('content-desc');
        await NewJourney.scrollIntoView();
        await expect(NewJourney).toBe('Plan New Journey')

        //  validation Current Journey Button
        const CurrentJourney = await $(DJPelements.currentJourneyButton).getAttribute('content-desc');
        await CurrentJourney.scrollIntoView();
        await expect(CurrentJourney).toBe('Current Journey')

        //  validation View all Visits Button
        const AllVisit = await $(DJPelements.allVisitButton).getAttribute('content-desc');
        await AllVisit.scrollIntoView();
        await expect(AllVisit).toBe('View all Visits')

        //  validation of Efficacy Reports Button
        const Reports = await $(DJPelements.reportsButoon).getAttribute('content-desc');
        await Reports.scrollIntoView();
        await expect(Reports).toBe('Efficacy Reports')

       
        })

})