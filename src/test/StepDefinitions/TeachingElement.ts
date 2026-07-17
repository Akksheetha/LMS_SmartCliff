 import {When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";




When('the user click the dropdown of teaching element', async function (this:CustomWorld) {
           await this.addCourseStructure.clickDropDownTeaching()
         });
    
       
 When('the user click the chechbox of {string}', async function (this:CustomWorld,string) {
           await this.addCourseStructure.selectTeachingElement(string)
         });

       
 Then('the user should see the {string} column  in the course Table', async function (this:CustomWorld,string) {
     
  if(string === "All Teaching Elements") {
    const actualText = await this.addCourseStructure.allTeachingElements.textContent();
    expect(actualText).toBe(string);
  }
  else if(string === "I Do Activities") {
    const actualText = await this.addCourseStructure.iDoActivities.textContent();
    expect(actualText).toBe(string);
  }
  else if(string === "We Do Activities") {
    const actualText = await this.addCourseStructure.weDoActivities.textContent();
    expect(actualText).toBe(string);
  }
  else if(string === "You Do Activities") {
    const actualText = await this.addCourseStructure.youDoActivities.textContent();
    expect(actualText).toBe(string);
  }

         });