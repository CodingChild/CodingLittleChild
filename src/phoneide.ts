module Marmot {
    import Button = Laya.Button;
    import Tab = Laya.Tab;
    import Event = Laya.Event;
    import List = Laya.List;
    import Box = Laya.Box;
    import Texture = Laya.Texture;

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
            btn_fullscreen.name = "btn_fullscreen";
            box.addChild(btn_fullscreen);

            let btn_coordinate: Button = new Button("materials/btn_coordinate.png");
            btn_coordinate.pos(150, 0);
            btn_coordinate.stateNum = 1;
            btn_coordinate.width = 100;
            btn_coordinate.height = 100;
            btn_coordinate.clickHandler = Handler.create(this, this.toggleCoordinateSystem, [btn_coordinate], false);
            btn_coordinate.name = "btn_coordinate";
            box.addChild(btn_coordinate);

            let btn_play: Button = new Button("materials/btn_play.png");
            btn_play.pos(300, 0);
            btn_play.stateNum = 1;
            btn_play.width = 100;
            btn_play.height = 100;
            btn_play.clickHandler = Handler.create(this, this.pressStart, [btn_play], false);
            btn_play.name = "btn_play";
            box.addChild(btn_play);
        }
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
        protected createBlocksArea(): void {
            let blockAreaItemSetting: BlockAreaItemSetting = {
                width: 30 * 2 + 173,
                height: 30 * 2 + 154,
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: 30,
                imageY: 30,
                imageWidth: 173,
                imageHeight: 154
            }
            let blockAreaSetting: BlockAreaSetting = {
                width: this.width,
                height: 300,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: 50,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1,
                spaceOfTab_index:20,
                fillStyle:"#f0e6d6",
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: blockAreaItemSetting.height
            }
            let blockFactory = new BlockFactory();
            let blockArea = new BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);

            this.blocksArea = blockArea;
            this.addChild(blockArea);
            blockArea.bottom = 100;
            blockArea.left = 0;
            blockArea.right = 0;
        }
        protected createBlocksCategory(): void {
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
                width: this.width,
                height: 100,
                vScrollBarSkin: "",
                hScrollBarSkin: null,
                spaceX: (this.width - 900) / 8,
                spaceY: 0,
                repeatX: 9,
                repeatY: 1
            }
            let blockCategoryItemSetting: BlockCategoryItemSetting = {
                width: 100,
                height: 100,
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: 0,
                imageY: 0,
                imageWidth: 100,
                imageHeight: 100
            }

            this.blocksCategory = new BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            this.addChild(this.blocksCategory);
            this.blocksCategory.left = 0;
            this.blocksCategory.bottom = 0;

        }

        protected createStageArea(): void {
            let setting: StagePanelSetting = {
                normalWidth: 600,
                normalHeight: 400,
                fullScreenScale: 2
            }

            let stageArea = new Marmot.StagePanel(setting);
            stageArea.pos(this.width, 120);

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

        protected fixIDELayout(): void {
            this.fixMaterialAreaLayout();
        }
        protected fixBlocksCategoryLayout(): void {

        }
        protected fixBlocksAreaLayout(): void {

        }
        protected fixMaterialCategoryLayout(): void {

        }
        protected fixMaterialAreaLayout(): void {
            this.spriteMaterialList.pos(100, 200);
            this.spriteMaterialList.costumeMaterialList.pos(350, 0);
            this.backgroundMaterialList.pos(100, 200);
        }
        protected fixControlBarLayout(): void {

        }
        protected fixStageAreaLayout(): void {

        }
    }
}