const assert = require('assert')
// const chalk = require('chalk')
class commonmethods{

    // Any value from dropdown
    /**
         * Asynchronously selects a value from a dropdown element
         * @param Element dropdownElement - The dropdown element to select a value from
         * @param value - The value to be selected in the dropdown
         * @param {string} [name] - Optional. The name of the dropdown element (default is "element")
         * @param {number} [timeout] - Optional. The timeout for waiting for element existence and display (default is 10000 milliseconds)
         */
    async selectDropdown(dropdownElement, value, name="element", timeout=30000){
        try{
            await dropdownElement.waitForExist({timeout:timeout})
            await dropdownElement.waitForDisplayed({ timeout: timeout });
            await dropdownElement.selectByVisibleText(value)
        }catch(error){
            // logger.error(`Error occurred in ${name}, ${error}`);
            // assert.fail(`Error occurred in ${name}, ${error}`);
        }
    }

    //Waitfor display and click 
    /**
         * Asynchronously waits for an element to be displayed and clicks on it
         * @param Element elementToWaitForClickable - The element to wait for and click on
         * @param {string} [name] - Optional. The name of the element (default is "element")
         * @param {number} [timeout] - Optional. The timeout for waiting for element existence and display (default is 10000 milliseconds)
         */
    async waitForDisplayedAndClick(elementToWaitForClickable, name="element", timeout=50000) {
        try {
            await elementToWaitForClickable.waitForExist({timeout:timeout})
            await elementToWaitForClickable.waitForDisplayed({ timeout: timeout });
            await elementToWaitForClickable.click();
        } catch (error) {
            // logger.error(`Error occurred in ${name}, ${error}`);
            assert.fail(`Error occurred in ${name}, ${error}`);
        }
        
    }

    //Waitfor setvalue mainly for web application 
    /**
         * Asynchronously waits for an element to be displayed and clicks on it
         * @param Element elementToWaitForClickable - The element to wait for and click on
         * @param {string} [name] - Optional. The name of the element (default is "element")
         * @param {number} [timeout] - Optional. The timeout for waiting for element existence and display (default is 10000 milliseconds)
         */
    async waitForDisplayedAndSetvalue(elementToWaitForSetvalue,value, name="element", timeout=50000) {
        try {
            // await elementToWaitForSetvalue.waitForExist({timeout:timeout})
            // await elementToWaitForSetvalue.waitForDisplayed({ timeout: timeout });
            await elementToWaitForSetvalue.addValue(value);
        } catch (error) {
            // logger.error(`Error occurred in ${name}, ${error}`);
            // assert.fail(`Error occurred in ${name}, ${error}`);
        }
        
    }

    // wait setvalue and click
      /**
         * Asynchronously waits for an element to be displayed and clicks on it
         * @param Element elementToWaitForClickable - The element to wait for and click on
         * @param {string} [name] - Optional. The name of the element (default is "element")
         * @param {number} [timeout] - Optional. The timeout for waiting for element existence and display (default is 10000 milliseconds)
         */
      async waitforDsiplayClickAndSet(elementToWaitForSetAndClick,value, name="element", timeout=50000) {
        try {
            await elementToWaitForSetAndClick.waitForExist({timeout:timeout})
            await elementToWaitForSetAndClick.waitForDisplayed({ timeout: timeout });
            await this.waitForDisplayedAndClick(elementToWaitForSetAndClick);
            await this.waitForDisplayedAndSetvalue(elementToWaitForSetAndClick,value);
        } catch (error) {
            // logger.error(`Error occurred in ${name}, ${error}`);
            // assert.fail(`Error occurred in ${name}, ${error}`);
        }
        
    }

