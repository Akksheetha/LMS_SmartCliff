import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

export class searchPage extends basepage {

    private readonly courseManagement: Locator;
    private readonly searchInput: Locator;
    private readonly courseNames: Locator;
    private readonly noUsersMessage: Locator;
    private readonly courseCountHeader: Locator;

    constructor(page: Page) {
        super(page);

        this.courseManagement = page.locator("//div[@title='Course Management']");
        this.searchInput = page.locator("//input[@placeholder='Search courses, codes, clients, or categories...']");
        this.courseNames = page.locator("//span[@class='text-sm font-semibold text-gray-900 dark:text-white font-sans truncate']");
        this.noUsersMessage = page.locator("//p[@class='text-xs font-normal text-gray-400 dark:text-gray-500']");
        this.courseCountHeader = page.locator("//h2[contains(.,'courses')]");
    }

    async navigateToCourseStructures(url: string): Promise<void> {
        try {
            logger.info(`Navigating to Course Structures: ${url}`);

            await this.page.goto(url, {
                waitUntil: "domcontentloaded"
            });

            await this.searchInput.waitFor({
                state: "visible",
                timeout: 30000
            });

            logger.info("Successfully navigated to Course Structures.");
        } catch (error) {
            logger.error(`Failed to navigate to Course Structures: ${error}`);
            throw error;
        }
    }

    async clickCourseManagement() {
        try {
            logger.info("Clicking Course Management.");

            await this.courseManagement.click();

            await this.searchInput.waitFor({
                state: "visible",
                timeout: 30000
            });

            logger.info("Course Management opened successfully.");
        } catch (error) {
            logger.error(`Failed to click Course Management: ${error}`);
            throw error;
        }
    }

    async searchCourse(keyword: string) {
        try {
            logger.info(`Searching course with keyword: ${keyword}`);

            await this.searchInput.fill(keyword);
            await this.page.waitForLoadState("networkidle");

            logger.info("Search completed successfully.");
        } catch (error) {
            logger.error(`Search failed for keyword '${keyword}': ${error}`);
            throw error;
        }
    }

    async assertCourseDisplayed(expectedCourse: string) {
        try {
            logger.info(`Verifying course: ${expectedCourse}`);

            await expect(this.courseNames.first()).toBeVisible({
                timeout: 10000
            });

            await expect(this.courseNames).toContainText(expectedCourse);

            logger.info(`Course '${expectedCourse}' is displayed.`);
        } catch (error) {
            logger.error(`Course '${expectedCourse}' was not found: ${error}`);
            throw error;
        }
    }

    async assertNoRecords() {
        try {
            logger.info("Verifying no records are displayed.");

            await expect(this.noUsersMessage).toBeVisible({
                timeout: 20000
            });

            await expect(this.noUsersMessage)
                .toContainText("No data matches your current criteria");

            logger.info("No records message verified successfully.");
        } catch (error) {
            logger.error(`No records validation failed: ${error}`);
            throw error;
        }
    }

    async assertMessage(message: string) {
        try {
            logger.info(`Verifying message: ${message}`);

            await expect(this.page.getByText(message)).toBeVisible();

            logger.info(`Message '${message}' verified successfully.`);
        } catch (error) {
            logger.error(`Message '${message}' verification failed: ${error}`);
            throw error;
        }
    }

    async assertCourseCount(expected: string) {
        try {
            logger.info(`Verifying course count: ${expected}`);

            await expect(this.courseCountHeader).toContainText(expected);

            logger.info("Course count verified successfully.");
        } catch (error) {
            logger.error(`Course count verification failed: ${error}`);
            throw error;
        }
    }
}