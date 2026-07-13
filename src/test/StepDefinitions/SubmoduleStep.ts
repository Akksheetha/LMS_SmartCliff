
import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";
import loginData from "../testData/LoginData.json";
import { readCsvData } from "../Utilities/csvReader";

const validUser = loginData.validUser;
const submoduleCsv: any[] = readCsvData('submodule.csv');

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

 When('the user seach the course code , which is already created', async function (this:CustomWorld) {
    await this.coursemanagepage.fillsearch(submoduleCsv[0].code)
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

 When('the user enter the title', async function (this:CustomWorld) {
   await this.addCourseStructure.fillTitle_sub(submoduleCsv[0].title)
});

When('the user enter the Description', async function (this:CustomWorld) {
    await this.addCourseStructure.filldescribe_Sub(submoduleCsv[0].description)
});

When('the user click the skill', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubmoduleCheckbox()
    await this.page.waitForTimeout(3000)
});

When('the user click Add submodule button', async function (this:CustomWorld) {
    await this.addCourseStructure.addsubmodule_btn()
    await this.page.waitForTimeout(5000)
    
});

Then('the user should see the title in submodule', async function (this: CustomWorld) {
   let act = await this.addCourseStructure.operationCompledText()
    expect(act).toContain("Operation completed successfully!")
});

When('the user enter the title of {string}', async function (this: CustomWorld, string) {
  await this.addCourseStructure.fillTitle_sub(string)
});
When('the user enter the Description of {string}', async function (this: CustomWorld, string) {
  
    await this.addCourseStructure.filldescribe_Sub(string)

});

When('the user enter the title from csv row {int}', async function (this: CustomWorld, rowIndex) {
    await this.addCourseStructure.fillTitle_sub(submoduleCsv[rowIndex].title)
});

When('the user enter the Description from csv row {int}', async function (this: CustomWorld, rowIndex) {
    await this.addCourseStructure.filldescribe_Sub(submoduleCsv[rowIndex].description)
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

When('the user click save and immediately click cancel', async function (this: CustomWorld) {

    await this.addCourseStructure.clickSaveAndCancel();

});

Then('the submodule should not be added in the table', async function (this: CustomWorld) {

    const isPresent = await this.addCourseStructure.verifySubmoduleNotAdded(
        submoduleCsv[0].title
    );
    expect(isPresent).toBeFalsy();

});

Then('the submodule should able to cancel the process', async function (this: CustomWorld) {

    const isPresent = await this.addCourseStructure.verifySubmoduleNotAdded(
        submoduleCsv[0].title
    );
    expect(isPresent).toBeFalsy();

});
