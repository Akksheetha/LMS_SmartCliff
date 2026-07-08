import { CourseStructurePage } from './../Pages/CourseStructurePage';
import { CourseManagePage } from './../Pages/CourseManagePage';
import { DashboardPage } from './../Pages/DashboardPage';
import { World,setWorldConstructor } from "@cucumber/cucumber";
import {Browser,BrowserContext,Page} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    loginPage!: LoginPage;
    dashboardpage !: DashboardPage
    coursemanagepage !: CourseManagePage
    coursestructurepage !: CourseStructurePage
    //logger=logger;
}   
setWorldConstructor(CustomWorld);
