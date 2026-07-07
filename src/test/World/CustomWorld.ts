import { courseStructurePage } from './../Pages/courseStructurePage';

import { World,setWorldConstructor } from "@cucumber/cucumber";
import {Browser,BrowserContext,Page} from "@playwright/test";
import { AddCourseStructurePage } from "../Pages/AddCourseStructurePage";

export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    //logger=logger;
    addCourseStructure!:AddCourseStructurePage
    courseStructure!:courseStructurePage
    
}   
setWorldConstructor(CustomWorld);
