
import { Locator ,Page} from "@playwright/test";
import { basepage } from "./basePage";

export class courseStructurePage extends basepage{

    private courseStructureIcon:Locator;
    private search:Locator
    private AddCourseStructure_btn:Locator;


    constructor(page:Page){
        super(page)
        this.courseStructureIcon=page.locator("//div[@class='p-1.5 bg-blue-100']")
        this.search=page.locator("//div[@class='relative']/child::input[@type='text']")
        this.AddCourseStructure_btn= page.locator("//span[text()='Add Course Structure']")
    }

    async clickCourseStructureIcon(){
        this.click(this.courseStructureIcon)
    }
    async fillsearch(text:string){
        this.fill(this.search,text)
    }
    async clickAddCourse(){
        this.click(this.AddCourseStructure_btn)
    }

    }