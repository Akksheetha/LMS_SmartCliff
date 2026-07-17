import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

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
        this.loginButton = page.locator("//button[@type='submit']");
        this.learningHub = page.locator("span.text-gray-800", { hasText: "Learning Hub" });
        this.emailError = page.getByText("Email is invalid");
        this.passwordError = page.getByText("Password is incorrect");
    }

    async launchApplication(url: string) {
        logger.info(`Launching application: ${url}`);
        
        await this.page.goto(url);
    }

    async enterEmail(email: string) {
        logger.info(`Entering Email: ${email}`);
        await this.fill(this.email, email);
    }

    async enterPassword(password: string) {
        logger.info("Entering Password.");
        await this.fill(this.password, password);
    }

    async clickLoginButton() {

        logger.info("Clicking Login button.");

        const responsePromise = this.page.waitForResponse(
            (res) =>
                res.url().includes("/login") &&
                res.request().method() === "POST",
            { timeout: 15000 }
        ).catch(() => null);

        await this.click(this.loginButton);

        await responsePromise;

        logger.info("Login request completed.");
    }

    async verifyLearningHubHeading() {

        logger.info("Verifying Learning Hub page.");

        await this.page.waitForURL("**/admindashboard", { timeout: 15000 });
        await expect(this.learningHub).toBeVisible({ timeout: 15000 });

        logger.info("Learning Hub verified successfully.");
    }

    async verifyEmailError(expectedMessage: string) {

        logger.info("Verifying Email validation message.");

        await expect(this.emailError).toBeVisible({ timeout: 10000 });
        await expect(this.emailError).toHaveText(expectedMessage);

        logger.info("Email validation verified.");
    }

    async verifyPasswordError(expectedMessage: string) {

        logger.info("Verifying Password validation message.");

        await this.page.waitForTimeout(1000);

        await expect(this.passwordError).toBeVisible({ timeout: 15000 });
        await expect(this.passwordError).toHaveText(expectedMessage);

        logger.info("Password validation verified.");
    }

    async verifyRequiredField(expectedMessage: string) {

        logger.info("Verifying Required Field validation.");

        const validationMessage = await this.email.evaluate(
            (element: any) => element.validationMessage
        );

        expect(validationMessage).toBe(expectedMessage);

        logger.info("Required Field validation verified.");
    }
}