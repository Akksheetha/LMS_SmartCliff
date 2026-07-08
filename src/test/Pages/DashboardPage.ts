import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class DashboardPage extends basepage {

    readonly courseManagement: Locator;
    readonly learningHubh1: Locator

    constructor(page: Page) {
        super(page);
        this.courseManagement = page.locator("//div[@class='pt-6']/div/div[2]/div/child::div");
        this.learningHubh1 = page.locator("//span[text()='Learning Hub']")
    }

    async clickCourseManagement() {
        await this.click(this.courseManagement)
    }

    async gettextofLeanringhub() {
        return await this.getText(this.learningHubh1)
    }
}