@Vithya
Feature:Vithya_21_AUG_2026_Add_module functionality

Feature Description

        Background:
            Given user launch the application of lms-smartcliff
             When the user login with valid data
              And the user click the course management
              And the user seach the course code , which is already created
              And the user click the Add course Structure of the searched course


        Scenario: user Add a new Module 1st time
             When the user click the add module icon
              And the user enter the module title from csv row 0
              And the user enter the module Description from csv row 0
              And the user click the module skill
              And the user click Add Module button
             Then the user should see the title in module

        Scenario:user add multiple module
             When the user click the module threeDot_btn
              And the user click the module Add btn
              And the user enter the module title from csv row 1
              And the user enter the module Description from csv row 1
              And the user click the module skill
              And the user click Add Module button
             Then the user should see the title in module

        Scenario Outline:user edit the existing module
             When the user click the module threeDot_btn
              And the user click the module edit btn
              And the user enter the module title of "<title>"
              And the user enter the module Description of "<describe>"
              And the user click Add Module button
             Then the user should see the title in module

        Examples:
                  | title      | describe                 |
                  | Python     | Python is Dynamic typed  |
                  | Typescript | Strictlt typed           |
                  | Java       | Object Oriented language |

        Scenario:user delete the single existing module
             When the user click the module threeDot_btn in the exsiting module
              And the user click the module delete btn
              And the user click the delete btn of confom Delete popup
             Then the user should see the operation compeleted message

        Scenario: Scenario name : user able to delete multiple module
             When the user click multiple Delete button
              And the user click the module button
              And the user click the checkbox of select All
              And the user click the delete button
              And the user click the delete button of confomDelete popup
             Then the user should see the operation compeleted message


        Scenario: user cancel the save operation while module is saving

             When the user click the add module icon
              And the user enter the module title from csv row 0
              And the user enter the module Description from csv row 0
              And the user click the module skill
              And the user click save and immediately click cancel
             Then the module should able to cancel the process
