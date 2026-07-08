import { Download, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class CourseStructurePage extends basepage {

    readonly morebtn: Locator
    readonly checkbox: Locator
    readonly threedot: Locator
    readonly addbtn : Locator
    readonly selectbtn : Locator
    readonly addbtn2 : Locator
    readonly selectvalue : Locator
    readonly printBtn : Locator
    readonly excelBtn : Locator


    constructor(page: Page) {
        super(page);
        this.morebtn = page.getByRole('button', { name: 'More' })
        this.checkbox = page.locator("//span[text()='Direct Actions']")
        this.threedot = page.locator(`//tr[td[contains(., 'Javascript')]]//button`)
        this.addbtn = page.getByRole('button', { name: 'Add' })
        this.selectbtn = page.getByRole('combobox', { name: 'Select level' })
        this.addbtn2 = page.getByRole('button', { name: 'Add' })
        this.selectvalue = page.locator("//span[text()='Easy']")
        this.printBtn = page.getByRole('button', { name: 'Print' })
        this.excelBtn = page.getByRole('button', { name: 'Excel' })
    }

    async clickActionSettings(){
        await this.click(this.morebtn)
    }

    async enableDirectAction() {
        await this.click(this.checkbox)
        await this.page.mouse.click(5,5)
        await this.page.waitForTimeout(3000)
    }

    async clickThreedot() {
        await this.click(this.threedot)
    }
    async clickAddBtn() {
        await this.click(this.addbtn)
    }
    async clickSelectBtn() {
        await this.click(this.selectbtn)
        await this.click(this.selectvalue)
        await this.click(this.addbtn2)
    }
    async clickPrint() {
        await this.click(this.printBtn)
    }

async clickExcel(): Promise<Download> {
    const downloadPromise = this.page.waitForEvent("download");
    await this.click(this.excelBtn);
    const download = await downloadPromise;
    await download.saveAs(`downloads/${await download.suggestedFilename()}`);
    await this.page.waitForTimeout(5000);
    return download;
}
}