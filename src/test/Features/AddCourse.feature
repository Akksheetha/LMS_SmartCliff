@Janani
Feature: Add Course 

  Background:
    Given User launches the LMS application
    When User enters a valid email
    And User enters a valid password
    And User clicks on the Sign In button
    And user clicks the course management

  @AddCourse 
  Scenario: Verify the user can add a course

    When user clicks Add Course button
    Then the "Create New Course Setup" modal should be displayed

    When user fills the Course Basic Configuration step using test data "validCourse"
    And user clicks the Next button

    Then the "Course Hierarchy and Layout" step should be displayed

    When user fills the Course Hierarchy and Layout step using test data "validCourse"

    And user enables the resource types using test data "validCourse"

    And user selects the Skill Set using test data "validCourse"

    And user clicks the Preview and Create button

    Then the Course Layout Preview should match the expected data for "validCourse"

    When user clicks the Save Course Layout button

    Then the course should be created successfully

    @AddCourse
  Scenario Outline: Verify validation errors when mandatory fields are not filled
    When user clicks Add Course button
    Then the "Create New Course Setup" modal should be displayed

    When user selects only the Course Client "<courseClient>"
    And user clicks the Next button

    Then the following validation errors should be displayed
      | Please select a service type    |
      | Please select a service model   |
      | Please select a course category |
      | Please enter a course name      |

    Examples:
      | courseClient |
      | rfe          |

