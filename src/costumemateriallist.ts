module Marmot {
    import Event = Laya.Event;
    import Button = Laya.Button;

    class CostumeMaterialListItem extends MaterialListItem {

        constructor() {
            super();
        }


    }

    interface CostumeMaterialListSetting extends MaterialListSetting {

    }

    interface CostumeMaterialListItemSetting extends MaterialListItemSetting {

    }

    export class CostumeMaterialList extends MaterialList {
        constructor(costumeMaterialListSetting: CostumeMaterialListSetting, costumeMaterialListItemSetting: CostumeMaterialListItemSetting) {
            super(costumeMaterialListSetting, costumeMaterialListItemSetting);
            this.itemRender = CostumeMaterialListItem;
        }

        protected initializeMaterialItems(): void {
            let ide:IDE = IDE.getIDE();
            ide.currentSprite.costumes.forEach((costume) => {
                this.array.push(costume);
            })
        }
        protected onMouse(e: Event, index: number): void {
            if (e.type == Event.CLICK) {

            }
        }
        protected onPlusBtnClicked(): void {
            let ide:IDE = IDE.getIDE();
            ide.spriteMaterialList.curClickedBtn = "addCostume";
            ide.spriteMaterialList.spriteLibraryDialog.show();
        }
    }
}