import {Page,Locator} from '@playwright/test'

export class basepage{
    protected page:Page

    constructor(page:Page){
        this.page = page
    }

    async click(locator:Locator){
        await this.click(locator)
    }

    async fill(locator:Locator,text:string){
        await this.fill(locator,text)
    }
    async getText(locator:Locator){
        await locator.textContent()
    }

    async Locator(locator:Locator){
        return locator
    }
    async scroll(locator:Locator){
        await locator.scrollIntoViewIfNeeded()
    }


}