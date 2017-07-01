module IDE {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;

    export class MaterialCategoryList extends GeneralList {
        constructor(generalListSetting: GeneralListSetting,
            generalListItemSetting: GeneralListItemSetting,
            urls: string[]) {
            super(generalListSetting, generalListItemSetting);
            this.initializeItems(urls);
            this.selectedIndex = 0;

        }

        public initializeItems(categories?: Array<string>): void {
            if (categories) {
                this.array = categories;
            }
        }

        protected onSelect(index: number): void {
            let ide = GeneralIDE.getIDE();
            if (index >= 0 && index < this.length) {
                (this.selection as GeneralListItem).setBackground(true,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
                if(ide != null){
                    ide.chooseMaterialArea(index);
                }
            }

            if (this.curItem != null) {
                (this.curItem as GeneralListItem).setBackground(false,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }

            this.curItem = this.selection as GeneralListItem;
        }

        protected updateItem(cell: GeneralListItem, index: number): void {
            cell.setImg(cell.dataSource, this.generalListItemSetting.imageSize);
        }
    }


}