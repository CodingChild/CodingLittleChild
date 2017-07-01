module IDE {
    export class CostumeMaterialList extends GeneralList {

        constructor(generalListSetting: GeneralListSetting, generalListItemSetting: GeneralListItemSetting) {
            super(generalListSetting, generalListItemSetting);
            this.name = "costumeMaterialList";
            this.selectedIndex = 0;
        }
        
        /**
         * update costume list according to chosen index of sprite
         */
        public update() {
            let ide: GeneralIDE = GeneralIDE.getIDE();
            this.array = [];
            let list:SpriteMaterialList = ide.spriteMaterialArea.getChildAt(0) as SpriteMaterialList;
            let chosenIndex = list.selectedIndex;
            if(chosenIndex < 0){
                return null;
            }
            ide.sprites[chosenIndex].costumes.forEach((costume) => {
                this.array.push(costume.url);
            })
            this.refresh();
        }
    }
}












/*
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
                this.array.push(costume.url);
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
}*/