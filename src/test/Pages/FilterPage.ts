import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

export class FilterPage extends basepage {

    readonly courseManagement: Locator;
    readonly filtersButton: Locator;
    readonly categoryDropdown: Locator;
    readonly courseCategory: Locator;
    readonly levelDropdown: Locator;
    readonly courseLevel: Locator;
    readonly sortByDropdown: Locator;
    readonly courseName: Locator;

    constructor(page: Page) {
        super(page);

        this.courseManagement = page.locator('[title="Course Management"]');
        this.filtersButton = page.getByRole('button', { name: 'Filters' });
        this.categoryDropdown = page.getByRole('combobox').nth(1);
        this.courseCategory = page.locator("//tbody/tr/td[4]");
        this.levelDropdown = page.getByRole('combobox').nth(2);
        this.courseLevel = page.locator("//table//th[contains(text(),'Level')]/parent::tr/following-sibling::tr/td[count(//table//th[contains(text(),'Level')]/preceding-sibling::th)+1]");
        this.sortByDropdown = page.getByRole('combobox').nth(3);
        this.courseName = page.locator("//tbody/tr/td[3]");
    }

    async clickCourseManagement() {
        logger.info("Clicking Course Management.");
        
        await this.click(this.courseManagement);
    }

    async clickFilters() {
        logger.info("Clicking Filters button.");
        await this.click(this.filtersButton);
    }

    async selectCategory(category: string) {
        logger.info(`Selecting Category: ${category}`);
        await this.categoryDropdown.selectOption({ value: category });
    }

    async verifySelectedCategory(category: string) {
        logger.info(`Verifying Category: ${category}`);

        const count = await this.courseCategory.count();

        for (let i = 0; i < count; i++) {
            await expect(this.courseCategory.nth(i)).toContainText(category);
        }

        logger.info(`Category verification completed.`);
    }

    async clickLevelDropdown() {
        logger.info("Clicking Level dropdown.");
        await this.levelDropdown.click();
    }

    async selectLevel(level: string) {
        logger.info(`Selecting Level: ${level}`);
        await this.levelDropdown.selectOption({ value: level });
    }

    async verifySelectedLevel(level: string) {
        logger.info(`Verifying Level: ${level}`);

        const count = await this.courseLevel.count();

        for (let i = 0; i < count; i++) {
            await expect(this.courseLevel.nth(i)).toContainText(level);
        }

        logger.info("Level verification completed.");
    }

    async clickSortByDropdown() {
        logger.info("Clicking Sort By dropdown.");
        await this.click(this.sortByDropdown);
    }

    async selectSortByCourseName() {
        logger.info("Selecting Sort By Course Name.");
        await this.sortByDropdown.selectOption({ value: "courseName" });
    }

    async verifySortedByCourseName() {

        logger.info("Verifying Course Name sorting.");

        const count = await this.courseName.count();
        const names: string[] = [];

        for (let i = 0; i < count; i++) {
            const nameText = await this.courseName.nth(i).innerText();
            names.push(nameText.trim());
        }

        logger.info(`Retrieved Course Names: ${names.join(", ")}`);

        for (let i = 1; i < names.length; i++) {
            const comparison = names[i - 1].localeCompare(names[i]);
            expect(comparison).toBeGreaterThanOrEqual(0);
        }

        logger.info("Course Name sorting verified successfully.");
    }
}