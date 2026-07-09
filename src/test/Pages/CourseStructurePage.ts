import {Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

export class CourseStructurePage extends basepage {
    readonly printBtn : Locator
    readonly excelBtn : Locator
    readonly addallbtn : Locator
    readonly errmessage : Locator

    constructor(page: Page) {
        super(page);
        this.printBtn = page.getByRole('button', { name: 'Print' })
        this.excelBtn = page.getByRole('button', { name: 'Excel' })
        this.addallbtn = page.locator('#export-all')
        this.errmessage = page.locator('h3.mt-2.text-sm.font-medium.text-gray-900:visible')
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
            logger.info("Clicked Excel button")
            const download = await downloadPromise
            return download
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async uncheckAddAll() {
        try{
            await this.uncheck(this.addallbtn)
            logger.info("Unchecked Add all module")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async geterrMessage() {
        try {
            await this.getText(this.errmessage)
            logger.info("Get text of Error Message")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

}