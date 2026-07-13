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
    private threeDot:Locator
    readonly EditCourse:Locator
   

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
        this.threeDot=page.locator("//div[@class='flex gap-1 justify-center']//div")
        this.EditCourse=page.locator("(//div[@style='opacity: 1; transform: none;']//button)[10]")
        
    }
    async fillsearch(text:string){
        try{
             await this.fill(this.search,text)
             logger.info("fill the code id in the search bar")

        }catch(error){
            logger.error(error)
        }
       
    }
    async clickAddCourse(){
        try{
            await this.AddCourseStructure_btn.waitFor({state:"visible"})
           await this.click(this.AddCourseStructure_btn)
            logger.info("clicked the Add Course Structure")

        }catch(error){
            logger.error(error)
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

    async clickthreeDotForEdit(){
        await this.click(this.threeDot)
    }
    async clickEditCourse(){
        await this.scroll(this.EditCourse)
        await this.EditCourse.waitFor({state:"visible"})
        await this.click(this.EditCourse)
    }
}



