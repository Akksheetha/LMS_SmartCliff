import {Given,When,Then} from "@cucumber/cucumber"
import { CustomWorld } from "../World/CustomWorld";
import { expect } from "@playwright/test";
import { constantData } from "../../../constants/constant";
import data from "../testData/Servicemanage.json"

let servicename = `${data.AddService.servicename}${Date.now()}`

Given('User clicks on Dynamic Field Settings', async function (this:CustomWorld) {
  await this.dashboardpage.clickDynamicField()
});

Given('User is on the Dynamic field settings page', async function (this:CustomWorld) {
  expect(this.dynamicfieldpage.servicemanageh3).toHaveText(constantData.AddServiceType.serviceh3)
});

When('the user clicks Addservice button', async function (this:CustomWorld) {
  await this.dynamicfieldpage.clickAddService()
});

When('the user enters service name and description', async function (this:CustomWorld) {
  await this.dynamicfieldpage.filladdservicedetail(servicename,data.AddService.description)
});

When('the user clicks createservice button', async function (this:CustomWorld) {
  await this.dynamicfieldpage.clickcreatebtn()
});

Then('the service should be created', async function (this:CustomWorld) { 
 let text = await this.dynamicfieldpage.getTextofmessagesection()
 expect(text).toBe(constantData.AddServiceType.successmess)
});

// When('the user search the service in search bar', async function (this:CustomWorld) {
  
// });

// When('the user clicks edit icon button in the result of search for service type', async function (this:CustomWorld) {
  
// });

// When('the user enters service name and description to be edited', async function (this:CustomWorld) {
  
// });

// When('the user clicks updateservice button', async function (this:CustomWorld) {
  
// });

// Then('the service should be edited and updated', async function (this:CustomWorld) {
  
// });