/*
module Marmot {
    import List = Laya.List;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Button = Laya.Button;
    import Handler = Laya.Handler;

    class MaterialCategoryItem extends ListItem {
        public static WIDTH: number;
        public static HEIGHT: number;
        constructor() {
            super();
            if (MaterialCategoryItem.WIDTH != undefined && MaterialCategoryItem.HEIGHT != undefined)
                this.size(MaterialCategoryItem.WIDTH, MaterialCategoryItem.HEIGHT);
        }


    }

    export interface MaterialCategorySetting extends CommonListSetting {

    }

    export interface MaterialCategoryItemSetting extends ListItemSetting {

    }

    export class MaterialCategory extends CommonList {
        constructor(materialCategorySetting: MaterialCategorySetting,
            materialCategoryItemSetting: MaterialCategoryItemSetting,
            urls: string[]) {
            super(materialCategorySetting, materialCategoryItemSetting);
            MaterialCategoryItem.WIDTH = materialCategoryItemSetting.width;
            MaterialCategoryItem.HEIGHT = materialCategoryItemSetting.height;
            this.initializeItems(urls);
            this.itemRender = MaterialCategoryItem;

        }

        public initializeItems(categories?: Array<string>): void {
            if (categories) {
                this.array = categories;
            }
        }

        protected onSelect(index: number): void {
            let ide = IDE.getIDE();
            if (index >= 0 && index < this.length) {
                (this.selection as MaterialCategoryItem).setBackground(true,
                    this.listItemSetting.backgroundHighlight,
                    this.listItemSetting.backgroundNormal);
                ide.chooseMaterialArea(index);
            }

            if (this.curItem != null) {
                (this.curItem as MaterialCategoryItem).setBackground(false,
                    this.listItemSetting.backgroundHighlight,
                    this.listItemSetting.backgroundNormal);
            }
            this.curItem = this.selection as MaterialCategoryItem;
        }
    }


}*/ 
//# sourceMappingURL=materialcategory.js.map