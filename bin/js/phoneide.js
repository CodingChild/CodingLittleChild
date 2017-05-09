var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Marmot;
(function (Marmot) {
    var Button = Laya.Button;
    var Tab = Laya.Tab;
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
            spriteMaterialListSetting = {
                width: 310,
                height: 400,
                fillStyle: "#a8b4f1",
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
                backgroundHighlight: "#979494",
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
                fillStyle: "#c4cdf8",
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
                backgroundHighlight: "#ffffff",
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
                backgroundHighlight: "#979494",
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
                fillStyle: "#a8b4f1",
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
                backgroundHighlight: "#979494",
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
                backgroundHighlight: "#979494",
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
            var materialCategory = new Marmot.MaterialCategory();
            this.addChild(materialCategory);
            this.materialCategory = materialCategory;
        };
        PhoneIDE.prototype.createBlocksArea = function () {
            var blockFactory = new Marmot.BlockFactory();
            var blockArea = new Marmot.BlockArea(this.width, blockFactory, "blockArea");
            this.blocksArea = blockArea;
            this.addChild(blockArea);
        };
        PhoneIDE.prototype.createBlocksCategory = function () {
            var tab = new Tab();
            tab.left = 0;
            tab.bottom = 0;
            tab.space = (this.width - 900) / 8;
            tab.selectedIndex = 9;
            tab.selectHandler = new Handler(this, this.chooseBlock);
            this.blocksCategory = tab;
            this.addChild(tab);
            tab.initItems();
            var btn_control = new Button("materials/btn_control.png");
            btn_control.stateNum = 2;
            btn_control.width = 100;
            btn_control.height = 100;
            tab.addItem(btn_control);
            var btn_event = new Button("materials/btn_event.png");
            btn_event.stateNum = 2;
            btn_event.width = 100;
            btn_event.height = 100;
            tab.addItem(btn_event);
            var btn_pen = new Button("materials/btn_pen.png");
            btn_pen.stateNum = 2;
            btn_pen.width = 100;
            btn_pen.height = 100;
            tab.addItem(btn_pen);
            var btn_math = new Button("materials/btn_math.png");
            btn_math.stateNum = 2;
            btn_math.width = 100;
            btn_math.height = 100;
            tab.addItem(btn_math);
            var btn_music = new Button("materials/btn_music.png");
            btn_music.stateNum = 2;
            btn_music.width = 100;
            btn_music.height = 100;
            tab.addItem(btn_music);
            var btn_motion = new Button("materials/btn_motion.png");
            btn_motion.stateNum = 2;
            btn_motion.width = 100;
            btn_motion.height = 100;
            tab.addItem(btn_motion);
            var btn_look = new Button("materials/btn_look.png");
            btn_look.stateNum = 2;
            btn_look.width = 100;
            btn_look.height = 100;
            tab.addItem(btn_look);
            var btn_variable = new Button("materials/btn_variable.png");
            btn_variable.stateNum = 2;
            btn_variable.width = 100;
            btn_variable.height = 100;
            tab.addItem(btn_variable);
            var btn_sense = new Button("materials/btn_sense.png");
            btn_sense.stateNum = 2;
            btn_sense.width = 100;
            btn_sense.height = 100;
            tab.addItem(btn_sense);
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