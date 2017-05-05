module Marmot {
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import Event = Laya.Event;
    import BlockArea = Marmot.BlockArea;

    export class PhoneIDE extends IDE {

        constructor(name: string, width:number, height:number) {
            super(name, width, height);
        }

        protected buildIDE(): void {
            this.createControlBar();
            this.createScriptArea();
            this.createBlocksArea();
            this.createBlocksCategory();
            this.createMaterialArea();
            this.createMaterialCategory();
            this.createStageArea();
        }

        protected createScriptArea(): void {
            let blockFactory = new BlockFactory();
            this.scriptArea = new ScriptArea(blockFactory, this);
            this.scriptArea.top = 120;
            this.scriptArea.left = 120;
            this.scriptArea.right = 120;
            this.scriptArea.bottom = 120;
            this.scriptArea.name = "scriptArea";
            this.addChild(this.scriptArea);

        }
        protected createControlBar(): void {
            let btn_home: Button = new Button("materials/btn_home.png");
            btn_home.left = 0;
            btn_home.top = 20;
            btn_home.stateNum = 1;
            btn_home.width = 100;
            btn_home.height = 100;
            //btn_home.clickHandler = laya.utils.Handler.create(this, this.onClickButton, [btn_home], false);
            this.addChild(btn_home);

            let tab: Tab = new Tab();

            tab.right = 400;
            tab.top = 20;

            tab.space = 50;
            tab.selectedIndex = 0;
            tab.selectHandler = new Handler(this, this.chooseBlock);
            this.addChild(tab);
            this.controlBar = tab;
            tab.name = "controlBar";
            tab.initItems();

            let btn_fullscreen: Button = new Button("materials/btn_fullscreen.png");
            btn_fullscreen.toggle = true;
            btn_fullscreen.stateNum = 1;
            btn_fullscreen.width = 100;
            btn_fullscreen.height = 100;
            btn_fullscreen.clickHandler = laya.utils.Handler.create(this, this.toggleFullScreen, [btn_fullscreen], false);
            tab.addItem(btn_fullscreen);

            let btn_play: Button = new Button("materials/btn_play.png");
            btn_play.toggle = true;
            btn_play.stateNum = 1;
            btn_play.width = 100;
            btn_play.height = 100;
            btn_play.clickHandler = laya.utils.Handler.create(this, this.pressStart, [btn_play], false);
            tab.addItem(btn_play);
        }
        protected createMaterialArea(): void {

        }
        protected createMaterialCategory(): void {
            let tab: Tab = new Tab();

            tab.left = 0;
            tab.top = 200;

            tab.space = 50;
            tab.selectedIndex = 0;
            tab.selectHandler = new Handler(this, this.chooseMaterialArea);
            this.addChild(tab);
            this.controlBar = tab;
            tab.name = "materialCategory";
            tab.direction = "vertical";
            tab.initItems();

            let btn_sprite: Button = new Button("materials/btn_sprite.png");
            btn_sprite.toggle = true;
            btn_sprite.stateNum = 1;
            btn_sprite.width = 100;
            btn_sprite.height = 100;
            tab.addItem(btn_sprite);

            let btn_stage: Button = new Button("materials/btn_stage.png");
            btn_stage.toggle = true;
            btn_stage.stateNum = 1;
            btn_stage.width = 100;
            btn_stage.height = 100;
            tab.addItem(btn_stage);

            let btn_music: Button = new Button("materials/btn_music_1.png");
            btn_music.toggle = true;
            btn_music.stateNum = 1;
            btn_music.width = 100;
            btn_music.height = 100;
            tab.addItem(btn_music);
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
            tab.selectedIndex = 0;
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

        }

        protected fixIDELayout(): void {

        }
    }
}