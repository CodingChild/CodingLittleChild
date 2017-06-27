module Marmot {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;

    export interface CommonListSetting {
        width: number;
        height: number;
        vScrollBarSkin: string;
        hScrollBarSkin: string;
        spaceX: number;
        spaceY: number;
        repeatX: number;
        repeatY: number;
    }
    

    export abstract class CommonList extends Laya.List {
        public curItem: MaterialListItem;


        protected commonListSetting: CommonListSetting;
        protected listItemSetting: ListItemSetting;

        constructor(commonListSetting: CommonListSetting, listItemSetting: ListItemSetting) {
            super();
            this.commonListSetting = commonListSetting;
            this.listItemSetting = listItemSetting;
            this.width = commonListSetting.width;
            this.height = commonListSetting.height;
            this.array = [];
            if(commonListSetting.vScrollBarSkin){
                this.vScrollBarSkin = commonListSetting.vScrollBarSkin;
            }
            if(commonListSetting.hScrollBarSkin){
                this.hScrollBarSkin = commonListSetting.hScrollBarSkin;
            }        
            
            this.itemRender = ListItem;
            this.selectEnable = true;
            this.selectHandler = new Handler(this, this.onSelect);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceX = commonListSetting.spaceX;
            this.spaceY = commonListSetting.spaceY;
            this.repeatX = commonListSetting.repeatX;
            this.repeatY = commonListSetting.repeatY;
            this.startIndex = 0;
            this.curItem = null;
        }

        protected updateItem(cell: ListItem, index: number): void {
            cell.setImg(cell.dataSource,
                this.listItemSetting.imageX,
                this.listItemSetting.imageY,
                this.listItemSetting.imageWidth,
                this.listItemSetting.imageHeight
            );
            cell.setBackground(false,
                this.listItemSetting.backgroundHighlight,
                this.listItemSetting.backgroundNormal);
        }

        protected abstract initializeItems(): void;
        protected onSelect(index: number): void{

        }
    }
}