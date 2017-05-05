module Marmot {
    import Block = Marmot.Block;
    import Panel = Laya.Panel;
    import BlockFactory = Marmot.BlockFactory;
    import Event = Laya.Event;

    export class ScriptArea extends Panel {
        private blockFactory: BlockFactory;
        private ide:IDE;
        constructor(blockFactory: BlockFactory, ide:IDE) {
            super();
            this.blockFactory = blockFactory;
            this.ide = ide;

            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        }

        public createBlockSet(): void {
            
            let blockMove1 = this.blockFactory.create("Move");
            blockMove1.pos(100, 100);
            blockMove1.pivot(0, 0);
            this.addChild(blockMove1);
            blockMove1.name = "blockMove1";

            let blockMove2 = this.blockFactory.create("Move");
            blockMove2.pos(150, 100);
            blockMove2.pivot(0, 0);
            this.addChild(blockMove2);
            blockMove2.name = "blockMove2";

            let blockSetHeading1 = this.blockFactory.create("SetHeading");
            blockSetHeading1.pos(200, 100);
            blockSetHeading1.pivot(0, 0);
            this.addChild(blockSetHeading1);
            blockSetHeading1.name = "blockSetHeading1";

            let blockSetHeading2 = this.blockFactory.create("SetHeading");
            blockSetHeading2.pos(250, 100);
            blockSetHeading2.pivot(0, 0);
            this.addChild(blockSetHeading2);
            blockSetHeading2.name = "blockSetHeading2";

            let blockShow = this.blockFactory.create("Show");
            blockShow.pos(300, 100);
            blockShow.pivot(0, 0);
            this.addChild(blockShow);
            blockShow.name = "blockShow";

            let blockHide1 = this.blockFactory.create("Hide");
            blockHide1.pos(350, 200);
            blockHide1.pivot(0, 0);
            this.addChild(blockHide1);
            blockHide1.name = "blockHide1";

            let blockResize = this.blockFactory.create("Resize");
            blockResize.pos(400, 200);
            blockResize.pivot(0, 0);
            this.addChild(blockResize);
            blockResize.name = "blockResize";

            let blockWait1 = this.blockFactory.create("wait");
            blockWait1.pos(450, 200);
            blockWait1.pivot(0, 0);
            this.addChild(blockWait1);
            blockWait1.name = "blockWait1";

            let blockWait2 = this.blockFactory.create("wait");
            blockWait2.pos(500, 200);
            blockWait2.pivot(0, 0);
            this.addChild(blockWait2);
            blockWait2.name = "blockWait2";

            let blockHide2 = this.blockFactory.create("Hide");
            blockHide2.pos(550, 200);
            blockHide2.pivot(0, 0);
            this.addChild(blockHide2);
            blockHide2.name = "blockHide2";

            let blockPlay = this.blockFactory.create("play");
            blockPlay.pos(600, 200);
            blockPlay.pivot(0, 0);
            this.addChild(blockPlay);
            blockPlay.name = "blockPlay";
            

        }

        private onMouseDown(e:Event):void{
            this.ide.blocksArea.visible = false;
            this.ide.blocksCategory.selectedIndex = 9;
        }
    }
}
