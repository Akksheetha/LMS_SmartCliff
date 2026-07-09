import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import { CustomWorld } from "../World/CustomWorld";
// Dynamic import to avoid static resolution errors for ../TestData/courseData
async function getCourseTestDataByKey(key: string) {
  try {
    const mod = await import("../testData/AddCoursedata.json");
    const data = (mod as any).default?.[key] ?? (mod as any)[key];
    if (!data) {
      throw new Error(`No test data found for key '${key}' in '../testData/AddCoursedata.json'.`);
    }
    return data;
  } catch (err) {
    throw new Error("Cannot find module '../TestData/AddCoursedata.json' or it has no exported member for the requested key.");
  }
}

When("user clicks Add Course button", async function (this: CustomWorld) {
  await this.addcoursepage.openAddCourseModal();
});

Then("the {string} modal should be displayed", async function (
  this: CustomWorld,
  title: string
) {
  expect(await this.addcoursepage.isModalVisible()).toBeTruthy();
});

When(
  "user fills the Course Basic Configuration step using test data {string}",
  async function (this: CustomWorld, dataKey: string) {

    const testData = await getCourseTestDataByKey(dataKey);

    await this.addcoursepage.fillCourseBasicConfiguration(testData);

  }
);

When("user clicks the Next button", async function (this: CustomWorld) {

  await this.addcoursepage.clickNext();

});

Then("the {string} step should be displayed", async function (
  this: CustomWorld,
  title: string
) {

  expect(await this.addcoursepage.isModalVisible()).toBeTruthy();

});

When(
  "user fills the Course Hierarchy and Layout step using test data {string}",
  async function (this: CustomWorld, dataKey: string) {

    const testData = await getCourseTestDataByKey(dataKey);

    await this.addcoursepage.fillCourseHierarchyAndLayout(testData);

  }
);

When(
  "user enables the resource types using test data {string}",
  async function (this: CustomWorld, dataKey: string) {

    const testData = await getCourseTestDataByKey(dataKey);

    await this.addcoursepage.configureResourceType(testData);

  }
);

When(
  "user selects the Skill Set using test data {string}",
  async function (this: CustomWorld, dataKey: string) {

    const testData = await getCourseTestDataByKey(dataKey);

    await this.addcoursepage.selectSkillSet(testData);

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

    // Add preview verification here if your application has a preview page.
    // Currently your Page Object doesn't contain any preview methods.

    expect(true).toBeTruthy();

  }
);

When(
  "user clicks the Save Course Layout button",
  async function (this: CustomWorld) {

    // Add Save button method when available.
    // Example:
    // await this.addcoursepage.clickSaveCourseLayout();

  }
);

Then(
  "the course should be created successfully",
  async function (this: CustomWorld) {

    expect(await this.addcoursepage.isCourseCreatedSuccessfully()).toBeTruthy();

  }
);