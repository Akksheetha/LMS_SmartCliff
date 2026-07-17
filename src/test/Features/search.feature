@Janani
Feature: Janani_Sri_07-07-2026_Search_Course

  Background:
    Given User launches the LMS application
     When User enters a valid email
    And User enters a valid password
    And User clicks on the Sign In button
    When user clicks the course management 
  @Search @Positive @Janani
  Scenario Outline: Verify the user can search for a Course using <SearchType>

And user enters "<SearchKeyword>" in the search box
Then the course "<ExpectedCourseName>" should be listed in the Course Structures table

Examples:
| SearchType   | SearchKeyword     | ExpectedCourseName |
| Course code Valid  | J-BTI-S-003    | Python testing  |
| Invalid Name | xyz_invalid_999   | No Records Found   |
   @Search @Defect @Janani
  Scenario: Verify search results are displayed correctly when searched from the last pagination page
    When user navigates to the last page of Course Structures
    And user enters "jamocha" in the search box
    Then the course results for "jamocha" should be displayed in the Course Structures table