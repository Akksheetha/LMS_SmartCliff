#@jeeva

Feature:JeevaPranesh_10_JULY_2026_course modificationEdit and Delete-updated_11_July_2026


Feature Description
        Background:
            Given user launch the application of lms-smartcliff
             When the user login with valid data
              And the user click the course management
              And the user seach the course code for edit from csv

        Scenario:user able to Edit the Course Name of already existing course name
             When the user click the threeDont of exsisting course
              And the user click the Edit button
              And the user click the next button
              And the user click the previewAndUpdatebutton
              And the user click the Save courseLayout button
             Then the user should able to seen the edited course name

        Scenario:user able to change the course name to custom name
             When the user click the threeDont of exsisting course
              And the user click the Edit button
              And the user select Others Custom Name from course name dropdown
              And the user type custom course name from csv
              And the user click the next button
              And the user click the previewAndUpdatebutton
              And the user click the Save courseLayout button
             Then the user should able to see the custom course name from csv
