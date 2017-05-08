module Marmot {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;
    import CostumesList = Marmot.CostumesList;


    class Item extends Box {

        private img: Image;
        private btn: Button;

        constructor() {
            super();
            this.img = new Image();

            this.btn = new Button();
            this.btn.skin = "materials/costume.png";
            this.btn.stateNum = 1;
            this.btn.size(80, 80);

            this.btn.clickHandler = Handler.create(this, this.editCostume, [this.btn], false);

            this.addChild(this.img);
            this.addChild(this.btn);
        }

        public setBackground(isHighlight: boolean) {
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width - 120, this.height, "#979494");
            }
            else {
                this.graphics.drawRect(0, 0, this.width - 120, this.height, "#ffffff");
            }
        }

        public setImg(src: string): void {
            this.img.skin = src;
            this.img.left = 0;
            this.img.top = 0;
            this.img.size(100, 100);
        }

        public setBtn() {
            this.btn.right = 10;
            this.btn.top = 10;
        }

        private editCostume(btn: Button): void {
            let spList: SpriteList = (this.parent.parent as SpriteList);
            let ide: IDE = spList.ide;
            spList.costumesList.visible = true;
            ide.currentSprite = ide.sprites[spList.selectedIndex];
        }
    }

    export class SpriteList extends List {
        public ide: IDE;
        public costumesList: CostumesList;

        public curItem: Item;
        public spriteDialog: SpriteDialog;

        public curClickedBtn: string;



        constructor(ide: IDE) {
            super();
            this.width = 350;
            this.height = 400;
            this.ide = ide;
            this.pos(100, 200);
            this.array = [];
            this.ide.sprites.forEach((sprite) => {
                this.array.push(sprite.costume);
            })
            this.vScrollBarSkin = "";
            Laya.Log.print(this.vScrollBarSkin);
            this.itemRender = Item;
            this.selectEnable = true;
            this.selectHandler = new Handler(this, this.onSelect);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceY = 40;
            this.repeatX = 1;
            this.repeatY = 3;
            this.startIndex = 0;

            this.curItem = null;
            this.curClickedBtn = "";

            this.costumesList = new CostumesList(ide);
            this.costumesList.visible = false;
            this.addChild(this.costumesList);
            this.spriteDialog = new SpriteDialog(ide);
            this.addChild(this.spriteDialog);
            this.spriteDialog.close(Dialog.CANCEL);
            this.buildContent();

        }

        private buildContent() {
            this.buildBackground();
            this.buildPlusBtn();
        }
        private buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, "#a8b4f1");
        }

        private buildPlusBtn(): void {
            let button = new Button();
            button.skin = "materials/plus.png";
            button.size(50, 50);
            button.pos(this.width / 2 - button.width / 2, this.height - button.height - 20);
            button.on(Event.CLICK, this, this.importSprite);
            button.stateNum = 1;
            button.name = "addSprite";
            this.addChild(button);
        }

        private updateItem(cell: Item, index: number): void {
            cell.setImg(cell.dataSource);
            cell.size(this.width - 40, 100);
            cell.setBackground(false);
            cell.setBtn();
        }

        private onSelect(index: number): void {
            (this.selection as Item).setBackground(true);
            if (this.curItem != null) {
                this.curItem.setBackground(false);
            }
            this.curItem = this.selection as Item;
            this.ide.currentSprite = this.ide.sprites[index];
            this.costumesList.array = [];
            this.ide.currentSprite.costumes.forEach((costume) => {
                this.costumesList.array.push(costume);
            })
            this.ide.spriteList.costumesList.refresh();
            let scriptAreaIndex:number = this.ide.getChildIndex(this.ide.scriptArea);
            this.ide.removeChildAt(scriptAreaIndex);
            this.ide.addChildAt(this.ide.currentSprite.scriptArea, scriptAreaIndex);
            this.ide.scriptArea = this.ide.currentSprite.scriptArea;
            
        }

        private importSprite() {
            this.curClickedBtn = "addSprite";
            this.spriteDialog.show();
        }

    }


}