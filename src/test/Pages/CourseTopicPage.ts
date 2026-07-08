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

    constructor(page: Page) {
        super(page);
        this.courses = page.getByTitle("Course Management");
        this.nextButton = page.getByRole("button", { name: "Next" });
        this.addTopic = page.getByRole("button", { name: "Add Topic" });
        this.title = page.getByPlaceholder("Enter Title");
        this.description = page.getByPlaceholder("Enter Description");
        this.save = page.getByRole("button", { name: "Save" });
        this.cancel = page.getByRole("button", { name: "Cancel" });
    }

    async navigateToCourses() {
        await this.click(this.courses);
    }

    async clickAddCourseStructure(courseCode: string) {

    while (true) {

        const rows = this.page.locator("tbody tr");
        const count = await rows.count();

        for (let i = 0; i < count; i++) {

            const row = rows.nth(i);
            const text = await row.textContent();

            if (text?.includes(courseCode)) {

                await this.click(
                    row.getByRole("button", {
                        name: "Add Course Structure"
                    })
                );

                return;
            }
        }

        if (!(await this.isEnabled(this.nextButton))) {
            break;
        }

        await this.click(this.nextButton);
        await this.page.waitForLoadState("networkidle");
    }

    throw new Error(`Course '${courseCode}' not found.`);
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