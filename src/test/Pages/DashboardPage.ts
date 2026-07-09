import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger"

export class DashboardPage extends basepage {

    readonly courseManagement: Locator;
    readonly learningHubh1: Locator

    constructor(page: Page) {
        super(page);
        this.courseManagement = page.locator("//div[@class='pt-6']/div/div[2]/div/child::div");
        this.learningHubh1 = page.locator("//span[text()='Learning Hub']")
    }

    async clickCourseManagement() {
        try{
            await this.click(this.courseManagement)
            logger.info("Clicked CourseManagement")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async gettextofLeanringhub() {
        try {
            logger.info("Got Text of LearningHub")
            return await this.getText(this.learningHubh1)
        }catch(error) {
            logger.error(error)
            throw error
        }
    }
}