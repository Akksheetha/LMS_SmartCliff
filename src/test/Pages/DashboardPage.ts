import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class DashboardPage extends basepage {

    readonly courseManagement: Locator;

    constructor(page: Page) {
        super(page);
        this.courseManagement = page.locator("/html/body/div[3]/div/aside/div/div/div/div[2]/div/div");
    }

    async clickCourseManagement() {
        await this.click(this.courseManagement)
    }
}