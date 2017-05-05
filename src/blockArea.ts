module Marmot {
    import List = Laya.List;
    import Tab = Laya.Tab;
    import Box = Laya.Box;
    import Image = Laya.Image;
    import Event = Laya.Event;

    interface BlocksSetCache {
        motion: List;
        look: List;
        event: List;
        control: List;
        math: List;
        variable: List;
        pen: List;
        music: List;
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

    export class BlockArea extends Laya.Panel {
        public static blockAreaSetting: BlockAreaSetting = {
            height: 250,
            padding: 30,
            spaceXOfBlocksSet: 50,
            spaceOfTab_index: 20
        }
        public currentCategory: string;
        private blocksSetCache: BlocksSetCache = {
            motion: null,
            look: null,
            event: null,
            control: null,
            math: null,
            variable: null,
            pen: null,
            music: null
        }
        private blockFactory: BlockFactory;
        private tab_index: Tab;
        private ide: IDE;
        private onMouseDownX: number;
        private onMouseDownY: number;
        private isMove: boolean = false;


        constructor(width: number, blockFactory: BlockFactory, ide: IDE, name: string) {
            super();
            this.width = width;
            this.blockFactory = blockFactory;
            this.height = BlockArea.blockAreaSetting.height;
            this.ide = ide;
            this.name = name;
            this.bottom = 100;
            this.left = 0;
            this.right = 0;

            this.buildContent();

            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
            this.on(Event.MOUSE_UP, this, this.onMouseUp);

        }
        /**
         * name
         */
        public fixLayout(): void {

        }
        /**
         * name
         */
        public updateContent(blocksCategory: string): void {
            if (this.visible == false) {
                this.visible = true;
            }
            if (this.currentCategory == blocksCategory) {
                return;
            }
            
            (this.blocksSetCache[this.currentCategory] as List).visible = false;

            if (this.blocksSetCache[blocksCategory] == null) {
                this.currentCategory = blocksCategory;
                this.removeChildByName(blocksCategory);
                let list = this.getBlockList(blocksCategory);
                this.addChild(list);
                (this.blocksSetCache[this.currentCategory] as List).visible = true;
            }
            else {
                this.currentCategory = blocksCategory;
                this.removeChildByName(blocksCategory);
                this.addChild(this.blocksSetCache[blocksCategory]);
                (this.blocksSetCache[this.currentCategory] as List).visible = true;
            }
            this.updateIndex();

        }

        private getBlockList(blocksCategory: string): List {
            let list = new List();
        
            let data: Array<string> = [];
            let blockSet: Array<BlockAttributes>;
            blockSet = Marmot.blockSet[blocksCategory];
            
            if(blockSet.length == 0){
                blockSet = [];
            }
            blockSet.forEach((block) => {
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
        }

        public getBlockForSelector() {

        }

        private switchIndex(index: number) {
            this.blocksSetCache[this.currentCategory].startIndex = index * 5;

        }
        private buildContent() {
            this.buildBlocksSet();
            this.buildIndex();
        }

        private buildBlocksSet() {
            let list = this.getBlockList("control");
            this.currentCategory = "control";
            this.addChild(this.blocksSetCache[this.currentCategory]);
        }
        private updateItem(cell: Item, index: number): void {
            cell.setImg(cell.dataSource);
            Laya.Log.print(cell.dataSource);
        }

        private onMouse(e: Event, index: Number): void {
            if (e.type == Event.CLICK) {
                Laya.Log.print("当前选择的索引：" + index);
            }

        }

        onMouseDown(e: Event): void {
            this.on(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            this.onMouseDownX = e.stageX;
            this.onMouseDownY = e.stageY;
        }
        onMouseUp(e: Event): void {
            this.off(laya.events.Event.MOUSE_MOVE, this, this.onMouseMove);
            if(this.blocksSetCache[this.currentCategory] == null){
                return;
            }
            if (this.isMove) {
                let moveLen = e.stageX - this.onMouseDownX;
                let offsetY = Math.abs(this.onMouseDownY - e.stageY);
                if (offsetY < 125)//是否滑动的条件
                {
                    if (moveLen > 10) {
                        if (this.tab_index.selectedIndex == 0) {
                            this.tab_index.selectedIndex = 2;
                        }
                        else {
                            this.tab_index.selectedIndex--;

                        }
                    } else if (moveLen < -10) {
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
            let list: List = this.blocksSetCache[this.currentCategory];
            if(list == null){
                return;
            }
            let numOfIndex = Math.ceil(list.length / 5);
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


        }
    }


}