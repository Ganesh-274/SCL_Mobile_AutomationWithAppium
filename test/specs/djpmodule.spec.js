const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const login = require('../screenobject/android/login.js')
const djpmethods = require('../screenobject/android/djpmethods.js')

describe('DJP Module Test cases', ()=>{


    it.skip('Create Channel', async()=>{

        // Login into the applications
         // login section
         await login.selectloginasadmin();
         await login.validloginAsAdmin();
         await login.clickonloginbutton(); 

       //  Select from menu bars
        await djpmethods.clickhamburg();
        await djpmethods.selectdjpvalue();

        // scroll to create 
        await djpmethods.scroll();

         // select plannew journey
         await djpmethods.clickplannewjourney();

         // select the subarea options
         await djpmethods.selectsubarea();

         // click on route button
         await djpmethods.getroutesbutton();

         // click on aobj click
         await djpmethods.getobjclick();

          // scroll to create 
          await djpmethods.scroll();

          // view counter click 
          await djpmethods.viewcountersclick();

          // view addconter
          await djpmethods.addcounterssitesbtn();

          // select existing counter'
          await djpmethods.existingcounterbtn();

          // select the checkvalue
          // await djpmethods.searchcounterbar();

          // await djpmethods.scroll();
          await djpmethods.selectcountercheckbox();

           // add selected counter
           await djpmethods.addselectedcounterplanbtn();

           // Click on finalize button
           await djpmethods.finalizebtnclick();

    })

    it.only('Plan Journey' ,async()=>{

          // Login into the applications
         // login section
         await login.selectloginasadmin();
         await login.validloginAsAdmin();
         await login.clickonloginbutton(); 

        //  Select from menu bars
          await djpmethods.clickhamburg();
          await djpmethods.selectdjpvalue();

          // pause the screen
          driver.pause(3000)

          // scroll to create 
          await djpmethods.scroll();

          // Click on current journey button
          await djpmethods.currentjourneybtn()

          // click on start visit button
          await djpmethods.startvisitbtn();

            // pop up allow
          await djpmethods.popupyes();

    })


})