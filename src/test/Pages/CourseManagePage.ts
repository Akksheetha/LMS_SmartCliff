import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class CourseManagePage extends basepage {

    readonly addcoursestructure: Locator;
    readonly coursestructure:Locator

    constructor(page: Page) {
        super(page);
        this.addcoursestructure = page.locator("/html/body/div[3]/div/main/div/div/div/div[2]/div/div/div/div[1]/div/table/tbody/tr[3]/td[7]/span/div/button");
        this.coursestructure = page.locator("/html/body/div[3]/div/main/div/div/div/div[1]/div/div[1]/div/div/h1")
    }

    async clickaddcoursemanagestructure() {
        await this.click(this.addcoursestructure)
    }
}