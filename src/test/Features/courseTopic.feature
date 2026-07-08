@Akksheetha
Feature: Akksheetha-7th july-Course Topic Management


Background:
Given the user launches the LMS application
And the user logs in with valid credentials and navigates to Dashboard
When the user clicks course Management and navigate to course structure Page
And clicks Add course structure action
| Code       |
| J-AT-A-005 |
When the user clicks Add Topic by clicking enable actions

@MandatoryfieldCheck
Scenario: Verify mandatory Title field
And the user clicks save button without entering Title
Then the error message should be displayed successfully

@AddingTopic
Scenario: Add a Topic with mandatory details
And enters the topic details
| Title | Description |
| Custom World | Custom World usage |
And clicks Save button
Then the topic should be created successfully