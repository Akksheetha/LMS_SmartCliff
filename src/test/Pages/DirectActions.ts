import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger"

export class DirectActions extends basepage{
    private direct:Locator;
    readonly level:Locator;

    constructor(page:Page){
        super(page);
        this.direct = page.locator("//div[contains(@class,'group p-2 rounded-md hover:bg-indigo-50 transition-colors duration-150 cursor-pointer')]//div[@class='w-9 h-4 rounded-full transition-all duration-300 bg-gray-300 shadow-inner']");
        this.level = page.locator("tbody tr:nth-child(1) td:nth-child(5) div:nth-child(1) div:nth-child(2) button:nth-child(1)");
    }

    async directAction(){
        try{
            await this.click(this.direct);
            logger.info("Clicked direct actions");
        }
        catch(error){
            logger.error(error);
            throw error;
        }
    }
}