import { CustomWorld } from './../World/CustomWorld';
import { Given,When,Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test"

Given('User is on the Dashboard page', async function () {
  const text = await this.dashboardpage.gettextofLeanringhub()
  await expect(text).toBe("Learning Hub")
});

Given('User clicks on Course Management', async function (this:CustomWorld) {
  await this.dashboardpage.clickCourseManagement()
});

Given('User is on the Course Management page', async function (this:CustomWorld) {
  await expect(this.coursemanagepage.courseStructureH1).toHaveText("Course Structures")
});

Given('User enter javascript in search bar', async function (this: CustomWorld) {
  await this.coursemanagepage.searchJavascript("JavaScript");
  await expect(this.coursemanagepage.tableElement).toHaveText("JavaScript",{
      timeout: 60000,
  });
});

Given('User clicks on Add Course Structure in javascript Course', async function () {
 await this.coursemanagepage.clickaddcoursemanagestructure()
});

Given('User clicks on Action Settings', async function () {
  await this.coursestructurepage.clickActionSettings()
});

Given('User enables Direct Actions', async function () {
  await this.coursestructurepage.enableDirectAction()
});

Given('User clicks on the three-dot menu', async function () {
  await this.coursestructurepage.clickThreedot()
});

When('User clicks the Add button', async function () {
  await this.coursestructurepage.clickAddBtn()
});

When('User selects the level option', async function () {
  await this.coursestructurepage.clickSelectBtn()
});

Then('User should see a success message', async function () {
  
});