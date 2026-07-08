import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class searchPage extends basepage {

    private readonly courseManagement: Locator;
    private readonly searchInput: Locator;
    private readonly courseNames: Locator;
    private readonly noUsersMessage: Locator;
    private readonly noDataMessage: Locator;
    private readonly courseCountHeader: Locator;

    constructor(page: Page) {
        super(page);

        this.courseManagement = page.locator("//div[@title='Course Management']");
        this.searchInput = page.locator("//input[@placeholder='Search courses, codes, clients, or categories...']");
        this.courseNames = page.locator("//span[@class='text-sm font-semibold text-gray-900 dark:text-white font-sans truncate']");
        this.noUsersMessage = page.getByText("No users found");
        this.noDataMessage = page.getByText("No data matches your current criteria");
        this.courseCountHeader = page.locator("//h2[contains(.,'courses')]");
    }

    async navigateToCourseStructures(url: string): Promise<void> {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });

        await this.searchInput.waitFor({
            state: "visible",
            timeout: 30000
        });
    }

    async clickCourseManagement() {
        console.log(await this.page.url());
        await this.click(this.courseManagement);

        await this.searchInput.waitFor({
            state: "visible",
            timeout: 30000
        });
    }

    async searchCourse(keyword: string) {
        await this.fill(this.searchInput, keyword);
    }

    async assertCourseDisplayed(expectedCourse: string) {
        await expect(this.courseNames).toContainText(expectedCourse);
    }

    async assertNoRecords() {
        await expect(this.noUsersMessage).toBeVisible();
    }

    async assertMessage(message: string) {
        await expect(this.page.getByText(message)).toBeVisible();
    }

    async assertCourseCount(expected: string) {
        await expect(this.courseCountHeader).toContainText(expected);
    }
}