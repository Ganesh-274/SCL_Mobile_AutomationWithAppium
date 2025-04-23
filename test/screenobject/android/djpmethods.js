const { isExportDeclaration } = require("typescript");

class djpmethods{

    get menuhamburgclick(){
        return $('android.widget.Button');
    }
    
    get selectdjp(){
        return $('~DJP');
    }

    get plannewjourney(){
        return $('~Plan New Journey');
    }

    get getroutes(){
        return $('~Get Routes')
    }

    get getobjective(){
        return $('~Get Objectives');
    }

    get viewcounters(){
        return $('~View Counter');
    }

    get addcounters(){
        return $('~Add Counters/ Site/ Influencer');
    }
    get existingcounter(){
        return $('~Existing Counter/Site/Influencer');
    }
    get selectcounter(){
        return $('~12/04/2024');
    }
    get addselected(){
        return $('~Add Selected Counters to Plan');
    }
    get searchcounter(){
        return $('android.widget.EditText');
    }

    // Map new counter tag
    get mapnewcounter(){
        return $('~Map New Counter')
    }

    get geotag(){
        return $('~Geo Tag');
    }

    get locationpop(){
        return $('//android.view.View[@content-desc="Allow"]');
    }
    get accesslocation(){
        return $('//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_one_time_button"]');
    }

    get mapselection(){
        return $('//android.widget.RadioButton[@resource-id="com.android.permissioncontroller:id/permission_location_accuracy_radio_coarse"]');
    }
    get finalizebtn(){
        return $('~Finalize')
    }

   get logout(){
        return $('~logoutButton');
   }

   get logoutpopup(){
    return $('~logoutYesButton')
   }
    // ===================================================================
    async clickhamburg(){
        await this.menuhamburgclick.waitForDisplayed({timeout: 30000});
        await this.menuhamburgclick.click();
    }
    async selectdjpvalue(){
        await this.selectdjp.waitForDisplayed({timeout: 30000});
        await this.selectdjp.click();
    }

    async scroll(){
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
    }

    async clickplannewjourney(){
        await this.plannewjourney.waitForDisplayed({timeout: 40000})
        await this.plannewjourney.click();
    }

    get subareas(){
        return $('//android.view.View[@content-desc="FARIDABAD" or @content-desc="GURGAON"]');
    }

    async selectsubarea(){
       
        const valuesToSelect = ["FARIDABAD", "GURGAON"];

// Iterate through each value in the array
valuesToSelect.forEach(value => {
    // Assuming you have already identified the dropdown element
    let dropdown = $('//android.view.View[@content-desc="' + value + '"]');
    if (!dropdown) {
        // If dropdown is not found, handle it accordingly
        if (value === "PALWAL") {
            dropdown = $('//android.view.View[@content-desc="PALWAL"]');
        } else if (value === "GURGAON") {
            dropdown = $('//android.view.View[@content-desc="GURGAON"]');
        }
    }
    if (dropdown) {
        // Use selectByAttribute method to select by content-desc attribute
        dropdown.selectByAttribute('content-desc', value);
        dropdown.click();
    } else {
        console.error("Dropdown not found for value:", value);
    }

        // await this.subareas.waitForDisplayed({timeout: 20000});
        // await this.subareas.click();
    
});
    
    }

    async getroutesbutton(){
            await this.getroutes.click();
    }

    async getobjclick(){
        await this.getobjective.click();
    }
    async viewcountersclick(){
        await this.viewcounters.waitForDisplayed({timeout: 10000});
        await this.viewcounters.click()
    }
    async addcounterssitesbtn(){
        await this.addcounters.waitForDisplayed({timeout: 10000});
        await this.addcounters.click();
    }
    async existingcounterbtn(){
        await this.existingcounter.waitForDisplayed({timeout: 10000});
        await this.existingcounter.click();
    }
    async searchcounterbar(){
        await this.searchcounter.waitForDisplayed({timeout: 10000});
        await this.searchcounter.click();
        await this.searchcounter.addValue("test");
    }
    async selectcountercheckbox(){
        await this.selectcounter.waitForDisplayed({timeout: 10000});
        // await this.selectcounter.waitForClickable({timeout: 5000});
        await this.selectcounter.click();
    }

    async selectedplancounter(){
        await this.addcounters.waitForDisplayed({timeout: 10000});
        await this.addcounters.click();
    }

    async addselectedcounterplanbtn(){
        await this.addselected.waitForDisplayed({timeout: 10000});
        await this.addselected.click();
    }

    async logoutbtn(){
        await this.logout.waitForDisplayed({timeout: 10000});
        await this.logout.click();
    }

    async logoutbtnpopup(){
        await this.logoutpopup.waitForDisplayed({timeout: 5000});
        await this.locationpop.click();
    }
    // Finalize button

    async finalizebtnclick(){
        await this.finalizebtn.waitForDisplayed({timeout: 10000});
        await this.finalizebtn.click();
    }
    // Map new counter
    async mapnewcounterbtn(){
        await this.mapnewcounter.waitForDisplayed({timeout: 10000});
        await this.mapnewcounter.click()
    }

    async clickgeotag(){
        await this.geotag.waitForDisplayed({timeout: 10000});
        await this.geotag.click();
    }

    async locationpopupallow(){
        await this.locationpop.waitForDisplayed({timeout: 10000});
        await this.locationpop.click();
    }

    async accesslocationpopup(){
        await this.accesslocation.waitForDisplayed({timeout: 20000});
        await this.accesslocation.click();
    }

    async mapselectiongraph(){
        await this.mapselection.waitForDisplayed({timeout: 10000});
        await this.mapnewcounter.click();
    }

    // Current journey 

    get currentjourney(){
        return $('~Current Journey');
    }

    get startvisit(){
        return $('//android.widget.Button[@content-desc="Start Visit" or @content-desc="ongoing"]');
    }

    get popupyesoption(){
        return $('~Yes');
    }

    get addadhoccounter(){
        return $('~Add Ad hoc counters');
    }

    get counterlist(){
        return $('~ABM TRADERS Dealer 11008926');
    }

    get Endcurrentjourney(){
        return $('~End Current Journey')
    }
    async currentjourneybtn(){
        await this.currentjourney.waitForDisplayed({timeout: 10000});
        await this.currentjourney.click();
    }

    async startvisitbtn(){
        await this.startvisit.waitForDisplayed({timeout: 10000});
       
        await this.startvisit.click();
    }

    async popupyes(){
        await this.popupyesoption.waitForDisplayed({timeout: 10000})
        await this.popupyesoption.click();
    }

    async addadhoccounterlink(){
        await this.addadhoccounter.waitForDisplayed({timeout: 10000})
        await this.addadhoccounter.click();
    }

    async counterlistlist(){
        await this.counterlist.waitForDisplayed({timeout: 20000})
        await this.counterlist.click();
    }

    async Endcurrentjourneybutton(){
        await this.Endcurrentjourney.waitForDisplayed({timeout: 10000})
        await this.Endcurrentjourney.click();
    }


    // customer details entering
    get clickoncustomer(){
        return $('~test ashish network Retailer 1000121500');
    }

    async selectcustomer(){
        await this.clickoncustomer.waitForDisplayed({timeout: 10000});
        await expect(this.clickoncustomer).toExist();
        await this.clickoncustomer.click();
    }
}
module.exports = new djpmethods();