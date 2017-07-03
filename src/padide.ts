module IDE {
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import Event = Laya.Event;
    import List = Laya.List;
    import HBox = Laya.HBox;
    import VBox = Laya.VBox;
    import Texture = Laya.Texture;
    import Handler = Laya.Handler;

    export class PadIDE extends GeneralIDE {


        constructor(name: string, width: number, height: number) {
            super(name, width, height);
        }

        protected buildIDE(): void {
            this.createControlBar();
            this.createControlBarForStage();
            this.createStageArea();
            this.createScriptArea();
            this.createControlBarForMaterial();
            this.createBlockArea();
            this.createSpriteMaterialArea();
            this.createBackgroundMaterialArea();
            this.createCostumeMaterialArea();
            this.createSpriteLibrary();
            this.createBackgroungLibrary();
            /*
            this.createMusicMaterialArea();
            this.createDrawingBoard();*/
        }

        protected createControlBar(): void {
            let box: HBox = new HBox();
            this.addChild(box);
            this.controlBar = box;
            box.name = "controlBar";
            box.space = Math.round(GeneralIDE.ICONSIZE / 2);

            let btn_home: Button = new Button("materials/btn_home.png");
            btn_home.stateNum = 1;
            btn_home.width = GeneralIDE.ICONSIZE;
            btn_home.height = GeneralIDE.ICONSIZE;
            btn_home.name = "btn_home";
            box.addChild(btn_home);

            let btn_upload: Button = new Button("materials/btn_upload.png");
            btn_upload.stateNum = 1;
            btn_upload.width = GeneralIDE.ICONSIZE;
            btn_upload.height = GeneralIDE.ICONSIZE;
            btn_upload.name = "btn_home";
            box.addChild(btn_upload);
        }

        protected createControlBarForStage(): void {
            let box: HBox = new HBox();
            this.addChild(box);
            this.controlBarForStage = box;
            box.name = "controlBarForStage";
            box.space = Math.round(GeneralIDE.ICONSIZE / 2);

            let btn_fullscreen: Button = new Button("materials/btn_fullscreen.png");
            btn_fullscreen.stateNum = 1;
            btn_fullscreen.width = GeneralIDE.ICONSIZE;
            btn_fullscreen.height = GeneralIDE.ICONSIZE;
            btn_fullscreen.clickHandler = Handler.create(this, this.toggleFullScreen, [btn_fullscreen], false);
            btn_fullscreen.name = "btn_fullscreen";
            box.addChild(btn_fullscreen);

            let btn_coordinate: Button = new Button("materials/btn_coordinate.png");
            btn_coordinate.stateNum = 1;
            btn_coordinate.width = GeneralIDE.ICONSIZE;
            btn_coordinate.height = GeneralIDE.ICONSIZE;
            btn_coordinate.clickHandler = Handler.create(this, this.toggleCoordination, [btn_coordinate], false);
            btn_coordinate.name = "btn_addSprite";
            box.addChild(btn_coordinate);

            let btn_play: Button = new Button("materials/btn_play.png");
            btn_play.stateNum = 1;
            btn_play.width = GeneralIDE.ICONSIZE;
            btn_play.height = GeneralIDE.ICONSIZE;
            btn_play.clickHandler = Handler.create(this, this.pressStart, [btn_play], false);
            btn_play.name = "btn_play";
            box.addChild(btn_play);
        }

        protected createStageArea(): void {
            let height = Math.round(this.height * 0.5 - GeneralIDE.ICONSIZE * 1.2);
            let width = Math.round(height * 16 / 9);
            let setting: StageAreaSetting = {
                normalWidth: width,
                normalHeight: height,
                fullScreenScale: 2
            }

            let stageArea = new StageArea(setting);
            this.stageArea = stageArea;
            this.addChild(stageArea);
        }

        protected createScriptArea(): void {
            let scriptAreaSetting: ScriptAreaSetting = {
                width: Math.round(this.width * 0.5),
                height: this.height - Math.round(GeneralIDE.ICONSIZE / 5),
                highlightColor: "#ffffff",
                generalListSetting: {
                    width: Math.round(this.width * 0.5 - GeneralIDE.ICONSIZE - 20),
                    height: GeneralIDE.ICONSIZE,
                    vScrollBarSkin: null,
                    hScrollBarSkin: "",
                    spaceX: 0,
                    spaceY: 0,
                    repeatX: Math.floor((this.width * 0.5 - GeneralIDE.ICONSIZE -20) / (GeneralIDE.ICONSIZE * 2)),
                    repeatY: 1,
                    bgColor: "#FFFF99"
                },
                scriptTabListItemSetting: {
                    width: GeneralIDE.ICONSIZE * 2,
                    height: GeneralIDE.ICONSIZE,
                    backgroundNormal: null,
                    backgroundHighlight: "#FFFFFF",
                    imageSize: null,
                    font: "Arial",
                    fontSize: 36,
                    fontColor: "#000000"
                },
                addPageBtnSetting: {
                    width: GeneralIDE.ICONSIZE,
                    height: GeneralIDE.ICONSIZE,
                    skin: "materials/btn_plus.png",
                    stateNum: 1,
                    x: null,
                    y: null
                },
                deletePageBtnSetting:{
                    width: GeneralIDE.ICONSIZE,
                    height: GeneralIDE.ICONSIZE,
                    skin: "materials/btn_delete.png",
                    stateNum: 1,
                    x: Math.round(this.width / 2 - GeneralIDE.ICONSIZE - GeneralIDE.ICONSIZE / 5),
                    y: this.height - Math.round(GeneralIDE.ICONSIZE / 5 * 2) - GeneralIDE.ICONSIZE               
                }
            }
            this.scriptArea = new ScriptArea(scriptAreaSetting);
            this.addChild(this.scriptArea);
        }

        protected createControlBarForMaterial(): void {
            let urls: string[] = [
                "materials/btn_block.png",
                "materials/btn_sprite.png",
                "materials/btn_background.png",
                "materials/btn_music.png"
            ];
            let generalListSetting: GeneralListSetting = {
                width: Math.round(this.width * 0.5 - GeneralIDE.ICONSIZE * 0.7),
                height: Math.round(GeneralIDE.ICONSIZE),
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: 0,
                spaceY: 0,
                repeatX: 4,
                repeatY: 1,
                bgColor: "#FFFF66"
            }
            let generalListItemSetting: GeneralListItemSetting = {
                width: Math.round(generalListSetting.width / 4),
                height: generalListSetting.height,
                backgroundNormal: null,
                backgroundHighlight: "#ffffff",
                imageSize: GeneralIDE.ICONSIZE
            }
            let materialCategoryList: MaterialCategoryList = new MaterialCategoryList(generalListSetting, generalListItemSetting, urls);
            this.addChild(materialCategoryList);
            this.controlBarForMaterial = materialCategoryList;
            materialCategoryList.name = "controlBarForMaterial";
        }

        protected createBlockArea(): void {
            let vbox = new VBox();
            vbox.size(this.controlBarForMaterial.width, (Math.round(this.height * 0.5 - 1.5 * GeneralIDE.ICONSIZE)));
            this.addChild(vbox);
            this.blockArea = vbox;

            let generalListItemSetting1: GeneralListItemSetting = {
                width: Math.round((vbox.height - GeneralIDE.ICONSIZE * 1.6) * 1.5),
                height: Math.round((vbox.height - GeneralIDE.ICONSIZE * 1.6)),
                backgroundNormal: null,
                backgroundHighlight: null,
                imageSize: GeneralIDE.ICONSIZE
            }
            let blockContentListSetting: BlockContentListSetting = {
                width: vbox.width,
                height: vbox.height - GeneralIDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: 0,
                spaceY: 0,
                repeatX: Math.floor(vbox.width / generalListItemSetting1.width),
                repeatY: 1,
                spaceOfTab_index: 20,
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: Math.round(generalListItemSetting1.height),
                bgColor: "#ffffff"
            }
            let blockFactory = new Block.BlockFactory();
            let blockContentList = new BlockContentList(blockContentListSetting, generalListItemSetting1, blockFactory);
            blockContentList.pos(0, 0);
            vbox.addChild(blockContentList);

            let blockCategoryContent: BlockCategoryContent[] = [
                {
                    url: "materials/btn_control.png",
                    blockCategory: "control"
                },
                {
                    url: "materials/btn_event.png",
                    blockCategory: "event"
                },
                {
                    url: "materials/btn_pen.png",
                    blockCategory: "pen"
                },
                {
                    url: "materials/btn_math.png",
                    blockCategory: "math"
                },
                {
                    url: "materials/btn_music.png",
                    blockCategory: "music"
                },
                {
                    url: "materials/btn_motion.png",
                    blockCategory: "motion"
                },
                {
                    url: "materials/btn_look.png",
                    blockCategory: "look"
                },
                {
                    url: "materials/btn_sense.png",
                    blockCategory: "sense"
                },
                {
                    url: "materials/btn_variable.png",
                    blockCategory: "variable"
                }
            ];
            let generalListItemSetting2: GeneralListItemSetting = {
                width: Math.round(GeneralIDE.ICONSIZE * 1.5),
                height: GeneralIDE.ICONSIZE,
                backgroundNormal: null,
                backgroundHighlight: "#ffffff",
                imageSize: GeneralIDE.ICONSIZE
            }
            let generalListSetting2: GeneralListSetting = {
                width: vbox.width,
                height: GeneralIDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: Math.floor(vbox.width / generalListItemSetting2.width),
                repeatY: 1,
                bgColor: "#FFFF99"
            }
            let blockCategoryList = new BlockCategoryList(generalListSetting2, generalListItemSetting2, blockCategoryContent);
            blockCategoryList.pos(0, blockContentListSetting.height);
            vbox.addChild(blockCategoryList);
        }

        protected createSpriteMaterialArea(): void {
            let vbox = new VBox();
            vbox.size(this.controlBarForMaterial.width, (Math.round(this.height * 0.5 - 1.5 * GeneralIDE.ICONSIZE)));
            this.addChild(vbox);
            this.spriteMaterialArea = vbox;

            let generalListItemSetting1: GeneralListItemSetting = {
                width: Math.round(vbox.width / 4),
                height: vbox.height - GeneralIDE.ICONSIZE,
                backgroundNormal: null,
                backgroundHighlight: "#D7D7D7",
                imageSize: Math.round(vbox.height - GeneralIDE.ICONSIZE * 1.4)
            }
            let generalListSetting: GeneralListSetting = {
                width: vbox.width,
                height: vbox.height - GeneralIDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 4,
                repeatY: 1,
                bgColor: "#ffffff"
            }
            let spriteMaterialList = new SpriteMaterialList(generalListSetting, generalListItemSetting1);
            spriteMaterialList.pos(0, 0);
            vbox.addChild(spriteMaterialList);

            let hbox: HBox = new HBox();
            vbox.addChild(hbox);
            hbox.name = "spriteMaterialBtnGroup";
            hbox.space = GeneralIDE.ICONSIZE;

            let btn_openCostume: Button = new Button("materials/btn_close.png");
            btn_openCostume.stateNum = 1;
            btn_openCostume.width = GeneralIDE.ICONSIZE;
            btn_openCostume.height = GeneralIDE.ICONSIZE;
            btn_openCostume.clickHandler = Handler.create(this, this.toggleCostume, [btn_openCostume], false);
            btn_openCostume.name = "btn_openCostume";
            hbox.addChild(btn_openCostume);

            let btn_addSprite: Button = new Button("materials/btn_plus.png");
            btn_addSprite.stateNum = 1;
            btn_addSprite.width = GeneralIDE.ICONSIZE;
            btn_addSprite.height = GeneralIDE.ICONSIZE;
            btn_addSprite.clickHandler = Handler.create(this, this.addSprite, [btn_addSprite], false);
            btn_addSprite.name = "btn_addSprite";
            hbox.addChild(btn_addSprite);

            let btn_deleteSprite: Button = new Button("materials/btn_delete.png");
            btn_deleteSprite.stateNum = 1;
            btn_deleteSprite.width = GeneralIDE.ICONSIZE;
            btn_deleteSprite.height = GeneralIDE.ICONSIZE;
            btn_deleteSprite.clickHandler = Handler.create(this, this.deleteSprite, [btn_deleteSprite], false);
            btn_deleteSprite.name = "btn_deleteSprite";
            hbox.addChild(btn_deleteSprite);

            hbox.pos(Math.round(vbox.width / 2 - GeneralIDE.ICONSIZE * 2.5), generalListSetting.height);

            vbox.graphics.drawRect(0, 0, vbox.width, vbox.height, "#ffffff");
            vbox.visible = false;
        }
        protected createBackgroundMaterialArea(): void {
            let vbox = new VBox();
            vbox.size(this.controlBarForMaterial.width, (Math.round(this.height * 0.5 - 1.5 * GeneralIDE.ICONSIZE)));
            this.addChild(vbox);
            this.backgroundMaterialArea = vbox;

            let generalListItemSetting1: GeneralListItemSetting = {
                width: Math.round(vbox.width / 3),
                height: Math.round(vbox.height - GeneralIDE.ICONSIZE),
                backgroundNormal: null,
                backgroundHighlight: "#D7D7D7",
                imageSize: Math.round(vbox.height - GeneralIDE.ICONSIZE * 1.4)
            }
            let generalListSetting: GeneralListSetting = {
                width: vbox.width,
                height: vbox.height - GeneralIDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 3,
                repeatY: 1,
                bgColor: "#ffffff"
            }
            let backgroundMaterialList = new BackgroundMaterialList(generalListSetting, generalListItemSetting1);
            backgroundMaterialList.pos(0, 0);
            vbox.addChild(backgroundMaterialList);

            let hbox: HBox = new HBox();
            vbox.addChild(hbox);
            hbox.name = "backgroundMaterialBtnGroup";
            hbox.space = GeneralIDE.ICONSIZE;

            let btn_editBackground: Button = new Button("materials/btn_edit.png");
            btn_editBackground.stateNum = 1;
            btn_editBackground.width = GeneralIDE.ICONSIZE;
            btn_editBackground.height = GeneralIDE.ICONSIZE;
            btn_editBackground.clickHandler = Handler.create(this, this.editBackground, [btn_editBackground], false);
            btn_editBackground.name = "btn_editBackground";
            hbox.addChild(btn_editBackground);

            let btn_addBackground: Button = new Button("materials/btn_plus.png");
            btn_addBackground.stateNum = 1;
            btn_addBackground.width = GeneralIDE.ICONSIZE;
            btn_addBackground.height = GeneralIDE.ICONSIZE;
            btn_addBackground.clickHandler = Handler.create(this, this.addBackground, [btn_addBackground], false);
            btn_addBackground.name = "btn_addBackground";
            hbox.addChild(btn_addBackground);

            let btn_deleteCostume: Button = new Button("materials/btn_delete.png");
            btn_deleteCostume.stateNum = 1;
            btn_deleteCostume.width = GeneralIDE.ICONSIZE;
            btn_deleteCostume.height = GeneralIDE.ICONSIZE;
            btn_deleteCostume.clickHandler = Handler.create(this, this.deleteBackground, [btn_deleteCostume], false);
            btn_deleteCostume.name = "btn_deleteCostume";
            hbox.addChild(btn_deleteCostume);

            hbox.pos(Math.round(vbox.width / 2 - GeneralIDE.ICONSIZE * 2.5), generalListSetting.height);

            vbox.graphics.drawRect(0, 0, vbox.width, vbox.height, "#ffffff");
            vbox.visible = false;
        }
        protected createMusicMaterialArea(): void {

        }

        protected createCostumeMaterialArea(): void {
            let vbox = new VBox();
            vbox.size(this.controlBarForMaterial.width, (Math.round(this.height * 0.5 - 1.5 * GeneralIDE.ICONSIZE)));
            this.addChild(vbox);
            this.costumeMaterialArea = vbox;

            let generalListItemSetting1: GeneralListItemSetting = {
                width: Math.round(vbox.width / 4),
                height: Math.round(vbox.height - GeneralIDE.ICONSIZE),
                backgroundNormal: null,
                backgroundHighlight: "#D7D7D7",
                imageSize: Math.round(vbox.height - GeneralIDE.ICONSIZE * 1.4)
            }
            let generalListSetting: GeneralListSetting = {
                width: vbox.width,
                height: vbox.height - GeneralIDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 3,
                repeatY: 1,
                bgColor: "#ffffff"
            }
            let costumeMaterialList = new CostumeMaterialList(generalListSetting, generalListItemSetting1);
            costumeMaterialList.pos(0, 0);
            vbox.addChild(costumeMaterialList);

            let hbox: HBox = new HBox();
            vbox.addChild(hbox);
            hbox.name = "costumeMaterialBtnGroup";
            hbox.space = GeneralIDE.ICONSIZE;

            let btn_closeCostume: Button = new Button("materials/btn_open.png");
            btn_closeCostume.stateNum = 1;
            btn_closeCostume.width = GeneralIDE.ICONSIZE;
            btn_closeCostume.height = GeneralIDE.ICONSIZE;
            btn_closeCostume.clickHandler = Handler.create(this, this.toggleCostume, [btn_closeCostume], false);
            btn_closeCostume.name = "btn_closeCostume";
            hbox.addChild(btn_closeCostume);

            let btn_editCostume: Button = new Button("materials/btn_edit.png");
            btn_editCostume.stateNum = 1;
            btn_editCostume.width = GeneralIDE.ICONSIZE;
            btn_editCostume.height = GeneralIDE.ICONSIZE;
            btn_editCostume.clickHandler = Handler.create(this, this.editBackground, [btn_editCostume], false);
            btn_editCostume.name = "btn_editCostume";
            hbox.addChild(btn_editCostume);

            let btn_addCostume: Button = new Button("materials/btn_plus.png");
            btn_addCostume.stateNum = 1;
            btn_addCostume.width = GeneralIDE.ICONSIZE;
            btn_addCostume.height = GeneralIDE.ICONSIZE;
            btn_addCostume.clickHandler = Handler.create(this, this.addCostume, [btn_addCostume], false);
            btn_addCostume.name = "btn_addCostume";
            hbox.addChild(btn_addCostume);

            let btn_deleteCostume: Button = new Button("materials/btn_delete.png");
            btn_deleteCostume.stateNum = 1;
            btn_deleteCostume.width = GeneralIDE.ICONSIZE;
            btn_deleteCostume.height = GeneralIDE.ICONSIZE;
            btn_deleteCostume.clickHandler = Handler.create(this, this.deleteCostume, [btn_deleteCostume], false);
            btn_deleteCostume.name = "btn_deleteCostume";
            hbox.addChild(btn_deleteCostume);

            hbox.pos(Math.round(vbox.width / 2 - GeneralIDE.ICONSIZE * 3.5), generalListSetting.height);

            vbox.graphics.drawRect(0, 0, vbox.width, vbox.height, "#ffffff");
            vbox.visible = false;
        }

        protected createSpriteLibrary(): void {
            let generalLibrarySetting: GeneralLibrarySetting = {
                width: this.width,
                height: this.height,
                bgColor: "#FFFF99",
                listX: 0,
                listY: GeneralIDE.ICONSIZE,
                imgUrl: "materials/btn_sprite.png",
                imgX: Math.round(this.width / 2 - GeneralIDE.ICONSIZE / 2),
                imgY: 0,
                imgSize: GeneralIDE.ICONSIZE,
                okButtonSetting: {
                    width: GeneralIDE.ICONSIZE,
                    height: GeneralIDE.ICONSIZE,
                    skin: "materials/btn_yes.png",
                    stateNum: 1,
                    x: this.width - GeneralIDE.ICONSIZE * 4,
                    y: 0
                },
                cancelButtonSetting: {
                    width: GeneralIDE.ICONSIZE,
                    height: GeneralIDE.ICONSIZE,
                    skin: "materials/btn_cancel.png",
                    stateNum: 1,
                    x: this.width - GeneralIDE.ICONSIZE * 2,
                    y: 0
                },
                generalListSetting: {
                    width: this.width,
                    height: Math.round(this.height - GeneralIDE.ICONSIZE),
                    vScrollBarSkin: "",
                    hScrollBarSkin: null,
                    spaceX: GeneralIDE.ICONSIZE,
                    spaceY: GeneralIDE.ICONSIZE,
                    repeatX: Math.floor(this.width / GeneralIDE.ICONSIZE / 3),
                    repeatY: Math.floor((this.height - GeneralIDE.ICONSIZE) / GeneralIDE.ICONSIZE / 3),
                    bgColor: "#FFFFFF"
                },
                generalListItemSetting: {
                    width: GeneralIDE.ICONSIZE * 2,
                    height: GeneralIDE.ICONSIZE * 2,
                    backgroundNormal: null,
                    backgroundHighlight: "#D7D7D7",
                    imageSize: GeneralIDE.ICONSIZE * 2
                }
            }
            let spriteLibrary: SpriteLibrary = new SpriteLibrary(generalLibrarySetting);
            this.spriteLibrary = spriteLibrary;
            this.addChild(spriteLibrary);
            spriteLibrary.close();
        }

        protected createBackgroungLibrary(): void {
            let generalLibrarySetting: GeneralLibrarySetting = {
                width: this.width,
                height: this.height,
                bgColor: "#FFFF99",
                listX: 0,
                listY: GeneralIDE.ICONSIZE,
                imgUrl: "materials/btn_background.png",
                imgX: Math.round(this.width / 2 - GeneralIDE.ICONSIZE / 2),
                imgY: 0,
                imgSize: GeneralIDE.ICONSIZE,
                okButtonSetting: {
                    width: GeneralIDE.ICONSIZE,
                    height: GeneralIDE.ICONSIZE,
                    skin: "materials/btn_yes.png",
                    stateNum: 1,
                    x: this.width - GeneralIDE.ICONSIZE * 4,
                    y: 0
                },
                cancelButtonSetting: {
                    width: GeneralIDE.ICONSIZE,
                    height: GeneralIDE.ICONSIZE,
                    skin: "materials/btn_cancel.png",
                    stateNum: 1,
                    x: this.width - GeneralIDE.ICONSIZE * 2,
                    y: 0
                },
                generalListSetting: {
                    width: this.width,
                    height: Math.round(this.height - GeneralIDE.ICONSIZE),
                    vScrollBarSkin: "",
                    hScrollBarSkin: null,
                    spaceX: GeneralIDE.ICONSIZE,
                    spaceY: GeneralIDE.ICONSIZE,
                    repeatX: Math.floor(this.width / (GeneralIDE.ICONSIZE * 2 * 16 / 9 + GeneralIDE.ICONSIZE)),
                    repeatY: Math.floor((this.height - GeneralIDE.ICONSIZE) / GeneralIDE.ICONSIZE / 3),
                    bgColor: "#FFFFFF"
                },
                generalListItemSetting: {
                    width: Math.round(GeneralIDE.ICONSIZE * 2 * 16 / 9),
                    height: GeneralIDE.ICONSIZE * 2,
                    backgroundNormal: null,
                    backgroundHighlight: "#D7D7D7",
                    imageSize: GeneralIDE.ICONSIZE * 2
                }
            }
            let backgroundLibrary: BackgroundLibrary = new BackgroundLibrary(generalLibrarySetting);
            this.backgroungLibrary = backgroundLibrary;
            this.addChild(backgroundLibrary);
            backgroundLibrary.close();
        }


        protected createDrawingBoard(): void {

        }



        protected fixIDELayout(): void {
            // ControlBar
            this.controlBar.pos(Math.round(GeneralIDE.ICONSIZE / 5), Math.round(GeneralIDE.ICONSIZE / 5));
            // ControlBarForStage
            this.controlBarForStage.pos(Math.round(this.width * 0.5 - GeneralIDE.ICONSIZE * 4.5),
                Math.round(GeneralIDE.ICONSIZE / 5));
            // StageArea
            this.stageArea.pos(Math.round((this.width * 0.5 - GeneralIDE.ICONSIZE * 0.7) / 2 - this.stageArea.width / 2 + GeneralIDE.ICONSIZE * 0.2), Math.round(GeneralIDE.ICONSIZE * 1.2));
            // ScriptArea
            this.scriptArea.pos(Math.round(this.width * 0.5), Math.round(GeneralIDE.ICONSIZE / 5));
            // ControlBarForMaterial
            this.controlBarForMaterial.pos(Math.round(GeneralIDE.ICONSIZE / 5), Math.round(GeneralIDE.ICONSIZE / 2 + this.height * 0.5));
            // BlockArea
            this.blockArea.pos(this.controlBarForMaterial.x, this.controlBarForMaterial.y + GeneralIDE.ICONSIZE);
            // SpriteMaterialArea
            this.spriteMaterialArea.pos(this.controlBarForMaterial.x, this.controlBarForMaterial.y + GeneralIDE.ICONSIZE);
            // BackgroundMaterialArea
            this.backgroundMaterialArea.pos(this.controlBarForMaterial.x, this.controlBarForMaterial.y + GeneralIDE.ICONSIZE);
            // MusicMaterialArea

            // CostumeMaterialArea
            this.costumeMaterialArea.pos(this.controlBarForMaterial.x, this.controlBarForMaterial.y + GeneralIDE.ICONSIZE);
            // SpriteLibrary
            this.spriteLibrary.pos(0, 0);
            // BackgroungLibrary
            this.backgroungLibrary.pos(0, 0);
            // DrawingBoard

        }
    }
}

        /*

        protected createBlockMenu(): void {
            let vbox = new VBox();
            vbox.size(Math.round(this.width * 0.3),
                (Math.round(this.height * 0.4) - 2 * GeneralIDE.ICONSIZE));
            vbox.pos(0, Math.round(GeneralIDE.ICONSIZE * 11 / 5));
            this.addChild(vbox);
            this.blockMenu = vbox;

            let blockCategoryContent: BlockCategoryContent[] = [
                {
                    url: "materials/btn_control.png",
                    blockCategory: "control"
                },
                {
                    url: "materials/btn_event.png",
                    blockCategory: "event"
                },
                {
                    url: "materials/btn_pen.png",
                    blockCategory: "pen"
                },
                {
                    url: "materials/btn_math.png",
                    blockCategory: "math"
                },
                {
                    url: "materials/btn_music.png",
                    blockCategory: "music"
                },
                {
                    url: "materials/btn_motion.png",
                    blockCategory: "motion"
                },
                {
                    url: "materials/btn_look.png",
                    blockCategory: "look"
                },
                {
                    url: "materials/btn_sense.png",
                    blockCategory: "sense"
                },
                {
                    url: "materials/btn_variable.png",
                    blockCategory: "variable"
                }
            ];

            let blockCategorySetting: BlockCategorySetting = {
                width: vbox.width > 5 * GeneralIDE.ICONSIZE ? 5 * GeneralIDE.ICONSIZE : vbox.width,
                height: GeneralIDE.ICONSIZE,
                vScrollBarSkin: "",
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1
            }
            let blockCategoryItemSetting: BlockCategoryItemSetting = {
                width: GeneralIDE.ICONSIZE,
                height: GeneralIDE.ICONSIZE,
                backgroundNormal: "#66FF66",
                backgroundHighlight: "#ffffff",
                imageX: 0,
                imageY: 0,
                imageWidth: GeneralIDE.ICONSIZE,
                imageHeight: GeneralIDE.ICONSIZE
            }
            let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            blocksCategory.pos(0, 0);
            blocksCategory.name = "blocksCategory";
            vbox.addChild(blocksCategory);


            let ratio = this.width / 1366 / 2;
            let blockAreaItemSetting: BlockAreaItemSetting = {
                width: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                height: Math.round(ratio * 30) * 2 + Math.round(ratio * 154),
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: Math.round(ratio * 30),
                imageY: Math.round(ratio * 30),
                imageWidth: Math.round(ratio * 173),
                imageHeight: Math.round(ratio * 154)
            }
            let blockAreaSetting: BlockAreaSetting = {
                width: blockCategorySetting.width,
                height: vbox.height - GeneralIDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                spaceY: 0,
                repeatX: 2,
                repeatY: 1,
                spaceOfTab_index: 20,
                fillStyle: "#ffffff",
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: blockAreaItemSetting.height
            }
            let blockFactory = new BlockFactory();
            let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            blockArea.pos(0, GeneralIDE.ICONSIZE);
            blockArea.name = "blockArea";
            vbox.addChild(blockArea);
        }*/
        /*
                protected createSpriteArea(): void {
                    let vbox = new VBox();
                    vbox.size(Math.round(this.width * 0.3),
                        (Math.round(this.height * 0.4) - 2 * GeneralIDE.ICONSIZE));
                    vbox.pos(0, Math.round(GeneralIDE.ICONSIZE * 11 / 5));
                    this.addChild(vbox);
                    this.blockMenu = vbox;
        
                    let blockCategoryContent: BlockCategoryContent[] = [
                        {
                            url: "materials/btn_control.png",
                            blockCategory: "control"
                        },
                        {
                            url: "materials/btn_event.png",
                            blockCategory: "event"
                        },
                        {
                            url: "materials/btn_pen.png",
                            blockCategory: "pen"
                        },
                        {
                            url: "materials/btn_math.png",
                            blockCategory: "math"
                        },
                        {
                            url: "materials/btn_music.png",
                            blockCategory: "music"
                        },
                        {
                            url: "materials/btn_motion.png",
                            blockCategory: "motion"
                        },
                        {
                            url: "materials/btn_look.png",
                            blockCategory: "look"
                        },
                        {
                            url: "materials/btn_sense.png",
                            blockCategory: "sense"
                        },
                        {
                            url: "materials/btn_variable.png",
                            blockCategory: "variable"
                        }
                    ];
        
                    let blockCategorySetting: BlockCategorySetting = {
                        width: vbox.width > 5 * GeneralIDE.ICONSIZE ? 5 * GeneralIDE.ICONSIZE : vbox.width,
                        height: GeneralIDE.ICONSIZE,
                        vScrollBarSkin: "",
                        hScrollBarSkin: "",
                        spaceX: 0,
                        spaceY: 0,
                        repeatX: 5,
                        repeatY: 1
                    }
                    let blockCategoryItemSetting: BlockCategoryItemSetting = {
                        width: GeneralIDE.ICONSIZE,
                        height: GeneralIDE.ICONSIZE,
                        backgroundNormal: "#66FF66",
                        backgroundHighlight: "#ffffff",
                        imageX: 0,
                        imageY: 0,
                        imageWidth: GeneralIDE.ICONSIZE,
                        imageHeight: GeneralIDE.ICONSIZE
                    }
                    let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
                    blocksCategory.pos(0, 0);
                    blocksCategory.name = "blocksCategory";
                    vbox.addChild(blocksCategory);
        
        
                    let ratio = this.width / 1366 / 2;
                    let blockAreaItemSetting: BlockAreaItemSetting = {
                        width: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                        height: Math.round(ratio * 30) * 2 + Math.round(ratio * 154),
                        backgroundNormal: null,
                        backgroundHighlight: "#f0e6d6",
                        imageX: Math.round(ratio * 30),
                        imageY: Math.round(ratio * 30),
                        imageWidth: Math.round(ratio * 173),
                        imageHeight: Math.round(ratio * 154)
                    }
                    let blockAreaSetting: BlockAreaSetting = {
                        width: blockCategorySetting.width,
                        height: vbox.height - GeneralIDE.ICONSIZE,
                        vScrollBarSkin: null,
                        hScrollBarSkin: null,
                        spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                        spaceY: 0,
                        repeatX: 2,
                        repeatY: 1,
                        spaceOfTab_index: 20,
                        fillStyle: "#ffffff",
                        tabstateNum: 2,
                        tabSkin: "materials/tab_index.png",
                        tabY: blockAreaItemSetting.height
                    }
                    let blockFactory = new BlockFactory();
                    let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
                    blockArea.pos(0, GeneralIDE.ICONSIZE);
                    blockArea.name = "blockArea";
                    vbox.addChild(blockArea);
                }
        
                protected createBackgroundArea(): void {
                    let vbox = new VBox();
                    vbox.size(Math.round(this.width * 0.3),
                        (Math.round(this.height * 0.4) - 2 * GeneralIDE.ICONSIZE));
                    vbox.pos(0, Math.round(GeneralIDE.ICONSIZE * 11 / 5));
                    this.addChild(vbox);
                    this.blockMenu = vbox;
        
                    let blockCategoryContent: BlockCategoryContent[] = [
                        {
                            url: "materials/btn_control.png",
                            blockCategory: "control"
                        },
                        {
                            url: "materials/btn_event.png",
                            blockCategory: "event"
                        },
                        {
                            url: "materials/btn_pen.png",
                            blockCategory: "pen"
                        },
                        {
                            url: "materials/btn_math.png",
                            blockCategory: "math"
                        },
                        {
                            url: "materials/btn_music.png",
                            blockCategory: "music"
                        },
                        {
                            url: "materials/btn_motion.png",
                            blockCategory: "motion"
                        },
                        {
                            url: "materials/btn_look.png",
                            blockCategory: "look"
                        },
                        {
                            url: "materials/btn_sense.png",
                            blockCategory: "sense"
                        },
                        {
                            url: "materials/btn_variable.png",
                            blockCategory: "variable"
                        }
                    ];
        
                    let blockCategorySetting: BlockCategorySetting = {
                        width: vbox.width > 5 * GeneralIDE.ICONSIZE ? 5 * GeneralIDE.ICONSIZE : vbox.width,
                        height: GeneralIDE.ICONSIZE,
                        vScrollBarSkin: "",
                        hScrollBarSkin: "",
                        spaceX: 0,
                        spaceY: 0,
                        repeatX: 5,
                        repeatY: 1
                    }
                    let blockCategoryItemSetting: BlockCategoryItemSetting = {
                        width: GeneralIDE.ICONSIZE,
                        height: GeneralIDE.ICONSIZE,
                        backgroundNormal: "#66FF66",
                        backgroundHighlight: "#ffffff",
                        imageX: 0,
                        imageY: 0,
                        imageWidth: GeneralIDE.ICONSIZE,
                        imageHeight: GeneralIDE.ICONSIZE
                    }
                    let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
                    blocksCategory.pos(0, 0);
                    blocksCategory.name = "blocksCategory";
                    vbox.addChild(blocksCategory);
        
        
                    let ratio = this.width / 1366 / 2;
                    let blockAreaItemSetting: BlockAreaItemSetting = {
                        width: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                        height: Math.round(ratio * 30) * 2 + Math.round(ratio * 154),
                        backgroundNormal: null,
                        backgroundHighlight: "#f0e6d6",
                        imageX: Math.round(ratio * 30),
                        imageY: Math.round(ratio * 30),
                        imageWidth: Math.round(ratio * 173),
                        imageHeight: Math.round(ratio * 154)
                    }
                    let blockAreaSetting: BlockAreaSetting = {
                        width: blockCategorySetting.width,
                        height: vbox.height - GeneralIDE.ICONSIZE,
                        vScrollBarSkin: null,
                        hScrollBarSkin: null,
                        spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                        spaceY: 0,
                        repeatX: 2,
                        repeatY: 1,
                        spaceOfTab_index: 20,
                        fillStyle: "#ffffff",
                        tabstateNum: 2,
                        tabSkin: "materials/tab_index.png",
                        tabY: blockAreaItemSetting.height
                    }
                    let blockFactory = new BlockFactory();
                    let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
                    blockArea.pos(0, GeneralIDE.ICONSIZE);
                    blockArea.name = "blockArea";
                    vbox.addChild(blockArea);
                }
        
                protected createMusicArea(): void {
                    let vbox = new VBox();
                    vbox.size(Math.round(this.width * 0.3),
                        (Math.round(this.height * 0.4) - 2 * GeneralIDE.ICONSIZE));
                    vbox.pos(0, Math.round(GeneralIDE.ICONSIZE * 11 / 5));
                    this.addChild(vbox);
                    this.blockMenu = vbox;
        
                    let blockCategoryContent: BlockCategoryContent[] = [
                        {
                            url: "materials/btn_control.png",
                            blockCategory: "control"
                        },
                        {
                            url: "materials/btn_event.png",
                            blockCategory: "event"
                        },
                        {
                            url: "materials/btn_pen.png",
                            blockCategory: "pen"
                        },
                        {
                            url: "materials/btn_math.png",
                            blockCategory: "math"
                        },
                        {
                            url: "materials/btn_music.png",
                            blockCategory: "music"
                        },
                        {
                            url: "materials/btn_motion.png",
                            blockCategory: "motion"
                        },
                        {
                            url: "materials/btn_look.png",
                            blockCategory: "look"
                        },
                        {
                            url: "materials/btn_sense.png",
                            blockCategory: "sense"
                        },
                        {
                            url: "materials/btn_variable.png",
                            blockCategory: "variable"
                        }
                    ];
        
                    let blockCategorySetting: BlockCategorySetting = {
                        width: vbox.width > 5 * GeneralIDE.ICONSIZE ? 5 * GeneralIDE.ICONSIZE : vbox.width,
                        height: GeneralIDE.ICONSIZE,
                        vScrollBarSkin: "",
                        hScrollBarSkin: "",
                        spaceX: 0,
                        spaceY: 0,
                        repeatX: 5,
                        repeatY: 1
                    }
                    let blockCategoryItemSetting: BlockCategoryItemSetting = {
                        width: GeneralIDE.ICONSIZE,
                        height: GeneralIDE.ICONSIZE,
                        backgroundNormal: "#66FF66",
                        backgroundHighlight: "#ffffff",
                        imageX: 0,
                        imageY: 0,
                        imageWidth: GeneralIDE.ICONSIZE,
                        imageHeight: GeneralIDE.ICONSIZE
                    }
                    let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
                    blocksCategory.pos(0, 0);
                    blocksCategory.name = "blocksCategory";
                    vbox.addChild(blocksCategory);
        
        
                    let ratio = this.width / 1366 / 2;
                    let blockAreaItemSetting: BlockAreaItemSetting = {
                        width: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                        height: Math.round(ratio * 30) * 2 + Math.round(ratio * 154),
                        backgroundNormal: null,
                        backgroundHighlight: "#f0e6d6",
                        imageX: Math.round(ratio * 30),
                        imageY: Math.round(ratio * 30),
                        imageWidth: Math.round(ratio * 173),
                        imageHeight: Math.round(ratio * 154)
                    }
                    let blockAreaSetting: BlockAreaSetting = {
                        width: blockCategorySetting.width,
                        height: vbox.height - GeneralIDE.ICONSIZE,
                        vScrollBarSkin: null,
                        hScrollBarSkin: null,
                        spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                        spaceY: 0,
                        repeatX: 2,
                        repeatY: 1,
                        spaceOfTab_index: 20,
                        fillStyle: "#ffffff",
                        tabstateNum: 2,
                        tabSkin: "materials/tab_index.png",
                        tabY: blockAreaItemSetting.height
                    }
                    let blockFactory = new BlockFactory();
                    let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
                    blockArea.pos(0, GeneralIDE.ICONSIZE);
                    blockArea.name = "blockArea";
                    vbox.addChild(blockArea);
                }
        */
        /*
                protected createMaterialArea(): void {
        
                    let spriteMaterialListSetting: SpriteMaterialListSetting;
                    let spriteMaterialListItemSetting: SpriteMaterialListItemSetting;
        
                    let listFillStyle = "#f0e6d6";
                    let itemHighlight = "#CDBA96";
        
        
                    spriteMaterialListSetting = {
                        width: 310,
                        height: 400,
                        fillStyle: listFillStyle,
                        vScrollBarSkin: "",
                        spaceY: 20,
                        repeatY: 3,
                        plusButtonWidth: 50,
                        plusButtonHeight: 50,
                        plusButtonStateNum: 1,
                        plusButtonX: 130,
                        plusButtonY: 330,
                        plusButtonSkin: "materials/plus.png",
                        plusButtonName: "addSprite"
                    };
        
                    spriteMaterialListItemSetting = {
                        width: 310,
                        height: 100,
                        backgroundNormal: "#ffffff",
                        backgroundHighlight: itemHighlight,
                        imageX: 0,
                        imageY: 0,
                        imageWidth: 100,
                        imageHeight: 100,
                        costumebuttonWidth: 80,
                        costumebuttonHeight: 80,
                        costumebuttonSkin: "materials/costume.png",
                        costumebuttonStateNum: 1,
                        costumebuttonX: 220,
                        costumebuttonY: 10
                    }
        
                    let spriteMaterialList = new SpriteMaterialList(spriteMaterialListSetting, spriteMaterialListItemSetting);
                    this.addChild(spriteMaterialList);
                    this.spriteMaterialList = spriteMaterialList;
                    spriteMaterialList.visible = false;
        
                    let costumeMaterialListSetting: CostumeMaterialListSetting;
                    let costumeMaterialListItemSetting: CostumeMaterialListItemSetting;
        
                    costumeMaterialListSetting = {
                        width: 100,
                        height: 400,
                        fillStyle: listFillStyle,
                        vScrollBarSkin: "",
                        spaceY: 20,
                        repeatY: 3,
                        plusButtonWidth: 50,
                        plusButtonHeight: 50,
                        plusButtonStateNum: 1,
                        plusButtonX: 25,
                        plusButtonY: 330,
                        plusButtonSkin: "materials/plus.png",
                        plusButtonName: "addCostume"
                    };
        
                    costumeMaterialListItemSetting = {
                        width: 150,
                        height: 100,
                        backgroundNormal: "#ffffff",
                        backgroundHighlight: itemHighlight,
                        imageX: 10,
                        imageY: 10,
                        imageWidth: 80,
                        imageHeight: 80
                    }
        
                    let costumeMaterialList = new CostumeMaterialList(costumeMaterialListSetting, costumeMaterialListItemSetting);
        
                    spriteMaterialList.costumeMaterialList = costumeMaterialList;
                    costumeMaterialList.visible = false;
                    spriteMaterialList.addChild(costumeMaterialList);
        
                    let spriteLibraryDialogSetting: SpriteLibraryDialogSetting;
                    let libraryDialogItemSettingForSprite: LibraryDialogItemSetting;
        
                    spriteLibraryDialogSetting = {
                        width: 500,
                        height: 500,
                        fillStyle: "#ffffff",
                        strokeStyle: "#000000",
                        listX: 10,
                        listY: 10,
                        lineWidth: 6,
                        vScrollBarSkin: "",
                        spaceX: 20,
                        spaceY: 20,
                        repeatX: 4,
                        repeatY: 3,
                        buttonWidth: 50,
                        buttonHeight: 50,
                        okButtonSkin: "materials/btn_yes.png",
                        okButtonStateNum: 1,
                        okButtonX: 100,
                        okButtonY: 430,
                        cancelButtonSkin: "materials/btn_cancel.png",
                        cancelButtonStateNum: 1,
                        cancelButtonX: 400,
                        cancelButtonY: 430
                    }
        
                    libraryDialogItemSettingForSprite = {
                        width: 100,
                        height: 100,
                        backgroundNormal: "#ffffff",
                        backgroundHighlight: itemHighlight,
                        imagePadding: 0,
                        imageWidth: 100,
                        imageHeight: 100
                    }
                    let spriteLibraryDialog = new SpriteLibraryDialog(spriteLibraryDialogSetting, libraryDialogItemSettingForSprite);
                    spriteMaterialList.addChild(spriteLibraryDialog);
                    spriteMaterialList.spriteLibraryDialog = spriteLibraryDialog;
                    spriteLibraryDialog.close(Dialog.CANCEL);
        
                    let backgroundMaterialListSetting: BackgroundMaterialListSetting;
                    let backgroundMaterialListItemSetting: BackgroundMaterialListItemSetting;
        
                    backgroundMaterialListSetting = {
                        width: 310,
                        height: 400,
                        fillStyle: listFillStyle,
                        vScrollBarSkin: "",
                        spaceY: 10,
                        repeatY: 3,
                        plusButtonWidth: 50,
                        plusButtonHeight: 50,
                        plusButtonStateNum: 1,
                        plusButtonX: 130,
                        plusButtonY: 330,
                        plusButtonSkin: "materials/plus.png",
                        plusButtonName: "addBackground"
                    };
        
                    backgroundMaterialListItemSetting = {
                        width: 310,
                        height: 100,
                        backgroundNormal: "#ffffff",
                        backgroundHighlight: itemHighlight,
                        imageX: 20,
                        imageY: 10,
                        imageWidth: 270,
                        imageHeight: 80
                    }
        
                    let backgroundMaterialList = new BackgroundMaterialList(backgroundMaterialListSetting, backgroundMaterialListItemSetting);
                    this.addChild(backgroundMaterialList);
                    this.backgroundMaterialList = backgroundMaterialList;
                    backgroundMaterialList.visible = false;
        
                    let backgroundLibraryDialogSetting: BackgroundLibraryDialogSetting;
                    let libraryDialogItemSettingForBackground: LibraryDialogItemSetting;
        
                    backgroundLibraryDialogSetting = {
                        width: 500,
                        height: 500,
                        fillStyle: "#ffffff",
                        strokeStyle: "#000000",
                        listX: 10,
                        listY: 10,
                        lineWidth: 6,
                        vScrollBarSkin: "",
                        spaceX: 20,
                        spaceY: 20,
                        repeatX: 4,
                        repeatY: 3,
                        buttonWidth: 50,
                        buttonHeight: 50,
                        okButtonSkin: "materials/btn_yes.png",
                        okButtonStateNum: 1,
                        okButtonX: 100,
                        okButtonY: 430,
                        cancelButtonSkin: "materials/btn_cancel.png",
                        cancelButtonStateNum: 1,
                        cancelButtonX: 400,
                        cancelButtonY: 430
                    }
        
                    libraryDialogItemSettingForBackground = {
                        width: 100,
                        height: 100,
                        backgroundNormal: "#ffffff",
                        backgroundHighlight: itemHighlight,
                        imagePadding: 10,
                        imageWidth: 80,
                        imageHeight: 80
                    }
                    let backgroundLibraryDialog = new BackgroundLibraryDialog(spriteLibraryDialogSetting, libraryDialogItemSettingForBackground);
                    backgroundMaterialList.addChild(backgroundLibraryDialog);
                    backgroundMaterialList.backgroundLibraryDialog = backgroundLibraryDialog;
                    backgroundLibraryDialog.close(Dialog.CANCEL);
        
                }
                protected createMaterialCategory(): void {
                    let urls: string[] = [
                        "materials/btn_sprite.png",
                        "materials/btn_stage.png",
                        "materials/btn_music.png"
                    ];
                    let materialCategorySetting: MaterialCategorySetting = {
                        width: 100,
                        height: 400,
                        vScrollBarSkin: null,
                        hScrollBarSkin: null,
                        spaceX: 0,
                        spaceY: 50,
                        repeatX: 1,
                        repeatY: 3
                    }
                    let materialCategoryItemSetting: MaterialCategoryItemSetting = {
                        width: 100,
                        height: 100,
                        backgroundNormal: null,
                        backgroundHighlight: "#f0e6d6",
                        imageX: 0,
                        imageY: 0,
                        imageWidth: 100,
                        imageHeight: 100
                    }
        
                    this.materialCategory = new MaterialCategory(materialCategorySetting, materialCategoryItemSetting, urls);
                    this.addChild(this.materialCategory);
                    this.materialCategory.pos(0, 200);
                }
        */