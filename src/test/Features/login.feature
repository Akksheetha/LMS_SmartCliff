@Vithya
Feature: Login_VITHYA_07_JULY_2026

Description:
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

  Scenario Outline: Verify login validation for different email and password combinations
    When User enters "<email>" in the email field
    And User enters "<password>" in the password field
    And User clicks on the Sign In button
    Then User should see the "<testCase>" validation message


    Examples:
      | testCase        | email               | password |
      | InvalidEmail     | test@gmail.com      | 123      |
      | InvalidPassword  | testing6@gmail.com   | 1        |
      | BothInvalid      | test@gmail.com      | 12       |
      | EmptyFields      |                     |          |