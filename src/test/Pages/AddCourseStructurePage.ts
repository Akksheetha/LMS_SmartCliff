import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class AddCourseStructurePage extends basepage {

    readonly morebtn: Locator;
    readonly checkbox: Locator;
    readonly threedot: Locator;
    readonly addbtn: Locator;
    readonly selectbtn: Locator;
    readonly addbtn2: Locator;

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

    constructor(page: Page) {
        super(page);

        this.morebtn = page.locator("/html/body/div[3]/div/main/div/div[1]/div/div[3]/div/div[1]/div/div[1]/div[1]/button");
        this.checkbox = page.locator("/html/body/div[3]/div/main/div/div[1]/div/div[3]/div/div[1]/div/div[1]/div[1]/div[1]/div[2]/div[3]/label/div[2]/input");
        this.threedot = page.locator("/html/body/div[3]/div/main/div/div[1]/div/div[3]/div/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[3]/div/div[2]/button");
        this.addbtn = page.locator("//*[@id='menu-level-6a4d3e8e31cdaae3c856020e-placeholder']/button[1]");
        this.selectbtn = page.locator("//*[@id='radix-«r10»']/div[2]/div[1]/button");
        this.addbtn2 = page.locator("//*[@id='radix-«r10»']/div[2]/div[2]/button[2]");

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


    }

    async clickActionSettings() {
        await this.click(this.ActionSettings);
    }

    async enableDirectAction() {
        await this.check(this.checkbox);
        await this.click(this.morebtn);
    }

    async clickThreedot() {
        await this.click(this.threedot);
    }

    async clickAddBtn() {
        await this.click(this.addbtn);
    }

    async clickSelectBtn() {
        await this.click(this.selectbtn);
        await this.click(this.addbtn2);
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
}