import { Page, Locator } from '@playwright/test';
import { logger } from '../Utilities/logger'; 

export class basepage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator) {
        logger.info(`Clicking element: ${locator}`);
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        logger.info(`Filling element ${locator} with text: ${text}`);
        await locator.fill(text);
    }

    async getText(locator: Locator) {
        logger.info(`Getting text content from element: ${locator}`);
        return await locator.textContent(); // Added missing return to ensure the text is actually usable
    }

    async scroll(locator: Locator) {
        logger.info(`Scrolling to element: ${locator}`);
        await locator.scrollIntoViewIfNeeded();
    }

    async doubleClick(locator: Locator) {
        logger.info(`Double-clicking element: ${locator}`);
        await locator.dblclick();
    }
    
    async isVisible(locator: Locator): Promise<boolean> {
        const visible = await locator.isVisible();
        logger.info(`Element ${locator} visibility status: ${visible}`);
        return visible;
    }

    async isEnabled(locator: Locator): Promise<boolean> {
        const enabled = await locator.isEnabled();
        logger.info(`Element ${locator} enabled status: ${enabled}`);
        return enabled;
    }

    async isChecked(locator: Locator): Promise<boolean> {
        const checked = await locator.isChecked();
        logger.info(`Element ${locator} checked status: ${checked}`);
        return checked;
    }
    async check(locator: Locator) {
        return await locator.check()
    }
    async locator(locator:Locator){
        return locator
    }
}
