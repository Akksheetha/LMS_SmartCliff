import { Page, Locator } from '@playwright/test';
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
  readonly courseHierarchy: Locator;
  readonly ido: Locator;
  readonly wedo: Locator;
  readonly youdo: Locator;
  readonly resoursetype: Locator;
  readonly skillset: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    super(page);

    this.addCourseButton = page.locator("//button[@class=\"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md cursor-pointer transition-all disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive text-primary-foreground py-2 has-[>svg]:px-3 h-9 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 px-4 shadow-sm\"]");

    this.modalTitle = page.locator("//h3[@class='text-lg font-medium leading-6 text-gray-900']");

    this.client = page.locator("//input[@placeholder='Select Client']");

    this.servicetype = page.locator("//input[@placeholder='Select Service Type']");

    this.servicemodel = page.locator("//input[@placeholder='Select Service Model']");

    this.coursecategory = page.locator("//input[@placeholder='Select Course Category']");

    this.courseName = page.locator("//input[@placeholder='Enter Course Name']");

    this.nextButton = page.locator("//button[contains(.,'Next')]");

    this.courselevel = page.locator("//input[@placeholder='Select Course Level']");

    this.courseHierarchy = page.locator("//input[@placeholder='Select Course Hierarchy']");

    this.ido = page.locator("//label[contains(.,'I do')]");

    this.wedo = page.locator("//label[contains(.,'We do')]");

    this.youdo = page.locator("//label[contains(.,'You do')]");

    this.resoursetype = page.locator("//input[@placeholder='Select Resource Type']");

    this.skillset = page.locator("//input[@placeholder='Select Skill Set']");

    this.createButton = page.locator("//button[contains(.,'Create')]");
  }

  //==========================
  // Generic Dropdown Method
  //==========================

  async selectDropdown(dropdown: Locator, value: string) {
    await dropdown.click();
    await this.page.getByRole('option', { name: value }).click();
  }

  //==========================
  // Add Course
  //==========================

  async openAddCourseModal() {
    await this.click(this.addCourseButton);
  }

  async isModalVisible() {
    return await this.isVisible(this.modalTitle);
  }

  //==========================
  // Step 1
  //==========================

  async fillCourseBasicConfiguration(data: any) {

    await this.selectDropdown(this.client, data.courseClient);

    await this.selectDropdown(this.servicetype, data.serviceType);

    await this.selectDropdown(this.servicemodel, data.serviceModel);

    await this.selectDropdown(this.coursecategory, data.courseCategory);

    await this.fill(this.courseName, data.courseName);
  }

  async clickNext() {
    await this.click(this.nextButton);
  }

  //==========================
  // Step 2
  //==========================

  async fillCourseHierarchyAndLayout(data: any) {

    await this.selectDropdown(this.courselevel, data.courseLevel);

    for (const hierarchy of data.courseHierarchy) {
      await this.selectDropdown(this.courseHierarchy, hierarchy);
    }

    await this.selectDropdown(this.ido, data.pedagogy.iDo);

    await this.selectDropdown(this.wedo, data.pedagogy.weDo);

    await this.selectDropdown(this.youdo, data.pedagogy.youDo);
  }

  //==========================
  // Resource Type
  //==========================

  async configureResourceType(data: any) {

    const resourceTypes = data.resourceType;

    for (const section in resourceTypes) {

      const resources = resourceTypes[section].enabled;

      for (const resource of resources) {

        await this.selectDropdown(this.resoursetype, resource);

      }
    }
  }

  //==========================
  // Skill Set
  //==========================

  async selectSkillSet(data: any) {

    for (const skill of data.skillSet.coreProgrammingLanguages) {

      await this.selectDropdown(this.skillset, skill);

    }

    for (const skill of data.skillSet.frontendTechnologies) {

      await this.selectDropdown(this.skillset, skill);

    }

    for (const skill of data.skillSet.databaseTechnologies) {

      await this.selectDropdown(this.skillset, skill);

    }
  }

  //==========================
  // Create Course
  //==========================

  async clickCreate() {
    await this.click(this.createButton);
  }

  async isCourseCreatedSuccessfully() {
    return await this.page.locator("text=Course created successfully").isVisible();
  }
}