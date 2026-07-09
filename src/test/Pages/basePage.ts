import { Page, Locator } from '@playwright/test';

export class basepage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async getText(locator: Locator) {
        return await locator.textContent();
    }

    async scroll(locator: Locator) {
        await locator.scrollIntoViewIfNeeded();
    }

    async doubleClick(locator: Locator) {
        await locator.dblclick();
    }
    
    async isVisible(locator: Locator){
        const visible = await locator.isVisible();
        return visible;
    }

    async isEnabled(locator: Locator){
        const enabled = await locator.isEnabled();
        return enabled;
    }

    async isChecked(locator: Locator){
        const checked = await locator.isChecked();
        return checked;
    }
    async check(locator: Locator) {
        await locator.check()
    }
    
    async locator(locator:Locator){
        return locator
    }

    async uncheck(locator:Locator) {
        await locator.uncheck()
    }
}
