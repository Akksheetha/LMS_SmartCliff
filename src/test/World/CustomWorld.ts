import { searchPage } from './../Pages/SearchPage';
import { World,setWorldConstructor } from "@cucumber/cucumber";
import {Browser,BrowserContext,Page} from "@playwright/test";
import { LoginPage } from "../Pages/LoginPage";
export class CustomWorld extends World{
    browser!:Browser;
    context!:BrowserContext;
    page!:Page;
    loginPage!: LoginPage;
    //logger=logger;
    searchPage!:searchPage;
    
}   
setWorldConstructor(CustomWorld);
