var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Dialog = Laya.Dialog;
    var List = Laya.List;
    var Button = Laya.Button;
    var Box = Laya.Box;
    var Image = Laya.Image;
    var Handler = Laya.Handler;
    var Event = Laya.Event;
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            var _this = _super.call(this) || this;
            _this.img = new Image();
            _this.size(Item.WIDTH, Item.HEIGHT);
            _this.addChild(_this.img);
            return _this;
        }
        Item.prototype.setBackground = function (isHighlight) {
            this.graphics.clear();
            if (isHighlight == true) {
                this.graphics.drawRect(0, 0, this.width, this.height, "#979494");
            }
            else {
                this.graphics.drawRect(0, 0, this.width, this.height, "#ffffff");
            }
        };
        Item.prototype.setImg = function (src) {
            this.img.skin = src;
            this.img.left = 0;
            this.img.top = 0;
            this.img.size(100, 100);
        };
        return Item;
    }(Box));
    var SpriteDialog = (function (_super) {
        __extends(SpriteDialog, _super);
        function SpriteDialog(ide) {
            var _this = _super.call(this) || this;
            _this.ide = ide;
            _this.pos(400, 0);
            _this.size(500, 500);
            _this.chosenIndex = -1;
            _this.curItem = null;
            Item.WIDTH = 100;
            Item.HEIGHT = 100;
            _this.buildContent();
            _this.show();
            return _this;
        }
        SpriteDialog.prototype.buildContent = function () {
            this.buildBackground();
            this.buildSpList();
            this.buildOkButton();
            this.buildCancelButton();
        };
        SpriteDialog.prototype.buildBackground = function () {
            this.graphics.drawRect(0, 0, this.width, this.height, "#ffffff", "#000000", 6);
        };
        SpriteDialog.prototype.buildSpList = function () {
            var spList = new List();
            spList.pos(10, 10);
            spList.array = [
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png",
                "materials/sp_marmot.png",
                "materials/sp_monkey.png"
            ];
            spList.vScrollBarSkin = "";
            spList.itemRender = Item;
            spList.selectEnable = true;
            spList.spaceY = 20;
            spList.spaceX = 20;
            spList.repeatX = 4;
            spList.repeatY = 3;
            spList.startIndex = 0;
            this.addChild(spList);
            this.spList = spList;
            spList.selectHandler = new Handler(this, this.onSelect);
            spList.renderHandler = new Handler(this, this.updateItem);
        };
        SpriteDialog.prototype.onSelect = function (index) {
            this.spList.selection.setBackground(true);
            if (this.curItem != null) {
                this.curItem.setBackground(false);
            }
            this.curItem = this.spList.selection;
        };
        SpriteDialog.prototype.updateItem = function (cell, index) {
            cell.setImg(cell.dataSource);
            cell.setBackground(false);
        };
        SpriteDialog.prototype.buildOkButton = function () {
            var okButton = new Button();
            okButton.skin = "materials/btn_yes.png";
            okButton.name = Dialog.OK;
            okButton.stateNum = 1;
            okButton.size(50, 50);
            okButton.left = 100;
            okButton.bottom = 20;
            this.okButton = okButton;
            okButton.on(Event.CLICK, this, this.onClose);
            this.addChild(okButton);
        };
        SpriteDialog.prototype.onClose = function (e) {
            if (e.target.name == Dialog.OK) {
                if (this.ide.spriteList.curClickedBtn == "addCostume") {
                    var item = this.spList.selectedItem;
                    this.ide.currentSprite.addCostume(item);
                    this.ide.currentSprite.costumes.push(item);
                    this.ide.spriteList.costumesList.array.push(item);
                    this.ide.spriteList.costumesList.refresh();
                }
                else if (this.ide.spriteList.curClickedBtn == "addSprite") {
                    var newSprite = new Marmot.Sprite();
                    newSprite.addCostume(this.spList.selectedItem);
                    newSprite.costume = this.spList.selectedItem;
                    newSprite.costumes = [newSprite.costume];
                    this.ide.sprites.push(newSprite);
                    this.ide.spriteList.array.push(newSprite.costume);
                    this.ide.spriteList.refresh();
                }
            }
        };
        SpriteDialog.prototype.buildCancelButton = function () {
            var cancelButton = new Button();
            cancelButton.skin = "materials/btn_cancel.png";
            cancelButton.stateNum = 1;
            cancelButton.name = Dialog.CANCEL;
            cancelButton.size(50, 50);
            cancelButton.right = 100;
            cancelButton.bottom = 20;
            this.cancelButton = cancelButton;
            this.addChild(cancelButton);
        };
        return SpriteDialog;
    }(Dialog));
    Marmot.SpriteDialog = SpriteDialog;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=spriteDialog.js.map