import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";
import { logger } from "../Utilities/logger";

export class TopicPage extends basepage {

    readonly AddTopic: Locator;
    private secondTopic:Locator;
    private topicTitle: Locator;
    private topicDescription: Locator;
    private saveTopicButton: Locator;
    private topicText: Locator;
    private javaskill:Locator;
    private pythonskill:Locator;
    private sqlskill:Locator;
    private preview:Locator;
    private delete1:Locator;
    private delete2:Locator;
    private delete:Locator;
    private deletetopic:Locator;
    readonly cell1:Locator;
    readonly cell2:Locator;
    readonly titletxt:Locator;
    readonly skilltext:Locator;


    constructor(page: Page) {

        super(page);
        this.AddTopic = page.locator("//button[@title='Add New Topic']").first();
        this.secondTopic =page.locator("button[title='Add New Topic'] span[class='ml-2 text-xs font-medium text-blue-600']");
        this.topicTitle = page.locator("//textarea[@id='title']");
        this.topicDescription = page.locator("//textarea[@id='description']");
        this.saveTopicButton = page.locator("//button[@type='submit']");
        this.topicText = page.locator("(//span[contains(@class,'break-words')])[last()]");
        this.titletxt = page.locator("text=Title is required");
        this.javaskill = page.getByRole('checkbox', { name: '☕ Java' });
        this.pythonskill = page.getByRole('checkbox', { name: '🐍 Python' });
        this.sqlskill = page.getByRole('checkbox', { name: '🐬 MySQL' });
        this.skilltext = page.getByText('Annotations').first();
        this.cell1 = page.getByRole('cell', { name: 'Custom World' }).nth(1);
        this.cell2 = page.getByRole('cell', { name: 'Annotations' }).nth(1);
        this.preview = page.locator("button[title='Click to preview course structure'] span[class='hidden sm:inline']");
        this.delete = page.getByRole('button', { name: 'Delete', exact: true });
        this.deletetopic = page.locator("body > div:nth-child(13) > div:nth-child(2) > main:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > button:nth-child(2)");
        this.delete1 = page.locator("td[title*='Custom World'] button");
        this.delete2 = page.locator("td[title*='Annotations'] button");
    }


    async clickAddTopic(){
        try{
        await this.page.mouse.click(5,5);
        await this.AddTopic.waitFor({state:"visible"});
        logger.info("Clicking Add topic");
        await this.AddTopic.click();
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }


    async fillTopicTitle(text:string){
        try{
        logger.info("Entering Title of the topic");
        await this.fill(this.topicTitle,text);
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }


    async fillTopicDescription(text:string){
        try{
        logger.info("Entering the Description");
        await this.fill(this.topicDescription,text);
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }


    async clickSaveButton(){
        try{
        await this.click(this.saveTopicButton);
        logger.info("Save button clicked");
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }

    async getTopicText(title:string){
        try{
        const topic = this.page.locator(`//span[text()='${title}']`).first();
        await topic.waitFor({state:"visible"});
        return await topic.textContent();
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }
    async clicksecondTopic(){
        try{
        await this.page.mouse.click(5,5);
        await this.AddTopic.waitFor({state:"visible"});
        logger.info("Clicking Add topic");
        await this.click(this.secondTopic);
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }
    async skillSelect(){
        try{
        logger.info("Selecting skills");
        await this.click(this.javaskill);
        await this.click(this.pythonskill);
        await this.click(this.sqlskill);
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }
    async getSkillText(title:string){
        try{
        const topic = this.page.locator(`//span[text()='${title}']`).first();
        await topic.waitFor({state:"visible"});
        return await topic.textContent();
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }
    async clickPreview(){
        try{
        await this.click(this.preview);
        logger.info("Table is visible by clicking preview");
        }
        catch(error){
            logger.error("Error:",error);
            throw error;
        }
    }
    async clickDelete1(){
            try{
                await this.page.mouse.click(5,5);
                await this.delete1.waitFor({state:"visible"});
                await this.click(this.delete1);
                await this.click(this.delete);
                await this.click(this.deletetopic);
                logger.info("Deleting first topic");
            }
            catch(error){
                throw error;
            }

    }
    async clickDelete2(){
            try{
                await this.page.mouse.click(5,5);
                await this.delete2.waitFor({state:"visible"});
                await this.click(this.delete2);
                await this.click(this.delete);
                await this.click(this.deletetopic);
                logger.info("Deleting second topic");
            }
            catch(error){
                throw error;
            }
    }

}