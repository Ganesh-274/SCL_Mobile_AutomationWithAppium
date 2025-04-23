const assert = require('assert');
class login{
    get loginasadmin(){
        return $('~LogIn as admin');
    }
    get username(){
        return $$('android.widget.EditText')[0];
    }
    get password(){
        return $$('android.widget.EditText')[1];
    }
    get clickloginbtn(){
        return $('~Log In');
    }
    get emailerrormsg(){
        return $('//android.view.View[@content-desc="Please enter valid email Id"]');
    }

    get invalidusernamepassword(){
        return $('//android.widget.ImageView[@content-desc="Invalid Username/Password If you have forgotten your password. Please try forgot password to reset your password."]')
    }
    get clickonarroppopup(){
        return $('android.widget.ImageView')
    }
    async selectloginasadmin(){
        await expect(this.loginasadmin).toBeExisting('LogIn as admin');
        await this.loginasadmin.click();
    }
    get menubars(){
        return $('android.widget.Button')
    }

    get logoutbutton(){
        return $('~logoutButton');
    }
    get logoutbtnpopup(){
        return $('~logoutYesButton');
    }
    get passworderrormsg(){
        return $('~Please enter password.');
    }

    get usernameerror(){
        return $('~Please enter email Id');
    }
    async validloginAsAdmin(){
        
        await this.username.waitForDisplayed({timeout: 20000});
        await this.username.click();
        await this.username.setValue('anjan.tah@shreecement.com');
        await this.username.waitForDisplayed({timeout: 20000});
        await this.password.click();
        await this.password.setValue('1234');
    }
    async clickonloginbutton(){
        await this.clickloginbtn.click();
    }
    async logout(){
        await this.menubars.waitForDisplayed({timeout: 20000});
        await this.menubars.click();
        await this.logoutbutton.waitForDisplayed({timeout: 30000});
        await this.logoutbutton.click();
        await this.logoutbtnpopup.waitForDisplayed({timeout: 10000});
        await this.logoutbtnpopup.click();
    }
    async invalidusername(){
        await this.username.waitForDisplayed({timeout: 5000});
        await this.username.click();
        await this.username.setValue('Test@gmail.com');
        // await this.username.clearValue();
    }
    async cleasrusername(){
        await this.username.clearValue();
    }
    async clearpassword(){
        await this.password.clearValue();
    }
    async invalidpassword(){
        await this.password.waitForDisplayed({timeout: 5000});
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)');
        await this.password.click();
        await this.password.setValue('1234');  
        // await this.password.clearValue();
    }

    async passworderror(){
        const actualText = "Please enter password.";
        const expectedText = "Please enter password.";
        assert.strictEqual(actualText, expectedText, `Expected text "${expectedText}" but got "${actualText}"`)
    }

    async usererror(){
        const actualText = "Please enter email Id";
        const expectedText = "Please enter email Id";
        assert.strictEqual(actualText, expectedText, `Expected text "${expectedText}" but got "${actualText}"`)
    }

    async invalidpoupvalidation(){
        await expect(this.clickonarroppopup).toBeExisting();
        await this.clickonarroppopup.click();
        console.log(this.clickonarroppopup)
    }
}
module.exports = new login();