import { Given, When } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import loginData from "../testData/LoginData.json";

const validUser = loginData.validUser;
const invalidEmail = loginData.invalidEmail;
const invalidPassword = loginData.invalidPassword;

Given("User launches the LMS application", async function (this: CustomWorld) {

    await this.loginPage.launchApplication(process.env.BASEURL!);

});

When("User enters a valid email", async function (this: CustomWorld) {

    await this.loginPage.enterEmail(validUser.email);

});

When("User enters a valid password", async function (this: CustomWorld) {

    await this.loginPage.enterPassword(validUser.password);

});

When("User enters an invalid email", async function (this: CustomWorld) {

    await this.loginPage.enterEmail(invalidEmail.email);

});

When("User enters an incorrect password", async function (this: CustomWorld) {

    await this.loginPage.enterPassword(invalidPassword.password);

});

When("User leaves the email field empty", async function (this: CustomWorld) {

    await this.loginPage.enterEmail("");

});

When("User leaves the password field empty", async function (this: CustomWorld) {

    await this.loginPage.enterPassword("");

});

When("User clicks on the Sign In button", async function (this: CustomWorld) {

    await this.loginPage.clickLoginButton();

});