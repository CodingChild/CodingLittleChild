module IDE {

    import Dialog = Laya.Dialog;
    import List = Laya.List;
    import Button = Laya.Button;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Handler = Laya.Handler;
    import Event = Laya.Event;

    export interface GeneralButtonSetting{
        width: number;
        height: number;
        skin: string;
        stateNum: number;
        x: number;
        y: number;
    }

    export interface GeneralLibrarySetting {
        width: number;
        height: number;
        bgColor: string;
        listX:number;
        listY:number;
        imgUrl:string;
        imgX:number;
        imgY:number;
        imgSize:number;
        okButtonSetting:GeneralButtonSetting;
        cancelButtonSetting:GeneralButtonSetting;
        generalListSetting: GeneralListSetting;
        generalListItemSetting: GeneralListItemSetting;
    }

    class GeneralLibraryList extends GeneralList{
        constructor(generalListSetting: GeneralListSetting, generalListItemSetting: GeneralListItemSetting){
            super(generalListSetting, generalListItemSetting);
        }
    }

    export abstract class GeneralLibrary extends Dialog {

        public generalLibraryList: GeneralLibraryList;
        protected image:Laya.Image;
        protected okButton: Button;
        protected cancelButton: Button;
        protected generalLibrarySetting: GeneralLibrarySetting;

        constructor(generalLibrarySetting: GeneralLibrarySetting) {
            super();
            this.size(generalLibrarySetting.width, generalLibrarySetting.height);
            this.generalLibrarySetting = generalLibrarySetting;
            this.buildContent();
        }

        protected buildContent() {
            this.buildImg();
            this.buildBackground();
            this.buildlist();
            this.buildOkButton();
            this.buildCancelButton();
        }
        protected buildImg() {
            this.image = new Image(this.generalLibrarySetting.imgUrl);
            this.addChild(this.image);
            this.image.pos(this.generalLibrarySetting.imgX, this.generalLibrarySetting.imgY);
            this.image.size(this.generalLibrarySetting.imgSize, this.generalLibrarySetting.imgSize);
        }        

        protected buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, this.generalLibrarySetting.bgColor);
        }

        protected buildlist(): void {
            let generalLibraryList = new GeneralLibraryList(this.generalLibrarySetting.generalListSetting,
                                              this.generalLibrarySetting.generalListItemSetting);
            generalLibraryList.pos(this.generalLibrarySetting.listX, this.generalLibrarySetting.listY);
            this.generalLibraryList = generalLibraryList;

            this.addChild(generalLibraryList);
        }

        protected buildOkButton(): void {
            let okButton = new Button();
            let setting:GeneralButtonSetting = this.generalLibrarySetting.okButtonSetting;
            okButton.skin = setting.skin;
            okButton.name = Dialog.OK;
            okButton.stateNum = setting.stateNum;
            okButton.size(setting.width, setting.height);
            okButton.pos(setting.x, setting.y);
            this.okButton = okButton;
            okButton.on(Event.CLICK, this, this.onClose);
            this.addChild(okButton);
        }
        protected buildCancelButton(): void {
            let cancelButton = new Button();
            let setting:GeneralButtonSetting = this.generalLibrarySetting.cancelButtonSetting;
            cancelButton.skin = setting.skin;
            cancelButton.name = Dialog.CANCEL;
            cancelButton.stateNum = setting.stateNum;
            cancelButton.size(setting.width, setting.height);
            cancelButton.pos(setting.x, setting.y);
            this.cancelButton = cancelButton;
            cancelButton.on(Event.CLICK, this, this.onClose);
            this.addChild(cancelButton);
        }
        protected abstract initializeLibrayItems(): void;
        protected abstract onClose(e: Event): void;

    }
}