import { Page, Locator, expect } from '@playwright/test';
import { basepage } from './basePage';
import { logger } from '../Utilities/logger'; // adjust path to match your project's logger utility

export class AddcoursePage extends basepage {

  readonly addCourseButton: Locator;
  readonly modalTitle: Locator;

  readonly client: Locator;
  readonly servicetype: Locator;
  readonly servicemodel: Locator;
  readonly coursecategory: Locator;
  readonly courseName: Locator;

  readonly nextButton: Locator;
  readonly previousButton: Locator;
  readonly helpButton: Locator;

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
  readonly previewAndCreateButton: Locator;
  readonly savecourselayout: Locator;
  readonly successMessage: Locator;

  // Validation / Guide
  readonly courseHierarchyError: Locator;
  readonly courseCreationGuideTitle: Locator;
  readonly courseCreationGuideCloseButton: Locator;

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
    this.previousButton = page.getByRole('button', { name: 'Previous' });
    this.helpButton = page.getByRole('button', { name: 'Help' });

    this.courselevel = page.getByText("Select Level");

    this.module = page.locator("#module-checkbox");
    this.submodule = page.locator("#submodule-checkbox");
    this.topic = page.locator("#topic-checkbox");
    this.subtopic = page.locator("#subtopic-checkbox");
    this.ido = page.locator('button').filter({ hasText: 'Select' }).first()
    //   this.wedo =page.locator("//button[@aria-controls='radix-«rrt»']")

    this.youdo = page.locator('button').filter({ hasText: 'Select' }).last();
    this.iDoTab = page.getByRole('button', { name: 'I Do0 active' })
    this.youDoTab = page.getByRole('button', { name: /You Do0 active/i });
    this.resoursetype = page.locator("//input[@placeholder='Select Resource Type']");
    this.skillset = page.locator("//input[@placeholder='Select Skill Set']");
    // Core Programming Languages
    this.c = page.locator("//div[@class='space-y-5']//div[1]//div[2]//label[1]//input[1]");
    this.cpp = page.locator("div[class='space-y-5'] div:nth-child(1) div:nth-child(2) label:nth-child(1) input:nth-child(1)")
    this.java = page.getByLabel('☕Java', { exact: true })
    this.python = page.getByLabel('🐍Python', { exact: true })

    // Frontend Technologies
    this.html = page.locator("//div[@class='flex-1 min-h-0 overflow-hidden bg-white dark:bg-gray-900']//div[2]//div[2]//label[1]//input[1]");
    this.css = page.getByLabel('🎨CSS', { exact: true })
    this.javascript = page.locator("//label[contains(.,'JavaScript')]/preceding-sibling::input");
    this.react = page.locator("//label[contains(.,'React')]/preceding-sibling::input");
    this.nextjs = page.locator("//label[contains(.,'Next.js')]/preceding-sibling::input");

    // Database Technologies
    this.mongodb = page.locator("//label[contains(.,'MongoDB')]/preceding-sibling::input");
    this.mysql = page.locator("//div[@class='space-y-2']//label[1]//input[1]");
    this.createButton = page.getByRole("button", { name: "Create" });
    this.previewAndCreateButton = page.getByRole("button", { name: "Preview & Create" });
    this.savecourselayout = page.locator("//button[normalize-space()='Save Course Layout']");
    this.successMessage = page.locator("//section[@aria-label='Notifications Alt+T']");

