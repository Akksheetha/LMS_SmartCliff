Feature: Search Course

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
                  | SearchType  | SearchKeyword | ExpectedCourseName |
                  | Course Name | pytest        | pytest             |
                  | Course Code | J-B-TAD-006   | pytest             |
                  

  @Search @Negative @Janani
  Scenario: Verify the user cannot retrieve any records when an invalid keyword is entered
    When user enters "xyz_invalid_999" in the search box
    Then no course records should be displayed

   
