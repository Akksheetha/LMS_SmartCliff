import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class FilterPage extends basepage {

    readonly courseManagement: Locator;
    readonly filtersButton: Locator;
    readonly categoryDropdown: Locator;
    readonly courseCategory: Locator;

    constructor(page: Page) {
        super(page);

        this.courseManagement = page.locator('[title="Course Management"]');
        this.filtersButton = page.getByRole('button', { name: 'Filters' });
        this.categoryDropdown = page.getByRole('combobox').nth(1);
        this.courseCategory = page.locator("//tbody/tr/td[4]");
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
}