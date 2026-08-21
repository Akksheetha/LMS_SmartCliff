import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";
export class AddModulePage extends basepage {

    readonly AddModule: Locator;
    readonly title: Locator;
    readonly describe: Locator;
    readonly moduleSkillCheckbox: Locator;
    readonly AddModule_btn: Locator;
    readonly moduleText: Locator;
    readonly ModuleThreeDot: Locator;
    readonly ModuleADD: Locator;
    readonly ModuleEdit: Locator;
    readonly ModuleSingleDelete: Locator;
    readonly ModuleDeletePopup: Locator;
    readonly operationCompletedMsg: Locator;
    readonly multipleDelete: Locator;
    readonly selectModule: Locator;
    readonly selectAll: Locator;
    readonly deleteAll_btn: Locator;
    readonly DeleteAll_confom_btn: Locator;
    readonly cancelButton: Locator;
    readonly savingButton: Locator;

    constructor(page: Page) {
        super(page);

        this.AddModule = page.locator("(//button[@title='Add New Module'])[1]");

        this.title = page.locator("//textarea[@id='title']");
        this.describe = page.locator("//textarea[@id='description']");

 
        this.moduleSkillCheckbox = page.locator("(//input[@type='checkbox'])[1]");

        this.AddModule_btn = page.getByRole('button', { name: 'Add Module' });
        this.moduleText = page.locator("(//span[@class='flex-[0.8] text-center px-2 break-words whitespace-normal overflow-hidden text-ellipsis'])[1]");
        this.ModuleThreeDot = page.locator("(//div[@class='flex-[0.2] flex justify-end']//button)[1]");
        this.ModuleADD = page.locator("//span[text()='Add']");
        this.ModuleEdit = page.locator("//span[text()='Edit']");
        this.ModuleSingleDelete = page.locator("//span[text()='Delete']");
        this.ModuleDeletePopup = page.locator("//div[@class='mt-6 grid grid-cols-2 gap-3']/child::button[text()='Delete']");
        this.operationCompletedMsg = page.locator("//span[text()='Operation completed successfully!']");
        this.multipleDelete = page.locator("//div[text()='Enable']");
        this.selectModule = page.locator("(//div[@class='space-y-3']//button)[1]");
        this.selectAll = page.locator("//input[@class='w-4 h-4 cursor-pointer accent-orange-500 rounded']");
        this.deleteAll_btn = page.locator("(//div[@class='flex gap-2 justify-center sm:justify-end w-full sm:w-auto']/child::button)[2]");
        this.DeleteAll_confom_btn = page.locator("(//div[@class='flex gap-3 pt-2']//button[@data-slot='button'])[2]");
        this.cancelButton = page.getByRole('button', { name: 'Cancel' });
        this.savingButton = page.locator("//button[contains(.,'Saving')]");
    }

    async addModuleIcon() {
        try {
            await this.page.mouse.click(5, 5);
            await this.page.waitForTimeout(300);
            logger.info("waiting for the Add module icon");
            await this.AddModule.waitFor({ state: "visible" });
            await this.AddModule.scrollIntoViewIfNeeded();
            await this.AddModule.click();
            logger.info("add module icon is clicked");
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    async fillTitle_module(text: string) {
        try {
            await this.fill(this.title, text);
            logger.info("enter the title for the module");
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    async filldescribe_module(text: string) {
        try {
            await this.fill(this.describe, text);
            logger.info("enter the description of the module");
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    async clickModuleCheckbox() {
        try {
            await this.click(this.moduleSkillCheckbox);
            logger.info("click the skill checkbox for module");
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    async addModule_btn() {
        try {
            await this.click(this.AddModule_btn);
            logger.info("click the Add Module button");
        } catch (error) {
            logger.error(error);
            throw error;
        }
    }

    async getModuleText() {
        try {
            logger.info("return the text of the added module");
            return await this.locator(this.moduleText);
        } catch (error) {
            logger.error(error);
        }
    }

    async clickModuleThreeDot() {
        try {
            await this.page.mouse.click(5, 5);
            await this.page.waitForTimeout(300);
            await this.ModuleThreeDot.waitFor({ state: "visible" });
            logger.info("waiting for the module setting");
            await this.click(this.ModuleThreeDot);
            logger.info("clicked the threeDot of the module");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickModuleAdd() {
        try {
            await this.click(this.ModuleADD);
            logger.info("click the Add btn to add the module");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickModuleEdit() {
        try {
            await this.click(this.ModuleEdit);
            logger.info("click the edit button for module");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickDelete() {
        try {
            await this.click(this.ModuleSingleDelete);
            logger.info("module is deleted");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickDeleteConfom() {
        try {
            await this.click(this.ModuleDeletePopup);
        } catch (error) {
            logger.error(error);
        }
    }

    async operationCompledText() {
        try {
            await this.operationCompletedMsg.waitFor({ state: "visible" });
            logger.info("return the operation completed text");
            return this.operationCompletedMsg.textContent();
        } catch (error) {
            logger.error(error);
        }
    }

    async clickSaveAndCancel() {
        try {
            await this.AddModule_btn.click();
            await this.cancelButton.click();
            await this.page.waitForTimeout(7000);
        } catch (error) {
            logger.error(error);
        }
    }

    async verifyModuleNotAdded(title: string) {
        const locator = this.page.locator(`text=${title}`);
        return await locator.isVisible().catch(() => false);
    }

    async clickmultipleDelete() {
        try {
            await this.click(this.multipleDelete);
            logger.info("multipleDelete button clicked");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickModuleToDelete() {
        try {
            await this.click(this.selectModule);
            logger.info("selected the module");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickSelectAllBTN() {
        try {
            await this.click(this.selectAll);
            logger.info("selected all the modules");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickDelrtrAll() {
        try {
            await this.click(this.deleteAll_btn);
            logger.info("selected delete all button");
        } catch (error) {
            logger.error(error);
        }
    }

    async clickDeleteAllConfom() {
        try {
            await this.click(this.DeleteAll_confom_btn);
            logger.info("clicked confirm delete button of popup");
        } catch (error) {
            logger.error(error);
        }
    }
}