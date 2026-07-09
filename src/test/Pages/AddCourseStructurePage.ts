import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

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
    }

    async clickActionSettings() {
        await this.click(this.ActionSettings);
    }

    async addsubmoduleLink() {
        await this.page.mouse.click(5, 5);
        await this.page.waitForTimeout(300);
        await this.AddSubmodule.waitFor({ state: "visible" });
        await this.AddSubmodule.scrollIntoViewIfNeeded();
        await this.AddSubmodule.click();
    }

    async fillTitle_sub(text: string) {
        await this.fill(this.title, text);
    }

    async filldescribe_Sub(text: string) {
        await this.fill(this.describe, text);
    }

    async clickSubmoduleCheckbox() {
        await this.click(this.submoduleCheckbox);
    }

    async addsubmodule_btn() {
        await this.click(this.AddSumodule_btn);
    }

    async getSubmoduleText() {
        return await this.locator(this.subModuleText);
    }

    async clickSubmoduleActionSettings() {
        await this.click(this.ActionSettings);
    }

    async clickHierarchy() {
        await this.click(this.hierarchy);
    }

    async clickSubmoduleThreeDot(){
        await this.page.mouse.click(5, 5);
        await this.page.waitForTimeout(300);
        await this.SubmoduleThreeDot.waitFor({ state: "visible" });
        await this.AddSubmodule.scrollIntoViewIfNeeded();
        await this.click(this.SubmoduleThreeDot)
    }
    async clickSubModuelAdd(){
        await this.click(this.SubmoduleADD)
    }

    async clicksubmoduleEdit(){
        await this.click(this.SubmoduleEdit)
    }
    async clickDelete(){
        await this.click(this.SubmoduleSingleDelete)
    }
    async clickDeleteConfom(){
        await this.click(this.SubDeletePopup)
    }

    async operationCompledText(){
        await this.operationCompletedMsg.waitFor({ state: "visible" });
        return this.operationCompletedMsg.textContent()
    }
}