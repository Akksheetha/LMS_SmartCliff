@Akksheetha 
Feature: Akksheetha - Action settings

Background:
Given the user launches the LMS application
And the user logs in with valid credentials and navigates to Dashboard
When the user clicks course Management and navigate to course structure Page
And clicks Add course structure action for course 2

@HierarchyAction
Scenario: Enable hierarchy actions
When the user clicks enable actions by clicking more
Then the user can edit the course structure successfully

@DirectActions
Scenario: Enable Direct Actions
When the user clicks Direct actions by clicking more
Then the user can edit the level successfully

@DisableHierarchyAction
Scenario: Disable hierarchy actions
When the user clicks enable actions by clicking more
And the user disables hierarchy actions
Then the hierarchy actions should be disabled

@DirectActionsControls
Scenario: Verify Direct Actions controls are displayed
    When the user clicks direct actions by clicking more
    Then the Direct Actions controls should be displayed

@DisableDirectActions
Scenario: Disable Direct Actions
When the user clicks Direct actions by clicking more
And the user disables Direct actions
Then the level edit control should not be visible