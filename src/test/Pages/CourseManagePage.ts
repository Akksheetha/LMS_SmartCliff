import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class CourseManagePage extends basepage {

    readonly addcoursestructure: Locator;
    readonly courseStructureH1:Locator
    readonly searchbar: Locator
    readonly tableElement:Locator

    constructor(page: Page) {
        super(page);
        this.addcoursestructure = page.locator('button').filter({ hasText: 'Add Course Structure' }).first()
        this.courseStructureH1 = page.locator("//h1[text()='Course Structures']")
        this.searchbar = page.getByRole('textbox', { name: 'Search courses, codes, clients, or categories...' })
        this.tableElement = page.locator('tbody tr').filter({ hasText: 'JavaScript' }).locator('td').nth(2).locator('span > button > span').first();
    }

    async clickaddcoursemanagestructure() {
        await this.click(this.addcoursestructure)
    }

    async searchJavascript(value:string) {
        await this.fill(this.searchbar,value)
    }
}