    // Validation / Guide
    this.courseHierarchyError = page.getByText("Please select at least one course hierarchy option", { exact: true });
    this.courseCreationGuideTitle = page.getByText("Course Creation Guide", { exact: true });
    this.courseCreationGuideCloseButton = page.locator("//div[contains(.,'Course Creation Guide')]//button[1]");
  }


  async selectDropdown(dropdown: Locator, value: string) {
    try {
      logger.info(`Opening dropdown to select value: "${value}"`);
      await dropdown.click();

      let option = this.page.getByRole('option', { name: value, exact: true });

      if ((await option.count()) === 0) {
        logger.info(`No ARIA "option" role found for "${value}", falling back to last matching element on page`);
        option = this.page.getByText(value, { exact: true }).last();
      }

      await option.click();

      logger.info(`Dropdown value "${value}" selected successfully`);
    } catch (error) {
      logger.error(`Failed to select dropdown value "${value}": ${error}`);
      throw error;
    }
  }

  async addCoursebtn() {
    try {
      logger.info('Clicking "Add Course" button');
      await this.click(this.addCourseButton);
      logger.info('"Add Course" button clicked successfully');
    } catch (error) {
      logger.error(`Failed to click "Add Course" button: ${error}`);
      throw error;
    }
  }

  async isModalVisible() {
    try {
      logger.info('Checking if "Create New Course Setup" modal is visible');
      const visible = await this.isVisible(this.modalTitle);
      logger.info(`Modal visibility: ${visible}`);
      return visible;
    } catch (error) {
      logger.error(`Failed to check modal visibility: ${error}`);
      throw error;
    }
  }

  async fillCourse(data: any) {
    try {
      logger.info('Filling course details (Step 1)');

      await this.selectDropdown(this.client, data.courseClient);

      await this.selectDropdown(this.servicetype, data.serviceType);

      await this.selectDropdown(this.servicemodel, data.serviceModel);

      // // Course ID auto-generates right after Service Model is selected —
      // // wait for it to actually populate instead of a fixed sleep
      // await expect(this.courseId).not.toHaveValue('', { timeout: 15000 });
      // await this.page.waitForTimeout(2000); // Wait for 2 seconds to allow the Course ID to populate

      await this.selectDropdown(this.coursecategory, data.courseCategory);

      await this.selectDropdown(this.courseName, data.courseName);

      logger.info('Course details filled successfully');
    } catch (error) {
      logger.error(`Failed to fill course details: ${error}`);
      throw error;
    }
  }

  async clickNext() {
    try {
      logger.info('Clicking "Next" button');
      await this.click(this.nextButton);
      logger.info('"Next" button clicked successfully');
    } catch (error) {
      logger.error(`Failed to click "Next" button: ${error}`);
      throw error;
    }
  }

  async clickPrevious() {
    try {
      logger.info('Clicking "Previous" button');
      await this.click(this.previousButton);
      logger.info('"Previous" button clicked successfully');
    } catch (error) {
      logger.error(`Failed to click "Previous" button: ${error}`);
      throw error;
    }
  }

  async isNextButtonVisible() {
    try {
      logger.info('Checking if "Next" button is visible');
      const visible = await this.isVisible(this.nextButton);
      logger.info(`"Next" button visibility: ${visible}`);
      return visible;
    } catch (error) {
      logger.error(`Failed to check "Next" button visibility: ${error}`);
      throw error;
    }
  }

  async clickHelp() {
    try {
      logger.info('Clicking "Help" button');
      await this.click(this.helpButton);
      logger.info('"Help" button clicked successfully');
    } catch (error) {
      logger.error(`Failed to click "Help" button: ${error}`);
      throw error;
    }
  }

  async isCourseCreationGuideVisible() {
    try {
      logger.info('Checking if "Course Creation Guide" modal is visible');
      const visible = await this.isVisible(this.courseCreationGuideTitle);
      logger.info(`"Course Creation Guide" modal visibility: ${visible}`);
      return visible;
    } catch (error) {
      logger.error(`Failed to check "Course Creation Guide" modal visibility: ${error}`);
      throw error;
    }
  }

  async selectCourseHierarchy(hierarchy: string[]) {
    try {
      logger.info(`Selecting course hierarchy: ${hierarchy.join(', ')}`);

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

      logger.info('Course hierarchy selected successfully');
    } catch (error) {
      logger.error(`Failed to select course hierarchy: ${error}`);
      throw error;
    }
  }

  async fillCourseHierarchyAndLayout(data: any) {
    try {
      logger.info('Filling course hierarchy and layout (Step 2)');

      await this.selectDropdown(this.courselevel, data.courseLevel);
      await this.selectCourseHierarchy(data.courseHierarchy);

      await this.selectDropdown(this.ido, data.pedagogy.iDo);

      //   await this.selectDropdown(this.wedo, data.pedagogy.weDo);

      await this.selectDropdown(this.youdo, data.pedagogy.youDo);

      logger.info('Course hierarchy and layout filled successfully');
    } catch (error) {
      logger.error(`Failed to fill course hierarchy and layout: ${error}`);
      throw error;
    }
  }

  async enableResource(resource: string) {
    try {
      logger.info(`Enabling resource: "${resource}"`);

      const toggle = this.page
        .locator(`//div[contains(.,'${resource}')]//button[@role='switch']`)
        .first();

      const checked = await toggle.getAttribute("aria-checked");

      if (checked === "false") {
        await toggle.click();
        logger.info(`Resource "${resource}" enabled`);
      } else {
        logger.info(`Resource "${resource}" was already enabled`);
      }
    } catch (error) {
      logger.error(`Failed to enable resource "${resource}": ${error}`);
      throw error;
    }
  }

  async configureResourceType(data: any) {
    try {
      logger.info('Configuring resource types');

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

      logger.info('Resource types configured successfully');
    } catch (error) {
      logger.error(`Failed to configure resource types: ${error}`);
      throw error;
    }
  }

  async selectSkill(skills: string[]) {
    try {
      logger.info(`Selecting skills: ${skills.join(', ')}`);

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

      logger.info('Skills selected successfully');
    } catch (error) {
      logger.error(`Failed to select skills: ${error}`);
      throw error;
    }
  }

  async clickCreate() {
    try {
      logger.info('Clicking "Preview & Create" and "Save Course Layout" buttons');
      await this.click(this.createButton);
      await this.click(this.savecourselayout);
      logger.info('Course created and layout saved successfully');
    } catch (error) {
      logger.error(`Failed to click "Create"/"Save Course Layout": ${error}`);
      throw error;
    }
  }

  // Clicks only "Preview & Create" — used for the hierarchy validation scenario,
  // where the flow stops at the error instead of proceeding to Save Course Layout
  async clickPreviewAndCreate() {
    try {
      logger.info('Clicking "Preview & Create" button');
      await this.click(this.previewAndCreateButton);
      logger.info('"Preview & Create" button clicked successfully');
    } catch (error) {
      logger.error(`Failed to click "Preview & Create" button: ${error}`);
      throw error;
    }
  }

  async isCourseCreatedSuccessfully() {
    try {
      logger.info('Verifying course creation success message');
      const result = await this.successMessage
        .getByText("Course created successfully")
        .isVisible();
      logger.info(`Course creation success message visible: ${result}`);
      return result;
    } catch (error) {
      logger.error(`Failed to verify course creation success message: ${error}`);
      throw error;
    }
  }

  // Fills only the Course Client dropdown — used for the negative/validation scenario
  async selectClientOnly(courseClient: string) {
    try {
      logger.info(`Selecting client only: "${courseClient}"`);
      await this.selectDropdown(this.client, courseClient);
      logger.info('Client selected successfully');
    } catch (error) {
      logger.error(`Failed to select client only "${courseClient}": ${error}`);
      throw error;
    }
  }

  private validationError(message: string): Locator {
    return this.page.getByText(message, { exact: true });
  }

  async verifyValidationErrors(expectedMessages: string[]) {
    try {
      logger.info(`Verifying validation errors: ${expectedMessages.join(', ')}`);

      for (const message of expectedMessages) {
        await expect(this.validationError(message)).toBeVisible();
      }

      logger.info('All expected validation errors verified successfully');
    } catch (error) {
      logger.error(`Failed to verify validation errors: ${error}`);
      throw error;
    }
  }
}