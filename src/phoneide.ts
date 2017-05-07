import SpriteList = Marmot.SpriteList;
module Marmot {
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import Event = Laya.Event;
    import BlockArea = Marmot.BlockArea;
    import List = Laya.List;
    import Box = Laya.Box;

    export class PhoneIDE extends IDE {

        constructor(name: string, width: number, height: number) {
            super(name, width, height);
        }

        protected buildIDE(): void {
            this.createScriptArea();
            this.createStageArea();
            this.createControlBar();
            this.createBlocksArea();
            this.createBlocksCategory();
            this.createMaterialArea();
            this.createMaterialCategory();
        }

        protected createScriptArea(): void {
            this.scriptArea = this.currentSprite.scriptArea;
            this.addChild(this.scriptArea);
        }
        protected createControlBar(): void {
            let btn_home: Button = new Button("materials/btn_home.png");
            btn_home.left = 0;
            btn_home.top = 20;
            btn_home.stateNum = 1;
            btn_home.width = 100;
            btn_home.height = 100;
            this.addChild(btn_home);

            let box: Box = new Box();

            box.right = 400;
            box.top = 20;

            this.addChild(box);
            this.controlBar = box;
            box.name = "controlBar";

            let btn_fullscreen: Button = new Button("materials/btn_fullscreen.png");
            btn_fullscreen.pos(0, 0);
            btn_fullscreen.stateNum = 1;
            btn_fullscreen.width = 100;
            btn_fullscreen.height = 100;
            btn_fullscreen.clickHandler = Handler.create(this, this.toggleFullScreen, [btn_fullscreen], false);
            box.addChild(btn_fullscreen);

            let btn_coordinate: Button = new Button("materials/btn_coordinate.png");
            btn_coordinate.pos(150, 0);
            btn_coordinate.stateNum = 1;
            btn_coordinate.width = 100;
            btn_coordinate.height = 100;
            btn_coordinate.clickHandler = Handler.create(this, this.toggleCoordinateSystem, [btn_coordinate], false);
            box.addChild(btn_coordinate);

            let btn_play: Button = new Button("materials/btn_play.png");
            btn_play.pos(300, 0);
            btn_play.stateNum = 1;
            btn_play.width = 100;
            btn_play.height = 100;
            btn_play.clickHandler = Handler.create(this, this.pressStart, [btn_play], false);
            box.addChild(btn_play);
        }
        protected createMaterialArea(): void {
            let spriteList = new SpriteList(this);
            this.addChild(spriteList);
            this.spriteList = spriteList;
            spriteList.visible = false;



        }
        protected createMaterialCategory(): void {
            let materialCategory: MaterialCategory = new MaterialCategory(this);
            this.addChild(materialCategory);
            this.materialCategory = materialCategory;


        }
        protected createBlocksArea(): void {
            let blockFactory = new BlockFactory();
            let blockArea = new BlockArea(this.width, blockFactory, this, "blockArea");
            this.blocksArea = blockArea;
            this.addChild(blockArea);
        }
        protected createBlocksCategory(): void {
            let tab: Tab = new Tab();

            tab.left = 0;
            tab.bottom = 0;

            tab.space = (this.width - 900) / 8;
            tab.selectedIndex = 9;
            tab.selectHandler = new Handler(this, this.chooseBlock);
            this.blocksCategory = tab;
            this.addChild(tab);
            tab.initItems();

            let btn_control: Button = new Button("materials/btn_control.png");
            btn_control.stateNum = 2;
            btn_control.width = 100;
            btn_control.height = 100;
            tab.addItem(btn_control);

            let btn_event: Button = new Button("materials/btn_event.png");
            btn_event.stateNum = 2;
            btn_event.width = 100;
            btn_event.height = 100;
            tab.addItem(btn_event);

            let btn_pen: Button = new Button("materials/btn_pen.png");
            btn_pen.stateNum = 2;
            btn_pen.width = 100;
            btn_pen.height = 100;
            tab.addItem(btn_pen);

            let btn_math: Button = new Button("materials/btn_math.png");
            btn_math.stateNum = 2;
            btn_math.width = 100;
            btn_math.height = 100;
            tab.addItem(btn_math);

            let btn_music: Button = new Button("materials/btn_music.png");
            btn_music.stateNum = 2;
            btn_music.width = 100;
            btn_music.height = 100;
            tab.addItem(btn_music);

            let btn_motion: Button = new Button("materials/btn_motion.png");
            btn_motion.stateNum = 2;
            btn_motion.width = 100;
            btn_motion.height = 100;
            tab.addItem(btn_motion);

            let btn_look: Button = new Button("materials/btn_look.png");
            btn_look.stateNum = 2;
            btn_look.width = 100;
            btn_look.height = 100;
            tab.addItem(btn_look);

            let btn_variable: Button = new Button("materials/btn_variable.png");
            btn_variable.stateNum = 2;
            btn_variable.width = 100;
            btn_variable.height = 100;
            tab.addItem(btn_variable);

            let btn_sense: Button = new Button("materials/btn_sense.png");
            btn_sense.stateNum = 2;
            btn_sense.width = 100;
            btn_sense.height = 100;
            tab.addItem(btn_sense);


        }

        protected createStageArea(): void {
            let stageArea = new Marmot.Stage(600, 400);
            stageArea.pos(this.width, 120);
            let texture:Texture = Laya.loader.getRes("res/pics/bg_1.png");
            stageArea.graphics.drawTexture(texture, 0, 0, 600, 400);
            this.stageArea = stageArea;
            this.addChild(stageArea);
            stageArea.addChild(this.currentSprite);
            this.currentSprite.pos(stageArea.width / 2, stageArea.height / 2);


            this.toggleShowStage = new Button("materials/btn_showstage.png");
            this.toggleShowStage.right = 0;
            this.toggleShowStage.top = 120;
            this.toggleShowStage.size(50, 383);
            this.toggleShowStage.stateNum = 1;
            this.toggleShowStage.clickHandler = new Handler(this, this.toggleStageVisible);
            this.addChild(this.toggleShowStage);

        }

        protected  fixIDELayout(): void{

        }
        protected  fixBlocksCategoryLayout(): void{

        }
        protected  fixBlocksAreaLayout(): void{

        }
        protected  fixMaterialCategoryLayout(): void{

        }
        protected  fixMaterialAreaLayout(): void{

        }
        protected  fixControlBarLayout(): void{

        }
        protected  fixStageAreaLayout(): void{

        }
    }
}