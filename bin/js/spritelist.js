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
    var Event = Laya.Event;
    var Button = Laya.Button;
    var Handler = Laya.Handler;
    var CostumesList = Marmot.CostumesList;
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            var _this = _super.call(this) || this;
            _this.img = new Image();
            _this.btn = new Button();
            _this.btn.skin = "materials/costume.png";
            _this.btn.stateNum = 1;
            _this.btn.size(80, 80);
            _this.btn.clickHandler = Handler.create(_this, _this.editCostume, [_this.btn], false);
            _this.addChild(_this.img);
            _this.addChild(_this.btn);
            return _this;
        }
        Item.prototype.setBackground = function (isHighlight) {
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width - 120, this.height, "#979494");
            }
            else {
                this.graphics.drawRect(0, 0, this.width - 120, this.height, "#ffffff");
            }
        };
        Item.prototype.setImg = function (src) {
            this.img.skin = src;
            this.img.left = 0;
            this.img.top = 0;
            this.img.size(100, 100);
        };
        Item.prototype.setBtn = function () {
            this.btn.right = 10;
            this.btn.top = 10;
        };
        Item.prototype.editCostume = function (btn) {
            var spList = this.parent.parent;
            var ide = spList.ide;
            spList.costumesList.visible = true;
            ide.currentSprite = ide.sprites[spList.selectedIndex];
        };
        return Item;
    }(Box));
    var SpriteList = (function (_super) {
        __extends(SpriteList, _super);
        function SpriteList(ide) {
            var _this = _super.call(this) || this;
            _this.width = 350;
            _this.height = 400;
            _this.ide = ide;
            _this.pos(100, 200);
            _this.array = [];
            _this.ide.sprites.forEach(function (sprite) {
                _this.array.push(sprite.costume);
            });
            _this.vScrollBarSkin = "";
            Laya.Log.print(_this.vScrollBarSkin);
            _this.itemRender = Item;
            _this.selectEnable = true;
            _this.selectHandler = new Handler(_this, _this.onSelect);
            _this.renderHandler = new Handler(_this, _this.updateItem);
            _this.spaceY = 40;
            _this.repeatX = 1;
            _this.repeatY = 3;
            _this.startIndex = 0;
            _this.curItem = null;
            _this.curClickedBtn = "";
            _this.costumesList = new CostumesList(ide);
            _this.costumesList.visible = false;
            _this.addChild(_this.costumesList);
            _this.spriteDialog = new Marmot.SpriteDialog(ide);
            _this.addChild(_this.spriteDialog);
            _this.spriteDialog.close(Dialog.CANCEL);
            _this.buildContent();
            return _this;
        }
        SpriteList.prototype.buildContent = function () {
            this.buildBackground();
            this.buildPlusBtn();
        };
        SpriteList.prototype.buildBackground = function () {
            this.graphics.drawRect(0, 0, this.width, this.height, "#a8b4f1");
        };
        SpriteList.prototype.buildPlusBtn = function () {
            var button = new Button();
            button.skin = "materials/plus.png";
            button.size(50, 50);
            button.pos(this.width / 2 - button.width / 2, this.height - button.height - 20);
            button.on(Event.CLICK, this, this.importSprite);
            button.stateNum = 1;
            button.name = "addSprite";
            this.addChild(button);
        };
        SpriteList.prototype.updateItem = function (cell, index) {
            cell.setImg(cell.dataSource);
            cell.size(this.width - 40, 100);
            cell.setBackground(false);
            cell.setBtn();
        };
        SpriteList.prototype.onSelect = function (index) {
            var _this = this;
            this.selection.setBackground(true);
            if (this.curItem != null) {
                this.curItem.setBackground(false);
            }
            this.curItem = this.selection;
            this.ide.currentSprite = this.ide.sprites[index];
            this.costumesList.array = [];
            this.ide.currentSprite.costumes.forEach(function (costume) {
                _this.costumesList.array.push(costume);
            });
            this.ide.spriteList.costumesList.refresh();
            var scriptAreaIndex = this.ide.getChildIndex(this.ide.scriptArea);
            this.ide.removeChildAt(scriptAreaIndex);
            this.ide.addChildAt(this.ide.currentSprite.scriptArea, scriptAreaIndex);
            this.ide.scriptArea = this.ide.currentSprite.scriptArea;
        };
        SpriteList.prototype.importSprite = function () {
            this.curClickedBtn = "addSprite";
            this.spriteDialog.show();
        };
        return SpriteList;
    }(List));
    Marmot.SpriteList = SpriteList;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=spritelist.js.map