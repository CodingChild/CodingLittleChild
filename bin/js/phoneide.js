var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Button = Laya.Button;
    var HBox = Laya.HBox;
    var VBox = Laya.VBox;
    var PhoneIDE = (function (_super) {
        __extends(PhoneIDE, _super);
        function PhoneIDE(name, width, height) {
            return _super.call(this, name, width, height) || this;
        }
        PhoneIDE.prototype.buildIDE = function () {
            this.createControlBar();
            this.createStageArea();
            this.createControlBarForStage();
            this.createBlockMenu();
            //this.createBlocksArea();
            //this.createBlocksCategory();
            this.createMaterialArea();
            this.createScriptArea();
            //this.createMaterialCategory();
        };
        PhoneIDE.prototype.createBlockMenu = function () {
            var vbox = new VBox();
            vbox.size(Math.round(this.width * 0.3), (Math.round(this.height * 0.4) - 2 * Marmot.IDE.ICONSIZE));
            vbox.pos(0, Math.round(Marmot.IDE.ICONSIZE * 11 / 5));
            this.addChild(vbox);
            this.blockMenu = vbox;
            var blockCategoryContent = [
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
            var blockCategorySetting = {
                width: vbox.width > 5 * Marmot.IDE.ICONSIZE ? 5 * Marmot.IDE.ICONSIZE : vbox.width,
                height: Marmot.IDE.ICONSIZE,
                vScrollBarSkin: "",
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1
            };
            var blockCategoryItemSetting = {
                width: Marmot.IDE.ICONSIZE,
                height: Marmot.IDE.ICONSIZE,
                backgroundNormal: "#66FF66",
                backgroundHighlight: "#ffffff",
                imageX: 0,
                imageY: 0,
                imageWidth: Marmot.IDE.ICONSIZE,
                imageHeight: Marmot.IDE.ICONSIZE
            };
            var blocksCategory = new Marmot.BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            blocksCategory.pos(0, 0);
            blocksCategory.name = "blocksCategory";
            vbox.addChild(blocksCategory);
            var ratio = this.width / 1366 / 2;
            var blockAreaItemSetting = {
                width: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                height: Math.round(ratio * 30) * 2 + Math.round(ratio * 154),
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: Math.round(ratio * 30),
                imageY: Math.round(ratio * 30),
                imageWidth: Math.round(ratio * 173),
                imageHeight: Math.round(ratio * 154)
            };
            var blockAreaSetting = {
                width: blockCategorySetting.width,
                height: vbox.height - Marmot.IDE.ICONSIZE,
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
            };
            var blockFactory = new Marmot.BlockFactory();
            var blockArea = new Marmot.BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            blockArea.pos(0, Marmot.IDE.ICONSIZE);
            blockArea.name = "blockArea";
            vbox.addChild(blockArea);
        };
        PhoneIDE.prototype.createScriptArea = function () {
            this.scriptArea = new Marmot.ScriptArea();
            this.scriptArea.bottom = 0;
            this.scriptArea.left = 0;
            this.scriptArea.size(this.width, this.height * 0.6 - Math.round(Marmot.IDE.ICONSIZE * 2 / 5));
            this.scriptArea.drawBackground();
            this.addChild(this.scriptArea);
        };
        PhoneIDE.prototype.createControlBar = function () {
            var box = new HBox();
            this.addChild(box);
            this.controlBar = box;
            box.name = "controlBar";
            box.pos(Math.round(Marmot.IDE.ICONSIZE / 5), Math.round(Marmot.IDE.ICONSIZE / 5));
            box.space = Math.round(Marmot.IDE.ICONSIZE / 2);
            var btn_home = new Button("materials/btn_home.png");
            btn_home.stateNum = 1;
            btn_home.width = Marmot.IDE.ICONSIZE;
            btn_home.height = Marmot.IDE.ICONSIZE;
            btn_home.name = "btn_home";
            box.addChild(btn_home);
            var btn_upload = new Button("materials/btn_upload.png");
            btn_upload.stateNum = 1;
            btn_upload.width = Marmot.IDE.ICONSIZE;
            btn_upload.height = Marmot.IDE.ICONSIZE;
            btn_upload.name = "btn_home";
            box.addChild(btn_upload);
            var btn_block = new Button("materials/btn_block.png");
            btn_block.stateNum = 1;
            btn_block.width = Marmot.IDE.ICONSIZE;
            btn_block.height = Marmot.IDE.ICONSIZE;
            btn_block.name = "btn_block";
            box.addChild(btn_block);
            var btn_sprite = new Button("materials/btn_sprite.png");
            btn_sprite.stateNum = 1;
            btn_sprite.width = Marmot.IDE.ICONSIZE;
            btn_sprite.height = Marmot.IDE.ICONSIZE;
            btn_sprite.name = "btn_sprite";
            box.addChild(btn_sprite);
            var btn_stage = new Button("materials/btn_stage.png");
            btn_stage.stateNum = 1;
            btn_stage.width = Marmot.IDE.ICONSIZE;
            btn_stage.height = Marmot.IDE.ICONSIZE;
            btn_stage.name = "btn_stage";
            box.addChild(btn_stage);
            var btn_music = new Button("materials/btn_music.png");
            btn_music.stateNum = 1;
            btn_music.width = Marmot.IDE.ICONSIZE;
            btn_music.height = Marmot.IDE.ICONSIZE;
            btn_music.name = "btn_home";
            box.addChild(btn_music);
            /*
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
            */
        };
        PhoneIDE.prototype.createMaterialArea = function () {
            var spriteMaterialListSetting;
            var spriteMaterialListItemSetting;
            var listFillStyle = "#f0e6d6";
            var itemHighlight = "#CDBA96";
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
            };
            var spriteMaterialList = new Marmot.SpriteMaterialList(spriteMaterialListSetting, spriteMaterialListItemSetting);
            this.addChild(spriteMaterialList);
            this.spriteMaterialList = spriteMaterialList;
            spriteMaterialList.visible = false;
            var costumeMaterialListSetting;
            var costumeMaterialListItemSetting;
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
            };
            var costumeMaterialList = new Marmot.CostumeMaterialList(costumeMaterialListSetting, costumeMaterialListItemSetting);
            spriteMaterialList.costumeMaterialList = costumeMaterialList;
            costumeMaterialList.visible = false;
            spriteMaterialList.addChild(costumeMaterialList);
            var spriteLibraryDialogSetting;
            var libraryDialogItemSettingForSprite;
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
            };
            libraryDialogItemSettingForSprite = {
                width: 100,
                height: 100,
                backgroundNormal: "#ffffff",
                backgroundHighlight: itemHighlight,
                imagePadding: 0,
                imageWidth: 100,
                imageHeight: 100
            };
            var spriteLibraryDialog = new Marmot.SpriteLibraryDialog(spriteLibraryDialogSetting, libraryDialogItemSettingForSprite);
            spriteMaterialList.addChild(spriteLibraryDialog);
            spriteMaterialList.spriteLibraryDialog = spriteLibraryDialog;
            spriteLibraryDialog.close(Dialog.CANCEL);
            var backgroundMaterialListSetting;
            var backgroundMaterialListItemSetting;
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
            };
            var backgroundMaterialList = new Marmot.BackgroundMaterialList(backgroundMaterialListSetting, backgroundMaterialListItemSetting);
            this.addChild(backgroundMaterialList);
            this.backgroundMaterialList = backgroundMaterialList;
            backgroundMaterialList.visible = false;
            var backgroundLibraryDialogSetting;
            var libraryDialogItemSettingForBackground;
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
            };
            libraryDialogItemSettingForBackground = {
                width: 100,
                height: 100,
                backgroundNormal: "#ffffff",
                backgroundHighlight: itemHighlight,
                imagePadding: 10,
                imageWidth: 80,
                imageHeight: 80
            };
            var backgroundLibraryDialog = new Marmot.BackgroundLibraryDialog(spriteLibraryDialogSetting, libraryDialogItemSettingForBackground);
            backgroundMaterialList.addChild(backgroundLibraryDialog);
            backgroundMaterialList.backgroundLibraryDialog = backgroundLibraryDialog;
            backgroundLibraryDialog.close(Dialog.CANCEL);
        };
        PhoneIDE.prototype.createMaterialCategory = function () {
            var urls = [
                "materials/btn_sprite.png",
                "materials/btn_stage.png",
                "materials/btn_music.png"
            ];
            var materialCategorySetting = {
                width: 100,
                height: 400,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: 0,
                spaceY: 50,
                repeatX: 1,
                repeatY: 3
            };
            var materialCategoryItemSetting = {
                width: 100,
                height: 100,
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: 0,
                imageY: 0,
                imageWidth: 100,
                imageHeight: 100
            };
            this.materialCategory = new Marmot.MaterialCategory(materialCategorySetting, materialCategoryItemSetting, urls);
            this.addChild(this.materialCategory);
            this.materialCategory.pos(0, 200);
        };
        PhoneIDE.prototype.createBlocksArea = function () {
            var ratio = this.width / 1366 / 2;
            var blockAreaItemSetting = {
                width: Math.round(ratio * 30) * 2 + Math.round(ratio * 173),
                height: Math.round(ratio * 30) * 2 + Math.round(ratio * 154),
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: Math.round(ratio * 30),
                imageY: Math.round(ratio * 30),
                imageWidth: Math.round(ratio * 173),
                imageHeight: Math.round(ratio * 154)
            };
            var blockAreaSetting = {
                width: this.width * 0.4,
                height: this.stageArea.height - Math.round(Marmot.IDE.ICONSIZE * 11 / 5),
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
            };
            var blockFactory = new Marmot.BlockFactory();
            var blockArea = new Marmot.BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            this.blocksArea = blockArea;
            this.addChild(blockArea);
            blockArea.pos(0, Math.round(Marmot.IDE.ICONSIZE * 12 / 5));
        };
        PhoneIDE.prototype.createBlocksCategory = function () {
            var blockCategoryContent = [
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
            var blockCategorySetting = {
                width: Math.round(this.width * 0.2),
                height: 100,
                vScrollBarSkin: "",
                hScrollBarSkin: "",
                spaceX: 0,
                spaceY: 0,
                repeatX: 8,
                repeatY: 1
            };
            var blockCategoryItemSetting = {
                width: Marmot.IDE.ICONSIZE,
                height: Marmot.IDE.ICONSIZE,
                backgroundNormal: "#66FF66",
                backgroundHighlight: "#ffffff",
                imageX: 0,
                imageY: 0,
                imageWidth: Marmot.IDE.ICONSIZE,
                imageHeight: Marmot.IDE.ICONSIZE
            };
            this.blocksCategory = new Marmot.BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            this.addChild(this.blocksCategory);
            this.blocksCategory.pos(0, Math.round(Marmot.IDE.ICONSIZE * 7 / 5));
        };
        PhoneIDE.prototype.createControlBarForStage = function () {
            var box = new VBox();
            this.addChild(box);
            this.controlBarForStage = box;
            box.name = "controlBarForStage";
            box.right = Math.round(this.width * 0.4 + Marmot.IDE.ICONSIZE * 2 / 5);
            box.top = Math.round(Marmot.IDE.ICONSIZE / 5);
            box.space = Math.round(Marmot.IDE.ICONSIZE / 2);
            var btn_fullscreen = new Button("materials/btn_fullscreen.png");
            btn_fullscreen.stateNum = 1;
            btn_fullscreen.width = Marmot.IDE.ICONSIZE;
            btn_fullscreen.height = Marmot.IDE.ICONSIZE;
            btn_fullscreen.clickHandler = Handler.create(this, this.toggleFullScreen, [btn_fullscreen], false);
            btn_fullscreen.name = "btn_fullscreen";
            box.addChild(btn_fullscreen);
            var btn_coordinate = new Button("materials/btn_coordinate.png");
            btn_coordinate.stateNum = 1;
            btn_coordinate.width = Marmot.IDE.ICONSIZE;
            btn_coordinate.height = Marmot.IDE.ICONSIZE;
            btn_coordinate.clickHandler = Handler.create(this, this.toggleCoordinateSystem, [btn_coordinate], false);
            btn_coordinate.name = "btn_coordinate";
            box.addChild(btn_coordinate);
            var btn_play = new Button("materials/btn_play.png");
            btn_play.stateNum = 1;
            btn_play.width = Marmot.IDE.ICONSIZE;
            btn_play.height = Marmot.IDE.ICONSIZE;
            btn_play.clickHandler = Handler.create(this, this.pressStart, [btn_play], false);
            btn_play.name = "btn_play";
            box.addChild(btn_play);
        };
        PhoneIDE.prototype.createStageArea = function () {
            var setting = {
                normalWidth: Math.round(this.width * 0.4),
                normalHeight: Math.round(this.height * 0.4),
                fullScreenScale: 2
            };
            var stageArea = new Marmot.StagePanel(setting);
            stageArea.right = Math.round(Marmot.IDE.ICONSIZE / 5);
            stageArea.top = Math.round(Marmot.IDE.ICONSIZE / 5);
            this.stageArea = stageArea;
            this.addChild(stageArea);
            stageArea.addChild(this.currentSprite);
            this.currentSprite.pos(Math.round(stageArea.width / 2), Math.round(stageArea.height / 2));
        };
        PhoneIDE.prototype.fixIDELayout = function () {
            this.fixMaterialAreaLayout();
        };
        PhoneIDE.prototype.fixBlocksCategoryLayout = function () {
        };
        PhoneIDE.prototype.fixBlocksAreaLayout = function () {
        };
        PhoneIDE.prototype.fixMaterialCategoryLayout = function () {
        };
        PhoneIDE.prototype.fixMaterialAreaLayout = function () {
            this.spriteMaterialList.pos(100, 200);
            this.spriteMaterialList.costumeMaterialList.pos(350, 0);
            this.backgroundMaterialList.pos(100, 200);
        };
        PhoneIDE.prototype.fixControlBarLayout = function () {
        };
        PhoneIDE.prototype.fixStageAreaLayout = function () {
        };
        return PhoneIDE;
    }(Marmot.IDE));
    Marmot.PhoneIDE = PhoneIDE;
})(Marmot || (Marmot = {}));
//# sourceMappingURL=phoneide.js.map