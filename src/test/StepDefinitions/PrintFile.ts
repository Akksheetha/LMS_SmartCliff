import { CustomWorld } from './../World/CustomWorld';
import { Given,When,Then } from "@cucumber/cucumber";
import {expect} from "@playwright/test"

Given('User clicks on Print Button', async function (this:CustomWorld) {
  await this.coursestructurepage.clickPrint()
});

When('User clicks on Excel Button', async function (this:CustomWorld) {
  await this.coursestructurepage.clickExcel()
});

Then('excel file should download', async function (this:CustomWorld) {
  expect(await this.download.failure()).toBeNull();
  const fileName = await this.download.suggestedFilename();
  expect(fileName.endsWith(".xlsx")).toBeTruthy();
});