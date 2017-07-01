module IDE {
    export class BackgroundMaterialList extends GeneralList {

        constructor(generalListSetting: GeneralListSetting, generalListItemSetting: GeneralListItemSetting) {
            super(generalListSetting, generalListItemSetting);
            this.name = "backgroundMaterialList";
            this.selectedIndex = 0;
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
            let ide: GeneralIDE = GeneralIDE.getIDE();
            if (ide != null) {
                ide.stageArea.costume = ide.stageArea.costumes[index];
                ide.stageArea.wearCostume(index);
            }
        }
        /**
         * update list
         */
        public update() {
            this.array = [];
            let ide: GeneralIDE = GeneralIDE.getIDE();
            ide.stageArea.costumes.forEach((costume) => {
                this.addItem(costume.url);
            })
        }
    }
}










/*
module Marmot {
    import Event = Laya.Event;
    import Button = Laya.Button;

    export class BackgroundMaterialListItem extends MaterialListItem {
        public static WIDTH: number;
        public static HEIGHT: number;

        constructor() {
            super();
            if (BackgroundMaterialListItem.WIDTH != undefined && BackgroundMaterialListItem.HEIGHT != undefined) {
                this.size(BackgroundMaterialListItem.WIDTH, BackgroundMaterialListItem.HEIGHT);
            }

        }

    }

    export interface BackgroundMaterialListSetting extends MaterialListSetting {

    }

    export interface BackgroundMaterialListItemSetting extends MaterialListItemSetting {

    }

    export class BackgroundMaterialList extends MaterialList {

        public backgroundLibraryDialog: BackgroundLibraryDialog;


        constructor(backgroundMaterialListSetting: BackgroundMaterialListSetting, backgroundMaterialListItemSetting: BackgroundMaterialListItemSetting) {
            super(backgroundMaterialListSetting, backgroundMaterialListItemSetting);
            BackgroundMaterialListItem.WIDTH = backgroundMaterialListItemSetting.width;
            BackgroundMaterialListItem.HEIGHT = backgroundMaterialListItemSetting.height;

            this.itemRender = BackgroundMaterialListItem;

        }

        public initializeMaterialItems(): void {
            this.array = [];
            let ide: IDE = IDE.getIDE();
            ide.stageArea.costumes.forEach((costume) => {
                this.array.push(costume.url);
            })
            this.refresh();

        }

        protected onSelect(index: number): void {
            let backgroundMaterialListItemSetting: BackgroundMaterialListItemSetting = this.materialListItemSetting as BackgroundMaterialListItemSetting;
            let ide: IDE = IDE.getIDE();

            if (this.curItem != null) {
                (this.curItem as BackgroundMaterialListItem).setBackground(false,
                    backgroundMaterialListItemSetting.backgroundHighlight,
                    backgroundMaterialListItemSetting.backgroundNormal);
            }
            (this.selection as BackgroundMaterialListItem).setBackground(true,
                backgroundMaterialListItemSetting.backgroundHighlight,
                backgroundMaterialListItemSetting.backgroundNormal);
            this.curItem = this.selection as BackgroundMaterialListItem;
            ide.stageArea.costume = ide.stageArea.costumes[index];
            ide.stageArea.wearCostume(index);

        }
        protected onPlusBtnClicked(): void {
            this.backgroundLibraryDialog.show();
        }
    }
}*/