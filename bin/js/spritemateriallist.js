var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IDE;
(function (IDE) {
    var SpriteMaterialList = (function (_super) {
        __extends(SpriteMaterialList, _super);
        function SpriteMaterialList(generalListSetting, generalListItemSetting) {
            var _this = _super.call(this, generalListSetting, generalListItemSetting) || this;
            _this.name = "spriteMaterialList";
            _this.selectedIndex = 0;
            return _this;
        }
        SpriteMaterialList.prototype.onSelect = function (index) {
            if (index >= 0 && index < this.length) {
                this.selection.setBackground(true, this.generalListItemSetting.backgroundHighlight, this.generalListItemSetting.backgroundNormal);
            }
            if (this.curItem != null) {
                this.curItem.setBackground(false, this.generalListItemSetting.backgroundHighlight, this.generalListItemSetting.backgroundNormal);
            }
            this.curItem = this.selection;
            /*
            let ide: GeneralIDE = GeneralIDE.getIDE();
            this.curChosenSprite = ide.sprites[index];

            this.costumeMaterialList.initializeMaterialItems();

            let scriptAreaIndex: number = ide.getChildIndex(ide.scriptArea);
            ide.removeChildAt(scriptAreaIndex);
            ide.addChildAt(ide.currentSprite.scriptArea, scriptAreaIndex);
            ide.scriptArea = ide.currentSprite.scriptArea;
            */
        };
        /**
         * update sprite list
         */
        SpriteMaterialList.prototype.update = function () {
            var _this = this;
            this.array = [];
            var ide = IDE.GeneralIDE.getIDE();
            ide.sprites.forEach(function (sprite) {
                _this.addItem(sprite.costume.url);
            });
        };
        return SpriteMaterialList;
    }(IDE.GeneralList));
    IDE.SpriteMaterialList = SpriteMaterialList;
})(IDE || (IDE = {}));
//# sourceMappingURL=spritemateriallist.js.map