import {Page,Locator} from '@playwright/test'

export class basepage{
    protected page:Page

    constructor(page:Page){
        this.page = page
    }
    async click(locator: Locator) {
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.fill(text);
    }

    async getText(locator:Locator){
        await locator.textContent()
    }

    async scroll(locator:Locator){
        await locator.scrollIntoViewIfNeeded()
    }

    async doubleClick(locator: Locator) {
        await locator.dblclick();
    }
    
    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }

    async isEnabled(locator: Locator): Promise<boolean> {
        return await locator.isEnabled();
    }

    async isChecked(locator: Locator): Promise<boolean> {
        return await locator.isChecked();
    }
}