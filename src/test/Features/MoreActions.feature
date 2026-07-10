@Akksheetha @Action
Feature: Akksheetha - Action settings

Background:
Given the user launches the LMS application
And the user logs in with valid credentials and navigates to Dashboard
When the user clicks course Management and navigate to course structure Page
And clicks Add course structure action
| Code       |
| J-TM-T-011 |

Scenario: Enable hierarchy actions
When the user clicks enable actions by clicking more
Then the user can edit the course structure successfully
