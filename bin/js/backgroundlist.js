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
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            var _this = _super.call(this) || this;
            _this.img = new Image();
            _this.width = 150;
            _this.height = 100;
            _this.addChild(_this.img);
            return _this;
        }
        Item.prototype.setBackground = function () {
            this.graphics.drawPath(0, 0, [
                ["moveTo", 4 * 2, 0],
                ["lineTo", 46 * 2, 0],
                ["arcTo", 50 * 2, 0, 50 * 2, 4 * 2, 4 * 2],
                ["lineTo", 50 * 2, 46 * 2],
                ["arcTo", 50 * 2, 50 * 2, 46 * 2, 50 * 2, 4 * 2],
                ["lineTo", 4 * 2, 50 * 2],
                ["arcTo", 0, 50 * 2, 0, 46 * 2, 4 * 2],
                ["lineTo", 0, 4 * 2],
                ["arcTo", 0, 0, 4 * 2, 0, 4 * 2],
                ["closePath"]
            ], {
                fillStyle: "#ffffff"
            }, {
                "strokeStyle": Marmot.Block.blockSetting.blockStrokeStyleNormal,
                "lineWidth": Marmot.Block.blockSetting.blockLineWidthNormal
            });
        };
        Item.prototype.setImg = function (src) {
            this.img.skin = src;
            this.img.left = 10;
            this.img.top = 10;
            this.img.size(80, 80);
        };
        return Item;
    }(Box));
    var BackgroundList = (function (_super) {
        __extends(BackgroundList, _super);
        function BackgroundList(ide) {
            var _this = _super.call(this) || this;
            _this.width = 100;
            _this.height = 400;
            _this.ide = ide;
            _this.pos(100, 200);
            _this.array = [];
            _this.ide.stageArea.costumes.forEach(function (costume) {
                _this.array.push(costume);
            });
            _this.vScrollBarSkin = "";
            _this.itemRender = Item;
            _this.selectEnable = true;
            _this.mouseHandler = new Handler(_this, _this.onMouse);
            _this.renderHandler = new Handler(_this, _this.updateItem);
            _this.spaceY = 20;
            _this.repeatX = 1;
            _this.repeatY = 3;
            _this.startIndex = 0;
            _this.buildContent();
            return _this;
        }
        BackgroundList.prototype.buildContent = function () {
            this.buildBackground();
            this.buildPlusBtn();
        };
        BackgroundList.prototype.buildBackground = function () {
            this.graphics.drawRect(0, 0, this.width, this.height, "#c4cdf8");
        };
        BackgroundList.prototype.buildPlusBtn = function () {
            var button = new Button();
            button.skin = "materials/plus.png";
            button.size(50, 50);
            button.pos(this.width / 2 - button.width / 2, this.height - button.height - 20);
            button.on(Event.CLICK, this, this.importBackground);
            button.stateNum = 1;
            button.name = "addCostume";
            this.addChild(button);
        };
        BackgroundList.prototype.updateItem = function (cell, index) {
            cell.size(this.width, 100);
            cell.setImg(cell.dataSource);
            cell.setBackground();
        };
        BackgroundList.prototype.onMouse = function (e, index) {
            if (e.type == Event.CLICK) {
            }
        };
        BackgroundList.prototype.importBackground = function () {
        };
        return BackgroundList;
    }(List));
    Marmot.BackgroundList = BackgroundList;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=backgroundlist.js.map