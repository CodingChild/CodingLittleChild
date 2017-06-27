module Marmot {
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import Event = Laya.Event;
    import List = Laya.List;
    import HBox = Laya.HBox;
    import VBox = Laya.VBox;
    import Texture = Laya.Texture;

    export class TabletIDE extends IDE {


        constructor(name: string, width: number, height: number) {
            super(name, width, height);
        }

        protected buildIDE(): void {

            this.createControlBar();
            this.createControlBarForMaterial();
            this.createStageArea();
            this.createControlBarForStage();
            this.createBlockMenu();
            this.createSpriteArea();
            this.createBackgroundArea();
            this.createMusicArea();
            this.createScriptArea();
        }

        protected createControlBar(): void {
            let box: HBox = new HBox();
            this.addChild(box);
            this.controlBar = box;
            box.name = "controlBar";
            box.pos(Math.round(IDE.ICONSIZE / 5), Math.round(IDE.ICONSIZE / 5));
            box.space = Math.round(IDE.ICONSIZE / 2);

            let btn_home: Button = new Button("materials/btn_home.png");
            btn_home.stateNum = 1;
            btn_home.width = IDE.ICONSIZE;
            btn_home.height = IDE.ICONSIZE;
            btn_home.name = "btn_home";
            box.addChild(btn_home);

            let btn_upload: Button = new Button("materials/btn_upload.png");
            btn_upload.stateNum = 1;
            btn_upload.width = IDE.ICONSIZE;
            btn_upload.height = IDE.ICONSIZE;
            btn_upload.name = "btn_home";
            box.addChild(btn_upload);
        }

        protected createControlBarForMaterial(): void {
            let box: HBox = new HBox();
            this.addChild(box);
            this.controlBar = box;
            box.name = "controlBar";
            box.pos(Math.round(IDE.ICONSIZE / 5), Math.round(IDE.ICONSIZE / 5));
            box.space = Math.round(IDE.ICONSIZE / 2);

            let btn_home: Button = new Button("materials/btn_home.png");
            btn_home.stateNum = 1;
            btn_home.width = IDE.ICONSIZE;
            btn_home.height = IDE.ICONSIZE;
            btn_home.name = "btn_home";
            box.addChild(btn_home);

            let btn_upload: Button = new Button("materials/btn_upload.png");
            btn_upload.stateNum = 1;
            btn_upload.width = IDE.ICONSIZE;
            btn_upload.height = IDE.ICONSIZE;
            btn_upload.name = "btn_home";
            box.addChild(btn_upload);

            let btn_block: Button = new Button("materials/btn_block.png");
            btn_block.stateNum = 1;
            btn_block.width = IDE.ICONSIZE;
            btn_block.height = IDE.ICONSIZE;
            btn_block.name = "btn_block";
            box.addChild(btn_block);

            let btn_sprite: Button = new Button("materials/btn_sprite.png");
            btn_sprite.stateNum = 1;
            btn_sprite.width = IDE.ICONSIZE;
            btn_sprite.height = IDE.ICONSIZE;
            btn_sprite.name = "btn_sprite";
            box.addChild(btn_sprite);


            let btn_stage: Button = new Button("materials/btn_stage.png");
            btn_stage.stateNum = 1;
            btn_stage.width = IDE.ICONSIZE;
            btn_stage.height = IDE.ICONSIZE;
            btn_stage.name = "btn_stage";
            box.addChild(btn_stage);

            let btn_music: Button = new Button("materials/btn_music.png");
            btn_music.stateNum = 1;
            btn_music.width = IDE.ICONSIZE;
            btn_music.height = IDE.ICONSIZE;
            btn_music.name = "btn_home";
            box.addChild(btn_music);
        }

        protected createStageArea(): void {
            let setting: StagePanelSetting = {
                normalWidth: Math.round(this.width *  0.4),
                normalHeight: Math.round(this.height * 0.4),
                fullScreenScale: 2
            }

            let stageArea = new Marmot.StagePanel(setting);
            stageArea.right = Math.round(IDE.ICONSIZE / 5);
            stageArea.top = Math.round(IDE.ICONSIZE / 5);

            this.stageArea = stageArea;
            this.addChild(stageArea);
            stageArea.addChild(this.currentSprite);
            this.currentSprite.pos(Math.round(stageArea.width / 2), Math.round(stageArea.height / 2));
        }

        protected createControlBarForStage(): void {
            let box:VBox = new VBox();
            this.addChild(box);
            this.controlBarForStage = box;
            box.name = "controlBarForStage";
            box.right = Math.round(this.width * 0.4 + IDE.ICONSIZE * 2 / 5);
            box.top =  Math.round(IDE.ICONSIZE / 5);
            box.space = Math.round(IDE.ICONSIZE / 2);

            let btn_fullscreen: Button = new Button("materials/btn_fullscreen.png");
            btn_fullscreen.stateNum = 1;
            btn_fullscreen.width = IDE.ICONSIZE;
            btn_fullscreen.height = IDE.ICONSIZE;
            btn_fullscreen.clickHandler = Handler.create(this, this.toggleFullScreen, [btn_fullscreen], false);
            btn_fullscreen.name = "btn_fullscreen";
            box.addChild(btn_fullscreen);

            let btn_coordinate: Button = new Button("materials/btn_coordinate.png");
            btn_coordinate.stateNum = 1;
            btn_coordinate.width = IDE.ICONSIZE;
            btn_coordinate.height = IDE.ICONSIZE;
            btn_coordinate.clickHandler = Handler.create(this, this.toggleCoordinateSystem, [btn_coordinate], false);
            btn_coordinate.name = "btn_coordinate";
            box.addChild(btn_coordinate);

            let btn_play: Button = new Button("materials/btn_play.png");
            btn_play.stateNum = 1;
            btn_play.width = IDE.ICONSIZE;
            btn_play.height = IDE.ICONSIZE;
            btn_play.clickHandler = Handler.create(this, this.pressStart, [btn_play], false);
            btn_play.name = "btn_play";
            box.addChild(btn_play);
        }  

        protected createBlockMenu():void{
            let vbox = new VBox();
            vbox.size(Math.round(this.width * 0.3), 
                      (Math.round(this.height * 0.4) - 2 * IDE.ICONSIZE));
            vbox.pos(0, Math.round(IDE.ICONSIZE * 11 / 5));
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
                width: vbox.width > 5 * IDE.ICONSIZE?5 * IDE.ICONSIZE:vbox.width,
                height: IDE.ICONSIZE,
                vScrollBarSkin: "",
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1
            }
            let blockCategoryItemSetting: BlockCategoryItemSetting = {
                width: IDE.ICONSIZE,
                height: IDE.ICONSIZE,
                backgroundNormal: "#66FF66",
                backgroundHighlight: "#ffffff",
                imageX: 0,
                imageY: 0,
                imageWidth: IDE.ICONSIZE,
                imageHeight: IDE.ICONSIZE
            }
            let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            blocksCategory.pos(0 , 0);
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
                height: vbox.height - IDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                spaceY: 0,
                repeatX: 2,
                repeatY: 1,
                spaceOfTab_index:20,
                fillStyle:"#ffffff",
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: blockAreaItemSetting.height
            }
            let blockFactory = new BlockFactory();
            let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            blockArea.pos(0, IDE.ICONSIZE);
            blockArea.name = "blockArea";
            vbox.addChild(blockArea);
        }

        protected createSpriteArea():void{
            let vbox = new VBox();
            vbox.size(Math.round(this.width * 0.3), 
                      (Math.round(this.height * 0.4) - 2 * IDE.ICONSIZE));
            vbox.pos(0, Math.round(IDE.ICONSIZE * 11 / 5));
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
                width: vbox.width > 5 * IDE.ICONSIZE?5 * IDE.ICONSIZE:vbox.width,
                height: IDE.ICONSIZE,
                vScrollBarSkin: "",
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1
            }
            let blockCategoryItemSetting: BlockCategoryItemSetting = {
                width: IDE.ICONSIZE,
                height: IDE.ICONSIZE,
                backgroundNormal: "#66FF66",
                backgroundHighlight: "#ffffff",
                imageX: 0,
                imageY: 0,
                imageWidth: IDE.ICONSIZE,
                imageHeight: IDE.ICONSIZE
            }
            let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            blocksCategory.pos(0 , 0);
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
                height: vbox.height - IDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                spaceY: 0,
                repeatX: 2,
                repeatY: 1,
                spaceOfTab_index:20,
                fillStyle:"#ffffff",
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: blockAreaItemSetting.height
            }
            let blockFactory = new BlockFactory();
            let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            blockArea.pos(0, IDE.ICONSIZE);
            blockArea.name = "blockArea";
            vbox.addChild(blockArea);
        }   

        protected createBackgroundArea():void{
            let vbox = new VBox();
            vbox.size(Math.round(this.width * 0.3), 
                      (Math.round(this.height * 0.4) - 2 * IDE.ICONSIZE));
            vbox.pos(0, Math.round(IDE.ICONSIZE * 11 / 5));
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
                width: vbox.width > 5 * IDE.ICONSIZE?5 * IDE.ICONSIZE:vbox.width,
                height: IDE.ICONSIZE,
                vScrollBarSkin: "",
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1
            }
            let blockCategoryItemSetting: BlockCategoryItemSetting = {
                width: IDE.ICONSIZE,
                height: IDE.ICONSIZE,
                backgroundNormal: "#66FF66",
                backgroundHighlight: "#ffffff",
                imageX: 0,
                imageY: 0,
                imageWidth: IDE.ICONSIZE,
                imageHeight: IDE.ICONSIZE
            }
            let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            blocksCategory.pos(0 , 0);
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
                height: vbox.height - IDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                spaceY: 0,
                repeatX: 2,
                repeatY: 1,
                spaceOfTab_index:20,
                fillStyle:"#ffffff",
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: blockAreaItemSetting.height
            }
            let blockFactory = new BlockFactory();
            let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            blockArea.pos(0, IDE.ICONSIZE);
            blockArea.name = "blockArea";
            vbox.addChild(blockArea);
        }

        protected createMusicArea():void{
            let vbox = new VBox();
            vbox.size(Math.round(this.width * 0.3), 
                      (Math.round(this.height * 0.4) - 2 * IDE.ICONSIZE));
            vbox.pos(0, Math.round(IDE.ICONSIZE * 11 / 5));
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
                width: vbox.width > 5 * IDE.ICONSIZE?5 * IDE.ICONSIZE:vbox.width,
                height: IDE.ICONSIZE,
                vScrollBarSkin: "",
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1
            }
            let blockCategoryItemSetting: BlockCategoryItemSetting = {
                width: IDE.ICONSIZE,
                height: IDE.ICONSIZE,
                backgroundNormal: "#66FF66",
                backgroundHighlight: "#ffffff",
                imageX: 0,
                imageY: 0,
                imageWidth: IDE.ICONSIZE,
                imageHeight: IDE.ICONSIZE
            }
            let blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            blocksCategory.pos(0 , 0);
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
                height: vbox.height - IDE.ICONSIZE,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                spaceY: 0,
                repeatX: 2,
                repeatY: 1,
                spaceOfTab_index:20,
                fillStyle:"#ffffff",
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: blockAreaItemSetting.height
            }
            let blockFactory = new BlockFactory();
            let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            blockArea.pos(0, IDE.ICONSIZE);
            blockArea.name = "blockArea";
            vbox.addChild(blockArea);
        }

        protected createScriptArea(): void {
            this.scriptArea = new ScriptArea();
            this.scriptArea.bottom = 0;
            this.scriptArea.left = 0;
            this.scriptArea.size(this.width, this.height * 0.6 - Math.round(IDE.ICONSIZE * 2 / 5));
            this.scriptArea.drawBackground();
            this.addChild(this.scriptArea);
            
        }

        protected fixIDELayout(): void {
            //fix layout of ControlBar

            //fix layout of ControlBarForMaterial

            //fix layout of StageArea

            //fix layout of ControlBarForStage

            //fix layout of BlockMenu

            //fix layout of SpriteArea

            //fix layout of BackgroundArea

            //fix layout of MusicArea

            //fix layout of ScriptArea
            
        }
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
    }
}