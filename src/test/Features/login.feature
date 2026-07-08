@Vithya
Feature: Login_VITHYA_07_JULY_2026

  As a user
  I want to login to the LMS application
  So that I can access the dashboard

  Background:
    Given User launches the LMS application

  Scenario: Verify login with a valid email and valid password
    When User enters a valid email
    And User enters a valid password
    And User clicks on the Sign In button
    Then User should be see the Learning Hub Heading
  
   Scenario: Verify login with an invalid email and a valid password
    When User enters an invalid email
    And User enters a valid password
    And User clicks on the Sign In button
    Then User should see the email error message


  Scenario: Verify login with an empty email and password field
    When User leaves the email field empty
    And User leaves the password field empty
    And User clicks on the Sign In button
    Then User should see the required field validation message

  Scenario: Verify login with an invalid email and an incorrect password
    When User enters an invalid email
    And User enters an incorrect password
    And User clicks on the Sign In button
    Then User should see the email error message