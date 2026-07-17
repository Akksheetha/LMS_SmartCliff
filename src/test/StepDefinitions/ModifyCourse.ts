import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";
import { readCsvData } from "../Utilities/csvReader";

const courseData: any[] = readCsvData('courseModification.csv');

When('the user seach the course code , which is already created for edit the course {string}', async function (this: CustomWorld, string) {
    await this.coursemanagepage.fillsearch(string)
});

When('the user seach the course code for edit from csv', async function (this: CustomWorld) {
    await this.coursemanagepage.fillsearch(courseData[0].courseCode)
});

When('the user click the threeDont of exsisting course', async function (this: CustomWorld) {
    await this.coursemanagepage.clickthreeDotForEdit()
});

When('the user click the Edit button', async function (this: CustomWorld) {
    await this.coursemanagepage.clickEditCourse()
});

When('the user click the next button', async function (this: CustomWorld) {
    await this.Edit.clicknextbtn()
});

When('the user click the previewAndUpdatebutton', async function (this: CustomWorld) {
    await this.Edit.clickpreviousandUpdate()
});

When('the user click the Save courseLayout button', async function (this: CustomWorld) {
    await this.Edit.clickSaveCourse()
});

Then('the user should able to seen the edited course name', async function (this: CustomWorld) {
    await this.page.waitForLoadState('networkidle')
    const courseName = this.page.locator("(//td)[3]").first()
    let act = await courseName.textContent();
    expect(act).toContain(courseData[0].customName);
});

When('the user select Others Custom Name from course name dropdown', async function (this: CustomWorld) {
    await this.Edit.selectOthersCustomName()
});

When('the user type custom course name from csv', async function (this: CustomWorld) {
    await this.Edit.typeCustomCourseName(courseData[0].customName)
});

Then('the user should able to see the custom course name from csv', async function (this: CustomWorld) {
    await this.page.waitForLoadState('networkidle')
    const courseName = this.page.locator("(//td)[3]").first()
    let act = await courseName.textContent();
    expect(act).toContain(courseData[0].customName);
});

When('the user type custom course name as {string}', async function (this: CustomWorld, name: string) {
    await this.Edit.typeCustomCourseName(name)
});

Then('the user should able to see the custom course name {string}', async function (this: CustomWorld, name: string) {
    await this.page.waitForLoadState('networkidle')
    const courseName = this.page.locator("(//td)[3]").first()
    let act = await courseName.textContent();
    expect(act).toContain(name);
});
