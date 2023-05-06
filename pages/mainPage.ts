import { Page } from "@playwright/test";


export default class MainPage{

    constructor(public page : Page){}

    async clickTitle(title : String){
      await  this.page.click('//a[text()="'+title+'"]');
    }
}