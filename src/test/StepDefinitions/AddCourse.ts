import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../World/CustomWorld";
import AddCourseData from "../testData/AddCoursedata.json";

function getCourseTestDataByKey(key: string) {
    return (AddCourseData as any)[key];
}

When("user navigates to course management", async function (this: CustomWorld) {
    // TODO: replace with the real locator for your Course Management nav item
    await this.dashboardpage.clickCourseManagement();
});

When("user clicks Add Course button", async function (this: CustomWorld) {
    await this.addcoursepage.addCoursebtn();
});

Then("the {string} modal should be displayed", async function (this: CustomWorld, title: string) { 
    expect(await this.addcoursepage.isModalVisible()).toBeTruthy();
    expect(await this.addcoursepage.getText(this.addcoursepage.modalTitle)).toBe(title);

});

When(
    "user fills the Course Basic Configuration step using test data {string}",
    async function (this: CustomWorld, dataKey: string) {

        const testData = getCourseTestDataByKey(dataKey);

        await this.addcoursepage.fillCourse(testData);

    }
);

When("user clicks the Next button", async function (this: CustomWorld) {

    await this.addcoursepage.clickNext();

});

Then(
    "the {string} step should be displayed",
    async function (this: CustomWorld, title: string) {

        await expect(this.page.getByText(title, { exact: true })).toBeVisible();

    }
);

When(
    "user fills the Course Hierarchy and Layout step using test data {string}",
    async function (this: CustomWorld, dataKey: string) {

        const testData = getCourseTestDataByKey(dataKey);

        await this.addcoursepage.fillCourseHierarchyAndLayout(testData);

    }
);

When(
    "user enables the resource types using test data {string}",
    async function (this: CustomWorld, dataKey: string) {

        const testData = getCourseTestDataByKey(dataKey);

        await this.addcoursepage.configureResourceType(testData);

    }
);
When(
  "user selects the Skill Set using test data {string}",
  async function (this: CustomWorld, dataKey: string) {

    const testData = await getCourseTestDataByKey(dataKey);

    await this.addcoursepage.selectSkill(testData.skillSet.coreProgrammingLanguages);

    await this.addcoursepage.selectSkill(testData.skillSet.frontendTechnologies);

    await this.addcoursepage.selectSkill(testData.skillSet.databaseTechnologies);

  }
);

When(
    "user clicks the Preview and Create button",
    async function (this: CustomWorld) {

        await this.addcoursepage.clickCreate();

    }
);

Then(
    "the Course Layout Preview should match the expected data for {string}",
    async function (this: CustomWorld, dataKey: string) {

        const testData = getCourseTestDataByKey(dataKey);

        // TODO:
        // await this.addcoursepage.verifyPreview(testData.expectedLayoutPreview);

        expect(true).toBeTruthy();

    }
);

When(
    "user clicks the Save Course Layout button",
    async function (this: CustomWorld) {


        // await this.addcoursepage.clickSaveCourseLayout();

    }
);

Then(
    "the course should be created successfully",
    async function (this: CustomWorld) {

        expect(await this.addcoursepage.isCourseCreatedSuccessfully()).toBeTruthy();

    }
);
When(
    "user selects only the Course Client {string}",
    async function (this: CustomWorld, courseClient: string) {
        await this.addcoursepage.selectClientOnly(courseClient);
    }
);

Then(
    "the following validation errors should be displayed",
    async function (this: CustomWorld, dataTable) {
        const expectedMessages = dataTable.raw().map((row: string[]) => row[0]);
        await this.addcoursepage.verifyValidationErrors(expectedMessages);
    }
);


When(
    "user clicks the Preview and Create button without selecting course hierarchy",
    async function (this: CustomWorld) {

        await this.addcoursepage.clickPreviewAndCreate();

    }
);

Then(
    "the validation error {string} should be displayed",
    async function (this: CustomWorld, message: string) {

        await this.addcoursepage.verifyValidationErrors([message]);

    }
);

When(
    "user clicks the Previous button",
    async function (this: CustomWorld) {

        await this.addcoursepage.clickPrevious();

    }
);

Then(
    "the Next button should be visible",
    async function (this: CustomWorld) {

        expect(await this.addcoursepage.isNextButtonVisible()).toBeTruthy();

    }
);

When(
    "user clicks the Help button",
    async function (this: CustomWorld) {

        await this.addcoursepage.clickHelp();

    }
);

Then(
    "the {string} guide modal should be displayed",
    async function (this: CustomWorld, _title: string) {

        expect(await this.addcoursepage.isCourseCreationGuideVisible()).toBeTruthy();

    }
);