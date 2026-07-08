import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class CourseManagePage extends basepage {

    readonly addcoursestructure: Locator;
    readonly courseStructureH1:Locator
    readonly searchbar: Locator
    readonly tableElement:Locator
    readonly coursestructure:Locator
    private search:Locator
    private AddCourseStructure_btn:Locator;

    constructor(page: Page) {
        super(page);
        this.addcoursestructure = page.locator('button').filter({ hasText: 'Add Course Structure' }).first()
        this.courseStructureH1 = page.locator("//h1[text()='Course Structures']")
        this.searchbar = page.getByRole('textbox', { name: 'Search courses, codes, clients, or categories...' })
        this.tableElement = page.locator('tbody tr').filter({ hasText: 'JavaScript' }).locator('td').nth(2).locator('span > button > span').first();

        this.addcoursestructure = page.locator("/html/body/div[3]/div/main/div/div/div/div[2]/div/div/div/div[1]/div/table/tbody/tr[3]/td[7]/span/div/button");
        this.coursestructure = page.locator("/html/body/div[3]/div/main/div/div/div/div[1]/div/div[1]/div/div/h1")
        this.search=page.locator("//div[@class='relative']/child::input[@type='text']")
        this.AddCourseStructure_btn= page.locator("//span[text()='Add Course Structure']")
    }
    async fillsearch(text:string){
        this.fill(this.search,text)
    }
    async clickAddCourse(){
        this.click(this.AddCourseStructure_btn)
    }

    async clickaddcoursemanagestructure() {
        await this.click(this.addcoursestructure)
    }

    async searchJavascript(value:string) {
        await this.fill(this.searchbar,value)
    }
}



