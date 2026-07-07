@jeeva
Feature:user working on submodule functionality

Feature Description

        Background:
            Given user launch the application of lms-smartcliff
             When the user login with valid data
              And the user click the course management
              And the user seach the course code of "C3-AT-A-002" which is already created
              And the user click the Add course Structure of the searched course
              And the user click the Action Setting option
              And the user enable the hierarchy Action
    
        
        Scenario: user Add a newSubmodule 1st time
             When the user click the add sub module in the sub module
              And the user enter the title of "HTML"
              And the user enter the Description of "it is a frontend"
              And the user click the skill
              And the user click Add submodule button
             Then the user should see the title in submodule
