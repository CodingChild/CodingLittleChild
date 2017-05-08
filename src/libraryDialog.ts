module Marmot {

    import Dialog = Laya.Dialog;
    import List = Laya.List;
    import Button = Laya.Button;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Handler = Laya.Handler;
    import Event = Laya.Event;

    export interface LibraryDialogSetting {
        width: number;
        height: number;
        fillStyle: string;
        strokeStyle: string;
        listX:number,
        listY:number,
        lineWidth: number;
        vScrollBarSkin: string;
        spaceX: number;
        spaceY: number;
        repeatX: number;
        repeatY: number;

        buttonWidth: number;
        buttonHeight: number;

        okButtonSkin: string;
        okButtonStateNum: number;
        okButtonX: number;
        okButtonY: number;

        cancelButtonSkin: string;
        cancelButtonStateNum: number;
        cancelButtonX: number;
        cancelButtonY: number;
    }

    export interface LibraryDialogItemSetting {
        width: number;
        height: number;
        backgroundNormal: string;
        backgroundHighlight: string;
        imagePadding: number;
        imageWidth: number;
        imageHeight: number;
    }

    export class libraryDialogItem extends ListItem {
        public static WIDTH:number;
        public static HEIGHT:number;
        constructor() {
            super();
            if(libraryDialogItem.WIDTH != undefined && libraryDialogItem.HEIGHT != undefined)
                this.size(libraryDialogItem.WIDTH, libraryDialogItem.HEIGHT);
        }
    }

    export abstract class LibraryDialog extends Dialog {

        protected list: List;
        protected okButton: Button;
        protected cancelButton: Button;
        protected chosenIndex: number;
        protected curItem: libraryDialogItem;
        protected libraryDialogSetting: LibraryDialogSetting;
        protected libraryDialogItemSetting:LibraryDialogItemSetting;

        constructor(libraryDialogSetting: LibraryDialogSetting, libraryDialogItemSetting:LibraryDialogItemSetting) {
            super();
            this.size(libraryDialogSetting.width, libraryDialogSetting.height);
            this.libraryDialogSetting = libraryDialogSetting;
            this.libraryDialogItemSetting = libraryDialogItemSetting;
            this.chosenIndex = -1;
            this.curItem = null;
            libraryDialogItem.WIDTH = libraryDialogItemSetting.width;
            libraryDialogItem.HEIGHT = libraryDialogItemSetting.height;

            this.buildContent();
            this.show();
        }

        protected buildContent() {
            this.buildBackground();
            this.buildlist();
            this.buildOkButton();
            this.buildCancelButton();
        }

        protected buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, this.libraryDialogSetting.fillStyle, this.libraryDialogSetting.strokeStyle, this.libraryDialogSetting.lineWidth);
        }

        protected buildlist(): void {
            let list = new List();
            list.pos(this.libraryDialogSetting.listX, this.libraryDialogSetting.listY);
            this.list = list;
            this.initializeLibrayItems();
            list.vScrollBarSkin = this.libraryDialogSetting.vScrollBarSkin;
            list.itemRender = libraryDialogItem;
            list.selectEnable = true;
            list.spaceY = this.libraryDialogSetting.spaceY;
            list.spaceX = this.libraryDialogSetting.spaceX;
            list.repeatX = this.libraryDialogSetting.repeatX;
            list.repeatY = this.libraryDialogSetting.repeatY;
            list.startIndex = 0;
            this.addChild(list);
            list.selectHandler = new Handler(this, this.onSelect);
            list.renderHandler = new Handler(this, this.updateItem);
        }


        protected onSelect(index: number) {
            (this.list.selection as libraryDialogItem).setBackground(true,
                this.libraryDialogItemSetting.backgroundHighlight,
                this.libraryDialogItemSetting.backgroundNormal);
            if (this.curItem != null) {
                this.curItem.setBackground(false,
                    this.libraryDialogItemSetting.backgroundHighlight,
                    this.libraryDialogItemSetting.backgroundNormal);
            }
            this.curItem = this.list.selection as libraryDialogItem;
        }

        protected updateItem(cell: libraryDialogItem, index: number): void {

            cell.setImg(cell.dataSource,
                this.libraryDialogItemSetting.imagePadding,
                this.libraryDialogItemSetting.imagePadding,
                this.libraryDialogItemSetting.imageWidth,
                this.libraryDialogItemSetting.imageHeight
            );
            cell.setBackground(false,
                this.libraryDialogItemSetting.backgroundHighlight,
                this.libraryDialogItemSetting.backgroundNormal);
        }

        protected buildOkButton(): void {
            let okButton = new Button();
            okButton.skin = this.libraryDialogSetting.okButtonSkin;
            okButton.name = Dialog.OK;
            okButton.stateNum = this.libraryDialogSetting.okButtonStateNum;
            okButton.size(this.libraryDialogSetting.buttonWidth, this.libraryDialogSetting.buttonHeight);
            okButton.pos(this.libraryDialogSetting.okButtonX, this.libraryDialogSetting.okButtonY);
            this.okButton = okButton;
            okButton.on(Event.CLICK, this, this.onClose);
            this.addChild(okButton);
        }
        protected buildCancelButton(): void {
            let cancelButton = new Button();
            cancelButton.skin = this.libraryDialogSetting.cancelButtonSkin;
            cancelButton.stateNum = this.libraryDialogSetting.cancelButtonStateNum;
            cancelButton.name = Dialog.CANCEL;
            cancelButton.size(this.libraryDialogSetting.buttonWidth, this.libraryDialogSetting.buttonWidth);
            cancelButton.pos(this.libraryDialogSetting.cancelButtonX, this.libraryDialogSetting.cancelButtonY);
            this.cancelButton = cancelButton;
            this.addChild(cancelButton);
        }

        protected abstract initializeLibrayItems(): void;
        protected abstract onClose(e: Event): void;

    }
}