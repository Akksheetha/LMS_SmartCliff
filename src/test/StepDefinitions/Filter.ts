import { When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";

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