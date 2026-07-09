import { searchPage } from './../Pages/SearchPage';
import { CourseManagePage } from './../Pages/CourseManagePage';
import { DashboardPage } from './../Pages/DashboardPage';

import { World,setWorldConstructor } from "@cucumber/cucumber";
import {Browser,BrowserContext,Page} from "@playwright/test";
import { AddCourseStructurePage } from "../Pages/AddCourseStructurePage";
import { LoginPage } from "../Pages/LoginPage";

import { TopicPage } from "../Pages/CourseTopicPage";
import { logger } from "../Utilities/logger";
import { AddcoursePage } from '../Pages/AddcoursePage';
export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    loginPage!: LoginPage;
    //logger=logger;
    searchPage!: searchPage;
    addCourseStructure!:AddCourseStructurePage;
    addcoursepage!:AddcoursePage;

    dashboardpage !: DashboardPage
    coursemanagepage !: CourseManagePage
    
    topicPage!: TopicPage;
    logger=logger;

}   
setWorldConstructor(CustomWorld);
