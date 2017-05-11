var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Button = Laya.Button;
    var Box = Laya.Box;
    var PhoneIDE = (function (_super) {
        __extends(PhoneIDE, _super);
        function PhoneIDE(name, width, height) {
            return _super.call(this, name, width, height) || this;
        }
        PhoneIDE.prototype.buildIDE = function () {
            this.createScriptArea();
            this.createStageArea();
            this.createControlBar();
            this.createBlocksArea();
            this.createBlocksCategory();
            this.createMaterialArea();
            this.createMaterialCategory();
        };
        PhoneIDE.prototype.createScriptArea = function () {
            this.scriptArea = this.currentSprite.scriptArea;
            this.addChild(this.scriptArea);
        };
        PhoneIDE.prototype.createControlBar = function () {
            var btn_home = new Button("materials/btn_home.png");
            btn_home.left = 0;
            btn_home.top = 20;
            btn_home.stateNum = 1;
            btn_home.width = 100;
            btn_home.height = 100;
            this.addChild(btn_home);
            var box = new Box();
            box.right = 400;
            box.top = 20;
            this.addChild(box);
            this.controlBar = box;
            box.name = "controlBar";
            var btn_fullscreen = new Button("materials/btn_fullscreen.png");
            btn_fullscreen.pos(0, 0);
            btn_fullscreen.stateNum = 1;
            btn_fullscreen.width = 100;
            btn_fullscreen.height = 100;
            btn_fullscreen.clickHandler = Handler.create(this, this.toggleFullScreen, [btn_fullscreen], false);
            btn_fullscreen.name = "btn_fullscreen";
            box.addChild(btn_fullscreen);
            var btn_coordinate = new Button("materials/btn_coordinate.png");
            btn_coordinate.pos(150, 0);
            btn_coordinate.stateNum = 1;
            btn_coordinate.width = 100;
            btn_coordinate.height = 100;
            btn_coordinate.clickHandler = Handler.create(this, this.toggleCoordinateSystem, [btn_coordinate], false);
            btn_coordinate.name = "btn_coordinate";
            box.addChild(btn_coordinate);
            var btn_play = new Button("materials/btn_play.png");
            btn_play.pos(300, 0);
            btn_play.stateNum = 1;
            btn_play.width = 100;
            btn_play.height = 100;
            btn_play.clickHandler = Handler.create(this, this.pressStart, [btn_play], false);
            btn_play.name = "btn_play";
            box.addChild(btn_play);
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
            var blockAreaItemSetting = {
                width: 30 * 2 + 173,
                height: 30 * 2 + 154,
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: 30,
                imageY: 30,
                imageWidth: 173,
                imageHeight: 154
            };
            var blockAreaSetting = {
                width: this.width,
                height: 300,
                vScrollBarSkin: null,
                hScrollBarSkin: null,
                spaceX: 50,
                spaceY: 0,
                repeatX: 5,
                repeatY: 1,
                spaceOfTab_index: 20,
                fillStyle: "#f0e6d6",
                tabstateNum: 2,
                tabSkin: "materials/tab_index.png",
                tabY: blockAreaItemSetting.height
            };
            var blockFactory = new Marmot.BlockFactory();
            var blockArea = new Marmot.BlockArea(blockAreaSetting, blockAreaItemSetting, blockFactory);
            this.blocksArea = blockArea;
            this.addChild(blockArea);
            blockArea.bottom = 100;
            blockArea.left = 0;
            blockArea.right = 0;
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
                width: this.width,
                height: 100,
                vScrollBarSkin: "",
                hScrollBarSkin: null,
                spaceX: (this.width - 900) / 8,
                spaceY: 0,
                repeatX: 9,
                repeatY: 1
            };
            var blockCategoryItemSetting = {
                width: 100,
                height: 100,
                backgroundNormal: null,
                backgroundHighlight: "#f0e6d6",
                imageX: 0,
                imageY: 0,
                imageWidth: 100,
                imageHeight: 100
            };
            this.blocksCategory = new Marmot.BlockCategory(blockCategorySetting, blockCategoryItemSetting, blockCategoryContent);
            this.addChild(this.blocksCategory);
            this.blocksCategory.left = 0;
            this.blocksCategory.bottom = 0;
        };
        PhoneIDE.prototype.createStageArea = function () {
            var setting = {
                normalWidth: 600,
                normalHeight: 400,
                fullScreenScale: 2
            };
            var stageArea = new Marmot.StagePanel(setting);
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