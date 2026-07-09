import { AddCourseStructurePage } from './../Pages/AddCourseStructurePage';
import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";
import loginData from "../testData/LoginData.json";
const validUser = loginData.validUser;

Given('user launch the application of lms-smartcliff', async function (this:CustomWorld) {
 await this.loginPage.launchApplication(process.env.BASEURL!);
});

When('the user login with valid data', async function (this:CustomWorld) {
    await this.loginPage.enterEmail(validUser.email);
    await this.loginPage.enterPassword(validUser.password);
    await this.loginPage.clickLoginButton();
});

When('the user click the course management', async function (this:CustomWorld) {
    await this.dashboardpage.clickCourseManagement()
});

When('the user seach the course code of {string} which is already created', async function (this:CustomWorld,string) {
    await this.coursemanagepage.fillsearch(string)
});

When('the user click the Add course Structure of the searched course', async function (this:CustomWorld) {
    await this.coursemanagepage.clickAddCourse()
    
});

When('the user click the Action Setting option', async function (this:CustomWorld) {
    await this.addCourseStructure.clickActionSettings()
});

When('the user enable the hierarchy Action', async function (this:CustomWorld) {
    await this.addCourseStructure.clickHierarchy()
    
});


When('the user click the add sub module in the sub module', async function (this:CustomWorld) {
   
    await this.addCourseStructure.addsubmoduleLink()
});

When('the user enter the title of {string}', async function (this:CustomWorld,string) {
   await this.addCourseStructure.fillTitle_sub(string)
});

When('the user enter the Description of {string}', async function (this:CustomWorld,string) {
    await this.addCourseStructure.filldescribe_Sub(string)
});

When('the user click the skill', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubmoduleCheckbox()
    await this.page.waitForTimeout(3000)
});

When('the user click Add submodule button', async function (this:CustomWorld) {
    await this.addCourseStructure.addsubmodule_btn()
    await this.page.waitForTimeout(5000)
    
});

Then('the user should see the title in submodule', async function (this:CustomWorld) {
     //expect(this.addCourseStructure.Textsubmodule()).to('HTML')
});

When('the user click the threeDot_btn', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubmoduleThreeDot()
});

When('the user click the Add btn', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubModuelAdd()
});


When('the user click the edit btn', async function (this:CustomWorld) {
        await this.addCourseStructure.clicksubmoduleEdit()
 });

When('the user click the threeDot_btn in the exsiting submodule', async function (this:CustomWorld) {
            await this.addCourseStructure.clickSubmoduleThreeDot()
         });
       
       
When('the user click the delete btn', async function (this:CustomWorld) {
            await this.addCourseStructure.clickDelete()
        });
       

       
When('the user click the delete btn of confom Delete popup', async function (this:CustomWorld) {
           await this.addCourseStructure.clickDeleteConfom()
    });
       
Then('the user should see the operation compeleted message', async function (this:CustomWorld) {
            let act = await this.addCourseStructure.operationCompledText()
            expect(act).toContain("Operation completed successfully!")
 });

 
       
When('the user click multiple Delete button', async function (this:CustomWorld) {
            await this.addCourseStructure.clickmultipleDelete()
    });
       
When('the user click the sub module button', async function (this:CustomWorld) {
           await this.addCourseStructure.clickSubmoduleToDelete()
    });
       
When('the user click the checkbox of select All', async function (this:CustomWorld) {
           await this.addCourseStructure.clickSelectAllBTN()
    });
       

       
When('the user click the delete button', async function (this:CustomWorld) {
           await this.addCourseStructure.clickDelrtrAll()
});

       
When('the user click the delete button of confomDelete popup', async function (this:CustomWorld) {
           await this.addCourseStructure.clickDeleteAllConfom()
    });