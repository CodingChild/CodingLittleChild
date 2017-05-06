module Marmot {
    import Block = Marmot.Block;
    import ScriptArea = Marmot.ScriptArea;
    import View = Laya.View;
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import BlockArea = Marmot.BlockArea;
    import List = Laya.List;
    import SpriteList = Marmot.SpriteList;
    import Sprite = Marmot.Sprite;
    import Stage = Marmot.Stage;
    import Tween = Laya.Tween;
    import Box = Laya.Box;

    export abstract class IDE extends View {
        public static WIDTH:number;
        public static HEIGHT:number;

        public globalVariables;
        public scriptArea: ScriptArea;
        public currentSprite: Sprite;
        public sprites: Array<Sprite>;
        public blocksCategory: Tab;
        public materialCategory: MaterialCategory;
        public blocksArea: BlockArea;
        public stageArea: Stage;
        public controlBar: Box;
        public isFullScreen: boolean;
        public isCoordinateSystemVisible: boolean;
        public isStageVisible: boolean;
        public isPlayed: boolean;
        public spriteList: SpriteList;
        public toggleShowStage: Button;

        constructor(name: string, width: number, height: number) {
            super();
            IDE.WIDTH = width;
            IDE.HEIGHT = height;

            this.top = 0;
            this.left = 0;
            this.right = 0;
            this.bottom = 0;
            this.name = name;
            this.width = width;
            this.height = height;
            this.isStageVisible = false;
            this.isPlayed = false;
            this.isFullScreen = false;

            this.currentSprite = new Marmot.Sprite();
            this.currentSprite.addCostume("materials/sp_marmot.png");
            this.currentSprite.costume = "materials/sp_marmot.png";
            this.currentSprite.costumes = [this.currentSprite.costume];

            this.sprites = [];
            this.sprites.push(this.currentSprite);
            
            this.buildIDE();

        }

        protected abstract buildIDE(): void;
        protected abstract createMaterialArea(): void;
        protected abstract createMaterialCategory(): void;
        protected abstract createBlocksArea(): void
        protected abstract createBlocksCategory(): void;
        protected abstract createStageArea(): void;
        protected abstract createControlBar(): void;
        protected abstract createScriptArea(): void;

        public chooseMaterialArea(index: number): void {
            if (index == 0) {
                this.spriteList.y = 200;
                this.spriteList.visible = true;
            }
            else if (index == 1) {

            }
            else if (index == 2) {

            }

        }
        protected chooseBlock(index: number): void {

            let blocksCategory: string = "";
            if (index == 0) {
                blocksCategory = "control";
            }
            else if (index == 1) {
                blocksCategory = "event";
            }
            else if (index == 2) {
                blocksCategory = "pen";
            }
            else if (index == 3) {
                blocksCategory = "math";
            }
            else if (index == 4) {
                blocksCategory = "music";
            }
            else if (index == 5) {
                blocksCategory = "motion";
            }
            else if (index == 6) {
                blocksCategory = "look";
            }
            else if (index == 7) {
                blocksCategory = "variable";
            }
            else if (index == 8) {
                blocksCategory = "sense";
            }
            else {
                return;
            }
            this.blocksArea.updateContent(blocksCategory);

        }
        protected pressStart(btn_play:Button): void {
            if(this.isPlayed == false){
                this.stageArea.fireGreenFlagEvent();
                btn_play.skin = "materials/btn_stop.png";
                this.isPlayed = true;
            }
            else{
                this.stageArea.fireStopAllEvent();
                btn_play.skin = "materials/btn_play.png";
                this.isPlayed = false;                
            }
        }

        protected toggleFullScreen(btn_fullscreen:Button): void {
            if(this.isFullScreen == false){
                btn_fullscreen.skin = "materials/btn_normalscreen.png";
                this.isFullScreen = true;
            }
            else{
                btn_fullscreen.skin = "materials/btn_fullscreen.png";
                this.isFullScreen = false;            
            }
        }
        protected toggleCoordinateSystem(btn_coordinate:Button): void {
            if(this.isCoordinateSystemVisible == false){
                this.isCoordinateSystemVisible = true;
            }
            else{
                //btn_coordinate.skin = "materials/btn_normalscreen.png";
                this.isCoordinateSystemVisible = false;            
            }
        }
        protected toggleStage(): void {
            if (this.isStageVisible == false) {
                Tween.to(this.stageArea, { x: this.width - 650 }, 100);
                this.isStageVisible = true;
                Laya.Log.print(this.stageArea.x + " " + this.stageArea.y);
                this.toggleShowStage.skin = "materials/btn_hidestage.png";
            }
            else {
                Tween.to(this.stageArea, { x: this.width }, 100);
                this.isStageVisible = false;
                Laya.Log.print(this.stageArea.x + " " + this.stageArea.y);
                this.toggleShowStage.skin = "materials/btn_showstage.png";
            }
        }
        protected abstract fixIDELayout(): void;
        protected fixBlocksCategoryLayout(): void {

        }


        protected fixBlocksAreaLayout(): void {

        }
        protected fixMaterialCategoryLayout(): void {

        }
        protected fixMaterialAreaLayout(): void {

        }
        protected fixControlBarLayout(): void {

        }

        protected fixStageAreaLayout(): void {

        }
        protected switchBlocksAreaVisibility(): void {

        }

        public static getIDE():IDE{
            return Laya.stage.getChildByName("ide") as IDE;
        }
    }
}