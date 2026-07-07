import { Locator ,Page} from "@playwright/test";
import { basepage } from "./basePage";

export class AddCourseStructurePage extends basepage{
    private AddSubmodule:Locator
    private title:Locator
    private describe:Locator;
    private checkbox:Locator;
    private AddSumodule_btn:Locator;
    private subModuleText:Locator 
    private ActionSettings:Locator

    constructor(page:Page){
        super(page)
        this.AddSubmodule=page.locator("//span[text()='Sub Module']")
        this.title=page.locator("//textarea[@id='title']")
        this.describe = page.locator("//textarea[@id='description']")
        this.checkbox = page.locator("(//input[@type='checkbox'])[2]")
        this.AddSumodule_btn= page.locator("//div[@class='flex justify-end gap-2']/child::button[@type='submit']")
        this.subModuleText=page.locator("(//span[@class='flex-[0.8] text-center px-2 break-words whitespace-normal overflow-hidden text-ellipsis'])[2]")
        this.ActionSettings=page.locator("//div[@class='relative flex items-center gap-1.5 z-10']")
        
    }

    async addsubmoduleLink(){
        this.click(this.AddSubmodule)
    }
    async fillTitle(text:string){
        this.fill(this.title,text)
    }
    async filldescribe(text:string){
        this.fill(this.describe,text)
    }
    async clickCheckbox(){
        this.click(this.checkbox)
    }
    async addsubmodule_btn(){
        this.click(this.AddSumodule_btn)
    }
    async Textsubmodule(){
        return this.Locator(this.subModuleText)
    }
}