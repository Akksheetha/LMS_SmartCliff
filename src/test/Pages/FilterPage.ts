import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
export class FilterPage extends basepage {

    readonly courseManagement: Locator;
    readonly filtersButton: Locator;
    readonly categoryDropdown: Locator;
    readonly courseCategory: Locator;

    constructor(page: Page) {
        super(page);

        // Left side Course Management icon/menu
        this.courseManagement = page.locator('.p-1\\.5.bg-blue-100');
        
         

        // Filters button
        this.filtersButton = page.getByRole('button', { name: 'Filters' });

        // Category dropdown
        this.categoryDropdown = page.getByRole('combobox').nth(1)
        // OR use this if the above doesn't work:
        // this.categoryDropdown = page.locator("//select[option[text()='All Categories']]");

        // Category column in the table
        this.courseCategory = page.locator("//tbody/tr/td[4]");
    }

    async clickCourseManagement() {

        await this.click(this.courseManagement);

    }

    async clickFilters() {

        await this.click(this.filtersButton);

    }

    async selectCategory(category: string) {

        await this.categoryDropdown.selectOption({
            label: category
        });

    }

    async verifySelectedCategory(category: string) {

        const count = await this.courseCategory.count();

        for (let i = 0; i < count; i++) {

            await expect(this.courseCategory.nth(i)).toContainText(category);

        }

    }

}