import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger"

export class DynamicFieldPage extends basepage {

    readonly servicemanageh3 : Locator
    readonly addservicebtn : Locator
    readonly servicenameinput : Locator
    readonly descriptioninput : Locator
    readonly createservicebtn : Locator
    readonly messagesection : Locator
    readonly searchbar : Locator
    readonly editIcon : Locator
    readonly deleteicon : Locator
    readonly updateservicebtn : Locator
    readonly tablevalue : Locator


    constructor(page: Page) {
        super(page);
        this.servicemanageh3 = page.locator("//h3[text()='Service Management']")
        this.addservicebtn = page.getByRole('button', { name: 'Add Service' })
        this.servicenameinput = page.locator("input[placeholder=\"e.g., 'Software Development'\"]")
        this.descriptioninput = page.getByRole('textbox', { name: 'Describe the service...' })
        this.createservicebtn = page.getByText('Create Service')
        this.messagesection = page.locator('//section/div/div')
        this.searchbar = page.locator("//input[@placeholder='Search services...']")
        this.editIcon = page.locator("//tbody/tr[1]/td[5]/div[1]/button[1]") 
        this.deleteicon = page.locator("//tbody/tr[1]/td[5]/div[1]/button[2]")
        this.updateservicebtn = page.getByText('Update Service')
        this.tablevalue = page.locator("//tbody/tr[1]/td[2]/div/child::div[2]/child::div[1]")
    }

    async clickAddService() {
        try{
            await this.click(this.addservicebtn)
            logger.info("Clicked Add Serive button")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async filladdservicedetail(value1:string,value2:string) {
        try {
            await this.fill(this.servicenameinput,value1)
            await this.fill(this.descriptioninput,value2)
            logger.info("Filled service name and description")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }


    async clickcreatebtn() {
        try {
            await this.click(this.createservicebtn)
            logger.info("Clicked create service button")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async getTextofmessagesection() {
        try {
            logger.info("Got text of message section")
            let mes = await this.getText(this.messagesection)
            console.log("message: ",mes)
            return mes
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async searchinDynamicfield(value:string) {
        try{
            this.fill(this.searchbar,value)
            logger.info("Typed value in Search Bar")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async clickEditicon() {
        try{
            this.click(this.editIcon)
                logger.info("Clicked edit icon")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async clickdeleteticon() {
        try{
            this.click(this.deleteicon)
                logger.info("Clicked delete icon")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async clickupdateservice() {
        try{
            this.click(this.updateservicebtn)
                logger.info("Clicked update service button")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }

    async editService(value:string) {
        try{
            await this.fill(this.descriptioninput,value)
            logger.info("Clicked update service button")
        }catch(error) {
            logger.error(error)
            throw error
        }
    }
}