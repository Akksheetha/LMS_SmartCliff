import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";
import loginData from "../testData/LoginData.json";
import { readCsvData } from "../Utilities/csvReader";
import { constantData } from "../../../constants/constant"; 

interface CourseCode {
    Code: string;
}
const courseCodes = readCsvData<CourseCode>("CourseCode.csv");
const validUser = loginData.validUser;


Given('the user launches the LMS application', async function(this:CustomWorld){
    await this.loginPage.launchApplication(process.env.BASEURL!);
});


Given('the user logs in with valid credentials and navigates to Dashboard', async function(this:CustomWorld){
    await this.loginPage.enterEmail(validUser.email);
    await this.loginPage.enterPassword(validUser.password);
    await this.loginPage.clickLoginButton();
});


When('the user clicks course Management and navigate to course structure Page', async function(this:CustomWorld){
    await this.dashboardpage.clickCourseManagement();
});


When('clicks Add course structure action for course {int}',async function (this: CustomWorld, row: number) {
    const data = courseCodes[row - 1];
    await this.coursemanagepage.fillsearch(data.Code);
    await this.coursemanagepage.clickAddCourse();
});

When('the user clicks Add Topic by clicking enable actions', async function(this:CustomWorld){
    await this.addCourseStructure.clickSubmoduleActionSettings();
    await this.addCourseStructure.clickHierarchy();
    await this.topicPage.clickAddTopic();
});


When('enters the topic details', async function(this:CustomWorld, dataTable){
    const data = dataTable.hashes()[0];
    await this.topicPage.fillTopicTitle(data.Title);
    await this.topicPage.fillTopicDescription(data.Description);
});


When('clicks Save button', async function(this:CustomWorld){
    await this.topicPage.clickSaveButton();
});


Then('the topic should be created successfully', async function(this:CustomWorld){
    const topicText = await this.topicPage.getTopicText(constantData.CourseTopic.topicTitle);
    expect(topicText).toContain(constantData.CourseTopic.topicTitle);
});

When('the user clicks save button without entering Title', async function (this:CustomWorld) {
    await this.topicPage.clickSaveButton();
});

Then('the error message should be displayed successfully', async function (this:CustomWorld) {
    await expect(this.topicPage.titletxt).toBeVisible({ timeout: 3000 });
    await expect(this.topicPage.titletxt).toContainText(constantData.CourseTopic.mandatoryTitleError);
});

When('the user clicks Add Topic in a module by clicking enable actions', async function (this:CustomWorld){
    await this.addCourseStructure.clickSubmoduleActionSettings();
    await this.addCourseStructure.clickHierarchy();
    await this.topicPage.clicksecondTopic();
});

When('the user selects the Skill Set', async function (this:CustomWorld) {
    await this.topicPage.skillSelect();
});

Then('the topic with Skill Set should be created successfully', async function (this:CustomWorld) {
    const topicText = await this.topicPage.getSkillText(constantData.CourseTopic.skillTopicTitle);
    expect(topicText).toContain(constantData.CourseTopic.skillTopicTitle);
});

When('then user clicks the preview option', async function (this:CustomWorld) {
    await this.topicPage.clickPreview();
});

Then('the created topics should be displayed', async function (this:CustomWorld) {
    await expect(this.topicPage.cell1).toHaveText("Custom World");
    await expect(this.topicPage.cell2).toHaveText("Annotations");
});

When('the user clicks the three dots and clicks the delete option', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubmoduleActionSettings();
    await this.addCourseStructure.clickHierarchy();
    await this.topicPage.clickDelete1();
    await this.addCourseStructure.clickDeleteConfom();

});

Then('the topic should be deleted successfully', async function (this:CustomWorld) {
    await expect(this.topicPage.AddTopic).toBeVisible();
});