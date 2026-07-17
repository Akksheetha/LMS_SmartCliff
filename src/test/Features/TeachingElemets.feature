@jeeva
Feature: JeevaPranesh_08_JULY_2026_Teaching Element functionality__updated_09_July_2026

Feature Description
        Background:
            Given user launch the application of lms-smartcliff
             When the user login with valid data
              And the user click the course management
              And the user seach the course code , which is already created
              And the user click the Add course Structure of the searched course
          
            
        Scenario:the user select one Teaching Element
             When the user click the dropdown of teaching element
              And the user click the chechbox of "<element name>"
             Then the user should see the "<element name>" column  in the course Table

        Examples:
                  | element name          |
                  | All Teaching Elements |
                  | I Do Activities       |
                  | We Do Activities      |
                  | You Do Activities     |
