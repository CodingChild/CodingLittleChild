module Marmot {

    import Dialog = Laya.Dialog;
    import List = Laya.List;
    import Button = Laya.Button;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Handler = Laya.Handler;
    import Event = Laya.Event;
    import Sprite = Marmot.Sprite;

    class Item extends Box {

        private img: Image;

        constructor() {
            super();
            this.img = new Image();
            this.size(100, 100);

            this.addChild(this.img);
        }

        public setBackground(isHighlight: boolean) {
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width, this.height, "#979494");
            }
            else {
                this.graphics.drawRect(0, 0, this.width, this.height, "#ffffff");
            }
        }

        public setImg(src: string): void {
            this.img.skin = src;
            this.img.left = 0;
            this.img.top = 0;
            this.img.size(100, 100);
        }
    }

    export class SpriteDialog extends Dialog {

        private spList: List;
        private okButton: Button;
        private cancelButton: Button;
        private chosenIndex: number;
        private ide: IDE;
        private curItem:Item;

        constructor(ide: IDE) {
            super();
            this.ide = ide;
            this.pos(400, 0);
            this.size(500, 500);
            this.chosenIndex = -1;
            this.curItem = null;

            this.buildContent();
            this.show();
        }



        private buildContent() {
            this.buildBackground();
            this.buildSpList();
            this.buildOkButton();
            this.buildCancelButton();
        }

        private buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, "#ffffff", "#000000", 6);
        }

        private buildSpList(): void {
            let spList = new List();
            spList.pos(10, 10);
            spList.array = [
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png"
            ];
            spList.vScrollBarSkin = "";
            spList.itemRender = Item;
            spList.selectEnable = true;
            spList.spaceY = 20;
            spList.spaceX = 20;
            spList.repeatX = 4;
            spList.repeatY = 3;
            spList.startIndex = 0;
            this.addChild(spList);
            this.spList = spList;
            spList.selectHandler = new Handler(this, this.onSelect);
            spList.renderHandler = new Handler(this, this.updateItem);
        }

        private onSelect(index: number) {
            (this.spList.selection as Item).setBackground(true);
            if (this.curItem != null) {
                this.curItem.setBackground(false);
            }
            this.curItem = this.spList.selection as Item;
        }

        private updateItem(cell: Item, index: number): void {
            cell.setImg(cell.dataSource);
            cell.setBackground(false);
        }

        private buildOkButton(): void {
            let okButton = new Button();
            okButton.skin = "materials/btn_yes.png";
            okButton.name = Dialog.OK;
            okButton.stateNum = 1;
            okButton.size(50, 50);
            okButton.left = 100;
            okButton.bottom = 20;
            this.okButton = okButton;
            okButton.on(Event.CLICK, this, this.onClose);
            this.addChild(okButton);
        }

        private onClose(e: Event): void {
            if (e.target.name == Dialog.OK) {
                if (this.ide.spriteList.curClickedBtn == "addCostume") {
                    let item = this.spList.selectedItem;
                    this.ide.currentSprite.addCostume(item);
                    this.ide.currentSprite.costumes.push(item);
                    this.ide.spriteList.costumesList.array.push(item);
                    this.ide.spriteList.costumesList.refresh();

                }
                else if (this.ide.spriteList.curClickedBtn == "addSprite") {
                    let newSprite = new Marmot.Sprite();
                    newSprite.addCostume(this.spList.selectedItem);
                    newSprite.costume = this.spList.selectedItem;
                    newSprite.costumes = [newSprite.costume];
                    this.ide.sprites.push(newSprite);
                    this.ide.spriteList.array.push(newSprite.costume);
                    this.ide.spriteList.refresh();
                }

            }

        }

        private buildCancelButton(): void {
            let cancelButton = new Button();
            cancelButton.skin = "materials/btn_cancel.png";
            cancelButton.stateNum = 1;
            cancelButton.name = Dialog.CANCEL;
            cancelButton.size(50, 50);
            cancelButton.right = 100;
            cancelButton.bottom = 20;
            this.cancelButton = cancelButton;
            this.addChild(cancelButton);
        }
    }
}