    async  SelectingTextBasedOnValue(xpath, value, timeout=50000, name="day") {
        try {
            const elements = await $$(xpath);
    
            for (let i = 0; i < elements.length; i++) {
                const element = await elements[i];
    
                await $(element).waitForExist({ timeout: timeout });
                await $(element).waitForDisplayed({ timeout: timeout });
    
                // const value = await $(element).isExisting() && await $(element).isDisplayed();
                const elementText = await $(element).getText();
                if (elementText === value) { 
                    const elementvalue = await $(element);
                    console.log(await elementvalue.getText())
                    await elementvalue.click();
                    break;
                }else{
                    return;
                }
            }
        } catch (error) {
            // logger.error(`Error occurred in ${name}, ${error}`);
            // assert.fail(`Error occurred in ${name}, ${error}`);
        }
    }


    async upload(element, pathofUploadFile, name = "upload", timeout = 50000) {
        try {
            await element.waitForExist({ timeout: timeout });
            await element.waitForDisplayed({ timeout: timeout });
    
            // Click the element to open the file picker
            await element.click();
    
            // Assuming pathofUploadFile is the absolute path on the device
            if (driver.isAndroid) {
                // Interact with the native file picker
                await driver.pause(2000); // Give time for the file picker to open
    
                // Depending on the Android version, the file picker might differ
                const filePickerSelector = 'android=new UiSelector().resourceId("com.android.documentsui:id/toolbar")';
                await driver.$(filePickerSelector).waitForDisplayed({ timeout: timeout });
    
                // Navigate to the folder (e.g., Downloads) and select the file
                const downloadsFolder = await driver.$('android=new UiSelector().textContains("Download")');
                await downloadsFolder.click();
    
                const imageFileName = pathofUploadFile.split('/').pop();
                const imageFile = await driver.$(`android=new UiSelector().text("${imageFileName}")`);
                await imageFile.click();
                
                // Confirm the selection if needed (depends on the app implementation)
                const confirmButton = await driver.$('android=new UiSelector().text("OK")');
                if (await confirmButton.isDisplayed()) {
                    await confirmButton.click();
                }
    
            } else if (driver.isIOS) {
                // For iOS, implement file picker interaction accordingly
                console.log('iOS file upload not implemented in this example.');
            }
        } catch (error) {
            assert.fail(`Error occurred in ${name}, ${error}`);
        }
    }    

    // async compareText(elementContainsText, expectedText, name="comparetext", timeout = standard_timeout){
       
    //     try {
    //         await elementContainsText.waitForExist({timeout:timeout})
    //         await elementContainsText.waitForDisplayed({ timeout: timeout });
    //         var elementText = await elementContainsText.getText()
    //         if (elementText === expectedText){
    //             console.log(`\n${chalk.green.bold.underline('Actual text matches expected text.')}\n`)
    //         }else{
    //             // logger.debug(chalk.bgRed(`${expectedText} does not match the expected value`))
    //             console.log(`\n\t${chalk.bgRed("actual text")} = ${chalk.red.bold(elementText)} \n ${chalk.bgGreen("expected text")} = ${chalk.green.bold(expectedText)}\n`);
    //             console.log(`${chalk.red.bold.underline('Actual text does not matches expected text.')}\n`)
    //             assert.fail(`${chalk.red.underline('actual text does not match expected text')}`)
    //             // console.log(`${chalk.bgRed("actual text")} = ${chalk.bgGreen("expected text")}}`);
    //         }
    //     } catch (error) {
    //         // logger.error(`Error occurred in ${name}, ${error}`);
    //         assert.fail(`Error occurred in ${name}, ${error}`);
    //     }
    // }

    async  dayPick(day_element, day, timeout=50000, name="day") {
        try {
       
            for (let i = 0; i < await day_element.length; i++) {
       
                await day_element[i].waitForExist({ timeout: timeout });
                await day_element[i].waitForDisplayed({ timeout: timeout });
                const element = await day_element[i];
                const elementText = await element.getText();
                    if (Number(elementText)===Number(day)) {
                        await element.click();
                        break;
                    }else{
                        continue
                    }
            }
        } catch (error) {
            // logger.error(`Error occurred in ${name}, ${error}`);
            assert.fail(`Error occurred in ${name}, ${error}`);
        }
    }

}
module.exports=new commonmethods();
