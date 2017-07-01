var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IDE;
(function (IDE) {
    var CostumeMaterialList = (function (_super) {
        __extends(CostumeMaterialList, _super);
        function CostumeMaterialList(generalListSetting, generalListItemSetting) {
            var _this = _super.call(this, generalListSetting, generalListItemSetting) || this;
            _this.name = "costumeMaterialList";
            _this.selectedIndex = 0;
            return _this;
        }
        /**
         * update costume list according to chosen index of sprite
         */
        CostumeMaterialList.prototype.update = function () {
            var _this = this;
            var ide = IDE.GeneralIDE.getIDE();
            this.array = [];
            var list = ide.spriteMaterialArea.getChildAt(0);
            var chosenIndex = list.selectedIndex;
            if (chosenIndex < 0) {
                return null;
            }
            ide.sprites[chosenIndex].costumes.forEach(function (costume) {
                _this.array.push(costume.url);
            });
            this.refresh();
        };
        return CostumeMaterialList;
    }(IDE.GeneralList));
    IDE.CostumeMaterialList = CostumeMaterialList;
})(IDE || (IDE = {}));
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
//# sourceMappingURL=costumemateriallist.js.map