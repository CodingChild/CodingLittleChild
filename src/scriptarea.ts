module Marmot {
    import Panel = Laya.Panel;
    import Event = Laya.Event;
    import Tween = Laya.Tween;
    import Handler = Laya.Handler;

    export class ScriptArea extends Panel {
        private blockFactory: BlockFactory;
        constructor() {
            super();
            this.blockFactory = new BlockFactory();
            this.name = "scriptArea";
            this.hScrollBarSkin = "comp/hscroll.png";
            this.vScrollBarSkin = "comp/vscroll.png";

            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        }

        public drawBackground():void{
            this.graphics.drawRect(0, 0, this.width, this.height, "#FFCC33");
        }

        private onMouseDown(e: Event): void {
            let ide = IDE.getIDE();
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
