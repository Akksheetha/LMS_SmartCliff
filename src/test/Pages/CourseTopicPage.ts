import { Locator, Page } from "@playwright/test";
import { basepage } from "./basePage";

export class TopicPage extends basepage {

    private AddTopic: Locator;
    private secondTopic:Locator;
    private topicTitle: Locator;
    private topicDescription: Locator;
    private saveTopicButton: Locator;
    private topicText: Locator;
    private javaskill:Locator;
    private pythonskill:Locator;
    private sqlskill:Locator;
    private preview:Locator;
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
        this.preview = page.locator("button[title='Click to preview course structure'] span[class='hidden sm:inline']");
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
    async clicksecondTopic(){
        await this.page.mouse.click(5,5);
        await this.AddTopic.waitFor({state:"visible"});
        await this.click(this.secondTopic);
    }
    async skillSelect(){
        await this.click(this.javaskill);
        await this.click(this.pythonskill);
        await this.click(this.sqlskill);
    }
    async getSkillText(title:string){
        const topic = this.page.locator(`//span[text()='${title}']`).first();
        await topic.waitFor({state:"visible"});
        return await topic.textContent();
    }
    async clickPreview(){
        await this.click(this.preview);
    }
    

}