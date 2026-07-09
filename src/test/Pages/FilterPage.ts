import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class FilterPage extends basepage {

    readonly courseManagement: Locator;
    readonly filtersButton: Locator;
    readonly categoryDropdown: Locator;
    readonly courseCategory: Locator;
    readonly levelDropdown: Locator;
    readonly courseLevel: Locator;

    constructor(page: Page) {
        super(page);

        this.courseManagement = page.locator('[title="Course Management"]');
        this.filtersButton = page.getByRole('button', { name: 'Filters' });
        this.categoryDropdown = page.getByRole('combobox').nth(1);
        this.courseCategory = page.locator("//tbody/tr/td[4]");
        this.levelDropdown = page.getByRole('combobox').nth(2);
        this.courseLevel = page.locator("//table//th[contains(text(),'Level')]/parent::tr/following-sibling::tr/td[count(//table//th[contains(text(),'Level')]/preceding-sibling::th)+1]");
    }

    async clickCourseManagement() {
        await this.click(this.courseManagement);
    }

    async clickFilters() {
        await this.click(this.filtersButton);
    }

    async selectCategory(category: string) {
    await this.categoryDropdown.selectOption({ value: category });
    }

    async verifySelectedCategory(category: string) {
        const count = await this.courseCategory.count();
        for (let i = 0; i < count; i++) {
            await expect(this.courseCategory.nth(i)).toContainText(category);
        }
    }
    async clickLevelDropdown() {
        await this.levelDropdown.click();
    }

    async selectLevel(level: string) {
        await this.levelDropdown.selectOption({ value: level });
    }

    async verifySelectedLevel(level: string) {
        const count = await this.courseLevel.count();
        for (let i = 0; i < count; i++) {
            await expect(this.courseLevel.nth(i)).toContainText(level);
        }
    }
    
}