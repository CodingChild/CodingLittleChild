var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var List = Laya.List;
    var Box = Laya.Box;
    var Image = Laya.Image;
    var Handler = Laya.Handler;
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            var _this = _super.call(this) || this;
            _this.img = new Image();
            _this.addChild(_this.img);
            return _this;
        }
        Item.prototype.setBackground = function (isHighlight) {
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width, this.height, "#a8b4f1");
            }
        };
        Item.prototype.setImg = function (src) {
            this.img.skin = src;
            this.img.pos(0, 0);
            this.img.size(100, 100);
        };
        return Item;
    }(Box));
    var MaterialCategory = (function (_super) {
        __extends(MaterialCategory, _super);
        function MaterialCategory() {
            var _this = _super.call(this) || this;
            _this.width = 100;
            _this.height = 400;
            _this.pos(0, 200);
            _this.array = [
                "materials/btn_sprite.png",
                "materials/btn_stage.png",
                "materials/btn_music_1.png"
            ];
            _this.itemRender = Item;
            _this.selectEnable = true;
            _this.spaceY = 50;
            _this.repeatX = 1;
            _this.repeatY = 3;
            _this.startIndex = 0;
            _this.curIndex = -1;
            _this.selectHandler = new Handler(_this, _this.onSelect);
            _this.renderHandler = new Handler(_this, _this.updateItem);
            return _this;
        }
        MaterialCategory.prototype.updateItem = function (cell, index) {
            var yindex = index % this.repeatY;
            cell.pos(0, (yindex * 100 + yindex * 50));
            cell.setImg(cell.dataSource);
            cell.size(100, 100);
            cell.setBackground(false);
        };
        MaterialCategory.prototype.onSelect = function (index) {
            if (index != -1) {
                var newCell = this.cells[index];
                if (this.curIndex > -1) {
                    var oldCell = this.cells[this.curIndex];
                    oldCell.setBackground(false);
                }
                newCell.setBackground(true);
                this.curIndex = index;
                var ide = Marmot.IDE.getIDE();
                ide.chooseMaterialArea(index);
            }
            else {
                if (this.curIndex > -1) {
                    var oldCell = this.cells[this.curIndex];
                    oldCell.setBackground(false);
                }
                this.curIndex = index;
            }
        };
        return MaterialCategory;
    }(List));
    Marmot.MaterialCategory = MaterialCategory;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=materialcategory.js.map