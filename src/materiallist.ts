module Marmot {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;

    export interface MaterialListSetting {
        width: number;
        height: number;
        fillStyle: string;
        vScrollBarSkin: string;

        spaceY: number;

        repeatY: number;

        plusButtonWidth: number;
        plusButtonHeight: number;
        plusButtonStateNum: number;
        plusButtonX: number;
        plusButtonY: number;
        plusButtonSkin: string;
        plusButtonName: string;
    }

    export interface MaterialListItemSetting extends ListItemSetting {

    }

    export class MaterialListItem extends ListItem {

        constructor() {
            super();

        }

    }

    export abstract class MaterialList extends List {

        public curItem: MaterialListItem;


        protected materialListSetting: MaterialListSetting;
        protected materialListItemSetting: MaterialListItemSetting;

        constructor(materialListSetting: MaterialListSetting, materialListItemSetting: MaterialListItemSetting) {
            super();
            this.materialListSetting = materialListSetting;
            this.materialListItemSetting = materialListItemSetting;
            this.width = materialListSetting.width;
            this.height = materialListSetting.height;
            this.array = [];
            this.vScrollBarSkin = "";
            this.itemRender = MaterialListItem;
            this.selectEnable = true;
            this.selectHandler = new Handler(this, this.onSelect);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceY = materialListSetting.spaceY;
            this.repeatX = 1;
            this.repeatY = materialListSetting.repeatY;
            this.startIndex = 0;
            this.curItem = null;

            this.buildContent();
        }

        protected buildContent() {
            this.buildBackground();
            this.buildPlusBtn();
        }
        protected buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, this.materialListSetting.fillStyle);
        }

        protected buildPlusBtn(): void {
            let button = new Button();
            button.skin = this.materialListSetting.plusButtonSkin;
            button.size(this.materialListSetting.plusButtonWidth, this.materialListSetting.plusButtonHeight);
            button.pos(this.materialListSetting.plusButtonX, this.materialListSetting.plusButtonY);
            button.on(Event.CLICK, this, this.onPlusBtnClicked);
            button.stateNum = this.materialListSetting.plusButtonStateNum;
            button.name = this.materialListSetting.plusButtonName;
            this.addChild(button);
        }

        protected updateItem(cell: MaterialListItem, index: number): void {
            cell.setImg(cell.dataSource,
                this.materialListItemSetting.imageX,
                this.materialListItemSetting.imageY,
                this.materialListItemSetting.imageWidth,
                this.materialListItemSetting.imageHeight
            );
            cell.setBackground(false,
                this.materialListItemSetting.backgroundHighlight,
                this.materialListItemSetting.backgroundNormal);
        }

        protected abstract initializeMaterialItems(): void;
        protected abstract onSelect(index: number): void;
        protected abstract onPlusBtnClicked(): void;
    }


}