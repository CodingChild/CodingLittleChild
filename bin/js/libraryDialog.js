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
    var Handler = Laya.Handler;
    var Event = Laya.Event;
    var libraryDialogItem = (function (_super) {
        __extends(libraryDialogItem, _super);
        function libraryDialogItem() {
            var _this = _super.call(this) || this;
            if (libraryDialogItem.WIDTH != undefined && libraryDialogItem.HEIGHT != undefined)
                _this.size(libraryDialogItem.WIDTH, libraryDialogItem.HEIGHT);
            return _this;
        }
        return libraryDialogItem;
    }(Marmot.ListItem));
    Marmot.libraryDialogItem = libraryDialogItem;
    var LibraryDialog = (function (_super) {
        __extends(LibraryDialog, _super);
        function LibraryDialog(libraryDialogSetting, libraryDialogItemSetting) {
            var _this = _super.call(this) || this;
            _this.size(libraryDialogSetting.width, libraryDialogSetting.height);
            _this.libraryDialogSetting = libraryDialogSetting;
            _this.libraryDialogItemSetting = libraryDialogItemSetting;
            _this.chosenIndex = -1;
            _this.curItem = null;
            libraryDialogItem.WIDTH = libraryDialogItemSetting.width;
            libraryDialogItem.HEIGHT = libraryDialogItemSetting.height;
            _this.buildContent();
            _this.show();
            return _this;
        }
        LibraryDialog.prototype.buildContent = function () {
            this.buildBackground();
            this.buildlist();
            this.buildOkButton();
            this.buildCancelButton();
        };
        LibraryDialog.prototype.buildBackground = function () {
            this.graphics.drawRect(0, 0, this.width, this.height, this.libraryDialogSetting.fillStyle, this.libraryDialogSetting.strokeStyle, this.libraryDialogSetting.lineWidth);
        };
        LibraryDialog.prototype.buildlist = function () {
            var list = new List();
            list.pos(this.libraryDialogSetting.listX, this.libraryDialogSetting.listY);
            this.list = list;
            this.initializeLibrayItems();
            list.vScrollBarSkin = this.libraryDialogSetting.vScrollBarSkin;
            Laya.Log.print(list.vScrollBarSkin);
            list.itemRender = libraryDialogItem;
            list.selectEnable = true;
            list.spaceY = this.libraryDialogSetting.spaceY;
            list.spaceX = this.libraryDialogSetting.spaceX;
            list.repeatX = this.libraryDialogSetting.repeatX;
            list.repeatY = this.libraryDialogSetting.repeatY;
            list.startIndex = 0;
            this.addChild(list);
            list.selectHandler = new Handler(this, this.onSelect);
            list.renderHandler = new Handler(this, this.updateItem);
        };
        LibraryDialog.prototype.onSelect = function (index) {
            this.list.selection.setBackground(true, this.libraryDialogItemSetting.backgroundHighlight, this.libraryDialogItemSetting.backgroundNormal);
            if (this.curItem != null) {
                this.curItem.setBackground(false, this.libraryDialogItemSetting.backgroundHighlight, this.libraryDialogItemSetting.backgroundNormal);
            }
            this.curItem = this.list.selection;
        };
        LibraryDialog.prototype.updateItem = function (cell, index) {
            cell.setImg(cell.dataSource, this.libraryDialogItemSetting.imagePadding, this.libraryDialogItemSetting.imagePadding, this.libraryDialogItemSetting.imageWidth, this.libraryDialogItemSetting.imageHeight);
            cell.setBackground(false, this.libraryDialogItemSetting.backgroundHighlight, this.libraryDialogItemSetting.backgroundNormal);
        };
        LibraryDialog.prototype.buildOkButton = function () {
            var okButton = new Button();
            okButton.skin = this.libraryDialogSetting.okButtonSkin;
            okButton.name = Dialog.OK;
            okButton.stateNum = this.libraryDialogSetting.okButtonStateNum;
            okButton.size(this.libraryDialogSetting.buttonWidth, this.libraryDialogSetting.buttonHeight);
            okButton.pos(this.libraryDialogSetting.okButtonX, this.libraryDialogSetting.okButtonY);
            this.okButton = okButton;
            okButton.on(Event.CLICK, this, this.onClose);
            this.addChild(okButton);
        };
        LibraryDialog.prototype.buildCancelButton = function () {
            var cancelButton = new Button();
            cancelButton.skin = this.libraryDialogSetting.cancelButtonSkin;
            cancelButton.stateNum = this.libraryDialogSetting.cancelButtonStateNum;
            cancelButton.name = Dialog.CANCEL;
            cancelButton.size(this.libraryDialogSetting.buttonWidth, this.libraryDialogSetting.buttonWidth);
            cancelButton.pos(this.libraryDialogSetting.cancelButtonX, this.libraryDialogSetting.cancelButtonY);
            this.cancelButton = cancelButton;
            this.addChild(cancelButton);
        };
        return LibraryDialog;
    }(Dialog));
    Marmot.LibraryDialog = LibraryDialog;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=libraryDialog.js.map