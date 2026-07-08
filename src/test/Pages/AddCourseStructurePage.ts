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
    private herichy:Locator

    constructor(page:Page){
        super(page)
        
        this.AddSubmodule=page.locator("(//button[@title='Add New Sub Module'])[1]")
        this.title=page.locator("//textarea[@id='title']")
        this.describe = page.locator("//textarea[@id='description']")
        this.checkbox = page.locator("(//input[@type='checkbox'])[2]")
        this.AddSumodule_btn= page.locator("//div[@class='flex justify-end gap-2']/child::button[@type='submit']")
        this.subModuleText=page.locator("(//span[@class='flex-[0.8] text-center px-2 break-words whitespace-normal overflow-hidden text-ellipsis'])[2]")
        this.ActionSettings=page.locator("//span[text()='More']")
        this.herichy=page.locator("(//div[@class='relative']/div)[1]")
        //this.AddModule=page.locator("//button[@title='Add module']")
    }


async addsubmoduleLink() {

    await this.page.mouse.click(5, 5);
    await this.page.waitForTimeout(300);
    await this.AddSubmodule.waitFor({state: "visible"});
    await this.AddSubmodule.scrollIntoViewIfNeeded();
    await this.AddSubmodule.click();
    }

    async fillTitle(text:string){
        await this.fill(this.title,text)
    }
    async filldescribe(text:string){
        await this.fill(this.describe,text)
    }
    async clickCheckbox(){
        await this.click(this.checkbox)
    }
    async addsubmodule_btn(){
        await this.click(this.AddSumodule_btn)
    }
    async Textsubmodule(){
        return this.Locator(this.subModuleText)
    }
    async clickActionSetting(){
        await this.click(this.ActionSettings)
    }
    async clickHierarchy(){
        await this.click(this.herichy)
    }
}