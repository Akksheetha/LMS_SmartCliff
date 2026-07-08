import {Given, When, Then} from "@cucumber/cucumber";
import loginData from "../testData/LoginData.json";
import { CustomWorld } from '../World/CustomWorld';
Given('the user launches the LMS application', async function (this:CustomWorld) {
    await this.loginPage.launchApplication(process.env.BASEURL!);
});

Given('the user logs in with valid credentials and navigates to Dashboard', async function (this:CustomWorld) {
    await this.loginPage.enterEmail(loginData.validUser.email);
     await this.loginPage.enterPassword(loginData.validUser.password);
     await this.loginPage.clickLoginButton();
});

When('the user clicks course Management and navigate to course structure Page', async function (this:CustomWorld) {
    await this.topicPage.navigateToCourses();
});

When('clicks Add course structure action', async function (this: CustomWorld, dataTable) {

    const data = dataTable.hashes()[0];

    console.log(data);

    await this.topicPage.clickAddCourseStructure(data.Code);

});

When('the user clicks Add Topic', async function (this:CustomWorld) {
    await this.topicPage.clickAddTopic();
});

When('enters the topic details and select required options', async function (this:CustomWorld,dataTable) {
    const data = dataTable.hashes()[0];
    await this.topicPage.enterTopicDetails(data.title,data.description);
});

When('clicks Save button', async function (this:CustomWorld) {
    await this.topicPage.clickSave();
});

Then('the topic should be created successfully', async function (this:CustomWorld) {
    await this.topicPage.verifyTopicCreated("created");
});