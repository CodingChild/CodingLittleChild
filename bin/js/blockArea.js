var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Tab = Laya.Tab;
    var Event = Laya.Event;
    var BlockAreaItem = (function (_super) {
        __extends(BlockAreaItem, _super);
        function BlockAreaItem() {
            var _this = _super.call(this) || this;
            if (BlockAreaItem.WIDTH != undefined && BlockAreaItem.HEIGHT != undefined)
                _this.size(BlockAreaItem.WIDTH, BlockAreaItem.HEIGHT);
            return _this;
        }
        return BlockAreaItem;
    }(Marmot.ListItem));
    var BlockArea = (function (_super) {
        __extends(BlockArea, _super);
        function BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory) {
            var _this = _super.call(this, blockAreaSetting, blockAreaItemSetting) || this;
            _this.blocksSetCache = {
                motion: [],
                look: [],
                event: [],
                control: [],
                math: [],
                variable: [],
                pen: [],
                music: []
            };
            _this.isMove = false;
            _this.blockAreaSetting = blockAreaSetting;
            _this.blockFactory = blockFactory;
            _this.name = "blockArea";
            _this.itemRender = BlockAreaItem;
            _this.buildContent();
            _this.mouseHandler = new Handler(_this, _this.onMouse);
            _this.on(Event.MOUSE_DOWN, _this, _this.onMouseDown);
            _this.on(Event.MOUSE_UP, _this, _this.onMouseUp);
            _this.visible = false;
            return _this;
        }
        /**
         * name
         */
        BlockArea.prototype.updateContent = function (blocksCategory) {
            if (this.visible == false) {
                this.visible = true;
            }
            this.array = this.blocksSetCache[blocksCategory];
            this.updateIndex();
        };
        BlockArea.prototype.getBlockForSelector = function (blockName) {
            var block = this.blockFactory.create(blockName);
            block.action = blockName;
            var ide = Marmot.IDE.getIDE();
            ide.scriptArea.addChild(block);
            block.pos(ide.scriptArea.x, ide.scriptArea.y);
        };
        BlockArea.prototype.switchIndex = function (index) {
            this.startIndex = index * 5;
        };
        BlockArea.prototype.buildContent = function () {
            this.buildBackground();
            this.initializeItems();
            this.buildIndex();
        };
        BlockArea.prototype.buildBackground = function () {
            this.graphics.drawRect(0, 0, this.width, this.height, this.blockAreaSetting.fillStyle);
        };
        BlockArea.prototype.initializeItems = function () {
            var _this = this;
            var blockSet;
            blockSet = Marmot.blockSet["motion"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["motion"].push(block);
                });
            }
            blockSet = Marmot.blockSet["look"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["look"].push(block);
                });
            }
            blockSet = Marmot.blockSet["control"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["control"].push(block);
                });
            }
            blockSet = Marmot.blockSet["event"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["event"].push(block);
                });
            }
            blockSet = Marmot.blockSet["pen"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["pen"].push(block);
                });
            }
            blockSet = Marmot.blockSet["music"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["music"].push(block);
                });
            }
            blockSet = Marmot.blockSet["variable"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["variable"].push(block);
                });
            }
            blockSet = Marmot.blockSet["math"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["math"].push(block);
                });
            }
            blockSet = Marmot.blockSet["sense"];
            if (blockSet.length != 0) {
                blockSet.forEach(function (block) {
                    _this.blocksSetCache["sense"].push(block);
                });
            }
            this.array = this.blocksSetCache["control"];
            this.currentCategory = "control";
        };
        BlockArea.prototype.updateItem = function (cell, index) {
            cell.setImg(cell.dataSource.path, this.listItemSetting.imageX, this.listItemSetting.imageY, this.listItemSetting.imageWidth, this.listItemSetting.imageHeight);
            cell.setBackground(false, this.listItemSetting.backgroundHighlight, this.listItemSetting.backgroundNormal);
        };
        BlockArea.prototype.onMouse = function (e, index) {
            if (e.type == Event.CLICK) {
                this.getBlockForSelector(this.array[index].name);
            }
        };
        BlockArea.prototype.onMouseDown = function (e) {
            this.on(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.onMouseDownX = e.stageX;
            this.onMouseDownY = e.stageY;
        };
        BlockArea.prototype.onMouseUp = function (e) {
            this.off(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            if (this.totalPage < 2) {
                return;
            }
            if (this.isMove) {
                var moveLen = e.stageX - this.onMouseDownX;
                var offsetY = Math.abs(this.onMouseDownY - e.stageY);
                if (offsetY < 125) {
                    if (moveLen > 10) {
                        if (this.tab_index.selectedIndex == 0) {
                            this.tab_index.selectedIndex = this.totalPage - 1;
                        }
                        else {
                            this.tab_index.selectedIndex--;
                        }
                    }
                    else if (moveLen < -10) {
                        if (this.tab_index.selectedIndex == this.totalPage - 1) {
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
            tab.space = this.blockAreaSetting.spaceOfTab_index;
            tab.selectHandler = new Handler(this, this.switchIndex);
            tab.stateNum = this.blockAreaSetting.tabstateNum;
            tab.skin = this.blockAreaSetting.tabSkin;
            this.tab_index = tab;
            tab.left = this.width / 2 - this.tab_index.width / 2;
            tab.y = this.blockAreaSetting.tabY;
            tab.initItems();
            this.addChild(tab);
            this.updateIndex();
        };
        BlockArea.prototype.updateIndex = function () {
            var numOfIndex = Math.ceil(this.length / 5);
            if (numOfIndex == 0) {
                this.tab_index.labels = "";
                this.totalPage = 0;
                this.page = -1;
                return;
            }
            else if (numOfIndex == 1) {
                this.tab_index.labels = "";
                this.totalPage = 1;
                this.page = 1;
                return;
            }
            else if (numOfIndex == 2) {
                this.tab_index.labels = ",";
                this.totalPage = 2;
                this.page = 1;
            }
            else if (numOfIndex == 3) {
                this.tab_index.labels = ",,";
                this.totalPage = 3;
                this.page = 1;
            }
            else if (numOfIndex == 4) {
                this.tab_index.labels = ",,,";
                this.totalPage = 4;
                this.page = 1;
            }
            this.tab_index.selectedIndex = 0;
            this.tab_index.left = this.width / 2 - this.tab_index.width / 2;
        };
        return BlockArea;
    }(Marmot.CommonList));
    Marmot.BlockArea = BlockArea;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=blockArea.js.map