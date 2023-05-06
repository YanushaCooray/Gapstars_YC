import { Locator, Page } from "@playwright/test";

export default class FileUploadPage{

    readonly page: Page;
    readonly chooseFileBtn: Locator;
    readonly uploadBtn : Locator;
    readonly uplaodFileInput : Locator;
    
    constructor( page : Page){
        this.page = page;
        this.chooseFileBtn = page.locator('[id="file-upload"]');
        this.uploadBtn = page.locator('[id="file-submit"]');
        this.uplaodFileInput = page.locator('[id="uploaded-files"]');
    }

    async clickChooseFileBtn(){ 
       await this.chooseFileBtn.click(); 
    }

    async clickUploadBtn(){
        await this.uploadBtn.click();
    }

    async getInnerTextInUploadFile(){
       return await this.uplaodFileInput.innerText();
    }

}