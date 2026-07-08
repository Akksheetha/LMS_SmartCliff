Feature: Manage Level

        Background:
            Given User launches the LMS application
              And User enters a valid email
              And User enters a valid password
              And User clicks on the Sign In button
              And User clicks on Course Management
              And User is on the Course Management page
              And User clicks on Add Course Structure in Playwright Course
              And User clicks on Action Settings
              And User enables Direct Actions
              And User clicks on the three-dot menu

        Scenario: Verify the user can successfully add a module level
             When User clicks the Add button
              And User selects the level option
              And User clicks the Add button
             Then User should see a success message