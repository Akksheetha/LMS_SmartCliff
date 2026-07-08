import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class TopicPage extends basepage {

    private AddTopic: Locator;
    private topicTitle: Locator;
    private topicDescription: Locator;
    private saveTopicButton: Locator;
    private topicText: Locator;
    readonly titletxt:Locator;


    constructor(page: Page) {

        super(page);
        this.AddTopic = page.locator("//button[@title='Add New Topic']").first();
        this.topicTitle = page.locator("//textarea[@id='title']");
        this.topicDescription = page.locator("//textarea[@id='description']");
        this.saveTopicButton = page.locator("//button[@type='submit']");
        this.topicText = page.locator("(//span[contains(@class,'break-words')])[last()]");
        this.titletxt = this.page.locator("text=Title is required");
    }


    async clickAddTopic(){
        await this.page.mouse.click(5,5);
        await this.AddTopic.waitFor({state:"visible"});
        await this.AddTopic.click();
    }


    async fillTopicTitle(text:string){
        await this.fill(this.topicTitle,text);
    }


    async fillTopicDescription(text:string){
        await this.fill(this.topicDescription,text);
    }


    async clickSaveButton(){
        await this.click(this.saveTopicButton);
    }


    async getTopicText(title:string){
        const topic = this.page.locator(`//span[text()='${title}']`).first();
        await topic.waitFor({state:"visible"});
        return await topic.textContent();
    }
}