import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

export class EditPage extends basepage {

    readonly laterBtn: Locator

    constructor(page: Page) {
        super(page)
        this.laterBtn = page.locator("//div[@class='flex justify-end gap-3 pt-2']//button[1]")
    }

    private getNextBtn() {
        return this.page.getByRole('dialog').locator('button', { hasText: 'Next' }).last()
    }

    private getPreviewBtn() {
        return this.page.getByRole('dialog').locator("//button[text()='Preview & Update']")
    }

    private getSaveBtn() {
        return this.page.getByRole('dialog').getByText(" Save Course Layout")
    }

    async clicknextbtn() {
        try {
            await this.page.waitForTimeout(1000)
            const btn = this.getNextBtn()
            await btn.waitFor({ state: 'visible', timeout: 10000 })
            await btn.click()
            logger.info("clicked the next button")
        } catch (error) {
            logger.error(error)
        }
    }

    async clickpreviousandUpdate() {
        try {
            const btn = this.getPreviewBtn()
            await btn.click()
            logger.info("clicked preview and update button")
        } catch (error) {
            logger.error(error)
        }
    }

    async clickSaveCourse() {
        try {
            const btn = this.getSaveBtn()
            await btn.click()
            logger.info("clicked the save button")
            await this.click(this.laterBtn)
        } catch (error) {
            logger.error(error)
        }
    }

    async selectOthersCustomName() {
        try {
            const dialog = this.page.getByRole('dialog')
            await dialog.locator('[role="combobox"]').first().waitFor({ state: 'visible', timeout: 30000 })

            // If "Others (Custom Name)" is already selected, the text input is visible instead of combobox
            const customInput = dialog.getByRole('textbox', { name: 'Enter custom course name' })
            if (await customInput.isVisible({ timeout: 2000 }).catch(() => false)) {
                logger.info("Others (Custom Name) already selected, skipping dropdown")
                return
            }

            // Find Course Name combobox: label > parent div > sibling button[role=combobox]
            const combobox = dialog.locator(`xpath=//label[contains(text(),'Course Name')]/../..//button[@role='combobox']`)
            await combobox.click()
            logger.info("opened course name dropdown")
            await this.page.waitForTimeout(500)
            await this.page.getByRole('option', { name: 'Others (Custom Name)' }).click()
            logger.info("selected Others (Custom Name)")
        } catch (error) {
            logger.error(error)
        }
    }

    async typeCustomCourseName(name: string) {
        try {
            const input = this.page.getByRole('dialog').getByRole('textbox', { name: 'Enter custom course name' })
            await input.waitFor({ state: 'visible', timeout: 5000 })
            await input.clear()
            await input.fill(name)
            logger.info("typed custom course name: " + name)
        } catch (error) {
            logger.error(error)
        }
    }
}
