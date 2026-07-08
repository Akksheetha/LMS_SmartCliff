import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class DashboardPage extends basepage {

    readonly courseManagement: Locator;

    constructor(page: Page) {
        super(page);
        this.courseManagement = page.locator("//div[@title='Course Management']")
    }

    async clickCourseManagement() {
        await this.click(this.courseManagement)
    }
}