var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var List = Laya.List;
    var Tab = Laya.Tab;
    var Box = Laya.Box;
    var Image = Laya.Image;
    var Event = Laya.Event;
    var Item = (function (_super) {
        __extends(Item, _super);
        function Item() {
            var _this = _super.call(this) || this;
            _this.size(Item.WID, Item.HEI);
            _this.img = new Image();
            _this.addChild(_this.img);
            return _this;
        }
        Item.prototype.setImg = function (src) {
            this.img.skin = src;
        };
        return Item;
    }(Box));
    Item.WID = 173;
    Item.HEI = 154;
    var BlockArea = (function (_super) {
        __extends(BlockArea, _super);
        function BlockArea(width, blockFactory, ide, name) {
            var _this = _super.call(this) || this;
            _this.blocksSetCache = {
                motion: null,
                look: null,
                event: null,
                control: null,
                math: null,
                variable: null,
                pen: null,
                music: null
            };
            _this.isMove = false;
            _this.width = width;
            _this.blockFactory = blockFactory;
            _this.height = BlockArea.blockAreaSetting.height;
            _this.ide = ide;
            _this.name = name;
            _this.bottom = 100;
            _this.left = 0;
            _this.right = 0;
            _this.buildContent();
            _this.on(Event.MOUSE_DOWN, _this, _this.onMouseDown);
            _this.on(Event.MOUSE_UP, _this, _this.onMouseUp);
            return _this;
        }
        /**
         * name
         */
        BlockArea.prototype.fixLayout = function () {
        };
        /**
         * name
         */
        BlockArea.prototype.updateContent = function (blocksCategory) {
            if (this.visible == false) {
                this.visible = true;
            }
            if (this.currentCategory == blocksCategory) {
                return;
            }
            this.blocksSetCache[this.currentCategory].visible = false;
            if (this.blocksSetCache[blocksCategory] == null) {
                this.currentCategory = blocksCategory;
                this.removeChildByName(blocksCategory);
                var list = this.getBlockList(blocksCategory);
                this.addChild(list);
                this.blocksSetCache[this.currentCategory].visible = true;
            }
            else {
                this.currentCategory = blocksCategory;
                this.removeChildByName(blocksCategory);
                this.addChild(this.blocksSetCache[blocksCategory]);
                this.blocksSetCache[this.currentCategory].visible = true;
            }
            this.updateIndex();
        };
        BlockArea.prototype.getBlockList = function (blocksCategory) {
            var list = new List();
            var data = [];
            var blockSet;
            blockSet = Marmot.blockSet[blocksCategory];
            if (blockSet.length == 0) {
                blockSet = [];
            }
            blockSet.forEach(function (block) {
                data.push(block.path);
            });
            list.array = data;
            list.itemRender = Item;
            list.selectEnable = true;
            list.mouseHandler = new Handler(this, this.onMouse);
            list.renderHandler = new Handler(this, this.updateItem);
            list.spaceX = BlockArea.blockAreaSetting.spaceXOfBlocksSet;
            list.repeatX = 5;
            list.repeatY = 1;
            list.startIndex = 0;
            this.blocksSetCache[blocksCategory] = list;
            list.name = blocksCategory;
            list.pos(0, 0);
            list.left = 0;
            list.right = 0;
            list.graphics.drawRect(0, 0, this.width, this.height, "#ffffff");
            return list;
        };
        BlockArea.prototype.getBlockForSelector = function () {
        };
        BlockArea.prototype.switchIndex = function (index) {
            this.blocksSetCache[this.currentCategory].startIndex = index * 5;
        };
        BlockArea.prototype.buildContent = function () {
            this.buildBlocksSet();
            this.buildIndex();
        };
        BlockArea.prototype.buildBlocksSet = function () {
            var list = this.getBlockList("control");
            this.currentCategory = "control";
            this.addChild(this.blocksSetCache[this.currentCategory]);
        };
        BlockArea.prototype.updateItem = function (cell, index) {
            cell.setImg(cell.dataSource);
            Laya.Log.print(cell.dataSource);
        };
        BlockArea.prototype.onMouse = function (e, index) {
            if (e.type == Event.CLICK) {
                Laya.Log.print("当前选择的索引：" + index);
            }
        };
        BlockArea.prototype.onMouseDown = function (e) {
            this.on(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.onMouseDownX = e.stageX;
            this.onMouseDownY = e.stageY;
        };
        BlockArea.prototype.onMouseUp = function (e) {
            this.off(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            if (this.blocksSetCache[this.currentCategory] == null) {
                return;
            }
            if (this.isMove) {
                var moveLen = e.stageX - this.onMouseDownX;
                var offsetY = Math.abs(this.onMouseDownY - e.stageY);
                if (offsetY < 125) {
                    if (moveLen > 10) {
                        if (this.tab_index.selectedIndex == 0) {
                            this.tab_index.selectedIndex = 2;
                        }
                        else {
                            this.tab_index.selectedIndex--;
                        }
                    }
                    else if (moveLen < -10) {
                        if (this.tab_index.selectedIndex == 2) {
                            this.tab_index.selectedIndex = 0;
                        }
                        else {
                            this.tab_index.selectedIndex++;
                        }
                    }
                }
            }
            this.isMove = false;
        };
        BlockArea.prototype.onMouseMove = function () {
            this.isMove = true;
        };
        BlockArea.prototype.buildIndex = function () {
            var tab = new Tab();
            tab.space = BlockArea.blockAreaSetting.spaceOfTab_index;
            tab.selectHandler = new Handler(this, this.switchIndex);
            tab.stateNum = 2;
            tab.skin = "materials/tab_index.png";
            this.tab_index = tab;
            tab.left = this.width / 2 - this.tab_index.width / 2;
            tab.top = Item.HEI + 2 * BlockArea.blockAreaSetting.padding;
            tab.initItems();
            this.addChild(tab);
            this.updateIndex();
        };
        BlockArea.prototype.updateIndex = function () {
            var list = this.blocksSetCache[this.currentCategory];
            if (list == null) {
                return;
            }
            var numOfIndex = Math.ceil(list.length / 5);
            if (numOfIndex == 1) {
                this.tab_index.labels = "";
                return;
            }
            else if (numOfIndex == 2) {
                this.tab_index.labels = ",";
            }
            else if (numOfIndex == 3) {
                this.tab_index.labels = ",,";
            }
            this.tab_index.selectedIndex = 0;
        };
        return BlockArea;
    }(Laya.Panel));
    BlockArea.blockAreaSetting = {
        height: 250,
        padding: 30,
        spaceXOfBlocksSet: 50,
        spaceOfTab_index: 20
    };
    Marmot.BlockArea = BlockArea;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=blockArea.js.map