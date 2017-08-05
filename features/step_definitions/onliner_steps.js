var {defineSupportCode} = require('cucumber');
var seleniumWebdriver = require('selenium-webdriver');
var protractor = require('protractor');
var by = new protractor.ProtractorBy();
var EC = new protractor.ProtractorExpectedConditions();


defineSupportCode(function({Given, When, Then}) {

  //Given I am on the Onliner page
  Given('I am on the Onliner page', function() {
    return this.browser.get('https://onliner.by/');
  }); 

  //When I click the link "Каталог" and "Мобильные телефоны"
  When('I click the link {stringInDoubleQuotes}', function (text) {
    return this.browser.element(by.linkText(text)).click();   
  });

  //Then title should be "Каталог Onliner.by", "Мобильный телефон купить в Минске"
  Then('title should be {stringInDoubleQuotes}', function (pageTitle) {
    return this.browser.getTitle()
      .then((title)=>{
        return title===pageTitle;
      })  
  });


  Then('I set filters {stringInDoubleQuotes} and {stringInDoubleQuotes} and {stringInDoubleQuotes}', function(model,year2016,year2015){  
     model=this.browser.element.all(by.cssContainingText('.schema-filter__checkbox-text','Apple')).first();
     year2016=this.browser.element.all(by.cssContainingText('.schema-filter__checkbox-text','2016')).first();
     year2015=this.browser.element.all(by.cssContainingText('.schema-filter__checkbox-text','2015')).first();

    return model.click().
      then(()=>{
        this.browser.executeScript("arguments[0].scrollIntoView();", year2016);
        return year2016.click();
      })
      .then(()=>{
        this.browser.executeScript("arguments[0].scrollIntoView();", year2015);
        return year2015.click();
      })      
  });


  //Then I open page with the phone Iphone SE
  Then('I open page with iPhone SE {stringInDoubleQuotes}', function (linkPhone) {    
    var linkPhone=this.browser.element.all(by.css('a[href="https://catalog.onliner.by/mobile/apple/iphonese16sg"]')).first();    
    return this.browser.wait(EC.elementToBeClickable(linkPhone),10000)
    .then(()=>{
        return linkPhone.click();
      });   
    
  });

  //Then I add phone Iphone SE for compare
  Then('I click on checkbox {stringInDoubleQuotes}', function (compare) {
    var compare=this.browser.element.all(by.css('span.catalog-masthead-controls__input')).first();
    this.browser.wait(EC.elementToBeClickable(compare),10000)
      .then(()=>{
        return compare.click();
      })
    
  });

  //Then I return on the previous page
  Then('I return on the previous page', function () {    
    return this.browser.navigate().back();
  });

  //Then I open page with the phone Iphone 6s
  Then('I open page with iPhone 6s {stringInDoubleQuotes}', function (linkPhone) {  
    var linkPhone=this.browser.element.all(by.css('a[href="https://catalog.onliner.by/mobile/apple/iphone6s16gbs"]')).first();    
    this.browser.wait(EC.elementToBeClickable(linkPhone),10000)
    .then(()=>{
        return linkPhone.click();
      });       
    
  });


  //Then I click button for compare two items
  Then('I click button for compare two items', function () {    
     return this.browser.element(by.css('a.compare-button__sub.compare-button__sub_main')).click();    
  });
  
  //Then I count the number of advantages
  Then('I calculate the number of advantages', function () {  
    var numberAdvantagesPhoneSE=this.browser.element.all(by.css('td:nth-child(3).product-table__cell_accent')).count();
    var numberAdvantagesphone6s=this.browser.element.all(by.css('td:nth-child(4).product-table__cell_accent')).count();

    if(numberAdvantagesphone6s>numberAdvantagesPhoneSE){
      return console.log("Apple iPhone 6s the best phone");
    }
    else {
      return console.log("Apple iPhone SE the best phone");
    }  

  }); 

  //Then I click "Очистить сравнение"
  Then('I click button {stringInDoubleQuotes}', function (text) { 
    return this.browser.element.all(by.linkText(text)).
      then(function(elements){
        return elements[0].click();
      });     
  });
  
  
});



//.\node_modules\.bin\cucumber-js


