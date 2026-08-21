import {When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import {expect} from "@playwright/test";

When('the user clicks enable actions by clicking more', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubmoduleActionSettings();
    await this.addCourseStructure.clickHierarchy();
});

Then('the user can edit the course structure successfully', async function (this:CustomWorld) {
    await expect(this.topicPage.AddTopic).toBeVisible();
});

When('the user clicks Direct actions by clicking more', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubmoduleActionSettings();
    await this.directActions.directAction();
});
         
Then('the user can edit the level successfully', async function (this:CustomWorld) {
    await expect(this.directActions.level).toBeVisible();
});

When('the user disables hierarchy actions', async function (this: CustomWorld) {
    await this.addCourseStructure.clickHierarchy();
});

Then('the hierarchy actions should be disabled', async function (this: CustomWorld) {
    await expect(this.topicPage.AddTopic).toBeHidden();
});

When('the user clicks Direct actions by clicking more', async function (this:CustomWorld) {
    await this.addCourseStructure.clickSubmoduleActionSettings();
    await this.directActions.directAction();
});

Then('the user can edit the level successfully', async function (this:CustomWorld) {
    await expect(this.directActions.level).toBeVisible();
});

When('the user disables Direct actions', async function (this: CustomWorld) {
    await this.directActions.directAction();
});
Then('the level edit control should not be visible', async function (this: CustomWorld) {
    await expect(this.directActions.level).toBeHidden();
});