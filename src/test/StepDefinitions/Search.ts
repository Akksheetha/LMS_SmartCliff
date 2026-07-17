import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";

When("user clicks the course management", async function (this: CustomWorld) {
    await this.searchPage.clickCourseManagement();
});

When(
    "user enters {string} in the search box",
    async function (this: CustomWorld, keyword: string) {
        await this.searchPage.searchCourse(keyword);
    }
);

Then(
    "the course {string} should be listed in the Course Structures table",
    async function (this: CustomWorld, expectedCourse: string) {

        if (expectedCourse === "No Records Found") {
            await this.searchPage.assertNoRecords();
        } else {
            await this.searchPage.assertCourseDisplayed(expectedCourse);
        }
    }
);

Then(
    "no course records should be displayed",
    async function (this: CustomWorld) {
        await this.searchPage.assertNoRecords();
    }
);

Then(
    "the message {string} should be displayed",
    async function (this: CustomWorld, message: string) {
        await this.searchPage.assertMessage(message);
    }
);

Then(
    "{string} should be displayed in the page header",
    async function (this: CustomWorld, count: string) {
        await this.searchPage.assertCourseCount(count);
    }
);

When("user navigates to the last page of Course Structures", async function (this: CustomWorld) {
    await this.searchPage.navigateToLastPage();
});

Then(
    "the course results for {string} should be displayed in the Course Structures table",
    async function (this: CustomWorld, keyword: string) {
        await this.searchPage.assertRecordDisplayedInTable(keyword);
    }
);