@Akksheetha 
Feature: Akksheetha - Action settings

Background:
Given the user launches the LMS application
And the user logs in with valid credentials and navigates to Dashboard
When the user clicks course Management and navigate to course structure Page
And clicks Add course structure action
| Code        |
| J-BTB-H-001 |

@HierarchyAction
Scenario: Enable hierarchy actions
When the user clicks enable actions by clicking more
Then the user can edit the course structure successfully

@DirectActions
Scenario: Enable Direct Actions
When the user clicks Direct actions by clicking more
Then the user can edit the level successfully