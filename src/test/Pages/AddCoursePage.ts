import { Page, Locator, expect } from '@playwright/test';
import { basepage } from './basePage';

export class AddcoursePage extends basepage {

  readonly addCourseButton: Locator;
  readonly modalTitle: Locator;

  readonly client: Locator;
  readonly servicetype: Locator;
  readonly servicemodel: Locator;
  readonly coursecategory: Locator;
  readonly courseName: Locator;

  readonly nextButton: Locator;

  readonly courselevel: Locator;

  // Hierarchy Checkboxes
  readonly module: Locator;
  readonly submodule: Locator;
  readonly topic: Locator;
  readonly subtopic: Locator;
  readonly ido: Locator;
  readonly youdo: Locator;
 readonly iDoTab: Locator;
 readonly youDoTab: Locator;
  readonly resoursetype: Locator;
  readonly skillset: Locator;
  readonly c: Locator;
readonly cpp: Locator;
readonly java: Locator;
readonly python: Locator;

readonly html: Locator;
readonly css: Locator;
readonly javascript: Locator;
readonly react: Locator;
readonly nextjs: Locator;

readonly mongodb: Locator;
readonly mysql: Locator;
 readonly courseId: Locator;

  readonly createButton: Locator;
  readonly savecourselayout: Locator;
  readonly successMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.addCourseButton = page.getByRole('button', { name: 'Add Course' });

    this.modalTitle = page.locator("//span[contains(text(),'Create New Course Setup')]");

    // Step 1
    this.client = page.locator("//div[@class='w-full space-y-5 font-sans']//div[1]//div[1]//button[1]");

    this.servicetype = page.getByText("Select service type");

    this.servicemodel = page.getByText("Select service model");
    this.courseId = page.locator("#courseId");

    this.coursecategory = page.getByText("Select category", { exact: true });

    this.courseName = page.getByText("Select course name");

    this.nextButton = page.locator("button").filter({ hasText: "Next" }).last();

    this.courselevel = page.getByText("Select Level");

    this.module =page.locator("#module-checkbox");
    this.submodule = page.locator("#submodule-checkbox");
    this.topic =page.locator("#topic-checkbox");
    this.subtopic = page.locator("#subtopic-checkbox");
    this.ido = page.locator('button').filter({ hasText: 'Select' }).first()
    //   this.wedo =page.locator("//button[@aria-controls='radix-«rrt»']")

    this.youdo =page.locator('button').filter({ hasText: 'Select' }).last();
    this.iDoTab =page.getByRole('button', { name: 'I Do0 active' })
    this.youDoTab =page.getByRole('button', { name: /You Do0 active/i });
    this.resoursetype = page.locator("//input[@placeholder='Select Resource Type']");
    this.skillset = page.locator("//input[@placeholder='Select Skill Set']");
    // Core Programming Languages
    this.c = page.locator("//div[@class='space-y-5']//div[1]//div[2]//label[1]//input[1]");
    this.cpp = page.locator("div[class='space-y-5'] div:nth-child(1) div:nth-child(2) label:nth-child(1) input:nth-child(1)")
    this.java =page.getByLabel('☕Java', { exact: true })
    this.python = page.getByLabel('🐍Python', { exact: true })

    // Frontend Technologies
    this.html = page.locator("//div[@class='flex-1 min-h-0 overflow-hidden bg-white dark:bg-gray-900']//div[2]//div[2]//label[1]//input[1]");
    this.css =page.getByLabel('🎨CSS', { exact: true })
    this.javascript = page.locator("//label[contains(.,'JavaScript')]/preceding-sibling::input");
    this.react = page.locator("//label[contains(.,'React')]/preceding-sibling::input");
    this.nextjs = page.locator("//label[contains(.,'Next.js')]/preceding-sibling::input");

