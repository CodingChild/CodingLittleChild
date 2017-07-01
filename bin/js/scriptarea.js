var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var IDE;
(function (IDE) {
    var Event = Laya.Event;
    var Label = Laya.Label;
    var Button = Laya.Button;
    var ScriptTabListItem = (function (_super) {
        __extends(ScriptTabListItem, _super);
        function ScriptTabListItem() {
            var _this = _super.call(this) || this;
            if (ScriptTabListItem.WIDTH != undefined &&
                ScriptTabListItem.HEIGHT != undefined) {
                _this.size(ScriptTabListItem.WIDTH, ScriptTabListItem.HEIGHT);
            }
            _this.number = new Label();
            _this.addChild(_this.number);
            _this.deleteBtn = new Button();
            _this.addChild(_this.deleteBtn);
            return _this;
        }
        ScriptTabListItem.prototype.setNumber = function (num, font, fontSize, color) {
            this.number.text = num.toString();
            this.number.font = font;
            this.number.fontSize = fontSize;
            this.number.color = color;
            this.number.size(this.width, this.height);
            this.number.align = "center";
            this.number.valign = "middle";
        };
        return ScriptTabListItem;
    }(IDE.GeneralListItem));
    var ScriptTabList = (function (_super) {
        __extends(ScriptTabList, _super);
        function ScriptTabList(generalListSetting, scriptTabListItemSetting) {
            var _this = _super.call(this, generalListSetting, scriptTabListItemSetting) || this;
            _this.scriptTabListItemSetting = scriptTabListItemSetting;
            ScriptTabListItem.WIDTH = scriptTabListItemSetting.width;
            ScriptTabListItem.HEIGHT = scriptTabListItemSetting.height;
            _this.name = "scriptTabList";
            _this.itemRender = ScriptTabListItem;
            return _this;
        }
        ScriptTabList.prototype.updateItem = function (cell, index) {
            cell.setNumber(index + 1, this.scriptTabListItemSetting.font, this.scriptTabListItemSetting.fontSize, this.scriptTabListItemSetting.fontColor);
            cell.setBackground(false, this.scriptTabListItemSetting.backgroundHighlight, this.scriptTabListItemSetting.backgroundNormal);
            if (this.curItem && this.selectedIndex == index) {
                this.curItem.setBackground(true, this.scriptTabListItemSetting.backgroundHighlight, this.scriptTabListItemSetting.backgroundNormal);
            }
        };
        ScriptTabList.prototype.update = function () {
            var _this = this;
            var curIndex = this.selectedIndex;
            this.array = [];
            var scriptPages = this.parent.scriptPages;
            scriptPages.forEach(function (page) {
                _this.addItem(null);
            });
            if (scriptPages.length <= this.repeatX) {
                this.parent.plusBtn.pos(scriptPages.length * this.generalListItemSetting.width + 20, 0);
            }
            this.selectedIndex = curIndex;
        };
        ScriptTabList.prototype.onSelect = function (index) {
            if (index >= 0 && index < this.length) {
                this.selection.setBackground(true, this.generalListItemSetting.backgroundHighlight, this.generalListItemSetting.backgroundNormal);
                var scriptArea = this.parent;
                if (scriptArea.curScriptPage != null) {
                    scriptArea.removeChild(scriptArea.curScriptPage);
                }
                scriptArea.curScriptPage = scriptArea.scriptPages[index];
                scriptArea.addChildAt(scriptArea.curScriptPage, 2);
                scriptArea.curScriptPage.pos(0, scriptArea.scriptTabList.y + scriptArea.scriptTabList.height);
            }
            if (this.curItem != null) {
                this.curItem.setBackground(false, this.generalListItemSetting.backgroundHighlight, this.generalListItemSetting.backgroundNormal);
            }
            this.curItem = this.selection;
        };
        return ScriptTabList;
    }(IDE.GeneralList));
    var ScriptPanel = (function (_super) {
        __extends(ScriptPanel, _super);
        function ScriptPanel(width, height, bgColor) {
            var _this = _super.call(this) || this;
            _this.bgColor = bgColor;
            _this.width = width;
            _this.height = height;
            _this.graphics.drawRect(0, 0, _this.width, _this.height, bgColor);
            _this.hScrollBarSkin = "";
            _this.vScrollBarSkin = "";
            return _this;
        }
        return ScriptPanel;
    }(Laya.Panel));
    var ScriptArea = (function (_super) {
        __extends(ScriptArea, _super);
        function ScriptArea(scriptAreaSetting) {
            var _this = _super.call(this) || this;
            _this.width = scriptAreaSetting.width;
            _this.height = scriptAreaSetting.height;
            _this.scriptAreaSetting = scriptAreaSetting;
            _this.blockFactory = new Block.BlockFactory();
            _this.name = "scriptArea";
            _this.curScriptPage = new ScriptPanel(_this.width, _this.height - IDE.GeneralIDE.ICONSIZE, _this.scriptAreaSetting.highlightColor);
            _this.scriptPages = [];
            _this.scriptPages.push(_this.curScriptPage);
            _this.scriptTabList = new ScriptTabList(scriptAreaSetting.generalListSetting, scriptAreaSetting.scriptTabListItemSetting);
            var addPageBtnSetting = scriptAreaSetting.addPageBtnSetting;
            _this.plusBtn = new Button();
            _this.plusBtn.skin = addPageBtnSetting.skin;
            _this.plusBtn.stateNum = addPageBtnSetting.stateNum;
            _this.plusBtn.size(addPageBtnSetting.width, addPageBtnSetting.height);
            _this.plusBtn.on(Event.CLICK, _this, _this.onPlusBtnClicked);
            var deletePageBtnSetting = scriptAreaSetting.deletePageBtnSetting;
            _this.deleteBtn = new Button();
            _this.deleteBtn.skin = deletePageBtnSetting.skin;
            _this.deleteBtn.stateNum = deletePageBtnSetting.stateNum;
            _this.deleteBtn.size(deletePageBtnSetting.width, deletePageBtnSetting.height);
            _this.deleteBtn.pos(deletePageBtnSetting.x, deletePageBtnSetting.y);
            _this.deleteBtn.on(Event.CLICK, _this, _this.onDeleteBtnClicked);
            _this.addChild(_this.scriptTabList);
            _this.addChild(_this.plusBtn);
            _this.addChild(_this.deleteBtn);
            _this.scriptTabList.pos(0, 0);
            _this.scriptTabList.update();
            _this.scriptTabList.selectedIndex = 0;
            _this.scriptTabList.graphics.drawRect(0, 0, _this.width, _this.scriptTabList.height, _this.scriptAreaSetting.generalListSetting.bgColor);
            return _this;
        }
        ScriptArea.prototype.onPlusBtnClicked = function () {
            this.scriptPages.push(new ScriptPanel(this.width, this.height - IDE.GeneralIDE.ICONSIZE, this.scriptAreaSetting.highlightColor));
            this.scriptTabList.update();
        };
        ScriptArea.prototype.onDeleteBtnClicked = function () {
        };
        ScriptArea.prototype.onMouseDown = function (e) {
            var ide = IDE.GeneralIDE.getIDE();
            /*
            let highlightBlocks:Block[] = [];
            (ide.scriptArea.content._childs as Block[]).forEach((child) => {
                if (child.isHighlight == true) {
                    highlightBlocks.push(child);
                }
                child.getAllNestedBlockChildren().forEach((blockChild) => {
                    if (blockChild.isHighlight == true) {
                        highlightBlocks.push(blockChild);
                    }
                })
            });

            highlightBlocks.forEach((block)=>{
                block.removeHighlight(block);
            })
            */
        };
        return ScriptArea;
    }(Laya.Box));
    IDE.ScriptArea = ScriptArea;
})(IDE || (IDE = {}));
//# sourceMappingURL=scriptarea.js.map