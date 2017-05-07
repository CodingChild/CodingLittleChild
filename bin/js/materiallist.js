var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var List = Laya.List;
    var Event = Laya.Event;
    var Button = Laya.Button;
    var Handler = Laya.Handler;
    var MaterialListItem = (function (_super) {
        __extends(MaterialListItem, _super);
        function MaterialListItem() {
            return _super.call(this) || this;
        }
        return MaterialListItem;
    }(Marmot.ListItem));
    Marmot.MaterialListItem = MaterialListItem;
    var MaterialList = (function (_super) {
        __extends(MaterialList, _super);
        function MaterialList(materialListSetting, materialListItemSetting) {
            var _this = _super.call(this) || this;
            _this.materialListSetting = materialListSetting;
            _this.width = materialListSetting.width;
            _this.height = materialListSetting.height;
            _this.array = [];
            _this.vScrollBarSkin = _this.materialListSetting.vScrollBarSkin;
            MaterialListItem.WIDTH = _this.materialListItemSetting.width;
            MaterialListItem.HEIGHT = _this.materialListItemSetting.height;
            _this.itemRender = MaterialListItem;
            _this.selectEnable = true;
            _this.mouseHandler = new Handler(_this, _this.onMouse);
            _this.renderHandler = new Handler(_this, _this.updateItem);
            _this.spaceY = materialListSetting.spaceY;
            _this.repeatX = 1;
            _this.repeatY = materialListSetting.repeatY;
            _this.startIndex = 0;
            _this.curItem = null;
            _this.buildContent();
            return _this;
        }
        MaterialList.prototype.buildContent = function () {
            this.buildBackground();
            this.buildPlusBtn();
        };
        MaterialList.prototype.buildBackground = function () {
            this.graphics.drawRect(0, 0, this.width, this.height, this.materialListSetting.fillStyle);
        };
        MaterialList.prototype.buildPlusBtn = function () {
            var button = new Button();
            button.skin = this.materialListSetting.plusButtonSkin;
            button.size(this.materialListSetting.plusButtonWidth, this.materialListSetting.plusButtonHeight);
            button.pos(this.materialListSetting.plusButtonX, this.materialListSetting.plusButtonY);
            button.on(Event.CLICK, this, this.onPlusBtnClicked);
            button.stateNum = this.materialListSetting.plusButtonStateNum;
            button.name = this.materialListSetting.plusButtonName;
            this.addChild(button);
        };
        MaterialList.prototype.updateItem = function (cell, index) {
            cell.setImg(cell.dataSource, this.materialListItemSetting.imageX, this.materialListItemSetting.imageY, this.materialListItemSetting.imageWidth, this.materialListItemSetting.imageHeight);
            cell.setBackground(false, this.materialListItemSetting.backgroundHighlight, this.materialListItemSetting.backgroundNormal);
        };
        return MaterialList;
    }(List));
    Marmot.MaterialList = MaterialList;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=materiallist.js.map