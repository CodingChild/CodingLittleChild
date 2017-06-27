var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var MaterialCategoryItem = (function (_super) {
        __extends(MaterialCategoryItem, _super);
        function MaterialCategoryItem() {
            var _this = _super.call(this) || this;
            if (MaterialCategoryItem.WIDTH != undefined && MaterialCategoryItem.HEIGHT != undefined)
                _this.size(MaterialCategoryItem.WIDTH, MaterialCategoryItem.HEIGHT);
            return _this;
        }
        return MaterialCategoryItem;
    }(Marmot.ListItem));
    var MaterialCategory = (function (_super) {
        __extends(MaterialCategory, _super);
        function MaterialCategory(materialCategorySetting, materialCategoryItemSetting, urls) {
            var _this = _super.call(this, materialCategorySetting, materialCategoryItemSetting) || this;
            MaterialCategoryItem.WIDTH = materialCategoryItemSetting.width;
            MaterialCategoryItem.HEIGHT = materialCategoryItemSetting.height;
            _this.initializeItems(urls);
            _this.itemRender = MaterialCategoryItem;
            return _this;
        }
        MaterialCategory.prototype.initializeItems = function (categories) {
            if (categories) {
                this.array = categories;
            }
        };
        MaterialCategory.prototype.onSelect = function (index) {
            var ide = Marmot.IDE.getIDE();
            if (index >= 0 && index < this.length) {
                this.selection.setBackground(true, this.listItemSetting.backgroundHighlight, this.listItemSetting.backgroundNormal);
                ide.chooseMaterialArea(index);
            }
            if (this.curItem != null) {
                this.curItem.setBackground(false, this.listItemSetting.backgroundHighlight, this.listItemSetting.backgroundNormal);
            }
            this.curItem = this.selection;
        };
        return MaterialCategory;
    }(Marmot.CommonList));
    Marmot.MaterialCategory = MaterialCategory;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=materialcategory.js.map