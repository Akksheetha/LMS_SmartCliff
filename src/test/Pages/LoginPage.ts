import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class LoginPage extends basepage {

    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;
    readonly learningHub: Locator;

    constructor(page: Page) {
        super(page);

        this.email = page.locator("//input[@type='email']");
        this.password = page.locator("//input[@type='password']");
        this.loginButton = page.locator("//button[@type='submit']")
        this.learningHub = page.locator("span.text-gray-800", { hasText: "Learning Hub" });
        this.emailError = page.getByText("Email is invalid");
        this.passwordError = page.getByText("Password is incorrect");
    }

    async launchApplication(url: string) {
        await this.page.goto(url);
    }

    async enterEmail(email: string) {
        await this.fill(this.email, email);
    }

    async enterPassword(password: string) {
        await this.fill(this.password, password);
    }

    async clickLoginButton() {
    const responsePromise = this.page.waitForResponse((res) => res.url().includes("/login") && res.request().method() === "POST",{timeout: 15000 }).catch(() => null);

    await this.click(this.loginButton);
    await responsePromise;
    }
    async verifyLearningHubHeading() {
        await this.page.waitForURL("**/admindashboard", { timeout: 15000 });
        await expect(this.learningHub).toBeVisible({ timeout: 15000 });
    }


    async verifyEmailError(expectedMessage: string) {
        await expect(this.emailError).toBeVisible({ timeout: 10000 });
        await expect(this.emailError).toHaveText(expectedMessage);
    }

    async verifyPasswordError(expectedMessage: string) {
        await this.page.waitForTimeout(1000); 
        await expect(this.passwordError).toBeVisible({ timeout: 15000 });
        await expect(this.passwordError).toHaveText(expectedMessage);
    }

    async verifyRequiredField(expectedMessage: string) {

        const validationMessage = await this.email.evaluate(
            (element: any) => element.validationMessage
        );

        expect(validationMessage).toBe(expectedMessage);
    }

}