    // Database Technologies
    this.mongodb = page.locator("//label[contains(.,'MongoDB')]/preceding-sibling::input");
    this.mysql = page.locator("//div[@class='space-y-2']//label[1]//input[1]");
    this.createButton = page.getByRole("button", { name: "Create" });
    this.savecourselayout = page.locator("//button[normalize-space()='Save Course Layout']");
    this.successMessage = page.locator("//section[@aria-label='Notifications Alt+T']");
  }


  async selectDropdown(dropdown: Locator, value: string) {

    await dropdown.click();

    await this.page.getByText(value, { exact: true }).click();

  }
  async addCoursebtn() {

    await this.click(this.addCourseButton);

  }

  async isModalVisible() {

    return await this.isVisible(this.modalTitle);

  }
async fillCourse(data: any) {
    await this.selectDropdown(this.client, data.courseClient);

    await this.selectDropdown(this.servicetype, data.serviceType);

    await this.selectDropdown(this.servicemodel, data.serviceModel);

    // Course ID auto-generates right after Service Model is selected —
    // wait for it to actually populate instead of a fixed sleep
    await expect(this.courseId).not.toHaveValue('', { timeout: 15000 });

    await this.selectDropdown(this.coursecategory, data.courseCategory);

    await this.selectDropdown(this.courseName, data.courseName);
}

  async clickNext() {

    

    await this.click(this.nextButton);

  }

  async selectCourseHierarchy(hierarchy: string[]) {

    for (const item of hierarchy) {

      switch (item.toLowerCase()) {

        case "module":
          await this.module.click();
          break;

        case "submodule":
          await this.submodule.click();
          break;

        case "topic":
          await this.topic.click();
          break;

        case "subtopic":
          await this.subtopic.click();
          break;

        default:
          throw new Error(`Unknown hierarchy : ${item}`);
      }
    }
  }
  async fillCourseHierarchyAndLayout(data: any) {

    await this.selectDropdown(this.courselevel, data.courseLevel);
    await this.selectCourseHierarchy(data.courseHierarchy);

    await this.selectDropdown(this.ido, data.pedagogy.iDo);

    //   await this.selectDropdown(this.wedo, data.pedagogy.weDo);

    await this.selectDropdown(this.youdo, data.pedagogy.youDo);

  }
 async enableResource(resource: string) {

    const toggle = this.page
        .locator(`//div[contains(.,'${resource}')]//button[@role='switch']`)
        .first();

    const checked = await toggle.getAttribute("aria-checked");

    if (checked === "false") {
        await toggle.click();
    }
}

async configureResourceType(data: any) {

    const resourceTypes = data.resourceTypes;

    // I Do
    if (resourceTypes.iDo) {
        for (const resource of resourceTypes.iDo) {
            await this.enableResource(resource);
        }
    }

    // You Do
    if (resourceTypes.youDo) {
        await this.page.getByText("You Do", { exact: true }).click();

        for (const resource of resourceTypes.youDo) {
            await this.enableResource(resource);
        }
    }

    await this.page.getByText("I Do", { exact: true }).click();
}
 async selectSkill(skills: string[]) {

  for (const item of skills) {

    switch (item.toLowerCase()) {

      case "c":
        await this.c.click();
        break;

      case "c++":
        await this.cpp.click();
        break;

      case "java":
        await this.java.click();
        break;

      case "python":
        await this.python.click();
        break;

      case "html":
        await this.html.click();
        break;

      case "css":
        await this.css.click();
        break;

      case "javascript":
        await this.javascript.click();
        break;

      case "react":
        await this.react.click();
        break;

      case "next.js":
        await this.nextjs.click();
        break;

      case "mongodb":
        await this.mongodb.click();
        break;

      case "mysql":
        await this.mysql.click();
        break;

      default:
        throw new Error(`Unknown Skill : ${item}`);
    }
  }
}
  async clickCreate() {

    await this.click(this.createButton);
    await this.click(this.savecourselayout);

  }

  async isCourseCreatedSuccessfully() {

    return await this.successMessage
      .getByText("Course created successfully")
      .isVisible();

  }
  // Fills only the Course Client dropdown — used for the negative/validation scenario
async selectClientOnly(courseClient: string) {
    await this.selectDropdown(this.client, courseClient);
}

private validationError(message: string): Locator {
    return this.page.getByText(message, { exact: true });
}

async verifyValidationErrors(expectedMessages: string[]) {
    for (const message of expectedMessages) {
        await expect(this.validationError(message)).toBeVisible();
    }
}
}