import { expect, Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class TopicPage extends basepage {
    private courses: Locator;
    private nextButton: Locator;
    private addTopic: Locator;
    private title: Locator;
    private description: Locator;
    private save: Locator;
    private cancel: Locator;
    private courseNameList:Locator;
    private actionList: Locator;
    private previous:Locator;
    private loading:Locator;

    constructor(page: Page) {
    super(page);

    this.courses = page.getByTitle("Course Management");

    this.courseNameList = page.locator("//tbody/tr/td[3]");

    this.actionList = page.locator("//tbody/tr//button[@title='Add Course Structure']");

    this.previous = page.getByRole("button", { name: "Previous" });

    this.nextButton = page.getByRole("button", { name: "Next" });

    this.loading = page.locator(".animate-pulse");

    this.addTopic = page.getByRole("button", { name: "Add Topic" });

    this.title = page.getByPlaceholder("Enter Title");

    this.description = page.getByPlaceholder("Enter Description");

    this.save = page.getByRole("button", { name: "Save" });

    this.cancel = page.getByRole("button", { name: "Cancel" });
    }

    async navigateToCourses() {
    await this.click(this.courses);

    await this.page.waitForLoadState("networkidle");

    console.log(await this.page.title());

    console.log(this.page.url());
    }

    async clickAddCourseStructure(courseName: string) {

    const rows = this.page.locator("tbody tr");

    const count = await rows.count();

    for (let i = 0; i < count; i++) {

        const row = rows.nth(i);

        const rowText = await row.innerText();

        if (rowText.includes(courseName)) {

            await this.click(
                row.getByRole("button", {
                    name: "Add Course Structure"
                })
            );

            return;
        }
    }

    throw new Error(`Course '${courseName}' not found.`);
    }

    async clickAddTopic() {
        await this.click(this.addTopic);
    }

    async enterTopicDetails(title: string, description: string) {

        await this.fill(this.title, title);

        await this.fill(this.description, description);

    }

    async clickSave() {
        await this.click(this.save);
    }

    async clickCancel() {
        await this.click(this.cancel);
    }
    async verifyTopicCreated(title: string) {

        const topic = this.page.getByText(title, { exact: true });

        await expect(topic).toBeVisible();

    }

}