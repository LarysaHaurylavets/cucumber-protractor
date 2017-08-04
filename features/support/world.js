require('chromedriver')
var protractor = require('protractor');

var seleniumWebdriver = require('selenium-webdriver');
var {defineSupportCode} = require('cucumber');
var plug=require('protractor/built/plugins.js');

function CustomWorld() {
	this.browser = new protractor.ProtractorBrowser(
		 new seleniumWebdriver.Builder()
    .forBrowser('chrome')
    .build());
    this.browser.plugins_=new plug.Plugins({});

    this.browser.ignoreSynchronization = true;
    //this.browser.waitForAngularEnabled(false);
   
    this.browser.driver.manage().window().maximize(); 
  
}

defineSupportCode(function({setWorldConstructor}) {
  setWorldConstructor(CustomWorld)
})

defineSupportCode(function({setDefaultTimeout}) {
  setDefaultTimeout(60*1000);
})


