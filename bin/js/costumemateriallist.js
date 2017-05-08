var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var CostumeMaterialListItem = (function (_super) {
        __extends(CostumeMaterialListItem, _super);
        function CostumeMaterialListItem() {
            var _this = _super.call(this) || this;
            if (CostumeMaterialListItem.WIDTH != undefined && CostumeMaterialListItem.HEIGHT != undefined)
                _this.size(CostumeMaterialListItem.WIDTH, CostumeMaterialListItem.HEIGHT);
            return _this;
        }
        return CostumeMaterialListItem;
    }(Marmot.MaterialListItem));
    var CostumeMaterialList = (function (_super) {
        __extends(CostumeMaterialList, _super);
        function CostumeMaterialList(costumeMaterialListSetting, costumeMaterialListItemSetting) {
            var _this = _super.call(this, costumeMaterialListSetting, costumeMaterialListItemSetting) || this;
            CostumeMaterialListItem.WIDTH = costumeMaterialListItemSetting.width;
            CostumeMaterialListItem.HEIGHT = costumeMaterialListItemSetting.height;
            _this.itemRender = CostumeMaterialListItem;
            return _this;
        }
        CostumeMaterialList.prototype.initializeMaterialItems = function () {
            var _this = this;
            var ide = Marmot.IDE.getIDE();
            this.array = [];
            ide.currentSprite.costumes.forEach(function (costume) {
                _this.array.push(costume);
            });
            this.refresh();
        };
        CostumeMaterialList.prototype.onSelect = function (index) {
        };
        CostumeMaterialList.prototype.onPlusBtnClicked = function () {
            var ide = Marmot.IDE.getIDE();
            ide.spriteMaterialList.curClickedBtn = "addCostume";
            ide.spriteMaterialList.spriteLibraryDialog.show();
        };
        return CostumeMaterialList;
    }(Marmot.MaterialList));
    Marmot.CostumeMaterialList = CostumeMaterialList;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=costumemateriallist.js.map