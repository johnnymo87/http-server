Feature: Basic requirements for a functioning server
  As a browser
  So that I can access info from the server
  I want the server to be on

  Scenario: Root
    Given I visit "/"
    Then I should see "You are on the homepage."