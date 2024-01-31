const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')

const HomePage = require('../pageobjects/Home.page');
const SecurePage = require('../pageobjects/secure.page');
const { Home } = require('wd/lib/special-keys');

Given(/^I am on the Home page$/, async () => {
   console.log('App launched successfully')
   
});

When(/^I click on the main menu and navigate to App Page$/, async () => {
  
   
    await HomePage.clickMainMenu();
    
})

When(/^I select the fragment submenu$/, async ()  => {
  
    await HomePage.clickSubMenu();
})

When(/^I select the Alert Dialog$/, async () => {
    await HomePage.clickAlertDialog();
    await HomePage.clickBtn();
})

Then('validate the text present in the page', async () => {
    await HomePage.validateMsg();
 
})

Then('I select the OK button', async () => {
    await HomePage.clickOk();
})



