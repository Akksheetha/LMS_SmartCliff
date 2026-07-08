import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";
import loginData from "../testData/LoginData.json";

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


When('clicks Add course structure action', async function(this:CustomWorld, dataTable){
    const data = dataTable.hashes()[0];
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
    const topicText = await this.topicPage.getTopicText("Custom World");
    expect(topicText).toContain("Custom World");
});