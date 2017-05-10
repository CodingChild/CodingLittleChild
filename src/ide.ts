module Marmot {
    import View = Laya.View;
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import List = Laya.List;
    import Sprite = Marmot.Sprite;
    import Stage = Marmot.StagePanel;
    import Tween = Laya.Tween;
    import Box = Laya.Box;

    export abstract class IDE extends View {
        public static WIDTH: number;
        public static HEIGHT: number;

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

        public toggleShowStage: Button;

        public spriteMaterialList: SpriteMaterialList;
        public backgroundMaterialList: BackgroundMaterialList;


        constructor(name: string, width: number, height: number) {
            super();
            this.stage.width;
            this.stage.height;
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

            this.sprites = [];
            this.sprites.push(this.currentSprite);

            this.buildIDE();
            this.fixIDELayout();

        }

        public chooseMaterialArea(index: number): void {

            if (index == 0) {
                this.backgroundMaterialList.visible = false;
                this.spriteMaterialList.initializeMaterialItems();
                this.spriteMaterialList.visible = true;
            }
            else if (index == 1) {
                this.spriteMaterialList.visible = false;
                this.backgroundMaterialList.initializeMaterialItems();
                this.backgroundMaterialList.visible = true;
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
        protected pressStart(btn_play: Button): void {
            if (this.isPlayed == false) {
                this.stageArea.firePlayButton();
                btn_play.skin = "materials/btn_stop.png";
                this.isPlayed = true;
            }
            else {
                //this.stageArea.fireStopAllEvent();
                btn_play.skin = "materials/btn_play.png";
                this.isPlayed = false;
            }
        }

        protected toggleFullScreen(btn_fullscreen: Button): void {
            if (this.isFullScreen == false) {
                btn_fullscreen.skin = "materials/btn_normalscreen.png";
                this.stageArea.toggleFullScreen();
                this.stageArea.pos(this.width / 2 - this.stageArea.width / 2, this.height / 2 - this.stageArea.height / 2);
                this.isFullScreen = true;
                
                this.isStageVisible = true;
                this.toggleShowStage.skin = "materials/btn_hidestage.png";
            }
            else {
                btn_fullscreen.skin = "materials/btn_fullscreen.png";
                this.stageArea.toggleNormalScreen();
                this.stageArea.pos(this.width - 650, 120);
                this.isFullScreen = false;
            }
        }
        protected toggleCoordinateSystem(btn_coordinate: Button): void {
            if (this.isCoordinateSystemVisible == false) {
                //this.stageArea.toggleShowCoordinate(true);
                this.isCoordinateSystemVisible = true;
            }
            else {
                //this.stageArea.toggleShowCoordinate(false);
                this.isCoordinateSystemVisible = false;
            }
        }
        protected toggleStageVisible(): void {
            if (this.isStageVisible == false) {
                Tween.to(this.stageArea, { x: this.width - 650 }, 100);
                this.isStageVisible = true;
                this.toggleShowStage.skin = "materials/btn_hidestage.png";
            }
            else {
                Tween.to(this.stageArea, { x: this.width }, 100);
                this.isStageVisible = false;
                this.toggleShowStage.skin = "materials/btn_showstage.png";
            }
        }

        protected abstract buildIDE(): void;
        protected abstract createMaterialArea(): void;
        protected abstract createMaterialCategory(): void;
        protected abstract createBlocksArea(): void
        protected abstract createBlocksCategory(): void;
        protected abstract createStageArea(): void;
        protected abstract createControlBar(): void;
        protected abstract createScriptArea(): void;
        protected abstract fixIDELayout(): void;
        protected abstract fixBlocksCategoryLayout(): void;
        protected abstract fixBlocksAreaLayout(): void;
        protected abstract fixMaterialCategoryLayout(): void;
        protected abstract fixMaterialAreaLayout(): void;
        protected abstract fixControlBarLayout(): void;
        protected abstract fixStageAreaLayout(): void;

        public static getIDE(): IDE {
            return Laya.stage.getChildByName("ide") as IDE;
        }
    }
}