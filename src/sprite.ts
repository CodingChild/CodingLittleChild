module Marmot{
    export class Sprite extends Laya.Sprite{
        public costume:string;
        public scriptArea:ScriptArea;

        public costumes:Array<string>;
        constructor(){
            super();
            this.scriptArea = new ScriptArea(this);
            this.width = 100;
            this.height = 100;
            let texture:Texture = Laya.loader.getRes("materials/sp_girl.png");
            this.graphics.drawTexture(texture, 0, 0, this.width, this.height);
        }

        public addCostume(costume:string){

        }
    }
}