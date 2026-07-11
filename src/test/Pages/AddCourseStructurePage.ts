import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

export class AddCourseStructurePage extends basepage {

    readonly AddSubmodule: Locator;
    readonly title: Locator;
    readonly describe: Locator;
    readonly submoduleCheckbox: Locator;
    readonly AddSumodule_btn: Locator;
    readonly subModuleText: Locator;
    readonly ActionSettings: Locator;
    readonly hierarchy: Locator;
    readonly SubmoduleThreeDot:Locator
    readonly SubmoduleADD:Locator
    readonly SubmoduleEdit:Locator
    readonly SubmoduleSingleDelete:Locator
    readonly SubDeletePopup:Locator
    readonly operationCompletedMsg:Locator
    readonly multipleDelete:Locator
    readonly selectSubModule:Locator
    readonly selectAll:Locator
    readonly deleteAll_btn:Locator
    readonly DeleteAll_confom_btn:Locator
    readonly teachingElementdropDown:Locator
    readonly SelectiDoActivities:Locator
    readonly SelectweDoActivities:Locator
    readonly SelectyouDoActivities:Locator
    readonly SelectAllTeachingElements:Locator
    readonly iDoActivities:Locator
    readonly weDoActivities:Locator
    readonly youDoActivities:Locator
    readonly allTeachingElements:Locator
    readonly cancelButton: Locator;
   
    readonly savingButton: Locator;

