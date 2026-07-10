@Darshan
Feature: Service Management

Background: 
    Given User launches the LMS application
    And User enters a valid email
    And User enters a valid password
    And User clicks on the Sign In button
    And User is on the Dashboard page
    And User clicks on Dynamic Field Settings
    And User is on the Dynamic field settings page

Scenario: Verify the user can successfully add service type
    When the user clicks Addservice button
    And the user enters service name and description
    And the user clicks createservice button
    Then the service should be created

Scenario: Verify the user cannot add exist service type
    When the user clicks Addservice button
    And the user enters already exist service name and description
    And the user clicks createservice button
    Then the service should not be created

Scenario:Verify the user can search the service type
   When the user search the service in search bar
   Then the system should display the services that searched

Scenario: Verify the user can successfully edit service type
    When the user search the service in search bar
    And the user clicks edit icon button in the result of search for service type
    And the user enters service name and description to be edited
    And the user clicks updateservice button
    Then the service should be edited and updated


