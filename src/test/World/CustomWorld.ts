import { World,setWorldConstructor } from "@cucumber/cucumber";
import {Browser,BrowserContext,Page} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
import { TopicPage } from "../Pages/CourseTopicPage";
import { logger } from "../Utilities/logger";
export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    loginPage!: LoginPage;
    topicPage!: TopicPage;
    logger=logger;
    
}   
setWorldConstructor(CustomWorld);
