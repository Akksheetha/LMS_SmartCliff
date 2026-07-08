import {Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

export class CourseStructurePage extends basepage {
    readonly printBtn : Locator
    readonly excelBtn : Locator

    constructor(page: Page) {
        super(page);
        this.printBtn = page.getByRole('button', { name: 'Print' })
        this.excelBtn = page.getByRole('button', { name: 'Excel' })
    }

    async clickPrint() {
        try{
            await this.click(this.printBtn)
            logger.info("Clicked Print Button")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async clickExcel() {
        try{
            const downloadPromise = this.page.waitForEvent("download")
            await this.click(this.excelBtn)
            const download = await downloadPromise
            return download
        }catch(error) {
            logger.error(error)
            throw error
        }
    }
}