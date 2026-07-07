import {Page,Browser,BrowserContext} from "@playwright/test"
import { World, setWorldConstructor} from "@cucumber/cucumber"

export class CustomWorld extends World {
    browser !: Browser
    context !: BrowserContext
    page !: Page
}

setWorldConstructor(CustomWorld)

