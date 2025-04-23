const { click } = require("appium-uiautomator2-driver/build/lib/commands/element");
const login = require('../screenobject/android/login.js')

describe('Login Scanerios', async()=>{

    it('Login with Valid User name and password',async()=>{

        // Enter the Value User name and password
           console.log("=========== Login Starts Here =========")
           await login.selectloginasadmin();
           await login.validloginAsAdmin();
           await login.clickonloginbutton(); 
           await login.logout();
           console.log("=========== Login ends here =========")

    })

    it('Login with Invalid User name and password',async()=>{

        // Enter the Value User name and password
           console.log("=========== Login Starts Here =========")
           await login.selectloginasadmin();
           await login.invalidusername();
           await login.invalidpassword();
           await login.clickonloginbutton(); 
           await login.invalidpoupvalidation();
           await login.cleasrusername();
           await login.clearpassword();
           console.log("=========== Login ends here =========")
    })

    it('Username entered but password not entered', async()=>{
        await login.invalidusername();
        await login.clickonloginbutton();
        await login.passworderror();
    })

    it('Username not entered but password is entered', async()=>{
        // await login.selectloginasadmin();
        await login.cleasrusername();
        await login.clearpassword();
        await login.invalidpassword();
        await login.clickonloginbutton();
        await login.passworderror();
    })

})

