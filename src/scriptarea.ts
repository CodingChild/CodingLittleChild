module Marmot {
    import Panel = Laya.Panel;
    import Event = Laya.Event;
    import Tween = Laya.Tween;
    import Handler = Laya.Handler;

    export class ScriptArea extends Panel {
        public owner:Sprite;
        private blockFactory: BlockFactory;
        constructor(sprite:Sprite | Stage) {
            super();
            this.blockFactory = new BlockFactory();
            this.owner = sprite;
            this.name = "scriptArea";
            this.size(IDE.WIDTH - 80, IDE.HEIGHT - 80);
            this.pos(80, 80);

            this.on(Event.MOUSE_DOWN, this, this.onMouseDown);
        }

        private onMouseDown(e:Event):void{
            let ide = IDE.getIDE();
            ide.blocksArea.visible = false;
            ide.blocksCategory.selectedIndex = 9;
            
            ide.spriteMaterialList.visible = false;
            ide.materialCategory.selectedIndex = -1;
            ide.spriteMaterialList.costumeMaterialList.visible = false;
            ide.spriteMaterialList.spriteLibraryDialog.close();

            ide.backgroundMaterialList.visible = false;
            ide.backgroundMaterialList.backgroundLibraryDialog.close();              
            
        }
    }
}
