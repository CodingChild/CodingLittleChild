module IDE {
    import List = Laya.List;
    import Tab = Laya.Tab;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;
    import Handler = Laya.Handler;

    interface BlocksSetCache {
        motion: Array<Block.BlockAttributes>;
        look: Array<Block.BlockAttributes>;
        event: Array<Block.BlockAttributes>;
        control: Array<Block.BlockAttributes>;
        math: Array<Block.BlockAttributes>;
        variable: Array<Block.BlockAttributes>;
        pen: Array<Block.BlockAttributes>;
        music: Array<Block.BlockAttributes>;
        sense:Array<Block.BlockAttributes>;
    }

    export interface BlockContentListSetting extends GeneralListSetting{
        spaceOfTab_index: number;
        tabstateNum:number;
        tabSkin:string;
        tabY:number;
    }

    export class BlockContentListItem extends GeneralListItem {

        public static WIDTH: number;
        public static HEIGHT: number;

        constructor() {
            super();
            if (BlockContentListItem.WIDTH != undefined && BlockContentListItem.HEIGHT != undefined) {
                this.size(BlockContentListItem.WIDTH, BlockContentListItem.HEIGHT);
            }
        }

        public setImg(src: string, imageSize: number): void {
            this.img.skin = src;
            this.img.pos(Math.round(this.width / 2 - imageSize), Math.round(this.height / 2 - imageSize / 2));
            this.img.size(imageSize * 2, imageSize);
        }
    }

    export class BlockContentList extends GeneralList {
        public blockContentListSetting: BlockContentListSetting;
        public currentCategory: string;
        private blocksSetCache: BlocksSetCache = {
            motion: [],
            look: [],
            event: [],
            control: [],
            math: [],
            variable: [],
            pen: [],
            music: [],
            sense:[]
        }
        private blockFactory: Block.BlockFactory;
        private tab_index: Tab;
        private onMouseDownX: number;
        private onMouseDownY: number;
        private isMove: boolean = false;


        constructor(blockContentListSetting: BlockContentListSetting, 
                    generalListItemSetting: GeneralListItemSetting, 
                    blockFactory:Block.BlockFactory) {
            super(blockContentListSetting, generalListItemSetting);
            this.blockContentListSetting = blockContentListSetting;
            this.blockFactory = blockFactory;
            BlockContentListItem.WIDTH = this.generalListItemSetting.width;
            BlockContentListItem.HEIGHT = this.generalListItemSetting.height;
            this.itemRender = BlockContentListItem;
            this.name = "blockContentList";

            this.buildContent();
            this.mouseHandler = new Handler(this, this.onMouse);
            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Event.MOUSE_UP, this, this.onMouseUp);
        }

        /**
         * name
         */
        public updateContent(blocksCategory: string): void {
            this.array = this.blocksSetCache[blocksCategory];
            this.updateIndex();

        }
        public getBlockForSelector(blockName:string) {
            let block = this.blockFactory.create(blockName);
            block.action = blockName;
            let ide: GeneralIDE = GeneralIDE.getIDE();
            
            ide.scriptArea.curScriptPage.addChild(block);
            block.pos(50, 50);
        }

        private switchIndex(index: number) {
            this.startIndex = index * this.blockContentListSetting.repeatX;
        }
        private buildContent() {
            this.buildBackground();
            this.initializeItems();
            this.buildIndex();
        }
        private buildBackground() {
            this.graphics.drawRect(0, 0, this.width, this.height, this.blockContentListSetting.bgColor);
        }

        protected initializeItems() {

            let blockSet: Array<Block.BlockAttributes>;
            blockSet = Block.blockSet["motion"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["motion"].push(block);
                });      
            }

            blockSet = Block.blockSet["look"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["look"].push(block);
                });      
            }

            blockSet = Block.blockSet["control"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["control"].push(block);
                });      
            }

            blockSet = Block.blockSet["event"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["event"].push(block);
                });      
            }

            blockSet = Block.blockSet["pen"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["pen"].push(block);
                });      
            }

            blockSet = Block.blockSet["music"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["music"].push(block);
                });      
            }

            blockSet = Block.blockSet["variable"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["variable"].push(block);
                });      
            }            

            blockSet = Block.blockSet["math"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["math"].push(block);
                });      
            }

            blockSet = Block.blockSet["sense"]; 
            if(blockSet.length != 0){
                blockSet.forEach((block) => {
                    this.blocksSetCache["sense"].push(block);
                });      
            }            

            this.array = this.blocksSetCache["control"];
            this.currentCategory = "control";
        }


        protected updateItem(cell: GeneralListItem, index: number): void {
            cell.setImg(cell.dataSource.path, this.generalListItemSetting.imageSize);
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
            this.off(Laya.Event.MOUSE_MOVE, this, this.onMouseMove);
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

            tab.space = this.blockContentListSetting.spaceOfTab_index;
            tab.selectHandler = new Handler(this, this.switchIndex);

            tab.stateNum = this.blockContentListSetting.tabstateNum;
            tab.skin = this.blockContentListSetting.tabSkin;
            
            this.tab_index = tab;
            tab.y = this.blockContentListSetting.tabY;
            tab.initItems();
            this.addChild(tab);
            this.updateIndex();
        }

        private updateIndex(): void {

            let numOfIndex = Math.ceil(this.length / this.blockContentListSetting.repeatX);
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
            this.tab_index.left = Math.round(this.width / 2 - this.tab_index.width / 2);

        }
    }


}