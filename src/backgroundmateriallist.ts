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
                this.array.push(costume);
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

            let scriptAreaIndex: number = ide.getChildIndex(ide.scriptArea);
            ide.removeChildAt(scriptAreaIndex);
            ide.addChildAt(ide.stageArea.scriptArea, scriptAreaIndex);
            ide.scriptArea = ide.stageArea.scriptArea;
        }
        protected onPlusBtnClicked(): void {
            this.backgroundLibraryDialog.show();
        }
    }
}