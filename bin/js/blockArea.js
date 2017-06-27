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
/*

module Marmot {
    import List = Laya.List;
    import Tab = Laya.Tab;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;

    interface BlocksSetCache {
        motion: Array<BlockAttributes>;
        look: Array<BlockAttributes>;
        event: Array<BlockAttributes>;
        control: Array<BlockAttributes>;
        math: Array<BlockAttributes>;
        variable: Array<BlockAttributes>;
        pen: Array<BlockAttributes>;
        music: Array<BlockAttributes>;
    }

    interface BlockAreaSetting {
        height: number;
        padding: number;
        spaceXOfBlocksSet: number;
        spaceOfTab_index: number;
    }

    class Item extends Box {
        public static WID: number = 173;
        public static HEI: number = 154;

        private img: Image;

        constructor() {
            super();
            this.size(Item.WID, Item.HEI);
            this.img = new Image();
            this.addChild(this.img);
        }

        public setImg(src: string): void {
            this.img.skin = src;
        }
    }

    export class BlockArea extends List {
        public static blockAreaSetting: BlockAreaSetting = {
            height: 250,
            padding: 30,
            spaceXOfBlocksSet: 50,
            spaceOfTab_index: 20
        }
        public currentCategory: string;
        private blocksSetCache: BlocksSetCache = {
            motion: [],
            look: [],
            event: [],
            control: [],
            math: [],
            variable: [],
            pen: [],
            music: []
        }
        private blockFactory: BlockFactory;
        private tab_index: Tab;
        private onMouseDownX: number;
        private onMouseDownY: number;
        private isMove: boolean = false;


        constructor(width: number, blockFactory: BlockFactory, name: string) {
            super();
            this.width = width;
            this.blockFactory = blockFactory;
            this.height = BlockArea.blockAreaSetting.height;
            this.name = name;
            this.bottom = 100;
            this.left = 0;
            this.right = 0;

            this.buildContent();

            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Event.MOUSE_UP, this, this.onMouseUp);
            this.visible = false;

        }

  
        public updateContent(blocksCategory: string): void {
            if (this.visible == false) {
                this.visible = true;
            }

            this.array = this.blocksSetCache[blocksCategory];
            this.updateIndex();

        }
        public getBlockForSelector(blockName:string) {
            let block = this.blockFactory.create(blockName);
            block.action = blockName;
            let ide: IDE = IDE.getIDE();
            
            ide.scriptArea.addChild(block);
            block.pos(ide.scriptArea.x, ide.scriptArea.y);
        }

        private switchIndex(index: number) {
            this.startIndex = index * 5;
        }
        private buildContent() {
            this.buildBackground();
            this.buildBlocksSet();
            this.buildIndex();
        }
        private buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, "#ffffff");
        }

        private buildBlocksSet() {

            let blockSet: Array<BlockAttributes>;
            blockSet = Marmot.blockSet["motion"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["motion"].push(block);
                });
            }

            blockSet = Marmot.blockSet["look"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["look"].push(block);
                });
            }

            blockSet = Marmot.blockSet["control"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["control"].push(block);
                });
            }

            blockSet = Marmot.blockSet["event"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["event"].push(block);
                });
            }

            blockSet = Marmot.blockSet["pen"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["pen"].push(block);
                });
            }

            blockSet = Marmot.blockSet["music"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["music"].push(block);
                });
            }

            blockSet = Marmot.blockSet["variable"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["variable"].push(block);
                });
            }

            blockSet = Marmot.blockSet["math"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["math"].push(block);
                });
            }

            blockSet = Marmot.blockSet["sense"];
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["sense"].push(block);
                });
            }

            this.array = this.blocksSetCache["control"];
            this.itemRender = Item;
            this.selectEnable = true;
            this.mouseHandler = new Handler(this, this.onMouse);
            this.renderHandler = new Handler(this, this.updateItem);
            this.spaceX = BlockArea.blockAreaSetting.spaceXOfBlocksSet;
            this.repeatX = 5;
            this.repeatY = 1;
            this.startIndex = 0;
            this.currentCategory = "control";
        }
        private updateItem(cell: Item, index: number): void {
            let xindex = index % this.repeatX;
            cell.pos(xindex * Item.WID + BlockArea.blockAreaSetting.spaceXOfBlocksSet * (xindex + 1), BlockArea.blockAreaSetting.padding);
            cell.setImg(cell.dataSource.path);
        }
        private onMouse(e: Event, index: number): void {
            if (e.type == Event.CLICK) {
                this.getBlockForSelector(this.array[index].name);
            }

        }

        onMouseDown(e: Event): void {
            this.on(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.onMouseDownX = e.stageX;
            this.onMouseDownY = e.stageY;
        }
        onMouseUp(e: Event): void {
            this.off(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            if(this.totalPage < 2){
                return;
            }
            
            if (this.isMove) {
                let moveLen = e.stageX - this.onMouseDownX;
                let offsetY = Math.abs(this.onMouseDownY - e.stageY);
                if (offsetY < 125)//是否滑动的条件
                {
                    if (moveLen > 10) {
                        if (this.tab_index.selectedIndex == 0) {
                            this.tab_index.selectedIndex = this.totalPage - 1;
                        }
                        else {
                            this.tab_index.selectedIndex--;
                        }
                    } else if (moveLen < -10) {
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
        }
        onMouseMove(): void {
            this.isMove = true;
        }


        private buildIndex() {
            let tab: Tab = new Tab();

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
        }

        private updateIndex(): void {

            let numOfIndex = Math.ceil(this.length / 5);
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
            this.tab_index.selectedIndex = 0;


        }
    }


}*/ 
//# sourceMappingURL=blockArea.js.map