import { Given, When ,Then} from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import loginData from "../testData/LoginData.json";

const validUser = loginData.validUser;
const expected = loginData.expected;


Given("User launches the LMS application", async function (this: CustomWorld) {

    await this.loginPage.launchApplication(process.env.BASEURL!);

});

When("User enters a valid email", async function (this: CustomWorld) {

    await this.loginPage.enterEmail(validUser.email);

});

When("User enters a valid password", async function (this: CustomWorld) {

    await this.loginPage.enterPassword(validUser.password);

});
When("User clicks on the Sign In button", async function (this: CustomWorld) {

    await this.loginPage.clickLoginButton();

});
Then("User should be see the Learning Hub Heading", async function (this: CustomWorld) {

    await this.loginPage.verifyLearningHubHeading();

});

When("User enters {string} in the email field", async function (this: CustomWorld, email: string) {

    await this.loginPage.enterEmail(email);

});

When("User enters {string} in the password field", async function (this: CustomWorld, password: string) {

    await this.loginPage.enterPassword(password);

});

Then("User should see the {string} validation message", async function (this: CustomWorld, testCase: string) {

    if (testCase === "InvalidEmail" || testCase === "BothInvalid") {
        await this.loginPage.verifyEmailError(expected.emailError);
    } else if (testCase === "InvalidPassword") {
        await this.loginPage.verifyPasswordError(expected.passwordError);
    } else if (testCase === "EmptyFields") {
        await this.loginPage.verifyRequiredField(expected.requiredField);
    }

});