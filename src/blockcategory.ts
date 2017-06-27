module Marmot {
    import Event = Laya.Event;
    import Button = Laya.Button;

    export interface BlockCategoryContent{
        url:string;
        blockCategory:string;
    }

    class BlockCategoryItem extends ListItem {
        public static WIDTH: number;
        public static HEIGHT: number;
        constructor() {
            super();
            if (BlockCategoryItem.WIDTH != undefined && BlockCategoryItem.HEIGHT != undefined)
                this.size(BlockCategoryItem.WIDTH, BlockCategoryItem.HEIGHT);
        }
    }

    export interface BlockCategorySetting extends CommonListSetting {

    }

    export interface BlockCategoryItemSetting extends ListItemSetting {

    }

    export class BlockCategory extends CommonList {

        constructor(blockCategorySetting: BlockCategorySetting, 
                    blockCategoryItemSetting: BlockCategoryItemSetting,
                    blockCategoryContent:BlockCategoryContent[]) {
            super(blockCategorySetting, blockCategoryItemSetting);
            BlockCategoryItem.WIDTH = blockCategoryItemSetting.width;
            BlockCategoryItem.HEIGHT = blockCategoryItemSetting.height;
            this.initializeItems(blockCategoryContent);
            this.itemRender = BlockCategoryItem;
            
        }

        public initializeItems(categories?:Array<BlockCategoryContent>): void {
            if(categories){
                this.array = categories;
            }
        }


        protected updateItem(cell: ListItem, index: number): void {
            let blockCategoryContent:BlockCategoryContent = cell.dataSource;
            cell.setImg(blockCategoryContent.url,
                this.listItemSetting.imageX,
                this.listItemSetting.imageY,
                this.listItemSetting.imageWidth,
                this.listItemSetting.imageHeight
            );
            cell.setBackground(false,
                this.listItemSetting.backgroundHighlight,
                this.listItemSetting.backgroundNormal);
        }

        protected onSelect(index: number): void {
            let ide = IDE.getIDE();
            if(index >= 0 && index < this.length){
                (this.selection as BlockCategoryItem).setBackground(true,
                    this.listItemSetting.backgroundHighlight,
                    this.listItemSetting.backgroundNormal);
                ide.blocksArea.updateContent(this.getItem(index).blockCategory);
            }

            if (this.curItem != null) {
                (this.curItem as BlockCategoryItem).setBackground(false,
                    this.listItemSetting.backgroundHighlight,
                    this.listItemSetting.backgroundNormal);
            }
            this.curItem = this.selection as BlockCategoryItem;
        }
    }
}