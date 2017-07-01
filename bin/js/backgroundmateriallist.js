var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IDE;
(function (IDE) {
    var BackgroundMaterialList = (function (_super) {
        __extends(BackgroundMaterialList, _super);
        function BackgroundMaterialList(generalListSetting, generalListItemSetting) {
            var _this = _super.call(this, generalListSetting, generalListItemSetting) || this;
            _this.name = "backgroundMaterialList";
            _this.selectedIndex = 0;
            return _this;
        }
        BackgroundMaterialList.prototype.onSelect = function (index) {
            if (index >= 0 && index < this.length) {
                this.selection.setBackground(true, this.generalListItemSetting.backgroundHighlight, this.generalListItemSetting.backgroundNormal);
            }
            if (this.curItem != null) {
                this.curItem.setBackground(false, this.generalListItemSetting.backgroundHighlight, this.generalListItemSetting.backgroundNormal);
            }
            this.curItem = this.selection;
            var ide = IDE.GeneralIDE.getIDE();
            if (ide != null) {
                ide.stageArea.costume = ide.stageArea.costumes[index];
                ide.stageArea.wearCostume(index);
            }
        };
        /**
         * update list
         */
        BackgroundMaterialList.prototype.update = function () {
            var _this = this;
            this.array = [];
            var ide = IDE.GeneralIDE.getIDE();
            ide.stageArea.costumes.forEach(function (costume) {
                _this.addItem(costume.url);
            });
        };
        return BackgroundMaterialList;
    }(IDE.GeneralList));
    IDE.BackgroundMaterialList = BackgroundMaterialList;
})(IDE || (IDE = {}));
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
//# sourceMappingURL=backgroundmateriallist.js.map