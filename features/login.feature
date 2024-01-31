Feature: Sample Demo app in Android

  Scenario: As a user, I should navigate to API demo screen
    Given I am on the Home page
    When I click on the main menu and navigate to App Page
    And I select the fragment submenu
    And I select the Alert Dialog
    Then validate the text present in the page
    And I select the OK button
  