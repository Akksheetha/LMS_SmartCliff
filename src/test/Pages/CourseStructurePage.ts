import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class CourseStructurePage extends basepage {

    readonly morebtn: Locator
    readonly checkbox: Locator
    readonly threedot: Locator
    readonly addbtn : Locator
    readonly selectbtn : Locator
    readonly addbtn2 : Locator


    constructor(page: Page) {
        super(page);
        this.morebtn = page.locator("/html/body/div[3]/div/main/div/div[1]/div/div[3]/div/div[1]/div/div[1]/div[1]/button")
        this.checkbox = page.locator("/html/body/div[3]/div/main/div/div[1]/div/div[3]/div/div[1]/div/div[1]/div[1]/div[1]/div[2]/div[3]/label/div[2]/input")
        this.threedot = page.locator("/html/body/div[3]/div/main/div/div[1]/div/div[3]/div/div[2]/div/div[1]/div[2]/div/table/tbody/tr[1]/td[3]/div/div[2]/button")
        this.addbtn = page.locator("//*[@id='menu-level-6a4d3e8e31cdaae3c856020e-placeholder']/button[1]")
        this.selectbtn = page.locator("//*[@id='radix-«r10»']/div[2]/div[1]/button")
        this.addbtn2 = page.locator("//*[@id='radix-«r10»']/div[2]/div[2]/button[2]")
    }

    async clickActionSettings(){
        await this.click(this.morebtn)
    }

    async enableDirectAction() {
        await this.check(this.checkbox)
        await this.click(this.morebtn)
    }

    async clickThreedot() {
        await this.click(this.threedot)
    }
    async clickAddBtn() {
        await this.click(this.addbtn)
    }
    async clickSelectBtn() {
        await this.click(this.selectbtn)
        await this.click(this.addbtn2)
    }
    
}