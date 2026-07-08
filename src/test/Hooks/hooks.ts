
import { AddCourseStructurePage } from './../Pages/AddCourseStructurePage';

import { searchPage } from './../Pages/SearchPage';

import { After, AfterAll, Before, BeforeAll, Status } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";
import { CustomWorld } from "../World/CustomWorld";
import { getEnv } from "../Utilities/envReader";
import { setDefaultTimeout } from "@cucumber/cucumber";


import { LoginPage } from "../Pages/LoginPage";

import { TopicPage } from "../Pages/CourseTopicPage";
import { CourseStructurePage } from './../Pages/CourseStructurePage';
import { CourseManagePage } from './../Pages/CourseManagePage';
import { DashboardPage } from './../Pages/DashboardPage';
setDefaultTimeout(60000);
let browser: Browser;
BeforeAll(async () => {
    getEnv();
    browser = await chromium.launch({
        headless: false
    });
});
Before(async function (this: CustomWorld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.addCourseStructure= new AddCourseStructurePage(this.page)
    this.coursemanagepage= new CourseManagePage(this.page)
    this.loginPage = new LoginPage(this.page);
    this.searchPage = new searchPage(this.page);
    this.topicPage = new TopicPage(this.page);
    this.coursestructurepage = new CourseStructurePage(this.page)
    this.coursemanagepage = new CourseManagePage(this.page)
    this.dashboardpage = new DashboardPage(this.page)
});

After(async function (this: CustomWorld, { result, pickle }) {
    console.log(result?.status);
    if (result?.status === Status.FAILED) {
        const img = await this.page.screenshot({
            path: `Report/screenshots/${pickle.name}.png`,
            type: "png"
        });
    }

    await this.page.close();
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});
