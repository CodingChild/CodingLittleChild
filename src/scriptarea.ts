module IDE {
    import Event = Laya.Event;
    import Tween = Laya.Tween;
    import Handler = Laya.Handler;
    import Label = Laya.Label;
    import Button = Laya.Button;

    export interface ScriptTabListItemSetting extends GeneralListItemSetting {
        font: string;
        fontSize: number;
        fontColor: string;
    }

    export interface ScriptAreaSetting {
        width: number;
        height: number;
        highlightColor: string;
        generalListSetting: GeneralListSetting;
        scriptTabListItemSetting: ScriptTabListItemSetting;
        addPageBtnSetting: GeneralButtonSetting;
        deletePageBtnSetting: GeneralButtonSetting;
    }
    class ScriptTabListItem extends GeneralListItem {
        public static WIDTH: number;
        public static HEIGHT: number;
        public number: Label;
        public deleteBtn: Button;
        constructor() {
            super();
            if (ScriptTabListItem.WIDTH != undefined &&

                ScriptTabListItem.HEIGHT != undefined) {
                this.size(ScriptTabListItem.WIDTH, ScriptTabListItem.HEIGHT);
            }
            this.number = new Label();
            this.addChild(this.number);
            this.deleteBtn = new Button();
            this.addChild(this.deleteBtn);
        }

        public setNumber(num: number, font: string, fontSize: number, color:

            string): void {
            this.number.text = num.toString();
            this.number.font = font;
            this.number.fontSize = fontSize;
            this.number.color = color;
            this.number.size(this.width, this.height);
            this.number.align = "center";
            this.number.valign = "middle";
        }
    }

    class ScriptTabList extends GeneralList {
        private scriptTabListItemSetting: ScriptTabListItemSetting;

        constructor(generalListSetting: GeneralListSetting,
            scriptTabListItemSetting: ScriptTabListItemSetting) {
            super(generalListSetting, scriptTabListItemSetting);
            this.scriptTabListItemSetting = scriptTabListItemSetting;
            ScriptTabListItem.WIDTH = scriptTabListItemSetting.width;
            ScriptTabListItem.HEIGHT = scriptTabListItemSetting.height;
            this.name = "scriptTabList";
            this.itemRender = ScriptTabListItem;
        }

        protected updateItem(cell: ScriptTabListItem, index: number): void {
            cell.setNumber(index + 1,
                this.scriptTabListItemSetting.font,
                this.scriptTabListItemSetting.fontSize,
                this.scriptTabListItemSetting.fontColor
            );
            cell.setBackground(false,
                this.scriptTabListItemSetting.backgroundHighlight,
                this.scriptTabListItemSetting.backgroundNormal);
            if (this.curItem && this.selectedIndex == index) {
                (this.curItem as ScriptTabListItem).setBackground(true,
                    this.scriptTabListItemSetting.backgroundHighlight,
                    this.scriptTabListItemSetting.backgroundNormal);
            }

        }

        public update(): void {
            let curIndex = this.selectedIndex;
            this.array = [];
            let scriptPages: Array<ScriptPanel> = (this.parent as ScriptArea).scriptPages;
            scriptPages.forEach((page) => {
                this.addItem(null);
            });
            if(scriptPages.length <= this.repeatX){
                (this.parent as ScriptArea).plusBtn.pos(scriptPages.length * this.generalListItemSetting.width + 20, 0);
            }

            this.selectedIndex = curIndex;
        }

        protected onSelect(index: number): void {
            if (index >= 0 && index < this.length) {
                (this.selection as GeneralListItem).setBackground(true,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
                let scriptArea = (this.parent as ScriptArea);
                if (scriptArea.curScriptPage != null) {
                    scriptArea.removeChild(scriptArea.curScriptPage);
                }
                scriptArea.curScriptPage = scriptArea.scriptPages[index];
                scriptArea.addChildAt(scriptArea.curScriptPage, 2);
                scriptArea.curScriptPage.pos(0, scriptArea.scriptTabList.y + scriptArea.scriptTabList.height);
            }

            if (this.curItem != null) {
                (this.curItem as GeneralListItem).setBackground(false,
                    this.generalListItemSetting.backgroundHighlight,
                    this.generalListItemSetting.backgroundNormal);
            }
            this.curItem = this.selection as GeneralListItem;
        }

    }

    class ScriptPanel extends Laya.Panel {
        private bgColor: string;

        constructor(width: number, height: number, bgColor: string) {
            super();
            this.bgColor = bgColor;
            this.width = width;
            this.height = height;
            this.graphics.drawRect(0, 0, this.width, this.height, bgColor);

            this.hScrollBarSkin = "";
            this.vScrollBarSkin = "";
        }

    }

    export class ScriptArea extends Laya.Box {
        public curScriptPage: ScriptPanel;
        public plusBtn: Button;
        public deleteBtn: Button;
        public scriptPages: Array<ScriptPanel>;
        public scriptTabList: ScriptTabList;
        private blockFactory: Block.BlockFactory;
        private scriptAreaSetting: ScriptAreaSetting;

        constructor(scriptAreaSetting: ScriptAreaSetting) {
            super();
            this.width = scriptAreaSetting.width;
            this.height = scriptAreaSetting.height;
            this.scriptAreaSetting = scriptAreaSetting;
            this.blockFactory = new Block.BlockFactory();
            this.name = "scriptArea";

            this.curScriptPage = new ScriptPanel(this.width, this.height - GeneralIDE.ICONSIZE, this.scriptAreaSetting.highlightColor);
            this.scriptPages = [];
            this.scriptPages.push(this.curScriptPage);

            this.scriptTabList = new ScriptTabList(scriptAreaSetting.generalListSetting, scriptAreaSetting.scriptTabListItemSetting);

            let addPageBtnSetting = scriptAreaSetting.addPageBtnSetting;
            this.plusBtn = new Button();
            this.plusBtn.skin = addPageBtnSetting.skin;
            this.plusBtn.stateNum = addPageBtnSetting.stateNum;
            this.plusBtn.size(addPageBtnSetting.width, addPageBtnSetting.height);
            this.plusBtn.on(Event.CLICK, this, this.onPlusBtnClicked);

            let deletePageBtnSetting = scriptAreaSetting.deletePageBtnSetting;
            this.deleteBtn = new Button();
            this.deleteBtn.skin = deletePageBtnSetting.skin;
            this.deleteBtn.stateNum = deletePageBtnSetting.stateNum;
            this.deleteBtn.size(deletePageBtnSetting.width, deletePageBtnSetting.height);
            this.deleteBtn.pos(deletePageBtnSetting.x, deletePageBtnSetting.y);
            this.deleteBtn.on(Event.CLICK, this, this.onDeleteBtnClicked);            

            this.addChild(this.scriptTabList);
            this.addChild(this.plusBtn);
            this.addChild(this.deleteBtn);
            this.scriptTabList.pos(0, 0);
            this.scriptTabList.update();
            this.scriptTabList.selectedIndex = 0;
            this.scriptTabList.graphics.drawRect(0, 0, this.width, this.scriptTabList.height, this.scriptAreaSetting.generalListSetting.bgColor)

        }

        private onPlusBtnClicked(): void {
            this.scriptPages.push(new ScriptPanel(this.width, this.height - GeneralIDE.ICONSIZE, this.scriptAreaSetting.highlightColor));
            this.scriptTabList.update();
        }

        private onDeleteBtnClicked():void{
            
        }

        private onMouseDown(e: Event): void {
            let ide = GeneralIDE.getIDE();
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

        }
    }
}
