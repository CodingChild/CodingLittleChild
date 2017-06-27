var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var BackgroundMaterialListItem = (function (_super) {
        __extends(BackgroundMaterialListItem, _super);
        function BackgroundMaterialListItem() {
            var _this = _super.call(this) || this;
            if (BackgroundMaterialListItem.WIDTH != undefined && BackgroundMaterialListItem.HEIGHT != undefined) {
                _this.size(BackgroundMaterialListItem.WIDTH, BackgroundMaterialListItem.HEIGHT);
            }
            return _this;
        }
        return BackgroundMaterialListItem;
    }(Marmot.MaterialListItem));
    Marmot.BackgroundMaterialListItem = BackgroundMaterialListItem;
    var BackgroundMaterialList = (function (_super) {
        __extends(BackgroundMaterialList, _super);
        function BackgroundMaterialList(backgroundMaterialListSetting, backgroundMaterialListItemSetting) {
            var _this = _super.call(this, backgroundMaterialListSetting, backgroundMaterialListItemSetting) || this;
            BackgroundMaterialListItem.WIDTH = backgroundMaterialListItemSetting.width;
            BackgroundMaterialListItem.HEIGHT = backgroundMaterialListItemSetting.height;
            _this.itemRender = BackgroundMaterialListItem;
            return _this;
        }
        BackgroundMaterialList.prototype.initializeMaterialItems = function () {
            var _this = this;
            this.array = [];
            var ide = Marmot.IDE.getIDE();
            ide.stageArea.costumes.forEach(function (costume) {
                _this.array.push(costume.url);
            });
            this.refresh();
        };
        BackgroundMaterialList.prototype.onSelect = function (index) {
            var backgroundMaterialListItemSetting = this.materialListItemSetting;
            var ide = Marmot.IDE.getIDE();
            if (this.curItem != null) {
                this.curItem.setBackground(false, backgroundMaterialListItemSetting.backgroundHighlight, backgroundMaterialListItemSetting.backgroundNormal);
            }
            this.selection.setBackground(true, backgroundMaterialListItemSetting.backgroundHighlight, backgroundMaterialListItemSetting.backgroundNormal);
            this.curItem = this.selection;
            ide.stageArea.costume = ide.stageArea.costumes[index];
            ide.stageArea.wearCostume(index);
        };
        BackgroundMaterialList.prototype.onPlusBtnClicked = function () {
            this.backgroundLibraryDialog.show();
        };
        return BackgroundMaterialList;
    }(Marmot.MaterialList));
    Marmot.BackgroundMaterialList = BackgroundMaterialList;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=backgroundmateriallist.js.map