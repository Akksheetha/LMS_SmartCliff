@Darshan
Feature: DarshanRaj-08_03_2026-Service_Management

Background: 
    Given User launches the LMS application
    And User enters a valid email
    And User enters a valid password
    And User clicks on the Sign In button
    And User is on the Dashboard page
    And User clicks on Dynamic Field Settings
    And User is on the Dynamic field settings page

Scenario Outline: Verify the user can add a service type
    When the user clicks Addservice button
    And the user enters service name "<type>" "<name>" and description "<description>" 
    And the user clicks createservice button
    Then the service should see status "<type>" "<message>"

Examples:
    |type   |name           |description            |message                            |
    |valid  |JavaScript     |This is Testing purpose|Service created successfully       |
    |valid  |JavaScript.js  |This is Testing purpose|Service created successfully       |
    |invalid|JavaScript     |This is Testing purpose|Request failed with status code 400|

Scenario:Verify the user can search the service type
   When the user search the service in search bar
   Then the system should display the services that searched

Scenario: Verify the user can successfully edit service type
    When the user search the service in search bar
    And the user clicks edit icon button in the result of search for service type
    And the user enters service name and description to be edited
    And the user clicks updateservice button
    Then the service should be edited and updated


