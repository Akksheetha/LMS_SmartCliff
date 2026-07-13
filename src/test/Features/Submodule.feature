#@jeeva
Feature:JeevaPranesh_07_JULY_2026_submodule functionality__updated_09_July_2026

Feature Description

        Background:
            Given user launch the application of lms-smartcliff
             When the user login with valid data
              And the user click the course management
              And the user seach the course code , which is already created
              And the user click the Add course Structure of the searched course
              And the user click the Action Setting option
              

        
        Scenario: user Add a newSubmodule 1st time
             When the user enable the hierarchy Action
              And the user click the add sub module in the sub module
              And the user enter the title from csv row 0
              And the user enter the Description from csv row 0
              And the user click the skill
              And the user click Add submodule button
             Then the user should see the title in submodule

        Scenario:user add multiple submodule
             When the user enable the hierarchy Action
              And the user click the threeDot_btn
              And the user click the Add btn
              And the user enter the title from csv row 1
              And the user enter the Description from csv row 1
              And the user click the skill
              And the user click Add submodule button
             Then the user should see the title in submodule

        Scenario Outline:user edit the existing submodule
             When the user enable the hierarchy Action
              And the user click the threeDot_btn
              And the user click the edit btn
              And the user enter the title of "<title>"
              And the user enter the Description of "<describe>"
              And the user click Add submodule button
             Then the user should see the title in submodule

        Examples:
                  | title      | describe                 |
                  | Python     | Python is Dynamic typed  |
                  | Typescript | Strictlt typed           |
                  | Java       | Object Oriented language |

        Scenario:user delete the single existing submodule
             When the user enable the hierarchy Action
              And the user click the threeDot_btn in the exsiting submodule
              And the user click the delete btn
              And the user click the delete btn of confom Delete popup
             Then the user should see the operation compeleted message

        Scenario: Scenario name : user able to delete multiple submodule
             When the user click multiple Delete button
              And the user click the sub module button
              And the user click the checkbox of select All
              And the user click the delete button
              And the user click the delete button of confomDelete popup
             Then the user should see the operation compeleted message

        
        Scenario: user cancel the save operation while submodule is saving

             When the user enable the hierarchy Action
              And the user click the threeDot_btn
              And the user click the Add btn
              And the user enter the title from csv row 0
              And the user enter the Description from csv row 0
              And the user click the skill
              And the user click save and immediately click cancel
             Then the submodule should able to cancel the process
