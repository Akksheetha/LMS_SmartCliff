import { Locator, Page } from "@playwright/test";

export class basepage {

    constructor(protected page: Page) {}

    async click(locator: Locator) {
        await locator.waitFor({ state: "visible" });
        await locator.click();
    }

    async fill(locator: Locator, text: string) {
        await locator.waitFor({ state: "visible" });
        await locator.fill(text);
    }

    async Locator(locator: Locator) {
        return await locator.textContent();
    }
}