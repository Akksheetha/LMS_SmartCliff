@Vithya
Feature: Course Filter_VITHYA_08_JULY_2026

  As an LMS user
  I want to filter the courses by category
  So that I can view the courses of a selected category
  Background:
    Given User launches the LMS application
    When User enters a valid email
    And User enters a valid password
    And User clicks on the Sign In button
    And User navigates to the Course Management page
    And User opens the Filters panel

  Scenario Outline: Filter courses by category
    When User selects "<Category>" from the Category dropdown
    Then Only "<Category>" courses should be displayed

    Examples:
      | Category              |
      | Software Development  |
      | Automation Project    |
      | JAVA                  |
      | JavaTest              |
      | testing               |