    constructor(page: Page) {
        super(page);

        this.AddSubmodule = page.locator("(//button[@title='Add New Sub Module'])[1]");
        this.title = page.locator("//textarea[@id='title']");
        this.describe = page.locator("//textarea[@id='description']");
        this.submoduleCheckbox = page.locator("(//input[@type='checkbox'])[2]");
        this.AddSumodule_btn = page.locator("//div[@class='flex justify-end gap-2']/child::button[@type='submit']");
        this.subModuleText = page.locator("(//span[@class='flex-[0.8] text-center px-2 break-words whitespace-normal overflow-hidden text-ellipsis'])[2]");
        this.ActionSettings = page.locator("//span[text()='More']");
        this.hierarchy = page.locator("(//div[@class='relative']/div)[1]");

        this.SubmoduleThreeDot = page.locator("(//div[@class='flex-[0.2] flex justify-end']//button)[2]")
        this.SubmoduleADD= page.locator("//span[text()='Add']")
        this.SubmoduleEdit= page.locator("//span[text()='Edit']")
        this.SubmoduleSingleDelete= page.locator("//span[text()='Delete']")
        this.SubDeletePopup = page.locator("//div[@class='mt-6 grid grid-cols-2 gap-3']/child::button[text()='Delete']")
        this.operationCompletedMsg = page.locator("//span[text()='Operation completed successfully!']")
        this.multipleDelete= page.locator("//div[text()='Enable']")
        this.selectSubModule= page.locator("(//div[@class='space-y-3']//button)[2]")
        this.selectAll= page.locator("//input[@class='w-4 h-4 cursor-pointer accent-orange-500 rounded']")
        this.deleteAll_btn= page.locator("(//div[@class='flex gap-2 justify-center sm:justify-end w-full sm:w-auto']/child::button)[2]")
        this.DeleteAll_confom_btn= page.locator("(//div[@class='flex gap-3 pt-2']//button[@data-slot='button'])[2]")
        this.teachingElementdropDown=page.locator("(//button[@type='button'])[4]")
        this.SelectiDoActivities=page.getByText('I Do Activities')
        this.SelectweDoActivities=page.getByText('We Do Activities')
        this.SelectyouDoActivities= page.getByText('You Do Activities')
        this.SelectAllTeachingElements=page.getByText('All Teaching Elements')
        this.iDoActivities=page.locator("(//th[text()='I Do Activities'])[1]");
        this.weDoActivities=page.locator("(//th[text()='We Do Activities'])[1]");
        this.youDoActivities=page.locator("(//th[text()='You Do Activities'])[1]");
        this.allTeachingElements=page.locator("(//th[text()='All Teaching Elements'])[1]");
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });

        
        this.savingButton = page.locator("//button[contains(.,'Saving')]");
    }   

    async clickActionSettings() {
        await this.click(this.ActionSettings);
    }

    async addsubmoduleLink() {
        try{
            await this.page.mouse.click(5, 5);
        await this.page.waitForTimeout(300);
        logger.info("waiting for the Add submodule link")
        await this.AddSubmodule.waitFor({ state: "visible" });
        await this.AddSubmodule.scrollIntoViewIfNeeded();
        await this.AddSubmodule.click();
        logger.info("add submodule link is clicked")

        }
        catch(error){
            logger.error(error)
            throw error
        }
        
    }

    async fillTitle_sub(text: string) {
        try{
            await this.fill(this.title, text);
            logger.info("enter the title for the submodule")
        }catch(error){
            logger.error(error)
            throw error
        }
        
    }

    async filldescribe_Sub(text: string) {
        try{
            await this.fill(this.describe, text);
            logger.info("enter the description of the submodule")
        }catch(error){
            logger.error(error)
            throw error
        }
       
    }

    async clickSubmoduleCheckbox() {
        try{
            await this.click(this.submoduleCheckbox);
            logger.info("click the skill checkbox")
        }
        catch(error){
            logger.error(error)
            throw error
        }
        
    }

    async addsubmodule_btn() {
        try{
            await this.click(this.AddSumodule_btn);
            logger.info("click the save button of submodule")
        }catch(error){
            logger.error(error)
            throw error
        }
        
    }

    async getSubmoduleText() {
        try{
            logger.info("return the text of operation complete")
            return await this.locator(this.subModuleText);
            
        }catch(error){
            logger.error(error)
        }
        
    }

    async clickSubmoduleActionSettings() {
        try{
            await this.click(this.ActionSettings);
            logger.info("click the more setting option")
        }catch(error){
            logger.error(error)
            throw error
        }
        
    }

    async clickHierarchy() {
        try{
            await this.click(this.hierarchy);
            logger.info("enable the hierarchy button")
        }catch(error){
            logger.error(error)
            throw error
        }
       
    }

    async clickSubmoduleThreeDot(){
        try{
        await this.page.mouse.click(5,5);
        await this.page.waitForTimeout(300);
        await this.SubmoduleThreeDot.waitFor({ state: "visible" });
        logger.info("waiting for the Submodule setting")
        await this.click(this.SubmoduleThreeDot)
        logger.info("clicked the threeDot of the submodule")

        }catch(error){
            logger.error(error)
        }
        
    }
    async clickSubModuelAdd(){
        try{
            await this.click(this.SubmoduleADD)
            logger.info("click the Add btn to add the submodule")
        }catch(error){
            logger.error(error)
        }
        
        
    }

    async clicksubmoduleEdit(){
        try{
            await this.click(this.SubmoduleEdit)
            logger.info("click the edit button for submodule")
        }
        catch(error){
            logger.error(error)
        }
        
    }
    async selectTeachingElement(element:string){
        switch(element){
            case "I Do Activities":
                await this.click(this.SelectiDoActivities);
                await this.page.mouse.click(5,5)
                break;
            case "We Do Activities":
                await this.click(this.SelectweDoActivities);
                await this.page.mouse.click(5,5)
                break;
            case "You Do Activities":
                await this.click(this.SelectyouDoActivities);
                await this.page.mouse.click(5,5)
                break;
            case "All Teaching Elements":
                await this.click(this.SelectAllTeachingElements);
                await this.page.mouse.click(5,5)
                break;
        }
    }
    async clickDelete(){
        try{
            await this.click(this.SubmoduleSingleDelete)
            logger.info("submodule is deleted ")
        }catch(error){
            logger.error(error)
        }
        
    }
    async clickDeleteConfom(){
        try{
            await this.click(this.SubDeletePopup)

        }catch(error){
            logger.error(error)
        }
        
    }

    async operationCompledText(){
        try{
        await this.operationCompletedMsg.waitFor({ state: "visible" });
        logger.info("return the opration completed text")
        return this.operationCompletedMsg.textContent()
        
        }catch(error){
            logger.error(error)
        }
        
    }

    async clickSaveAndCancel() {
        try{
            await this.AddSumodule_btn.click();
            await this.cancelButton.click();
            await this.page.waitForTimeout(7000);

        }catch(error){
            logger.error(error)
        }
}
async verifySubmoduleNotAdded(title: string) {
    const locator = this.page.locator(`text=${title}`);
    return await locator.isVisible().catch(() => false);

}

    async clickmultipleDelete(){
        try{
            await this.click(this.multipleDelete)
            logger.info("multipleDelete button clicked")
        }catch(error){
            logger.error(error)
        }
    }
    async clickSubmoduleToDelete(){
        try{
            await this.click(this.selectSubModule)
            logger.info("seleted the submodule")
        }catch(error){
            logger.error(error)
        }
    }
    async clickSelectAllBTN(){
        try{
            await this.click(this.selectAll)
            logger.info("seleted all the submodule")
        }catch(error){
            logger.error(error)
        }
    }
    async clickDelrtrAll(){
        try{
            await this.click(this.deleteAll_btn)
            logger.info("selected delete all button")
        }catch(error){
            logger.error(error)
        }
    }
    async clickDeleteAllConfom(){
        try{
            await this.click(this.DeleteAll_confom_btn)
            logger.info("clicked confom delete button of popup")
        }catch(error){
            logger.error(error)
        }
    }

    async clickDropDownTeaching(){
        try{
           await this.click(this.teachingElementdropDown)
            logger.info("click DropDown Of teaching element")
        }catch(error){
            logger.error(error)
        }
    }
}