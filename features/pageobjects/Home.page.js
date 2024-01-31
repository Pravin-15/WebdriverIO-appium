const { $ } = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get listApp(){
        return $('~App');
    }
 
    get actionBar(){
        return $('~Action Bar');
    }
 
    get fragment(){
        return $('//*[@content-desc="Fragment"]');
    }
 
    get alertDialog(){
        return $('//*[@content-desc="Alert Dialog"]');
    }
 
    get show(){
        return $('//*[@content-desc="Show"]');
    }
 
    get popupMessage(){
        return $('//*[@resource-id="android:id/alertTitle"]');
    }
 
    get popupOkBtn(){
        return $('//*[@resource-id="android:id/button1"]');
    }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickMainMenu () {
        await this.listApp.click()
    }

    async clickSubMenu(){

        await this.fragment.click()
    }

    async clickAlertDialog(){

        await this.alertDialog.click()
    }

    async clickBtn(){

        await this.show.click()
    }

    async validateMsg(){

        await this.popupMessage.click()
      
    }

    async clickOk(){

        await this.popupOkBtn.click()
        await browser.pause(2000);
    }

    // /**
    //  * overwrite specific options to adapt it to page object
    //  */
    // open () {
    //     return super.open('login');
      
    // }
}

module.exports = new HomePage();
