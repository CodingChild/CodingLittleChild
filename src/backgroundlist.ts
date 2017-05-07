module Marmot {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;


    class Item extends Box {

        private img: Image;

        constructor() {
            super();
            this.img = new Image();
            this.width = 150;
            this.height = 100;

            this.addChild(this.img);
        }

        public setBackground() {
            this.graphics.drawPath(0, 0, [
                ["moveTo", 4 * 2, 0],
                ["lineTo", 46 * 2, 0],
                ["arcTo", 50 * 2, 0, 50 * 2, 4 * 2, 4 * 2],
                ["lineTo", 50 * 2, 46 * 2],
                ["arcTo", 50 * 2, 50 * 2, 46 * 2, 50 * 2, 4 * 2],
                ["lineTo", 4 * 2, 50 * 2],
                ["arcTo", 0, 50 * 2, 0, 46 * 2, 4 * 2],
                ["lineTo", 0, 4 * 2],
                ["arcTo", 0, 0, 4 * 2, 0, 4 * 2],
                ["closePath"]
            ], {
                    fillStyle: "#ffffff"
                },
                {
                    "strokeStyle": Block.blockSetting.blockStrokeStyleNormal,
                    "lineWidth": Block.blockSetting.blockLineWidthNormal
                });
        }


        public setImg(src: string): void {
            this.img.skin = src;
            this.img.left = 10;
            this.img.top = 10;
            this.img.size(80, 80);
        }

    }

    export class BackgroundList extends List {

        private ide: IDE;
        

        constructor(ide: IDE) {
            super();
            this.width = 100;
            this.height = 400;
            this.ide = ide;
            this.pos(350, 0);
            this.array = [];
            this.ide.currentSprite.costumes.forEach((costume) => {
                this.array.push(costume);
            })
            this.vScrollBarSkin = "";
            this.itemRender = Item;
            this.selectEnable = true;
            this.mouseHandler = new Handler(this, this.onMouse);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceY = 20;
            this.repeatX = 1;
            this.repeatY = 3;
            this.startIndex = 0;

            this.buildContent();
        }

        private buildContent() {
            this.buildBackground();
            this.buildPlusBtn();
        }
        private buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, "#c4cdf8");
        }

        private buildPlusBtn(): void {
            let button = new Button();
            button.skin = "materials/plus.png";
            button.size(50, 50);
            button.pos(this.width / 2 - button.width / 2, this.height - button.height - 20);
            button.on(Event.CLICK, this, this.importSprite);
            button.stateNum = 1;
            button.name = "addCostume";
            this.addChild(button);
        }

        private updateItem(cell: Item, index: number): void {
            cell.size(this.width, 100);
            cell.setImg(cell.dataSource);
            cell.setBackground();
        }

        private onMouse(e: Event, index: number): void {
            if (e.type == Event.CLICK) {

            }
        }

        private importSprite(): void {
            this.ide.spriteList.curClickedBtn = "addCostume";
            this.ide.spriteList.spriteDialog.show();
        }
    }


}