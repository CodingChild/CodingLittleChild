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

    export interface BlockAreaSetting extends CommonListSetting{
        spaceOfTab_index: number;
        fillStyle:string;
        tabstateNum:number;
        tabSkin:string;
        tabY:number;
    }

    class BlockAreaItem extends ListItem {
        public static WIDTH: number;
        public static HEIGHT: number;
        constructor() {
            super();
            if (BlockAreaItem.WIDTH != undefined && BlockAreaItem.HEIGHT != undefined)
                this.size(BlockAreaItem.WIDTH, BlockAreaItem.HEIGHT);
        }


    }

    export interface BlockAreaItemSetting extends ListItemSetting {


    }

    export class BlockArea extends CommonList {
        public blockAreaSetting: BlockAreaSetting;
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


        constructor(blockAreaSetting: BlockAreaSetting, 
                    blockAreaItemSetting: BlockAreaItemSetting, 
                    blockFactory:BlockFactory) {
            super(blockAreaSetting, blockAreaItemSetting);
            this.blockAreaSetting = blockAreaSetting;
            this.blockFactory = blockFactory;
            this.name = "blockArea";
            this.itemRender = BlockAreaItem;

            this.buildContent();
            this.mouseHandler = new Handler(this, this.onMouse);
            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Event.MOUSE_UP, this, this.onMouseUp);
            this.visible = false;

        }

        /**
         * name
         */
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
            this.initializeItems();
            this.buildIndex();
        }
        private buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, this.blockAreaSetting.fillStyle);
        }

        protected initializeItems() {

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
            this.currentCategory = "control";
        }


        protected updateItem(cell: BlockAreaItem, index: number): void {
            cell.setImg(cell.dataSource.path,
                this.listItemSetting.imageX,
                this.listItemSetting.imageY,
                this.listItemSetting.imageWidth,
                this.listItemSetting.imageHeight
            );
            cell.setBackground(false,
                this.listItemSetting.backgroundHighlight,
                this.listItemSetting.backgroundNormal);
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
            else if (numOfIndex == 4) {
                this.tab_index.labels = ",,,";
                this.totalPage = 4;
                this.page = 1;
            }
            this.tab_index.selectedIndex = 0;
            this.tab_index.left = this.width / 2 - this.tab_index.width / 2;

        }
    }


}