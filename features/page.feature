Feature: To search phones by Onliner  

  Scenario: Searching iphone
    Given I am on the Onliner page
    When I click the link "Каталог"
    Then title should be "Каталог Onliner.by"
    When I click the link "Мобильные телефоны"
    Then title should be "Мобильный телефон купить в Минске"
    Then I set filters "Apple" and "2016" and "2015"   
    

    Then I open page with iPhone SE "Apple iPhone SE 16GB Space Gray"
    Then I click on checkbox "Добавить к сравнению"
    Then I return on the previous page

    Then I open page with iPhone 6s "Apple iPhone 6s 16GB Silver"
    Then I click on checkbox "Добавить к сравнению"
    Then title should be "Смартфон Apple iPhone 6s 16GB Silver купить в Минске"
    
    Then I click button for compare two items
    Then title should be "Сравнить Apple iPhone SE 16GB Space Gray, Apple iPhone 6s 16GB Silver"
    Then I calculate the number of advantages
    Then I click button "Очистить сравнение"







    

   

    

    