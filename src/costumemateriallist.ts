module Marmot {
    import Event = Laya.Event;
    import Button = Laya.Button;

    class CostumeMaterialListItem extends MaterialListItem {
        public static WIDTH: number;
        public static HEIGHT: number;
        constructor() {
            super();
            if (CostumeMaterialListItem.WIDTH != undefined && CostumeMaterialListItem.HEIGHT != undefined)
                this.size(CostumeMaterialListItem.WIDTH, CostumeMaterialListItem.HEIGHT);
        }


    }

    export interface CostumeMaterialListSetting extends MaterialListSetting {

    }

    export interface CostumeMaterialListItemSetting extends MaterialListItemSetting {

    }

    export class CostumeMaterialList extends MaterialList {
        constructor(costumeMaterialListSetting: CostumeMaterialListSetting, costumeMaterialListItemSetting: CostumeMaterialListItemSetting) {
            super(costumeMaterialListSetting, costumeMaterialListItemSetting);
            CostumeMaterialListItem.WIDTH = costumeMaterialListItemSetting.width;
            CostumeMaterialListItem.HEIGHT = costumeMaterialListItemSetting.height;
            this.itemRender = CostumeMaterialListItem;
            
        }

        public initializeMaterialItems(): void {
            let ide: IDE = IDE.getIDE();
            this.array = [];
            ide.currentSprite.costumes.forEach((costume) => {
                this.array.push(costume);
            })
            this.refresh();
        }
        protected onSelect(index: number): void {

        }
        protected onPlusBtnClicked(): void {
            let ide: IDE = IDE.getIDE();
            ide.spriteMaterialList.curClickedBtn = "addCostume";
            ide.spriteMaterialList.spriteLibraryDialog.show();
        }
    }
}