module IDE {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;

    export interface GeneralListItemSetting {
        width: number;
        height: number;
        backgroundNormal: string;
        backgroundHighlight: string;
        imageSize: number
    }

    export class GeneralListItem extends Box {

        public static WIDTH: number;
        public static HEIGHT: number;

        protected img: Image;

        constructor() {
            super();
            this.img = new Image();
            if (GeneralListItem.WIDTH != undefined && GeneralListItem.HEIGHT != undefined) {
                this.size(GeneralListItem.WIDTH, GeneralListItem.HEIGHT);
            }
            this.addChild(this.img);
        }


        public setBackground(isHighlight: boolean, backgroundHighlight: string, backgroundNormal: string = null) {
            this.graphics.clear();
            if (isHighlight == true) {
                if (backgroundHighlight != null) {
                    this.graphics.drawRect(0, 0, this.width, this.height, backgroundHighlight);
                }
            }
            else {
                if (backgroundNormal != null) {
                    this.graphics.drawRect(0, 0, this.width, this.height, backgroundNormal);
                }
            }
        }

        public setImg(src: string, imageSize: number): void {
            this.img.skin = src;
            this.img.pos(Math.round(this.width / 2 - imageSize / 2), Math.round(this.height / 2 - imageSize / 2));
            this.img.size(imageSize, imageSize);
        }
    }

    export interface GeneralListSetting {
        width: number;
        height: number;
        vScrollBarSkin: string;
        hScrollBarSkin: string;
        spaceX: number;
        spaceY: number;
        repeatX: number;
        repeatY: number;
        bgColor: string;
    }


    export class GeneralList extends Laya.List {
        protected curItem: GeneralListItem;
        public generalListSetting: GeneralListSetting;
        public generalListItemSetting: GeneralListItemSetting;

        constructor(generalListSetting: GeneralListSetting, generalListItemSetting: GeneralListItemSetting) {
            super();
            this.generalListSetting = generalListSetting;
            this.generalListItemSetting = generalListItemSetting;
            this.width = generalListSetting.width;
            this.height = generalListSetting.height;
            GeneralListItem.WIDTH = generalListItemSetting.width;
            GeneralListItem.HEIGHT = generalListItemSetting.height;

            this.array = [];
            if(generalListSetting.vScrollBarSkin != null){
                this.vScrollBarSkin = generalListSetting.vScrollBarSkin;
            }
            if(generalListSetting.hScrollBarSkin != null){
                this.hScrollBarSkin = generalListSetting.hScrollBarSkin;
            }

            this.itemRender = GeneralListItem;
            this.selectEnable = true;
            this.selectHandler = new Handler(this, this.onSelect);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceX = generalListSetting.spaceX;
            this.spaceY = generalListSetting.spaceY;
            this.repeatX = generalListSetting.repeatX;
            this.repeatY = generalListSetting.repeatY;
            this.startIndex = 0;

            this.curItem = null;
            this.drawBackground();
        }


        protected drawBackground(): void {
            this.graphics.drawRect(0, 0, this.width, this.height, this.generalListSetting.bgColor);
        }

        protected updateItem(cell: GeneralListItem, index: number): void {
            cell.setImg(cell.dataSource, this.generalListItemSetting.imageSize);
            cell.setBackground(false,
                this.generalListItemSetting.backgroundHighlight,
                this.generalListItemSetting.backgroundNormal);
            if (this.curItem && this.selectedIndex == index) {
                (this.curItem as GeneralListItem).setBackground(true,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }

        }
        protected initializeItems(): void{
            
        }
        protected onSelect(index: number): void {
            if (index >= 0 && index < this.length) {
                (this.selection as GeneralListItem).setBackground(true,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }

            if (this.curItem != null) {
                (this.curItem as GeneralListItem).setBackground(false,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }
            this.curItem = this.selection as GeneralListItem;
        }
    }
}