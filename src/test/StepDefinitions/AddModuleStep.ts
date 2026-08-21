import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";
import loginData from "../testData/LoginData.json";
import { readCsvData } from "../Utilities/csvReader";

const validUser = loginData.validUser;
const moduleCsv: any[] = readCsvData('module.csv');



When('the user click the add module icon', async function (this: CustomWorld) {
    await this.addModulePage.addModuleIcon();
});

When('the user enter the module title from csv row {int}', async function (this: CustomWorld, rowIndex) {
    await this.addModulePage.fillTitle_module(moduleCsv[rowIndex].title);
});

When('the user enter the module Description from csv row {int}', async function (this: CustomWorld, rowIndex) {
    await this.addModulePage.filldescribe_module(moduleCsv[rowIndex].description);
});

When('the user enter the module title of {string}', async function (this: CustomWorld, string) {
    await this.addModulePage.fillTitle_module(string);
});

When('the user enter the module Description of {string}', async function (this: CustomWorld, string) {
    await this.addModulePage.filldescribe_module(string);
});

When('the user click the module skill', async function (this: CustomWorld) {
    await this.addModulePage.clickModuleCheckbox();
    await this.page.waitForTimeout(3000);
});

When('the user click Add Module button', async function (this: CustomWorld) {
    await this.addModulePage.addModule_btn();
    await this.page.waitForTimeout(5000);
});

Then('the user should see the title in module', async function (this: CustomWorld) {
    let act = await this.addModulePage.operationCompledText();
    expect(act).toContain("Operation completed successfully!");
});

When('the user click the module threeDot_btn', async function (this: CustomWorld) {
    await this.addModulePage.clickModuleThreeDot();
});

When('the user click the module threeDot_btn in the exsiting module', async function (this: CustomWorld) {
    await this.addModulePage.clickModuleThreeDot();
});

When('the user click the module Add btn', async function (this: CustomWorld) {
    await this.addModulePage.clickModuleAdd();
});

When('the user click the module edit btn', async function (this: CustomWorld) {
    await this.addModulePage.clickModuleEdit();
});

When('the user click the module delete btn', async function (this: CustomWorld) {
    await this.addModulePage.clickDelete();
});

Then('the user should see the operation compeleted message', async function (this: CustomWorld) {
    let act = await this.addModulePage.operationCompledText();
    expect(act).toContain("Operation completed successfully!");
});

When('the user click the module button', async function (this: CustomWorld) {
    await this.addModulePage.clickModuleToDelete();
});

When('the user click save and immediately click cancel', async function (this: CustomWorld) {
    await this.addModulePage.clickSaveAndCancel();
});

Then('the module should able to cancel the process', async function (this: CustomWorld) {
    const isPresent = await this.addModulePage.verifyModuleNotAdded(moduleCsv[0].title);
    expect(isPresent).toBeFalsy();
});
