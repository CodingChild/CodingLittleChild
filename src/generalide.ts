module IDE {
    import View = Laya.View;
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import List = Laya.List;
    import Tween = Laya.Tween;
    import HBox = Laya.HBox;
    import VBox = Laya.VBox;
    import Dialog = Laya.Dialog;

    export abstract class GeneralIDE extends View {
        public static WIDTH: number;
        public static HEIGHT: number;
        public static ICONSIZE: number;

        public backgroungLibrary: BackgroundLibrary;
        public spriteLibrary: SpriteLibrary;
        public blockArea: VBox;
        public spriteMaterialArea: VBox;
        public costumeMaterialArea: VBox;
        public backgroundMaterialArea: VBox;
        public musicMaterialArea: VBox;
        public scriptArea: ScriptArea;
        public stageArea: StageArea;
        public drawingBoard: Dialog;
        public controlBarForMaterial: GeneralList;
        public controlBar: HBox;
        public controlBarForStage: HBox;

        public sprites: Array<Sprite.Sprite>;
        public isFullScreen: boolean;
        public isCoordinationVisible: boolean;
        public isPlayed: boolean;

        constructor(name: string, width: number, height: number) {
            super();
            GeneralIDE.WIDTH = width;
            GeneralIDE.HEIGHT = height;
            GeneralIDE.ICONSIZE = 72;

            this.pos(0, 0);
            this.name = name;
            this.width = width;
            this.height = height;
            this.isPlayed = false;
            this.isFullScreen = false;
            this.sprites = [];

            this.buildIDE();
            this.fixIDELayout();
        }

        public chooseMaterialArea(index: number): void {
            this.blockArea.visible = false;
            this.spriteMaterialArea.visible = false;
            this.backgroundMaterialArea.visible = false;
            this.costumeMaterialArea.visible = false;
            //this.musicMaterialArea.visible = false;

            if (index == 0) {
                this.blockArea.visible = true;
            }
            else if (index == 1) {
                this.spriteMaterialArea.visible = true;
            }
            else if (index == 2) {
                this.backgroundMaterialArea.visible = true;
            }/*
            else if (index == 3) {

            }*/

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
            else if (index == 5) {
                blocksCategory = "motion";
            }
            else if (index == 6) {
                blocksCategory = "look";
            }
            else if (index == 7) {
                blocksCategory = "sense";
            }
            else {
                return;
            }

            //this.blocksArea.updateContent(blocksCategory);

        }
        public pressStart(btn_play: Button): void {
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
            }
            else {
                btn_fullscreen.skin = "materials/btn_fullscreen.png";
                this.stageArea.toggleNormalScreen();
                this.stageArea.pos(this.width - 650, 120);
                this.isFullScreen = false;
            }
        }
        protected toggleCoordination(btn_coordinate: Button): void {
            if (this.isCoordinationVisible == false) {
                //this.stageArea.toggleShowCoordinate(true);
                this.isCoordinationVisible = true;
            }
            else {
                //this.stageArea.toggleShowCoordinate(false);
                this.isCoordinationVisible = false;
            }
        }

        protected toggleCostume(btn_toggleCostume: Button): void {
            if (btn_toggleCostume.name == "btn_openCostume") {
                this.spriteMaterialArea.visible = false;
                this.costumeMaterialArea.visible = true;
            }
            else if (btn_toggleCostume.name == "btn_closeCostume") {
                this.costumeMaterialArea.visible = false;
                this.spriteMaterialArea.visible = true;
            }
        }
        protected addSprite(): void {
            this.spriteLibrary.generalLibraryList.selectedIndex = -1;
            this.spriteLibrary.show();
        }

        protected deleteSprite(): void {
            let spriteMaterialList = this.spriteMaterialArea.getChildAt(0) as SpriteMaterialList;
            let chosenIndex = spriteMaterialList.selectedIndex;
            this.sprites.splice(chosenIndex, 1);
            spriteMaterialList.update();
        }

        protected addBackground(): void {
            this.backgroungLibrary.generalLibraryList.selectedIndex = -1;
            this.backgroungLibrary.show();
        }

        protected deleteBackground(): void {
            let backgroundMaterialList = this.backgroundMaterialArea.getChildAt(0) as BackgroundMaterialList;
            let chosenIndex = backgroundMaterialList.selectedIndex;
            this.stageArea.costumes.splice(chosenIndex, 1);
            backgroundMaterialList.update();
        }

        protected editBackground(): void {

        }
        protected addCostume(): void {

        }

        protected deleteCostume(): void {

        }

        protected editCostume(): void {

        }
        protected abstract buildIDE(): void;
        protected abstract createBackgroungLibrary(): void;
        protected abstract createSpriteLibrary(): void;
        protected abstract createBlockArea(): void;
        protected abstract createCostumeMaterialArea(): void;
        protected abstract createBackgroundMaterialArea(): void;
        protected abstract createMusicMaterialArea(): void;
        protected abstract createSpriteMaterialArea(): void;
        protected abstract createScriptArea(): void;
        protected abstract createStageArea(): void;
        protected abstract createDrawingBoard(): void;
        protected abstract createControlBarForMaterial(): void;
        protected abstract createControlBar(): void;
        protected abstract createControlBarForStage(): void;

        protected abstract fixIDELayout(): void;

        public static getIDE(): GeneralIDE {
            return Laya.stage.getChildByName("ide") as GeneralIDE;
        }
    }
}