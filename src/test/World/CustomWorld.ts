import { CourseStructurePage } from './../Pages/CourseStructurePage';
import { CourseManagePage } from './../Pages/CourseManagePage';
import { DashboardPage } from './../Pages/DashboardPage';
import { World,setWorldConstructor } from "@cucumber/cucumber";
import {Browser,BrowserContext,Page,Download} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { TopicPage } from "../Pages/CourseTopicPage";
import { logger } from "../Utilities/logger";
export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    loginPage!: LoginPage;
    dashboardpage !: DashboardPage
    coursemanagepage !: CourseManagePage
    coursestructurepage !: CourseStructurePage
    topicPage!: TopicPage;
    logger=logger;
    download !:Download
}   
setWorldConstructor(CustomWorld);
