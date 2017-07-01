module IDE {
    import Event = Laya.Event;
    import Button = Laya.Button;

    export interface BlockCategoryContent {
        url: string;
        blockCategory: string;
    }

    export class BlockCategoryList extends GeneralList {
        constructor(generalListSetting: GeneralListSetting, generalListItemSetting: GeneralListItemSetting,
            blockCategoryContent: BlockCategoryContent[]) {
            super(generalListSetting, generalListItemSetting);
            this.initializeItems(blockCategoryContent);
            this.name = "blockCategoryList";
            this.selectedIndex = 0;
        }

        public initializeItems(categories?: Array<BlockCategoryContent>): void {
            if (categories) {
                this.array = categories;
            }
        }


        protected updateItem(cell: GeneralListItem, index: number): void {
            let blockCategoryContent: BlockCategoryContent = cell.dataSource;
            cell.setImg(blockCategoryContent.url,
                this.generalListItemSetting.imageSize
            );
            cell.setBackground(false,
                this.generalListItemSetting.backgroundHighlight,
                this.generalListItemSetting.backgroundNormal);
            if (this.curItem && this.selectedIndex == index) {
                (this.curItem as GeneralListItem).setBackground(true,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }

        }

        protected onSelect(index: number): void {
            if (index >= 0 && index < this.length) {
                (this.selection as GeneralListItem).setBackground(true,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
                if(this.parent != null){
                    let blockContentList = (this.parent.getChildByName("blockContentList") as BlockContentList);
                    blockContentList.updateContent(this.getItem(index).blockCategory);
                }
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