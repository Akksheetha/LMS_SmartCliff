import { Page, Locator } from '@playwright/test';
import { logger } from '../Utilities/logger';

export class basepage {
    protected page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async click(locator: Locator) {
        try{
            await locator.click();
        }
        catch(error){
            throw error;
        }
    }

    async fill(locator: Locator, text: string) {
        try{
        await locator.fill(text);
        }
        catch(error){
            throw error;
        }
    }

    async getText(locator: Locator) {
        try{
            return await locator.textContent();
        }
        catch(error){
            throw error;
        }
        
    }

    async scroll(locator: Locator) {
        try{
            await locator.scrollIntoViewIfNeeded();
        }
        catch(error){
            throw error;
        }
        
    }

    async doubleClick(locator: Locator) {
        try{
            await locator.dblclick();
        }
        catch(error){
            throw error;
        }
        
    }
    
    async isVisible(locator: Locator){
        try{
            const visible = await locator.isVisible();
        return visible;
        }
        catch(error){
            throw error;
        }
        
    }

    async isEnabled(locator: Locator){
        try{
            const enabled = await locator.isEnabled();
            return enabled;
        }
        catch(error){
            throw error;
        }
        
    }

    async isChecked(locator: Locator){
        try{
            const checked = await locator.isChecked();
            return checked;
        }
        catch(error){
            throw error;
        }
        
    }
    async check(locator: Locator) {
        try{
            await locator.check();
        }
        catch(error){
            throw error;
        }
        
    }
    async locator(locator:Locator){
        try{
            return locator;
        }
        catch(error){
            throw error;
        }
    }

    async uncheck(locator:Locator) {
        try{
            await locator.uncheck()
        }
        catch(error){
            throw error;
        }
    }
}
