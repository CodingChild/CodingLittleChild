var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Event = Laya.Event;
    var Button = Laya.Button;
    var SpriteMaterialListItem = (function (_super) {
        __extends(SpriteMaterialListItem, _super);
        function SpriteMaterialListItem() {
            var _this = _super.call(this) || this;
            _this.btn = new Button();
            _this.btn.clickHandler = Handler.create(_this, _this.editCostume, [_this.btn], false);
            _this.addChild(_this.btn);
            return _this;
        }
        SpriteMaterialListItem.prototype.setBtn = function (skin, stateNum, width, height, x, y) {
            this.btn.skin = skin;
            this.btn.stateNum = stateNum;
            this.btn.size(width, height);
            this.btn.x = x;
            this.btn.y = y;
        };
        SpriteMaterialListItem.prototype.editCostume = function (btn) {
            var spList = this.parent.parent;
            var ide = Marmot.IDE.getIDE();
            spList.costumeMaterialList.visible = true;
            ide.currentSprite = ide.sprites[spList.selectedIndex];
        };
        return SpriteMaterialListItem;
    }(Marmot.MaterialListItem));
    Marmot.SpriteMaterialListItem = SpriteMaterialListItem;
    var SpriteMaterialList = (function (_super) {
        __extends(SpriteMaterialList, _super);
        function SpriteMaterialList(spriteMaterialListSetting, spriteMaterialListItemSetting) {
            var _this = _super.call(this, spriteMaterialListSetting, spriteMaterialListItemSetting) || this;
            _this.curClickedBtn = "";
            _this.itemRender = SpriteMaterialListItem;
            return _this;
            /*
            this.costumeMaterialList = new CostumeMaterialList();
            this.costumeMaterialList.visible = false;
            this.addChild(this.costumeMaterialList);
            this.spriteDialog = new SpriteDialog(ide);
            this.addChild(this.spriteDialog);
            this.spriteDialog.close(Dialog.CANCEL);
            */
        }
        SpriteMaterialList.prototype.updateItem = function (cell, index) {
            var spriteMaterialListItemSetting = this.materialListItemSetting;
            cell.setImg(cell.dataSource, spriteMaterialListItemSetting.imageX, spriteMaterialListItemSetting.imageY, spriteMaterialListItemSetting.imageWidth, spriteMaterialListItemSetting.imageHeight);
            cell.setBackground(false, spriteMaterialListItemSetting.backgroundHighlight, spriteMaterialListItemSetting.backgroundNormal);
            cell.setBtn(spriteMaterialListItemSetting.costumebuttonSkin, spriteMaterialListItemSetting.costumebuttonStateNum, spriteMaterialListItemSetting.costumebuttonWidth, spriteMaterialListItemSetting.costumebuttonHeight, spriteMaterialListItemSetting.costumebuttonX, spriteMaterialListItemSetting.costumebuttonY);
        };
        SpriteMaterialList.prototype.initializeMaterialItems = function () {
            var _this = this;
            this.array = [];
            var ide = Marmot.IDE.getIDE();
            ide.sprites.forEach(function (sprite) {
                _this.array.push(sprite);
            });
        };
        SpriteMaterialList.prototype.onMouse = function (e, index) {
            var _this = this;
            if (e.type == Event.CLICK) {
                var spriteMaterialListItemSetting = this.materialListItemSetting;
                var ide = Marmot.IDE.getIDE();
                this.selection.setBackground(true, spriteMaterialListItemSetting.backgroundHighlight, spriteMaterialListItemSetting.backgroundNormal);
                if (this.curItem != null) {
                    this.selection.setBackground(false, spriteMaterialListItemSetting.backgroundHighlight, spriteMaterialListItemSetting.backgroundNormal);
                }
                this.curItem = this.selection;
                ide.currentSprite = ide.sprites[index];
                this.costumeMaterialList.array = [];
                ide.currentSprite.costumes.forEach(function (costume) {
                    _this.costumeMaterialList.array.push(costume);
                });
                ide.spriteMaterialList.costumeMaterialList.refresh();
                var scriptAreaIndex = ide.getChildIndex(ide.scriptArea);
                ide.removeChildAt(scriptAreaIndex);
                ide.addChildAt(ide.currentSprite.scriptArea, scriptAreaIndex);
                ide.scriptArea = ide.currentSprite.scriptArea;
            }
        };
        SpriteMaterialList.prototype.onPlusBtnClicked = function () {
            this.curClickedBtn = "addSprite";
            this.spriteLibraryDialog.show();
        };
        return SpriteMaterialList;
    }(Marmot.MaterialList));
    Marmot.SpriteMaterialList = SpriteMaterialList;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=spritemateriallist.js.map