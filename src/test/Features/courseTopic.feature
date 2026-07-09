@Akksheetha
Feature: Akksheetha-7th july-Course Topic Management


Background:
Given the user launches the LMS application
And the user logs in with valid credentials and navigates to Dashboard
When the user clicks course Management and navigate to course structure Page
And clicks Add course structure action
| Code       |
| J-AT-A-005 |

@MandatoryfieldCheck
Scenario: Verify mandatory Title field
When the user clicks Add Topic by clicking enable actions
And the user clicks save button without entering Title
Then the error message should be displayed successfully

@AddingTopic
Scenario: Add a Topic with mandatory details
When the user clicks Add Topic by clicking enable actions
And enters the topic details
| Title | Description |
| Custom World | Custom World usage |
And clicks Save button
Then the topic should be created successfully

@TopicSkillSet
Scenario: Topic with Skill Set configuration
When the user clicks Add Topic in a module by clicking enable actions
And enters the topic details
    | Title          | Description |
    | Annotations    | basics |
And the user selects the Skill Set
And clicks Save button
Then the topic with Skill Set should be created successfully

@PreviewTable
Scenario: Preview the topic created
When then user clicks the preview option
Then the created topics should be displayed

@DeleteTopic
Scenario: Delete the topic created
And the user clicks the three dots and clicks the delete option
Then the topic should be deleted successfully