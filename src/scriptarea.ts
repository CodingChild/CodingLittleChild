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

        private onMouseDown(e:Event):void{
            this.ide.blocksArea.visible = false;
            this.ide.blocksCategory.selectedIndex = 9;
        }
    }
}
