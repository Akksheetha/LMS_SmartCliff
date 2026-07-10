import { CustomWorld } from './../World/CustomWorld';
import { Given,When,Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test"
import { constantData } from '../../../constants/constant';

Given('User is on the Dashboard page', async function () {
  const text = await this.dashboardpage.gettextofLeanringhub()
  await expect(text).toBe(constantData.PrintFileExcel.dashboardh1)
});

Given('User clicks on Course Management', async function (this:CustomWorld) {
  await this.dashboardpage.clickCourseManagement()
});

Given('User is on the Course Management page', async function (this:CustomWorld) {
  await expect(this.coursemanagepage.courseStructureH1).toHaveText(constantData.PrintFileExcel.coursemanagementh1)
});

Given('User enter javascript in search bar', async function (this: CustomWorld) {
  await this.coursemanagepage.searchJavascript(constantData.PrintFileExcel.searchBarValue);
  await expect(this.coursemanagepage.tableElement).toHaveText(constantData.PrintFileExcel.searchBarValue,{
      timeout: 60000,
  });
});

Given('User clicks on Add Course Structure in javascript Course', async function () {
 await this.coursemanagepage.clickaddcoursemanagestructure()
});

Given('User clicks on Print Button', async function (this:CustomWorld) {
  await this.coursestructurepage.clickPrint()
});

When('User clicks on Excel Button', async function (this: CustomWorld) {
  this.download = await this.coursestructurepage.clickExcel();
});

Then('excel file should download', async function (this: CustomWorld) {
    const failure = await this.download.failure();
    await expect(failure).toBeNull();
    const fileName = await this.download.suggestedFilename();
    await this.download.saveAs(`downloads/${fileName}`);
});


When('User uncheck the All checkbox', async function (this:CustomWorld) {
  await this.coursestructurepage.uncheckAddAll()
});

Then('User should see error message', async function (this:CustomWorld) {
  await expect(this.coursestructurepage.errmessage).toHaveText(constantData.NotPrintExcel.errmessage)
});

Then('excel button should disable', async function (this:CustomWorld) {
  await expect(this.coursestructurepage.excelBtn).toBeDisabled()
});