import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class LoginPage extends basepage {

    readonly email: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;
    readonly welcomeMessage: Locator;
    readonly emailError: Locator;
    readonly passwordError: Locator;

    constructor(page: Page) {
        super(page);

        this.email = page.locator("//input[@type='email']");
        this.password = page.locator("//input[@type='password']");
        this.loginButton = page.locator("//button[@type='submit']")

        this.welcomeMessage = page.getByText("Welcome back");
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
        await this.click(this.loginButton);
    }

    async verifyDashboard() {
        await expect(this.page).toHaveURL("https://lms-smartcliff.vercel.app/lms/pages/admindashboard");
    }

    async verifyWelcomeMessage(expectedMessage: string) {
        await expect(this.welcomeMessage).toContainText(expectedMessage);
    }

    async verifyEmailError(expectedMessage: string) {
        await expect(this.emailError).toHaveText(expectedMessage);
    }

    async verifyPasswordError(expectedMessage: string) {
        await expect(this.passwordError).toHaveText(expectedMessage);
    }

    async verifyRequiredField(expectedMessage: string) {

        const validationMessage = await this.email.evaluate(
            (element: any) => element.validationMessage
        );

        expect(validationMessage).toBe(expectedMessage);
    }

}