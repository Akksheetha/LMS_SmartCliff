import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

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
        this.tableElement = page.locator('//tbody//tr[contains(.,"JavaScript")]//td[3]//button/span').first();

        this.addcoursestructure = page.locator('button').filter({ hasText: 'Add Course Structure' }).first()
        this.coursestructure = page.locator("/html/body/div[3]/div/main/div/div/div/div[1]/div/div[1]/div/div/h1")
        this.search=page.locator("//div[@class='relative']/child::input[@type='text']")
        this.AddCourseStructure_btn= page.locator("//span[text()='Add Course Structure']")
    }
    async fillsearch(text:string){
        try{
            this.fill(this.search,text)
            logger.info("Entered value in search")
        }catch(error) {
            logger.error(error)
            throw(error)
        }
    }
    async clickAddCourse(){
        try{
            this.click(this.AddCourseStructure_btn)
            logger.info("Clicked AddCourse")
        }catch(error) {
            logger.error(error)
            throw(error)
        }
    }

    async clickaddcoursemanagestructure() {
        try{
            await this.click(this.addcoursestructure)
            logger.info("Clicked AddCourseStructure")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async searchJavascript(value:string) {
        try{
            await this.fill(this.searchbar,value)
            logger.info("Searched JavaScript")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }
}



