const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const commonmethods = require("../screenobject/android/commonmethods.js")
const Dataset = require("../Dataset/login.json")
const elementset = require('../ElementIdentifier/LoginElement.json')
const assert = require('assert');

describe('DO app testing with Anjantha', ()=>{
    it('DO_Sales Performance_Udaan Pro_Log-in_HappyPath_succesfully_Logout', async()=>{
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
        
        // Validate the Home page 
        // const validateHome = await $(elementset.Homepage);
        // expect(validateHome).toHaveText('Home');

        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Click on the logout button
        await commonmethods.waitForDisplayedAndClick($(elementset.logoutbutton));
        await browser.pause(20000);

        // Click on the poup buttton
        const popupbutton = $(elementset.popupbuttonyes);
        await commonmethods.waitForDisplayedAndClick(popupbutton);
    })

    it('DO_Sales Performance_Udaan Pro_Log-in_UnHappyPath', async()=>{
        await commonmethods.waitForDisplayedAndClick($('~LogIn as admin'))
        // expect(login).toHaveText('LogIn as admin');
        
        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.Invalidpassword);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);
        
        // Validate the texton the pop up
        const invalidmessges = $(elementset.Invaliderrormessage);
        expect(invalidmessges).toHaveText('Invalid Username/Password If you have forgotten your password. Please try forgot password to reset your password.');
        await commonmethods.waitForDisplayedAndClick($(elementset.clickonarraw));

        // clear the text
        await browser.pause(3000);
        await $(elementset.usernamefield).click();
        await $(elementset.usernamefield).clearValue();
        await browser.pause(3000);
        await $(elementset.passwordfield).click();
        await $(elementset.passwordfield).clearValue();

    })


    it('DO_Sales Performance_HomePage', async()=>{


        // const login = await $('~LogIn as admin');
        // await commonmethods.waitForDisplayedAndClick(login)
        // await browser.pause(5000);
        // expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await $(elementset.passwordfield).clearValue();
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);
        
        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Click on the main menubar button
        await commonmethods.waitForDisplayedAndClick($(elementset.Salesperformanceandplanningmain));
        
        // Click on the submenu bars
        await commonmethods.waitForDisplayedAndClick($(elementset.onlysalesperformance));

        // Validate the text in the sales performance page
        const element =  $('//android.view.View[@content-desc="Sales (MT)"]');
        const expectedText = 'Sales (MT)';
        element.waitForText({ timeout: 5000 }, expectedText);

        // Validating the Achievement % 
        const element1 =  $('//android.view.View[@content-desc="Achievement %"]');
        const expectedText1 = 'Achievement %';
        element1.waitForText({ timeout: 5000 }, expectedText1);

        // View History tab
        const element2 =  $('//android.widget.Button[@content-desc="View Historical Performance"]');
        const expectedText2 = 'View Historical Performance';
        element2.waitForText({ timeout: 5000 }, expectedText2);

        // Predicted Achievements
        const element3 =  $('//android.view.View[@content-desc="Predicted Achievement"]');
        const expectedText3 = 'Predicted Achievement';
        element3.waitForText({ timeout: 5000 }, expectedText3);

        // Current Rates
        const element4 =  $('//android.view.View[@content-desc="Current Rate"]');
        const expectedText4 = 'Current Rate';
        element4.waitForText({ timeout: 5000 }, expectedText4);

        // Asking  Rates
        const element5 =  $('//android.view.View[@content-desc="Asking Rate"]');
        const expectedText5 = 'Asking Rate';                
        element5.waitForText({ timeout: 5000 }, expectedText5);

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

    it('Home_page_Calculation first tab', async()=>{
              

        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await $(elementset.passwordfield).clearValue();
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Click on the main menubar button
        await commonmethods.waitForDisplayedAndClick($(elementset.Salesperformanceandplanningmain));
        
        // Click on the submenu bars
        await commonmethods.waitForDisplayedAndClick($(elementset.onlysalesperformance));

        // click on market tab
        const markettabclick = $('//android.widget.Button[@content-desc="Market"]');
        await commonmethods.waitForDisplayedAndClick(markettabclick);
        await browser.pause(5000);
        const salestab = $('//android.widget.Button[@content-desc="Sales"]');
        await commonmethods.waitForDisplayedAndClick(salestab);

        // Calculation
        await browser.pause(10000);
        const salesElement = await $('//android.view.View[4]');
        const totalTargetElement = await $('//android.view.View[6]');
        const displayingtotaltarget = await $('//android.view.View[8]')

        // Fetch the dynamic text values.
        var sales = await salesElement.getAttribute('content-desc');
        await browser.pause(5000);
        var totalTarget = await totalTargetElement.getAttribute('content-desc');
        await browser.pause(5000);
        const displayingvalue = await displayingtotaltarget.getAttribute('content-desc')
        const splitvalue = displayingvalue.split(' ')[0];

        if (totalTarget.includes(',')) {
            totalTarget = parseFloat(totalTarget.replace(/,/g, ''));
        }else{
            totalTarget = parseFloat(totalTarget);
        }
         
        // Check if sales contains commas and remove them if present
        if (sales.includes(',')) {
            sales = parseFloat(sales.replace(/,/g, ''));
        }else{
            sales = parseFloat(sales);
        }

        // Calculate the difference.
        var result1 = Math.abs(totalTarget - sales);
        var aheadOfresultSales = parseFloat(result1).toFixed(2);
        const value =  parseFloat(splitvalue.replace(/,/g, '')).toFixed(2);

        console.log(displayingvalue);
        console.log("sales: " + sales);
        console.log("Total target: " + totalTarget);
        console.log("Difference: "+result1)
        console.log("DisplayingTotal: "+displayingtotaltarget)
        console.log('Aheadrerult: '+aheadOfresultSales);
        console.log("SplitValue: "+splitvalue);
        
        await expect(parseFloat(aheadOfresultSales)).toEqual(parseFloat(value));
        
        // Achievement %
        var Achievementvalue = await $('//android.view.View[7]').getAttribute('content-desc');
        var acheiementcalu = (sales === 0 || totalTarget === 0) ? 0 :(parseFloat(sales) / parseFloat(totalTarget))*100;
        var fixachiev = (sales === 0 || totalTarget === 0) ? 0 : Math.round(acheiementcalu * 100 + (acheiementcalu * 1000 % 10 <= 5 ? 1 : 0)) / 100;
        if (Achievementvalue.includes(',')) {
            Achievementvalue = parseFloat(Achievementvalue.replace(/,/g, ''));
        }else{
            Achievementvalue = parseFloat(Achievementvalue);
        }
        const toNumberAchieve = parseFloat(Achievementvalue)

        console.log("GetAchievement: "+ Achievementvalue);
        console.log("GetAchievementtype : "+ typeof(Achievementvalue));
        console.log("GetAchievementcalculation: "+ acheiementcalu);
        console.log("GetAchievementtype : "+ typeof(acheiementcalu));
        console.log("Roundoff: "+ fixachiev);
        console.log("Roundoff: "+ typeof(fixachiev));
        // Valiadation of the test scripts
        await expect(parseFloat(fixachiev)).toEqual(toNumberAchieve);

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


    it('Home_page_SalesPerformance_Calculation second tab validation', async()=>{
              

        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await $(elementset.passwordfield).clearValue();
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Click on the main menubar button
        await commonmethods.waitForDisplayedAndClick($(elementset.Salesperformanceandplanningmain));
        
        // Click on the submenu bars
        await commonmethods.waitForDisplayedAndClick($(elementset.onlysalesperformance));

        // click on market tab
        const markettabclick = $('//android.widget.Button[@content-desc="Market"]');
        await commonmethods.waitForDisplayedAndClick(markettabclick);
        await browser.pause(5000);
        const salestab = $('//android.widget.Button[@content-desc="Sales"]');
        await commonmethods.waitForDisplayedAndClick(salestab);

        // Calculation
        await browser.pause(10000);
        const salesElement = await $('//android.view.View[4]');
        const totalTargetElement = await $('//android.view.View[6]');
        const displayingtotaltarget = await $('//android.view.View[8]')

        // Fetch the dynamic text values.
        var sales = await salesElement.getAttribute('content-desc');
        await browser.pause(5000);
        var totalTarget = await totalTargetElement.getAttribute('content-desc');
        await browser.pause(5000);
        const displayingvalue = await displayingtotaltarget.getAttribute('content-desc')
        const splitvalue = displayingvalue.split(' ')[0];

        // Calculate the difference.
        if (totalTarget.includes(',')) {
            totalTarget = parseFloat(totalTarget.replace(/,/g, ''));
        }else{
            totalTarget = parseFloat(totalTarget);
        }
        
        // Check if sales contains commas and remove them if present
        if (sales.includes(',')) {
            sales = parseFloat(sales.replace(/,/g, ''));
        }else{
            sales = parseFloat(sales);
        }
        var result1 = Math.abs(totalTarget - sales);     
        var aheadOfresultSales = result1.toFixed(2);
        const value =  parseFloat(splitvalue.replace(/,/g, '')).toFixed(2);


        console.log(displayingvalue);
        console.log("sales: " + sales);
        console.log("Total target: " + totalTarget);
        console.log("Difference: "+result1)
        console.log("DisplayingTotal: "+displayingtotaltarget)
        console.log('Aheadrerult: '+aheadOfresultSales);
        console.log("SplitValue: "+splitvalue);
        
        await expect(parseFloat(aheadOfresultSales)).toEqual(parseFloat(value));
        

        // Achievement %
        var Achievementvalue = await $('//android.view.View[7]').getAttribute('content-desc');
        var acheiementcalu = (sales === 0 || totalTarget === 0) ? 0 : (parseFloat(sales) / parseFloat(totalTarget))*100;
        const fixachiev = (sales === 0 || totalTarget === 0) ? 0 : Math.round(acheiementcalu * 100 + (acheiementcalu * 1000 % 10 <= 5 ? 1 : 0)) / 100;
        if (Achievementvalue.includes(',')) {
            Achievementvalue = parseFloat(Achievementvalue.replace(/,/g, ''));
        }else{
            Achievementvalue = parseFloat(Achievementvalue);
        }
        const toNumberAchieve = Achievementvalue;

        console.log("GetAchievement: "+ Achievementvalue);
        console.log("GetAchievementcalculation: "+ acheiementcalu);
        console.log("Roundoff: "+ fixachiev);

        // Valiadation of the test scripts
        await expect(parseFloat(fixachiev)).toEqual(toNumberAchieve);

        // Click on the arrow mark
        const secondarrow = $('//android.widget.ScrollView/android.widget.Button[2]')
        await commonmethods.waitForDisplayedAndClick(secondarrow);
        
        // Fetching the values from UI
        var salesElementsecondtab = await $('//android.view.View[4]').getAttribute('content-desc');
        var totalTargetElementsecondtab = await $('//android.view.View[6]').getAttribute('content-desc'); 
        const displayingtotaltargetsecondtab = await $('//android.view.View[8]').getAttribute('content-desc');
        const splitvalue2 = displayingtotaltargetsecondtab.split(' ')[0];
        // Calculation list
        // difference
        if (totalTargetElementsecondtab.includes(',')) {
            totalTargetElementsecondtab = parseFloat(totalTargetElementsecondtab.replace(/,/g, ''));
        }else{
            totalTargetElementsecondtab = parseFloat(totalTargetElementsecondtab);
        }
         
        // Check if sales contains commas and remove them if present
        if (salesElementsecondtab.includes(',')) {
            salesElementsecondtab = parseFloat(salesElementsecondtab.replace(/,/g, ''));
        }else{
            salesElementsecondtab = parseFloat(salesElementsecondtab);
        }
        var result2 = Math.abs(totalTargetElementsecondtab - salesElementsecondtab);
        var aheadOfresultSalestab2 = parseFloat(result2).toFixed(2);
        const value2 = parseFloat(splitvalue2.replace(/,/g, ''));

        console.log("SalesElementValue: "+salesElementsecondtab)
        console.log("TotalTarget: "+totalTargetElementsecondtab)
        console.log("Displayingvalue: "+displayingtotaltargetsecondtab)
        console.log("SplitValue: "+splitvalue2)
        console.log("Difference: "+ result2)
        console.log("TypeOfSplitvalue: "+typeof(splitvalue2))
        console.log("TypeOfdifference: "+typeof(result2))
        console.log("splitvalueafternum: "+ value2)
        console.log("differencevaluenum: "+result2)
        console.log("TypeOfSplitvalue: "+typeof(value2))
        console.log("TypeOfdifference: "+typeof(result2))


        // Validate the assertion
        await expect(parseFloat(aheadOfresultSalestab2)).toEqual(value2)

        // Calculation of Achievement% in second tab
        // Achievement %
        var Achievementvaluetab2 = await $('//android.view.View[7]').getAttribute('content-desc');
        var acheiementcalutab2 = (salesElementsecondtab === 0 || totalTargetElementsecondtab === 0) ? 0 :(parseFloat(salesElementsecondtab) / parseFloat(totalTargetElementsecondtab))*100;
        var fixachievtab2 = (salesElementsecondtab === 0 || totalTargetElementsecondtab === 0) ? 0 : Math.round((acheiementcalutab2 + Number.EPSILON) * 100) / 100;   
        if (Achievementvaluetab2.includes(',')) {
            Achievementvaluetab2 = parseFloat(Achievementvaluetab2.replace(/,/g, ''));
        }else{
            Achievementvaluetab2 = parseFloat(Achievementvaluetab2);
        }
        const toNumberAchievetab2 = parseFloat(Achievementvaluetab2);

        console.log("GetAchievement: "+ Achievementvaluetab2);
        console.log("GetAchievementcalculation: "+ acheiementcalutab2);
        console.log("Roundoff: "+ fixachievtab2);

        // Valiadation of the test scripts
        await expect(fixachievtab2).toEqual(toNumberAchievetab2);

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
    
    it('Home_page_Calculation View History caculation(Current rate)', async()=>{
              

        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await $(elementset.passwordfield).clearValue();
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Click on the main menubar button
        await commonmethods.waitForDisplayedAndClick($(elementset.Salesperformanceandplanningmain));
        
        // Click on the submenu bars
        await commonmethods.waitForDisplayedAndClick($(elementset.onlysalesperformance));

        // click on market tab
        const markettabclick = $('//android.widget.Button[@content-desc="Market"]');
        await commonmethods.waitForDisplayedAndClick(markettabclick);
        await browser.pause(5000);
        const salestab = $('//android.widget.Button[@content-desc="Sales"]');
        await commonmethods.waitForDisplayedAndClick(salestab);

        // Calculation
        await browser.pause(10000);
        const salesfirsttab = await $('//android.view.View[4]').getAttribute('content-desc'); //558.00
        const currentrate = await $('//android.view.View[16]').getAttribute('content-desc'); //62.00
        
        // Calculations
        // Get the current date
        const today = new Date();

        // Extract the current year, month, and day
        const year = today.getFullYear();
        const month = today.getMonth(); // getMonth() returns 0-based index (0 for January, 11 for December)
        const day = today.getDate();

        // Calculate the total number of days in the current month
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

        // Calculate the number of days completed and the number of days left
        const daysCompleted = day - 1;
        const daysLeft = totalDaysInMonth - day + 1;

        // Output the results
        console.log("Days completed: " +daysCompleted);
        console.log("Days left: "+daysLeft);

        // Our Calculation
        const ourcurrentrate = Number(salesfirsttab) / Number(daysCompleted);
        const roundoffvalue = (Math.round((ourcurrentrate + Number.EPSILON) * 100) / 100).toFixed(2);
        console.log("salesfirsttab "+salesfirsttab);
        console.log("gettingcurrentrate "+currentrate);
        console.log("salesfirsttab "+typeof(salesfirsttab));
        console.log("currentrate "+typeof(currentrate));
        console.log("ourcalculatedRate: "+ roundoffvalue)
        console.log("calculatedRate"+ typeof(roundoffvalue))

        // Validation of the text
        await expect(currentrate).toEqual(roundoffvalue)

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


    it('Home_page_Calculation View History caculation(Predicted Achievements) BUg already raised', async()=>{
              

        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await $(elementset.passwordfield).clearValue();
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Click on the main menubar button
        await commonmethods.waitForDisplayedAndClick($(elementset.Salesperformanceandplanningmain));
        
        // Click on the submenu bars
        await commonmethods.waitForDisplayedAndClick($(elementset.onlysalesperformance));

        // click on market tab
        const markettabclick = $('//android.widget.Button[@content-desc="Market"]');
        await commonmethods.waitForDisplayedAndClick(markettabclick);
        await browser.pause(5000);
        const salestab = $('//android.widget.Button[@content-desc="Sales"]');
        await commonmethods.waitForDisplayedAndClick(salestab);

        // Calculation
        await browser.pause(10000);
        const salesfirsttab = await $('//android.view.View[4]').getAttribute('content-desc'); //558.00
        const currentrate = await $('//android.view.View[16]').getAttribute('content-desc'); //62.00
        const getpredictedachievement = await $('//android.view.View[12]').getAttribute('content-desc') //1860.00
        // Calculations
        // Get the current date
        const today = new Date();

        // Extract the current year, month, and day
        const year = today.getFullYear();
        const month = today.getMonth(); // getMonth() returns 0-based index (0 for January, 11 for December)
        const day = today.getDate();

        // Calculate the total number of days in the current month
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

        // Calculate the number of days completed and the number of days left
        const daysCompleted = day - 1;
        const daysLeft = totalDaysInMonth - day + 1;
        const totalmonth = Number(daysCompleted) + Number(daysLeft)
        // Output the results
        console.log("Days completed: " +daysCompleted);
        console.log("Days left: "+daysLeft);
        console.log("Total Days: "+totalmonth);

        // Our Calculation
        const ourcurrentrate = Number(salesfirsttab) / Number(daysCompleted);
        const roundoffvalue = (Math.round((ourcurrentrate + Number.EPSILON) * 100) / 100).toFixed(2);
        const predictedvalue = (Number(roundoffvalue) * Number(totalmonth)).toFixed(2);
        const addingcomma = parseFloat(predictedvalue).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        

        console.log("Actualdiidivingvalue: "+ourcurrentrate);
        console.log("OurPredictedvalue: "+predictedvalue);
        console.log("OurPredictedvalue: "+typeof(predictedvalue));
        console.log("totalmonth: "+totalmonth);
        console.log("getpredictedachievement: "+getpredictedachievement);
        console.log("getpredictedachievement: "+typeof(getpredictedachievement));
        console.log("addingcomma: "+addingcomma);

        // Validation of the text
        await expect(currentrate).toEqual(roundoffvalue)

        // validate of the Predicated achievement
        await expect(getpredictedachievement).toEqual(addingcomma)

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


    it('Home_page_Calculation View History caculation(Asking rate)', async()=>{
              

        const login = await $('~LogIn as admin');
        await commonmethods.waitForDisplayedAndClick(login)
        await browser.pause(5000);
        expect(login).toHaveText('LogIn as admin');

        // enter username
        await commonmethods.waitforDsiplayClickAndSet($(elementset.usernamefield) , Dataset.username);

        // Enter password
        await $(elementset.passwordfield).clearValue();
        await commonmethods.waitforDsiplayClickAndSet($(elementset.passwordfield) , Dataset.password);

        // Click on the login button
        const loginbutton = await $(elementset.Loginbutton);
        await commonmethods.waitForDisplayedAndClick(loginbutton);

        // Click on Menu bar
        const menu = await $(elementset.menuclick);
        await commonmethods.waitForDisplayedAndClick(menu)
        await browser.pause(10000);

        // Click on the main menubar button
        await commonmethods.waitForDisplayedAndClick($(elementset.Salesperformanceandplanningmain));
        
        // Click on the submenu bars
        await commonmethods.waitForDisplayedAndClick($(elementset.onlysalesperformance));

        // click on market tab
        const markettabclick = $('//android.widget.Button[@content-desc="Market"]');
        await commonmethods.waitForDisplayedAndClick(markettabclick);
        await browser.pause(5000);
        const salestab = $('//android.widget.Button[@content-desc="Sales"]');
        await commonmethods.waitForDisplayedAndClick(salestab);

        // Calculation
        await browser.pause(10000);
        const salesfirsttab = await $('//android.view.View[4]').getAttribute('content-desc'); //558.00
        const currentrate = await $('//android.view.View[16]').getAttribute('content-desc'); //62.00
        
        // Calculations
        // Get the current date
        const today = new Date();

        // Extract the current year, month, and day
        const year = today.getFullYear();
        const month = today.getMonth(); // getMonth() returns 0-based index (0 for January, 11 for December)
        const day = today.getDate();

        // Calculate the total number of days in the current month
        const totalDaysInMonth = new Date(year, month + 1, 0).getDate();

        // Calculate the number of days completed and the number of days left
        const daysCompleted = day - 1;
        const daysLeft = totalDaysInMonth - day + 1;

        // Output the results
        console.log("Days completed: " +daysCompleted);
        console.log("Days left: "+daysLeft);

        // Our Calculation
        const ourcurrentrate = Number(salesfirsttab) / Number(daysCompleted);
        const roundoffvalue = (Math.round((ourcurrentrate + Number.EPSILON) * 100) / 100).toFixed(2);
        console.log("salesfirsttab "+salesfirsttab);
        console.log("gettingcurrentrate "+currentrate);
        console.log("salesfirsttab "+typeof(salesfirsttab));
        console.log("currentrate "+typeof(currentrate));
        console.log("ourcalculatedRate: "+ roundoffvalue)
        console.log("calculatedRate"+ typeof(roundoffvalue))

        // Validation of the text
        await expect(currentrate).toEqual(roundoffvalue)

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


})   