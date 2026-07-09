import { CourseStructurePage } from './../Pages/CourseStructurePage';
import { searchPage } from './../Pages/SearchPage';
import { CourseManagePage } from './../Pages/CourseManagePage';
import { DashboardPage } from './../Pages/DashboardPage';
import { World,setWorldConstructor } from "@cucumber/cucumber";
import {Browser,BrowserContext,Page,Download} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { AddCourseStructurePage } from '../Pages/AddCourseStructurePage';
import { TopicPage } from "../Pages/CourseTopicPage";
import { logger } from "../Utilities/logger";
import {FilterPage} from "../Pages/FilterPage";
import { DynamicFieldPage } from '../Pages/DynamicFieldPage';
export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    loginPage!: LoginPage;
    searchPage!: searchPage;
    addCourseStructure!:AddCourseStructurePage;
    dashboardpage !: DashboardPage;
    coursemanagepage !: CourseManagePage;
    coursestructurepage !: CourseStructurePage;
    filterPage !: FilterPage;
    dynamicfieldpage !: DynamicFieldPage
    
    topicPage!: TopicPage;
    logger=logger;
    download!: Download;
}   
setWorldConstructor(CustomWorld);
