import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { readExcelData } from "../Utilities/excelReader";

When("User navigates to the Course Management page", async function (this: CustomWorld) {
    await this.filterPage.clickCourseManagement();
});

When("User opens the Filters panel", async function (this: CustomWorld) {
    await this.filterPage.clickFilters();
});

When("User selects {string} from the Category dropdown", async function (this: CustomWorld, category: string) {
    await this.filterPage.selectCategory(category);
});

Then("Only {string} courses should be displayed", async function (this: CustomWorld, category: string) {
    await this.filterPage.verifySelectedCategory(category);
});


When("User clicks the \"All Levels\" dropdown", async function (this: CustomWorld) {
    await this.filterPage.clickLevelDropdown();
});

When("User selects a level from the Level dropdown", async function (this: CustomWorld) {

    const data = readExcelData("FilterLevels.xlsx", "Levels") as { Level: string }[];

    for (const row of data) {
        await this.filterPage.selectLevel(row.Level);
    }

});

Then("Only courses matching the selected level should be displayed", async function (this: CustomWorld) {

    const data = readExcelData("FilterLevels.xlsx", "Levels") as { Level: string }[];

    for (const row of data) {
        await this.filterPage.selectLevel(row.Level);
        await this.filterPage.verifySelectedLevel(row.Level);
    }
    

});