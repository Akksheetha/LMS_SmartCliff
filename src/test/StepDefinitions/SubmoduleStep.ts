import { Given,When,Then } from "@cucumber/cucumber";
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
    await this.courseStructure.clickCourseStructureIcon()
});

When('the user seach the course code of {string} which is already created', async function (this:CustomWorld,string) {
    await this.courseStructure.fillsearch(string)
});

When('the user click the Add course Structure of the searched course', async function (this:CustomWorld) {
    await this.courseStructure.clickAddCourse()
    console.log("clicked the addcourse structure")
});

When('the user click the Action Setting option', async function (this:CustomWorld) {
    await this.addCourseStructure.clickActionSetting()
});

When('the user enable the hierarchy Action', async function (this:CustomWorld) {
    await this.addCourseStructure.clickHierarchy()
    
});


When('the user click the add sub module in the sub module', async function (this:CustomWorld) {
   
    await this.addCourseStructure.addsubmoduleLink()
});

When('the user enter the title of {string}', async function (this:CustomWorld,string) {
   await this.addCourseStructure.fillTitle(string)
});

When('the user enter the Description of {string}', async function (this:CustomWorld,string) {
    await this.addCourseStructure.filldescribe(string)
});

When('the user click the skill', async function (this:CustomWorld) {
    await this.addCourseStructure.clickCheckbox()
});

When('the user click Add submodule button', async function (this:CustomWorld) {
    await this.addCourseStructure.addsubmodule_btn()
    
});

Then('the user should see the title in submodule', async function (this:CustomWorld) {
     //expect(this.addCourseStructure.Textsubmodule()).to('HTML')
});