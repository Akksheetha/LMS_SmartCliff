@PrintFile
Feature: Print File

  Background:
    Given User launches the LMS application
    And User enters a valid email
    And User enters a valid password
    And User clicks on the Sign In button
    And User is on the Dashboard page
    And User clicks on Course Management
    And User is on the Course Management page
    And User enter javascript in search bar
    And User clicks on Add Course Structure in javascript Course
    And User clicks on Print Button

  Scenario: Verify the user can successfully print the excel file
    When User clicks on Excel Button
    Then excel file should download